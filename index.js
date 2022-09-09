const express = require ("express");
const app = express();
app.use(express.json());
const productos = ["nombre", "id", "precio"];

app.get('api/producto', (req, res) =>{
    res.send ({productos})
    });
    app.get('api/producto/:id', (req, res) =>{
        const {id}= req.params;
        res.send ({idproducto: productos [id]})
        });
app.post('/api/producto', (req, res) =>{
    const {producto} = req.body;
    producto.push(productos)
    res.send ({producto: productos.length})
    });
app.put('api/producto/:id', (req, res)=>{const {id}= req.params;
const {producto} = req.body;
productos[pos] = producto;
res.send({actualizada: producto})
});
app.delete('api/producto/:id', (req, res)=>{const {id}= req.params;
productos = productos.filter(producto=> producto != productos);
res.send({eliminada: producto});

app.listen(8080, () => {
        console.log('servidor de express iniciado');
});