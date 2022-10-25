(function() {
    "use strict";

    const semver = require("semver");
    
    // makes this selfdocumenting
    desc("Description of the task"); 
    // task takes 3 args (name, dependency tasks, function to execute)
    task("default", [ "version" ], function() { 
        console.log("\n\nBUILD Ok");
    });
    
    desc("Check Node Version");
    task("version", function() {
        console.log("Checking Node Version: .");
        
        const packageJson = require("./package.json");
        const expectedVersion = "v" + packageJson.engines.node;
        
        let actualVersion = process.version;
        //if (actualVersion !== expectedVersion) 
        if (semver.neq(expectedVersion, actualVersion)) {
            fail("Incorrect Node version: expected " + expectedVersion + ", but was " + actualVersion);
        }
    });
} ());