const { Router } = require('express')
const Contenedor = require('./Contenedor')


let cont = new Contenedor()


let obj = [
    {
        title: "Thor",
        price: "30€",
        url: "http://localhost:8080/static/thor.png",
        id: 1
    },
    {
        title: "PsychoDuck",
        price: "20€",
        url: "http://localhost:8080/static/pyscho.png",
        id: 2
    },
    {
        title: "Rubik",
        price: "25€",
        url: "http://localhost:8080/static/rubik.png",
        id: 3
    }
]

    ; (() => {
        for (let i = 0; i < obj.length; i++) {
            cont.save(obj[i]);
        }
    })();


const productosRouter = Router()

productosRouter.get('', (req, res) => {

    const data = {
        productos: cont.getAll(),
        activeP: true
    }
    return res.render('productos', data)
})

productosRouter.get('/:id', (req, res) => {

    let obj = cont.getByid(+req.params.id)

    if (obj != -1) {
        return res.json(obj)
    } else {
        throw new Error('Error')
    }
})

productosRouter.post('', (req, res) => {
    let obj = req.body
    obj.id = cont.productos.length + 1
    cont.save(obj)

    return res.redirect('/')
})

productosRouter.put('/:id', (req, res) => {
    let obj = cont.updateProduct(req.body, +req.params.id)

    if (obj != -1) {
        return res.json(obj)
    } else {
        throw new Error('Error')
    }
})

productosRouter.delete('/:id', (req, res) => {
    let obj = cont.deleteById(+req.params.id)
    console.log(obj)
    if (obj != -1) {
        return res.status(204).json({})
    } else {
        throw Error('Error')
    }

})



module.exports = productosRouter