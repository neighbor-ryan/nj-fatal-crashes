import click

from nj_crashes.utils.nb import execute
from njsp.cli.base import command


@command
@click.option('-k', '--kernel', default='python3')
def harmonize_muni_codes(kernel):
    """Harmonize county/muni codes between NJDOT and NJSP, output cc2mc2mn.json"""
    nb_path = 'njdot/harmonize-muni-codes.ipynb'
    execute(nb_path, kernel=kernel)
    return "Harmonize county/muni codes"
