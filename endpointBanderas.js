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
    let paisName = paisInp.value.toLowerCase(); 
    if (paisName === '') {
        alert("Debe ingresar el nombre del país");
        return;
    }

    let finalURL = `https://restcountries.com/v3.1/name/${paisName}?fullText=true`;
    console.log(finalURL);

    fetch(finalURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error 400: La consulta no se encontró");
            }
            return response.json();
        })
        .then((data) => {
            resultado.innerHTML = `
            <img src="${data[0].flags.svg}" class="flagImg">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="dataWrapper">
                     <h4>Capital</h4>
                     <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="dataWrapper">
                     <h4>Continente</h4>
                     <span>${data[0].continents[0]}</span>
                </div>
            </div>`;
        })
        .catch((error) => {
            console.log(error);
            resultado.innerHTML = "Error al obtener la información del país";
        });
});
