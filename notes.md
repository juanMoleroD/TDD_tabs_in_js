Setting up a script file:

1. by convention apend .sh at the end on Unix or .cmd in windows.
2. In Unix, to run the file needs to have permissions. use 'chmod +x jake.sh' to allow it to run. No permissions are required in windows.

Note: sh is for Unix and cmd is for windows. 

3. to allow script to have terminal commands and $* in Unix, and %* in Windows.

4. on Unix you need to ad the Shaban at the start to specify where the script is to be ran. In this case '#!/bin/sh' by default is the default terminal.

5. on Windows, adding '@echo off' it should not print the commands. 