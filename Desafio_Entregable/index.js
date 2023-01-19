//Creamos la clase con su contructor
class ProductManager{
    constructor(product){
        this.product = product;
    }

    //Metodo para agregar los productos
    addProducts(title, description, price, code, thumbnail, stock){
        if(this.product.some (product => product.code == code)){
            console.error("el producto ya existe")
        }else{
            this.product.push({title, description, price, code, thumbnail, stock, id: this.product.length + 1});
        }
    }

    //Metodo para mostrar el array de productos
    getProducts(producto){
        console.log(producto);
    }

    //Metodo para mostrar el producto por ID
    getproductById(id){
        if(this.product.some(product => product.id == id)){
            let productoFiltrado = this.product.filter(product => product.id == id);
            console.log(productoFiltrado);
        } else {
            console.log("El producto no existe");
        }    
    }
}

//creamos el producto para agregar los campos a travez los metodos 
let producto = new ProductManager([]);   


console.log(producto.getProducts(producto));
producto.addProducts("producto de prueba", "esto es un producto de prueba", 200, "abc123", "", 25);
console.log(producto.getProducts(producto));
producto.addProducts("producto de prueba", "esto es un producto de prueba", 200, "abc123", "", 25);
console.log(producto.getproductById(1));


