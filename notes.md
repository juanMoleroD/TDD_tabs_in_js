## Setting up a script file:

1. by convention apend .sh at the end on Unix or .cmd in windows.
2. In Unix, to run the file needs to have permissions. use 'chmod +x jake.sh' to allow it to run. No permissions are required in windows.

Note: sh is for Unix and cmd is for windows. 

3. to allow script to have terminal commands and $* in Unix, and %* in Windows.

4. on Unix you need to ad the Shaban at the start to specify where the script is to be ran. In this case '#!/bin/sh' by default is the default terminal.

5. on Windows, adding '@echo off' it should not print the commands. 

Note: In windows, if there is a script, you need to use call before every command. 

Note: to run sh comands, use "./filename.sh"

## Linting using jsHint

files start with a IIFE (Imediatelly Invoked Function Expression). This ensures nothing run in the global scope. Node does it by default but just in case.

"use strict" is for runtame error checking 

Added a ".jshintrc" file at the top of the project to remove errors about using ES6 functionality (let, consts, etc).