#!/usr/bin/env node

const fs = require("fs");
const hype = require("./graphics/words/hype");
const tnt = require("./graphics/arsenal/launch-fuse");
const rocket = require("./graphics/arsenal/rocket");
const nuke = require("./graphics/explosions/nuclear");
const suns = require("./graphics/words/reconstruct");
const {
  has_flag,
  show_help,
  are_you_sure,
  get_path,
  npm_i,
  abort,
} = require("./utils/cli.js");

let animationDone = false;
let nukeDone = false;

async function initiate_launch_sequence() {
  if (has_flag(["-h", "-help", "--h", "--help"])) show_help();

  const path = get_path();

  try {
    if (has_flag(["-a", "fubar", "FUBAR"])) await nuke_everything(path);
    else await nuke_the_mods(path);
  } catch {
    console.log("failed.");
    abort();
  }

  if (animationDone) abort();
  nukeDone = true;
}

function begin_the_incredible_immersive_graphical_experience() {
  animation([...hype, ...tnt, ...rocket, ...nuke]);
}

async function nuke_the_mods(path) {
  // Here we go...
  begin_the_incredible_immersive_graphical_experience();

  // Add / to end of path
  if (path.substr(-1) !== "/") path += "/";

  // Check if is node project
  try {
    await fs.promises.stat(path + "package.json");
  } catch {
    console.log("Not a node project.");
    abort();
  }

  // Nuke package-lock.json and node_modules folder
  try {
    await fs.promises.unlink(path + "package-lock.json");
    await fs.promises.rmdir(path + "node_modules", { recursive: true });
  } catch {}

  await npm_i();
}

async function nuke_everything(path) {
  const affirmative = await are_you_sure(path);

  if (!affirmative) return;

  // Here we go...
  begin_the_incredible_immersive_graphical_experience();

  // Nuke entire folder
  await fs.promises.rmdir(path, { recursive: true });
}

function animation(arr, i = 0) {
  // Start recontruction animation
  if (i >= arr.length) {
    animationDone = true;
    reconstruct(suns);
    return;
  }

  // Animate though arr
  setTimeout(() => {
    process.stdout.write("\r" + arr[i]);
    animation(arr, (i += 1));
  }, 500);
}

function reconstruct(arr, i = 0) {
  // Repeat forever
  if (i >= arr.length) i = 0;

  // Animate though arr
  setTimeout(() => {
    process.stdout.write("\r   " + arr[i] + " Reconstructing " + arr[i]);
    reconstruct(arr, (i += 1));
  }, 250);

  if (nukeDone) abort();
}

initiate_launch_sequence();
