import http from "node:http";
import base from "./database.js";

const servidor = http.createServer(async (req,res) =>{
const {url,method} = req;

    if(method === "GET"){
        switch(url){
            case "/clientes":
                const getClientes = async (req, res) =>{
                    const datos = await base.query("SELECT * FROM clientes");
                    console.log(datos);
                
                    res.writeHead(201,{"Content-Type":"application/json"});
                    res.end(JSON.stringify(datos[0]));
                }
            break;
        }
    }
})

servidor.listen(3000, () => console.log("Servidor levantado con exito! puerto 3010"));