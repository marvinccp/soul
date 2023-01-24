const form = document.getElementById('post-form');
console.log(form);

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let soulData = new FormData(form)
    console.log(soulData);

    let soulName = soulData.get('nameInput')
    let soulMail = soulData.get("mailInput");
    let soulMessage = soulData.get("messageInput");

    const formValues = {
      soulName,
      soulMail,
      soulMessage,
    };

    let infoSoul = localStorage.getItem('SOUL')
    if(!infoSoul){
        // let soulArray = []
        // soulArray.push(formValues)
        // localStorage.setItem("SOUL", JSON.stringify(soulArray));

        localStorage.setItem("SOUL", JSON.stringify([formValues]));

    }else{
        let parsedSoul = JSON.parse(infoSoul)
        let newMessage = [...parsedSoul, formValues];
        localStorage.setItem("SOUL", JSON.stringify(newMessage));
    }
})