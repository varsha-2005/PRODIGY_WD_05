let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")
let errorMessage = document.getElementById("error-message")

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img')
        errorMessage.textContent = ""
        qrText.value = ""
    }
    else{
        qrImage.src = ""; 
        imgBox.classList.remove('show-img'); 
        errorMessage.textContent = "Enter the Text";
    }
}

