// code from https://vercel.com/docs/runtimes#advanced-usage/technical-details/including-additional-files
module.exports = (req, res) => {
  const { readFileSync } = require("fs");
  const { join } = require("path");
  const file = readFileSync(join(__dirname, "..", "_site", "index.html"), "utf8");

  res.send(file);
};
