module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}

// dependencies
var fs = require("fs")
var postcss = require("postcss")
var atImport = require("postcss-import")

// css to be processed
var css = fs.readFileSync("css/styles.css", "utf8")

// process css
postcss()
  .use(atImport())
  .process(css, {
    // `from` option is needed here
    from: "css/styles.css"
  })
  .then(function (result) {
    var output = result.css

    console.log(output)
  })