# nuke-it

The tool that completely obliterates your node modules and package-lock file, then reinstalls them automatically. All this with just one simple command.

Relies on 0 dependencies.

[![npm version](https://badge.fury.io/js/nuke-it.svg)](https://badge.fury.io/js/nuke-it)

![nuke-it](https://raw.github.com/theclayton/nuke-it/main/WATCHME.gif)

# Installation

Either through cloning with git or by using npm:

```bash
npm install -g nuke-it
```
That's it, now you are ready to nuke some mods broh!
# Usage

Navigate to the directory of the enemy target and initiate the launch sequence with the following command:

```bash
nuke-it
```
Wait for utter annihilation of target's node modules and package lock. Visual representation of said destruction will be evident in terminal window.

## Optional flags
| flag             | description | example |
-------------------|-------------|---------|
| -p <path/to/dir> | Explicitly defines repo path to be nuked.                 | `nuke-it -p /usr/gijoe/target/dir` |
| -a               | Deletes all contents of the target directory.             | `nuke-it -a`.    |
| fubar            | Same as -a; for when your project has gotten out of hand. | `nuke-it fubar`  |
| FUBAR            | Same as fubar. Ecept you're yelling this time.            | `nuke-it FUBAR`  |
| --help           | Shows the help page. (can also use: -h, --h, -help).      | `nuke-it --help` |

____________________________________________

*The consumer assumes all responsibility and risk for this use of this software.
