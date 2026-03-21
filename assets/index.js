let imgBox = document.getElementById("imgBox")
let qrText = document.getElementById("qrText")
let qrImage = document.getElementById("qrImage")
let generate = document.querySelector(".app")

function generateQR() {
    generate.addEventListener("click", () => {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
    })
}


generateQR()
