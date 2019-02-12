var fs = require("fs");
var browserify = require("browserify");
browserify("./index.js")
  .transform("babelify", {presets: ["@babel/preset-env", "@babel/preset-react" ]})
  .bundle()
  .pipe(fs.createWriteStream("bundle.js"));