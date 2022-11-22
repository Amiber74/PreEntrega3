const productos = [
    {id: 1,precio:"2.200", nombre:"Pulsera Elemental", imagen:"./img/Productos/pulseras_genshin.jpg", descripcion: "Pulsera de tus elementos favorito, hecha de cuero y aluminio."},
    {id: 2,precio:"550", nombre:"Llaveros de Genshin Impact", imagen:"./img/Productos/llaveros_genshin.jpg", descripcion: "Llavero de tu personaje favorito,hecho de acrilico de alta calidad."},
    {id: 3,precio:"8.000", nombre:"Mouse Pad Genshin Impact", imagen:"./img/Productos/mousepad_genshin.jpg", descripcion: "Mouse Pad RGB de Genshin Impact de alta calidad 60 x 30cm."},
    {id: 4,precio:"7.000", nombre:"Buzo Kasuha", imagen:"./img/Productos/cosplay-kasuha_genshin.jpg", descripcion: "Disfrazate de kasuha, tu personaje de confianza. Un buzo de calidad media pero resistente y suave al uso."},
    {id: 5,precio:"9.000", nombre:"Peluche Dodoco", imagen:"./img/Productos/peluche-dodoco_genshin.jpg", descripcion: "Unos de los peluches de Klee, suave al tacto y de tamaño 21x10x8 cm para que lo puedas llevar con vos a todos lados."},
    {id: 6,precio:"550", nombre:"Pulsera de slimes elementales", imagen:"./img/Productos/pulseras-slimes_genshin.jpg", descripcion: "pulsera de tus elementos favorito, hecha de cuero y aluminio."},
    {id: 7,precio:"2.000", nombre:"Peluche de slimes elementales", imagen:"./img/Productos/peluche-slime_genshin.jpg", descripcion: "Juega con estos peluches del tamaño de tu mano, increibles como antiestres."},
    {id: 8,precio:"8.000", nombre:"Lampara 3D de Venti", imagen:"./img/Productos/lampara-venti_genshin.jpg", descripcion: "Lampara 3d de tu arconte favorito para alumbrar tui habitación de distintos colres."},
    {id: 9,precio:"30.500", nombre:"Auriculares Genshin Impact", imagen:"./img/Productos/auriculares-klee_genshin.jpg", descripcion: "Auriculares inalambricos de alta calidad tematica de tu personaje favorito, Klee!"},
    {id: 10,precio:"19.000", nombre:"Traje de Venti", imagen:"./img/Productos/cosplay-venti_genshin.jpg", descripcion: "Disfrazate de tu arconte favorito, traje de alta calidad para mujeres"},
]

//Enviar productos al storage

localStorage.setItem("productos",JSON.stringify(productos))