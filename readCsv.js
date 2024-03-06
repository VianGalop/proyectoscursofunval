import fs from "node:fs/promises";

async function leer(){
    const data = await fs.readFile('archivo.csv','utf-8');
    const productosArrayStrings = data.split('\n');
    const productosArrayData = productosArrayStrings.map((string) => string.split(",")
    );

    productosArrayData.shift();
    console.log(productosArrayData);
}

leer();

