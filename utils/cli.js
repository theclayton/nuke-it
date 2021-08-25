const helpText = require("../graphics/words/help");
const { exec } = require("child_process");

function has_flag(flags) {
  for (let i = 0; i < flags.length; i++) {
    const flag = flags[i];

    if (process.argv.indexOf(flag) > 1) return true;
  }
}

function show_help() {
  process.stdout.write("\r" + helpText);
  abort();
}

function get_path() {
  const pathIdx = process.argv.indexOf("-p");
  let path = process.env.PWD;

  if (!process.argv[pathIdx + 1] || process.argv[pathIdx + 1][0] === "-") {
    console.log("Missing path after -p flag.");
    abort();
  }

  if (pathIdx + 1 > 1) {
    path = process.argv[pathIdx + 1];
  }

  return path;
}

async function are_you_sure(path) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let prompt =
    "Are you sure you want to nuke everything in this folder? (y/n)\n";

  if (path) {
    prompt =
      "Are you sure you want to nuke the entire repo at:\n" +
      path +
      "? (y/n)\n";
  }

  return new Promise((resolve) => {
    readline.question(prompt, (answer) => {
      readline.close();

      answer = answer.trim();

      if (
        answer === "y" ||
        answer === "Y" ||
        answer === "yes" ||
        answer === "YES"
      ) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

function npm_i() {
  return new Promise((resolve) => {
    exec("npm i", () => {
      resolve();
    });
  });
}

function abort() {
  process.exit(0);
}

module.exports = {
  has_flag,
  show_help,
  get_path,
  are_you_sure,
  npm_i,
  abort,
};
