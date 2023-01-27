var url = "https://api.openweathermap.org/data/2.5/weather?lat=-31.61850814959764&lon=-60.69887566113717&appid=599f5b279e920657d366e81483c0fd00&units=metric&lang=es";

fetch(url).then(solicitud => {
    console.log(solicitud);
    if (solicitud.ok === true) {
        
        solicitud.json().then(clima => {
            console.log(clima);

           
            ciudad.innerHTML = clima.name;

            
            var temperatura = clima.main.temp;

            
            var climaDescripcion = clima.weather[0].description;

            
            descripcion.innerHTML = ' La temperatura es de ' + temperatura + "°C, con " + climaDescripcion;
            descripcion.innerHTML = ` La temperatura es de ${temperatura}°C,
                                     con ${climaDescripcion}`; 

        });

    } else {
        
        console.error('Error:', solicitud.status, solicitud.statusText);
    }
});