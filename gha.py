#!/usr/bin/env python
import click
from utz import check, process, run


nb = 'parse-njsp-xmls.ipynb'
out = f'out/{nb}'

def configure_author(name, email):
    run('git', 'config', '--global', 'user.name', name)
    run('git', 'config', '--global', 'user.email', email)


@click.command()
@click.option('-c', '--configure-author', 'do_configure_author', is_flag=True)
@click.option('-f', '--force', count=True, help=f'Continue past initial no-op data update')
@click.option('-p', '--push', is_flag=True)
def main(do_configure_author, force, push):
    run('./refresh-data.sh')
    git_is_clean = check('git', 'diff', '--quiet', 'HEAD')
    if git_is_clean:
        print('No data changes found')
        if force:
            print(f'force={force}; continuing')
        else:
            return

    did_commit = False
    def commit(msg):
        nonlocal do_configure_author, did_commit
        if do_configure_author:
            configure_author('GitHub Actions', 'ryan-williams@users.noreply.github.com')
            do_configure_author = False
        run('git', 'commit', '-am', msg)
        did_commit = True

    if not git_is_clean:
        commit('GHA: update data')

    run('papermill', nb, out)
    git_is_clean = check('git', 'diff', '--quiet', 'HEAD')
    if git_is_clean:
        print('No plot/data changes found')
    else:
        changed_files = [ line[3:] for line in process.lines('git', 'status', '--porcelain') ]
        print(f'{len(changed_files)} changed files:')
        for f in changed_files:
            print(f'\t{f}')

        if changed_files == ['njsp.db']:
            print('Skipping spurious DB change')
        else:
            commit('GHA: update data/plots')
    if push:
        if did_commit:
            run('git', 'push', 'origin')
        else:
            print('Nothing to push')


if __name__ == '__main__':
    main()
