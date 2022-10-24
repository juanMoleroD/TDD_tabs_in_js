(function() {
    "use strict";

    
    desc("Description of the task"); // makes this selfdocumenting
    task("default", [ "version" ], function() { // task takes 3 args (name, dependency tasks, function to execute)
        console.log("\n\nBUILD Ok");
    });
    
    desc("Check Node Version")
    task("version", function() {
        console.log("Checking Node Version: .")
        
        const packageJson = require("./package.json")
        const expectedVersion = "v" + packageJson.engines.node;
        
        let actualVersion = process.version;
        if (actualVersion !== expectedVersion) {
            fail("Incorrect Node version: expected " + expectedVersion + ", but was " + actualVersion);
        }
    });
} ());