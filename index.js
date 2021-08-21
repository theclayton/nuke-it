#!/usr/bin/env node

const fs = require('fs');
const {
    exec
} = require("child_process");

let animationDone = false;
let nukeDone = false;

async function initiate_launch_sequence() {
    try {
        let path = __dirname;

        if (process.argv[2] === '-p' && process.argv[3]) {
            path = process.argv[3];
        }

        // Add / to end of path
        if (path.substr(-1) !== '/') path += '/';

        if (!fs.existsSync(path + 'package.json')) throw new Error('Not a node project');

        /// HERE WE GO ///
        begin_the_incredible_graphical_experience()

        // Check if package-lock.json exists and nuke it
        if (fs.existsSync(path + 'package-lock.json')) {
            fs.unlinkSync(path + 'package-lock.json')
        }

        // Check if node_modules file exists and nuke it
        if (fs.existsSync(path + 'node_modules')) {
            fs.rmdirSync(path + 'node_modules', {
                recursive: true
            });
        }

        await npm_i()

        if (animationDone) process.exit(0)

        nukeDone = true;

    } catch (e) {
        console.log(e);
        process.exit(0)
    }
}

function npm_i() {
    return new Promise(function (resolve, reject) {
        exec("npm i", (error, stdout, stderr) => {
            resolve()
        });
    });
}

function begin_the_incredible_graphical_experience() {
    const hype = require('./words/hype');
    const tnt = require('./arsenal/launch-fuse');
    const rocket = require('./arsenal/rocket');
    const nuke = require('./explosions/nuclear');

    const arr = [...hype, ...tnt, ...rocket, ...nuke]

    animation(arr);
}

function animation(arr, i = 0) {
    if (i >= arr.length) {
        const suns = require('./words/reconstruct');

        reconstruct(suns);

        animationDone = true;

        return
    }

    setTimeout(() => {
        process.stdout.write("\r" + arr[i]);
        i++
        animation(arr, i)
    }, 500)
}

function reconstruct(arr, i = 0) {
    if (i >= arr.length) i = 0

    setTimeout(() => {
        process.stdout.write("\r   " + arr[i] + ' Reconstructing ' + arr[i]);
        i += 1;
        reconstruct(arr, i)
    }, 250)

    if (nukeDone) process.exit(0)
}

initiate_launch_sequence();