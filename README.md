Portafolio realizado con JS para mostrar proyector personales.

JS,HTML,PHP,API,SQL,POO




uso de api formspree para envio de mensajes

    https://formspree.io/
peticion fetch

    const reponse=await fetch(this.action,{
        method:this.method,
        body:form,
        headers:{
            'Accept':'application/json'
        }
    })
    if(reponse.ok){
        this.reset()
        Swal.fire({
         icon: "success",
         title: "Mensaje enviado,Te contactaremos prondo..!",
        showConfirmButton: false,
        timer: 1500
        });
        
    }
}
