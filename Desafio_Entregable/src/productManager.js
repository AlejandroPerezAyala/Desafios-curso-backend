import fs from "fs"


//Creamos la clase con su contructor
class ProductManager{
    constructor(product){
        this.product = product;
    }   

    //Metodo para agregar los productos
    addProducts(title, description, price, code, thumbnail, stock){

        if (fs.existsSync('./Productos.txt')) {
            let Producto = fs.readFileSync("./Productos.txt", "utf-8")
            let producto = JSON.parse(Producto);
            if (producto.some(products => products.code == code)) {
                console.error("el producto ya existe");
            }
            else {
                producto.push({
                    name: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock,
                    id: producto[producto.length - 1].id + 1
                })
            }
            fs.writeFileSync("./Productos.txt", JSON.stringify(producto));
        }
        else {
            if (this.product.some(products => products.code == code)) {
                console.error("el producto ya existe");
            }
            else {
                this.product.push({
                    name: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock,
                    id: this.product.length + 1
                });
            }
            fs.writeFileSync("./Productos.txt", JSON.stringify(this.product));
        }
    }

    //Metodo para mostrar el array de productos
    getProducts(){
        if (fs.existsSync("./Productos.txt")) {
            let archivo = fs.readFileSync("./Productos.txt", "utf-8")
            let contenido = JSON.parse(archivo)
            return contenido
        }
    }

    //Metodo para mostrar el producto por ID
    getproductById(id){

        if (fs.existsSync("./Productos.txt")) {
            let Producto = fs.readFileSync("./Productos.txt", "utf-8")
            let product = JSON.parse(Producto)
            if(product.some(product => product.id == id)){
                let productoFiltrado = product.filter(product => product.id == id);
                return (productoFiltrado);
            } else {
                return("El producto no existe");
            }   
        } 
    }

    //Metodo para borrar un producto por el ID
    deleteProductById(id) {
        let Producto = fs.readFileSync("./Productos.txt", "utf-8")
        let product = JSON.parse(Producto)
        const deleteProduct = product.find(products => products.id === id);
        if (deleteProduct) {
            const productsIndex = product.indexOf(deleteProduct);
            product.splice(productsIndex, 1);
            fs.writeFileSync("./Productos.txt", JSON.stringify(product))
        } else {
            console.error('el producto con el id ${id} no existe');
        }
    }

    //Metodo para modificar un producto por el ID (por el momento es hardcodeado la modificacion del precio)
    updateProductById(id) {
        let Producto = fs.readFileSync("./Productos.txt", "utf-8")
        let product = JSON.parse(Producto)
        let precioNuevo = "250"
        product.map(function (dato) {
            
             if(dato.id == id){
                   dato.price = precioNuevo;
            }
            
            //return dato;
        });
        fs.writeFileSync("./Productos.txt", JSON.stringify(product))
    }
}

//creamos el producto para agregar los campos a travez los metodos 
//let producto = new ProductManager([]);  
//producto.getProducts();
//producto.addProducts("producto de prueba", "esto es un producto de prueba", 200, "codetest", "", 25);
//producto.deleteProductById(1);
//producto.updateProductById(1)

export default ProductManager 




