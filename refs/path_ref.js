 const path = require('path')
 const {log} = require("nodemon/lib/utils");

 //_dirname папка в которой мы ведём разработку.

 console.log(__filename)
 console.log(path.basename(__filename))
 console.log(path.parse(__filename).base)
 console.log (path.join(__dirname, 'test', 'second.html'))  // генерация пути (папка, папка, файл)
 console.log(path.resolve(__dirname, 'test', 'second.html')) // аналогичный метод методу join, служит также для генерации пути

