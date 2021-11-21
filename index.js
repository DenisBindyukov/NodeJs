//Настройки сервера

const http = require('http')

const  server = http.createServer((req, res) => {
    console.log(req.url)

    //Отпровляем респонс
    res.write('<h1>Hello from NodeJs</h1>')
    res.write('<h2>Hello from NodeJs</h2>')
    res.write('<h3>Hello from NodeJs</h3>')
    res.write('<h4>Hello from NodeJs</h4>')
    //Закрываем запрос
    res.end(
        `
        <div style="background: blue; width: 200px; height: 200px">
        <h1>Test</h1>
</div>`
    )
})


//Порт на котором будет запускаться сервак
// Клавиши C + CTRL можно остоновить процесс
server.listen(3000, () => {
    console.log('Server is running...')
})