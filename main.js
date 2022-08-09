class Persona{
        constructor(nombre, apellido, email, telefono){
                this.nombre = nombre
                this.apellido = apellido
                this.email = email
                this.telefono = telefono
        }
}

const personas = []
    
        
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e) =>{
        e.preventDefault()

        const nombre = document.getElementById("nombre").value
        const apellido = document.getElementById("apellido").value
        const email = document.getElementById("email").value 
        const telefono = document.getElementById("numero").value 

        if((nombre == "") && (apellido == "") && (email == "") && (telefono == "")){
                Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ingrese datos',
                      })
        }else if(apellido == ""){
                Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ingrese un apellido',
                      })
        }else if (email == ""){
                Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ingrese un email valido',
                      })
        }else if(telefono == ""){
                Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ingrese un numero de telefono',
                      })
        }else if (nombre == ""){
                Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ingrese un nombre',
                      })
        }else{
                const persona1 = new Persona (nombre, apellido, email, telefono)

                personas.push(persona1)

                localStorage.setItem("Persona", JSON.stringify(personas))

                Toastify({
                        text: "Datos cargados correctamente",
                        duration: 3000,
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "left", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
        }
})

