var path = require('path')
var sh = require('shelljs')
var sizeOf = require('image-size')
var ROOT = './public/images/work'

var filenames = sh.ls(ROOT)

var meta = filenames.map(function(f) {
  var dimensions = sizeOf(path.join(ROOT, f))
  return {
    filename: f
  , width: dimensions.width
  , height: dimensions.height
  }
})

JSON.stringify({ images: meta }).to('./public/_data.json')
