let buscarBtn = document.getElementById("buscarBtn");
let paisInp = document.getElementById("paisInp");

paisInp.addEventListener("input", () => {
    let texto = paisInp.value;
    let textoMinuscula = texto.toLowerCase();
  
    if (texto !== textoMinuscula) {
        paisInp.value = textoMinuscula;
    }
});

buscarBtn.addEventListener("click", () => {
    let nameSimp = paisInp.value;
    if (nameSimp === '') {
        alert("Debe ingresar el nombre del país");
        return;
    }
    let finalURL = `https://restcountries.com/v3.1/name/${nameSimp}`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al obtener los datos del país');
            }
        })
        .then((data) => {
            resultado.innerHTML = `
            <img src="${data[0].flags.svg}" class="flagImg">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="dataWrapper">
                     <h4>Moneda</h4>
                     <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
                </div>
            </div>`;
        })
        .catch((error) => {
            console.log(error);
            resultado.innerHTML = "Error al obtener la información del país";
        });
});
