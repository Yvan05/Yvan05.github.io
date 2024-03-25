
const $form =document.querySelector('#form_contact')

$form.addEventListener('submit',handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form=new FormData(this)
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