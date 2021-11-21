const path = require('path')
const fs = require('fs')  //File System


//Создание папки
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw err
//     console.log('Dir was created')
// });


//Создание файла и запись данных в файл
// fs.writeFile(
//     path.join(__dirname, 'notes', 'myNotes.txt'),
//     'Hello world',
//     (err) => {
//         if (err) throw err
//         console.log('File was created ')
//
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'myNotes.txt'),
//             'New content was created',
//             (err) => {
//                 if (err) throw err
//                 console.log(' File was update')
//
//                 //Чтение содержимого файла который был создан
//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'myNotes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if (err) throw err
//                         console.log(data)
//                     }
//                 )
//             }
//         )
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'myNotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if (err) throw err

        console.log('File is rename')
    }
)





