const assert = require("assert");
const {
  has_flag,
    // TODO:
    //   show_help,
    //   are_you_sure,
    //   get_path,
} = require("../../utils/cli.js");

function help_flags() {
  // Help Flags
  const vaidHelpFlags = ["-h", "-help", "--h", "--help"];

  let hasHelpFlag = has_flag(vaidHelpFlags);
  assert.deepStrictEqual(false, hasHelpFlag);

  process.argv.push("-h");
  hasHelpFlag = has_flag(vaidHelpFlags);
  assert.deepStrictEqual(true, hasHelpFlag);
}

function fubar_flags() {
  // Fubar Flags
  const vaidFubarFlags = ["-a", "fubar", "FUBAR"];

  let hasFubarFlag = has_flag(vaidFubarFlags);
  assert.deepStrictEqual(false, hasFubarFlag);

  process.argv.push("-a");
  hasFubarFlag = has_flag(vaidFubarFlags);
  assert.deepStrictEqual(true, hasFubarFlag);
}

help_flags();
fubar_flags();
