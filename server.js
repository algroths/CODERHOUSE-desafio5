const express = require('express')
const app = express()
const productoRouter = require('./productoRouter')

const { engine } = require('express-handlebars')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/static', express.static(__dirname + '/public'))

app.use('/productos', productoRouter)


/*
//////////////////////////////////////////////////////////////////HANDLEBARS
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: `${__dirname}/views/index.hbs`,
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`
}))

app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', (req, res) => {

    const data = { active: true }
    return res.render('layouts/main', data)
})
*/

/*
/////////////////////////////////////////////////////////////////PUG
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {

    const data = { active: true }
    return res.render('form', data)
})
*/

/*
/////////////////////////////////////////////////////////////////EJS
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    const data = { active: true }
    return res.render('index')
})
*/

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en puerto ${PORT}`)
})

server.on('error', error => { console.log(`Error en servidor: ${error}`) })

