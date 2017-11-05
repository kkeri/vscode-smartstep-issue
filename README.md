# Test scenario for VS Code debugger issue with smartstep

Steps to reproduce the issue:

- execute `npm install` and `npm run build` on the command line
- open the project directory in VS Code
- open `test/test.js` in the editor
- set a breakpoint on line 16
- choose the "launch with smartstep" launch configuration
- start debugging by pressing F5
- when the debugger stops at the breakpoint, press F10 (step over)

Expected behavior: the debugger stops on line 17.

Actual behavior: the debugger doesn't stop until the program terminates, and
runs very slowly.

When the scenario is repeated with the "launch without smartstep"
configuration, everything goes well.
