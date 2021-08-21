#!/usr/bin/env node

const fs = require('fs');
const { exec } = require("child_process");
const hype = require('./words/hype');
const tnt = require('./arsenal/launch-fuse');
const rocket = require('./arsenal/rocket');
const nuke = require('./explosions/nuclear');
const suns = require('./words/reconstruct');

let animationDone = false;
let nukeDone = false;

async function initiate_launch_sequence() {
    try {
        let path = process.env.PWD;

        if (process.argv[2] === '-p' && process.argv[3]) {
            path = process.argv[3];
        }

        // Add / to end of path
        if (path.substr(-1) !== '/') path += '/';

        // Check if directory contains a node app
        if (await !fs.promises.stat(path + 'package.json')) throw new Error('Not a node project');

        begin_the_incredible_immersive_graphical_experience();

        // Check if package-lock.json exists and nuke it
        if (await fs.promises.stat(path + 'package-lock.json')) {
            await fs.promises.unlink(path + 'package-lock.json');
        }

        // Check if node_modules folder exists and nuke it
        if (await fs.promises.stat(path + 'node_modules')) {
            await fs.promises.rmdir(path + 'node_modules', { recursive: true });
        }

        await npm_i();

        if (animationDone) process.exit(0);

        nukeDone = true;

    } catch (e) {
        console.log(e);
        process.exit(0);
    }
}

function npm_i() {
    return new Promise(function (resolve, reject) {
        exec("npm i", () => {
            resolve();
        });
    });
}

function begin_the_incredible_immersive_graphical_experience() {
    const arr = [...hype, ...tnt, ...rocket, ...nuke];

    animation(arr);
}

function animation(arr, i = 0) {
    if (i >= arr.length) {
        animationDone = true;
        reconstruct(suns);
        return;
    }

    setTimeout(() => {
        process.stdout.write("\r" + arr[i]);
        animation(arr, i+=1)
    }, 500);
}

function reconstruct(arr, i = 0) {
    if (i >= arr.length) i = 0;

    setTimeout(() => {
        process.stdout.write("\r   " + arr[i] + ' Reconstructing ' + arr[i]);
        reconstruct(arr, i+=1);
    }, 250);

    if (nukeDone) process.exit(0);
}

initiate_launch_sequence();
