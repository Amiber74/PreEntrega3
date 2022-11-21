const Trabajadores =[
    {nombre:"matias", contraseña:"123456789", email:"mati@gmail.com", dni:87654321},
    {nombre:"facundo", contraseña:"987654321", email:"facu@gmail.com", dni:12345678},
]
const dni_contratados=[
    {nombre:"matias", dni:87654321},
    {nombre:"facundo", dni:12345678},
    {nombre:"franco", dni:13572648},
    {nombre:"miguel", dni:24681357}
]

// Eventos

    //formularios
let form_inicio = document.querySelector(".formulario_iniciar-activo")
let aviso_fallo = document.querySelector(".fallo_registro-oculto")
let form_registro = document.querySelector (".formulario_registrarse-oculto")
    //variables
let email1 = form_inicio.querySelector("#campo_email")
let contrasenia1 = form_inicio.querySelector("#campo_contrasenia")
let boton_IniciarSesion = form_inicio.querySelector(".boton")
let boton_registrarse = form_inicio.querySelector (".boton_registrarse")


boton_IniciarSesion.addEventListener("click",(e)=>{
    e.preventDefault()
        Trabajadores.forEach((valor)=>{
            if(valor.email == email1.value && valor.contraseña == contrasenia1.value){
                form_inicio.classList.add("formulario_iniciar")
            }else{
                form_inicio.classList.add("formulario_iniciar")
                aviso_fallo.classList.remove("fallo_registro-oculto")
                aviso_fallo.classList.add("fallo_registro")
                console.log ("error")
            }
        })
})

boton_registrarse.addEventListener("click",(e)=>{
    e.preventDefault()
    form_inicio.classList.add("formulario_iniciar")
    form_registro.classList.remove("formulario_registrarse-oculto")
    form_registro.classList.add ("formulario_registrarse")
})