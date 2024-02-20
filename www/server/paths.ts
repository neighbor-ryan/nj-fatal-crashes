import path, { dirname } from "path";

export const WWW = process.cwd()
export const PUBLIC = path.join(WWW, "public")
export const ROOT = dirname(WWW)
export const NJSP = path.join(PUBLIC, "njsp")
export const RUNDATE = path.join(NJSP, "rundate.json")
export const RUNDATE_RELPATH = path.relative(WWW, RUNDATE)

export const NJDOT = path.join(PUBLIC, "njdot")
export const CC2MC2MN = path.join(NJDOT, "cc2mc2mn.json")
export const CC2MC2MN_RELPATH = path.relative(WWW, CC2MC2MN)

export const NJSP_DATA = path.join(ROOT, "njsp", "data")
export const ProjectedCsv = path.join(NJSP_DATA, "projected.csv")
export const YearTypeCountyCsv = path.join(NJSP_DATA, "year-type-county.csv")
