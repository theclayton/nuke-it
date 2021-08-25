module.exports = `
 __    _  __   __  ___   _  _______         ___   _______ 
|  |  | ||  | |  ||   | | ||       |       |   | |       |
|   |_| ||  | |  ||   |_| ||    ___| ____  |   | |_     _|
|       ||  |_|  ||      _||   |___ |____| |   |   |   |  
|  _    ||       ||     |_ |    ___|       |   |   |   |  
| | |   ||       ||    _  ||   |___        |   |   |   |  
|_|  |__||_______||___| |_||_______|       |___|   |___|  

The tool that completely obliterates your node modules 
and package-lock file, then reinstalls them automatically.

Navigate to the directory of the enemy target and initiate 
the launch sequence with the following command: 

nuke-it

---------------------------------------------------------

Optional flags:

nuke-it [-a] [fubar] [FUBAR]
        Deletes all contents of the directory
        *example: nuke-it fubar

nuke-it [-p <path/to/dir>]
        Explicitly defines repo path to be nuked
        *example: nuke-it -p /usr/gijoe/target-dir

nuke-it [-h] [--h] [-help] [--help]
        Shows this help page
        *example: nuke-it -h
        
`;
