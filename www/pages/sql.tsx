import { HTMLProps, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getBasePath } from "@rdub/next-base/basePath";
import { useDb } from "@rdub/react-sql.js-httpvfs/sql";
import * as sql from "@rdub/react-sql.js-httpvfs/sql";
import { keys, values } from "@rdub/base/objs";
import useSessionStorageState from "use-session-storage-state";
import css from "./sql.module.scss"

const { time, timeEnd } = console;

export const UrlKey = "sql-db-url"
export const QueryKey = "sql-query"

export type Button = {
    value: string
    cb: (value: string) => void
}

export function Input({ label, defaultValue, buttons, ...inputProps }: {
    label: string
    defaultValue: string
    buttons: Button[]
} & Omit<HTMLProps<HTMLInputElement>, 'value'>) {
    const [ wipValue, setWipValue] = useState<string>(defaultValue)
    useEffect(
        () => {
            setWipValue(defaultValue)
        },
        [ defaultValue ]
    )
    return (
        <div className={css.control}>
            <label>
                {label}
                <input
                    type={"text"}
                    value={wipValue}
                    onChange={e => setWipValue(e.target.value)}
                    onKeyDown={e => {
                        if (e.code === 'Enter') {
                            e.preventDefault();
                            buttons[0].cb(wipValue)
                        }
                    }}
                    {...inputProps}
                />
            </label>
            {
                buttons.map(({ value, cb }) => {
                    return <input
                        key={value}
                        type={"button"}
                        value={value}
                        className={css.updateButton}
                        onClick={() => {
                            cb(wipValue)
                        }}
                    />
                })
            }
        </div>
    )
}

// export const DefaultDbPath = `njsp/year-type-county.db`
// export const DefaultQuery = `select * from ytc`
export const DefaultDbPath = `crashes2021.db`
export const DefaultQuery = `select * from crashes where id=100000`


export default function Sql() {
    const basePath = getBasePath()
    const [url, setUrl] = useSessionStorageState<string>(UrlKey, { defaultValue: `${basePath}/${DefaultDbPath}`})
    const [query, setQuery] = useSessionStorageState<string>(QueryKey, { defaultValue: DefaultQuery })
    const openTimeMsg = `time to query result`
    const [ requestChunkSize, setRequestChunkSize ] = useState<number>(64 * 1024)
    const dbProps: sql.Props = useMemo(() => {
        const props = { url, requestChunkSize }
        console.log("dbProps:", props)
        return props
    }, [ url ])
    const dbOpts = useMemo(() => {
        const opts = { time: true }
        console.log("dbOpts:", opts)
        return opts
    }, [])
    const db = useDb(dbProps, dbOpts)
    const [ data, setData ] = useState<any[] | null>(null)
    const [ sqlError, setSqlError ] = useState<Error | null>(null)
    const doQuery = useCallback(
        (query: string) => {
            time(openTimeMsg)
            async function run() {
                if (!db) return
                if (!query) return
                const msg = `ran query: ${query}`
                time(msg)
                db.query(query)
                    .then(
                        result => {
                            timeEnd(msg)
                            timeEnd(openTimeMsg)
                            console.log(`result:`, result)
                            setData(result)
                            setSqlError(null)
                        }
                    )
                    .catch(err => setSqlError(err))
            }
            run()
        },
        [ db ]
    )
    return (
        <div>
            <Input
                label={"DB URL:"}
                buttons={[ {
                    value: "Update",
                    cb: url => {
                        console.log("Updating URL:", url)
                        setUrl(url)
                        // setQuery("")
                    },
                }]}
                defaultValue={url}
            />
            <Input
                label={"Query:"}
                buttons={[
                    {
                        value: "Run",
                        cb: query => {
                            setQuery(query)
                            console.log("Running query:", query)
                            doQuery(query)
                        },
                    }, {
                        value: "Explain",
                        cb: query => {
                            setQuery(query)
                            const explainQuery = `explain query plan ${query}`
                            console.log("Running query:", explainQuery)
                            doQuery(explainQuery)
                        },
                    },
                ]}
                defaultValue={query}
            >
            </Input>
            {
                data &&
                <table>
                    <thead>
                        <tr>{
                            data?.length ? keys(data[0]).map(
                                (key, i) => (
                                    <th key={i}>{key}</th>
                                )
                            ) : null
                        }</tr>
                    </thead>
                    <tbody>{
                        data?.map(
                            (row, i) => (
                                <tr key={i}>{
                                    values(row).map(
                                        (value, j) => (
                                            <td key={j}>{value as string | number}</td>
                                        )
                                    )
                                }</tr>
                            )
                        )
                    }</tbody>
                </table>
            }
            {
                sqlError &&
                <div className={css.sqlError}>
                    <h2>Error</h2>
                    <pre>{sqlError.message}</pre>
                </div>
            }
        </div>
    )
}
