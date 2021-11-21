const os = require('os')
const {log} = require("nodemon/lib/utils");


//isPlatform
console.log(os.platform())

//Архитектура
console.log(os.arch())

//Общая информация по процессам
console.log(os.cpus())

//Свободная память
console.log(os.freemem())

//Сколько памяти в данном компьютере
console.log(os.totalmem())

//Корневая директория
console.log(os.homedir())

//Сколько система работает
console.log(os.uptime())