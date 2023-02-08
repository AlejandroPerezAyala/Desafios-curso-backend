import express from "express"
import ProductManager from "./productManager.js";

const app = express();
let products = new ProductManager("./Productos.txt");

app.get("/products", (req, res) => {
    let productos = products.getProducts();
    if(req.query.limit){
        productos = productos.slice(0, req.query.limit)
    }
    res.send(productos);
})

app.get("/products/:id", (req, res) =>{
    let productos = products.getproductById(req.params.id)
    res.send(productos)
    if(!productos){
        res.send(productos)
    }
})

//configuramos el Server
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log("Servidor ejecutandose en el puerto: ", PORT)
})
server.on("error", error => console.log("error en el servidor: ", error));