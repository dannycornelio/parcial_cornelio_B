let buscarBtn = document.getElementById("buscarBtn");
let paisInp = document.getElementById("paisInp");


paisInp.addEventListener("paisInp", () => {
    let texto = paisInp.value;
    let textoMinuscula = texto.toLowerCase();
  
    if (texto !== textoMinuscula) {
      input.value = textoMinuscula;
    }
  });

buscarBtn.addEventListener("click", () => {
    let nameSimp = paisInp.value;
    if(nameSimp == ''){
        alert("Debe ingregar el nombre del pais")
        return;}
    let finalURL = `https://restcountries.com/v3.1/name/${nameSimp}`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
          
            resultado.innerHTML = `
            <img src="${data[0].flags.svg}" class="flagImg">
            <h2> ${data[0].name.common} </h2>
            <div class="wrapper">
            <div class="wrapper">
                <div class="dataWrapper">
                     <h4>Moneda</h4>
                     <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
                </div>
            </div>
            `
            
        });  
});