var productos = {
    1: {
        "nombre": "DJI Mavic Pro",
        "modelo": "2020",
        "descripción": "Dron ligero y shiquito",
        "precio": {
            "precioNormal": 12000,
            "precioRebaja": 10000
        }
    },
    2: {
        "nombre": "DJI Phantom",
        "modelo": "2020",
        "descripcion": "Dron profesional",
        "precio": {
            "precioNormal": 14000,
            "precioRebaja": 12000
        }
    }

}

function mostrarProductos() {
    console.log(productos[1]);
}