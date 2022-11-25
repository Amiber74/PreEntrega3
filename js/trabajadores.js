
const dni_contratados=[
    {nombre:"matias", dni:87654321},
    {nombre:"fabricio", dni:44268002},
    {nombre:"franco", dni:13572648},
    {nombre:"fabricio", dni:24681357}

]
localStorage.setItem("dnis",JSON.stringify(dni_contratados))



    //formularios
let form_inicio = document.querySelector(".formulario_iniciar-activo")
let aviso_fallo = document.querySelector(".fallo_registro-oculto")
let form_registro = document.querySelector (".formulario_registrarse-oculto")
    //variables
let email1 = form_inicio.querySelector("#campo_email")
let contrasenia1 = form_inicio.querySelector("#campo_contrasenia")
let boton_IniciarSesion = form_inicio.querySelector(".boton")
let boton_registrarse = document.querySelector (".boton_registrarse")






const trabajadores_LS = JSON.parse(localStorage.getItem("trabajadores"))
const dni_LS = JSON.parse( localStorage.getItem("dnis"))

let trabajadores = []
let dni = []
if (trabajadores !== null){
    trabajadores = trabajadores_LS || []
}
if (dni !== null){
    dni=dni_LS
}
for( const el of trabajadores){
    console.log(el.contraseña)
}

//  INICIO DE SESION

boton_IniciarSesion.addEventListener("click",(e)=>{
    e.preventDefault()
    let bus= trabajadores.filter((el)=> el.email == email1.value)
    let b = bus.find((el)=>el.contraseña== contrasenia1.value)
    if(b){
        form_inicio.classList.add("formulario_iniciar")
    }else{
        form_inicio.classList.add("formulario_iniciar")
        aviso_fallo.classList.remove("fallo_registro-oculto")
        aviso_fallo.classList.add("fallo_registro")
    }
})

boton_registrarse.addEventListener("click",(e)=>{
    e.preventDefault()
    form_inicio.classList.add("formulario_iniciar")
    form_registro.classList.remove("formulario_registrarse-oculto")
    form_registro.classList.add ("formulario_registrarse")
})












// REGISTRARSE

let boton_registro = form_registro.querySelector(".boton")
let nombre_registro = form_registro.querySelector("#campo_nombre")
let email_registro = form_registro.querySelector("#campo_email2")
let dni_registro = form_registro.querySelector("#campo_dni")
let contrasenia_registro = form_registro.querySelector("#campo_contrasenia2")

let trabajador_nuevo = function (nombre,contrasenia,email,dni) {
    this.nombre=nombre,
    this.contraseña=contrasenia,
    this.email=email,
    this.dni=dni
}
boton_registro.addEventListener("click",(e)=>{
    e.preventDefault()
    const busqueda = dni.filter((b)=>b.nombre.includes(nombre_registro.value))
    const b =busqueda.find((b)=>b.dni === parseInt(dni_registro.value)) 

    if(b){
        trabajadores.push( new trabajador_nuevo (nombre_registro.value,contrasenia_registro.value,email_registro.value,dni_registro.value))
        localStorage.setItem("trabajadores",JSON.stringify(trabajadores))
            let pos = dni.indexOf(b)
            dni.splice(pos,1)
            localStorage.setItem("dnis",JSON.stringify(dni))
            form_registro.classList.remove ("formulario_registrarse")
            form_registro.classList.add("formulario_registrarse-oculto")
            form_inicio.classList.remove("formulario_iniciar")
            form_inicio.classList.add("formulario_iniciar-activo")
    } else{
        aviso_fallo.classList.remove("fallo_registro-oculto")
        aviso_fallo.classList.add("fallo_registro")
        form_registro.classList.remove ("formulario_registrarse")
        form_registro.classList.add("formulario_registrarse-oculto")
    }
}) 