class Contenedor {

    constructor() {
        this.productos = [];
    }

    save(obj) {
        this.productos.push(obj);
    }

    getByid(id) {

        return this.productos.find(e => e.id === id) ?
            this.productos.find(e => e.id === id) : -1
    }

    getAll() {
        return this.productos;
    }

    deleteById(id) {
        const productIndex = this.productos.findIndex(e => e.id === id)
        if (productIndex != -1) {
            this.productos.splice(productIndex, 1);
        } else {
            return -1;
        }

    }

    updateProduct(obj, id) {
        const productIndex = this.productos.findIndex(producto => producto.id === id)

        if (productIndex != -1) {
            this.productos[productIndex].title = obj.title
            this.productos[productIndex].price = obj.price
            this.productos[productIndex].url = obj.url
            return this.productos[productIndex]
        }
        return -1
    }
}
module.exports = Contenedor;