function getSelectValue(){
    var selectedValue = document.getElementById("lista").value;

    if (selectedValue=='Seleccione'){
        alert("No ha seleccionado ningún país")
    }

    if (selectedValue=='Todos'){
        document.getElementById('grafica').style.display = 'block';
        document.getElementById('graficaArgentina').style.display = 'none';
        document.getElementById('graficaBrasil').style.display = 'none';
        document.getElementById('graficaColombia').style.display = 'none';
        document.getElementById('graficaMexico').style.display = 'none';
        document.getElementById('graficaPeru').style.display = 'none';
        document.getElementById('graficaResto').style.display = 'none';
        const $grafica = document.querySelector("#grafica");
        // Las etiquetas son las que van en el eje X. 
        const etiquetas = ["Argentina", "Brasil", "Colombia", "Mexico", "Perú", "Resto de Latinoamérica y Caribe"]
        // Podemos tener varios conjuntos de datos
        const datosVentas2019 = {
            label: "Valor de las ventas Online en 2019",
            data: [4.0, 17.2, 4.0 , 14.3, 2.1, 8.4], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
            backgroundColor: 'rgba(73,190,183)', // Color de fondo
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            borderWidth: 1,// Ancho del borde
        };
        const datosVentas2024 = {
            label: "Valor de las ventas Online en 2024*",
            data: [10.1, 30 , 7.8, 24.2, 4.7, 18.2], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
            backgroundColor: 'rgba(252,52,92)',// Color de fondo
            borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
            borderWidth: 1,// Ancho del borde
        };
        
        new Chart($grafica, {
            type: 'bar',// Tipo de gráfica
            data: {
                labels: etiquetas,
                datasets: [
                    datosVentas2019,
                    datosVentas2024,
                    // Aquí más datos...
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
            }
        });
    }


    if (selectedValue=='Argentina'){ 
        document.getElementById('graficaArgentina').style.display = 'block';
        document.getElementById('grafica').style.display = 'none';
        document.getElementById('graficaBrasil').style.display = 'none';
        document.getElementById('graficaColombia').style.display = 'none';
        document.getElementById('graficaMexico').style.display = 'none';
        document.getElementById('graficaPeru').style.display = 'none';
        document.getElementById('graficaResto').style.display = 'none';
     const $graficaArgentina = document.querySelector("#graficaArgentina");
     // Las etiquetas son las que van en el eje X. 
     const etiquetasArgentina = ["Argentina"]
     // Podemos tener varios conjuntos de datos
     const datosVentas2019Argentina = {
        label: "Valor de las ventas Online en 2019",
        data: [4], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(73,190,183)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 0,// Ancho del borde
     };
     const datosVentas2024Argentina = {
        label: "Valor de las ventas Online en 2024*",
        data: [10.1], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(252,52,92)',// Color de fondo
        borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
        borderWidth: 0,
     };
    
     new Chart($graficaArgentina, {
        type: 'bar',
        data: {
            labels: etiquetasArgentina,
            datasets: [
                datosVentas2019Argentina,
                datosVentas2024Argentina,
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
     });
    
    }

    if (selectedValue=='Brasil'){
        document.getElementById('graficaBrasil').style.display = 'block';
        document.getElementById('grafica').style.display = 'none';
        document.getElementById('graficaArgentina').style.display = 'none';
        document.getElementById('graficaColombia').style.display = 'none';
        document.getElementById('graficaMexico').style.display = 'none';
        document.getElementById('graficaPeru').style.display = 'none';
        document.getElementById('graficaResto').style.display = 'none';
        const $graficaBrasil = document.querySelector("#graficaBrasil");
     
    const etiquetasBrasil = ["Brasil"]
    // Podemos tener varios conjuntos de datos
    const datosVentas2019Brasil = {
        label: "Valor de las ventas Online en 2019",
        data: [17.2], 
        backgroundColor: 'rgba(73,190,183)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 0,// Ancho del borde
    };
    const datosVentas2024Brasil = {
        label: "Valor de las ventas Online en 2024*",
        data: [30], 
        backgroundColor: 'rgba(252,52,92)',// Color de fondo
        borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
        borderWidth: 0,
    };
    
    new Chart($graficaBrasil, {
        type: 'bar',
        data: {
            labels: etiquetasBrasil,
            datasets: [
                datosVentas2019Brasil,
                datosVentas2024Brasil,
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
    }

    if (selectedValue=='Colombia'){
        document.getElementById('graficaColombia').style.display = 'block';
        document.getElementById('grafica').style.display = 'none';
        document.getElementById('graficaArgentina').style.display = 'none';
        document.getElementById('graficaBrasil').style.display = 'none';
        document.getElementById('graficaMexico').style.display = 'none';
        document.getElementById('graficaPeru').style.display = 'none';
        document.getElementById('graficaResto').style.display = 'none';
        
        const $graficaColombia = document.querySelector("#graficaColombia");
        const etiquetasColombia = ["Colombia"]
        // Podemos tener varios conjuntos de datos
        const datosVentas2019Colombia = {
            label: "Valor de las ventas Online en 2019",
            data: [4], 
            backgroundColor: 'rgba(73,190,183)', // Color de fondo
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            borderWidth: 0,// Ancho del borde
        };
        const datosVentas2024Colombia = {
            label: "Valor de las ventas Online en 2024*",
            data: [7.8], 
            backgroundColor: 'rgba(252,52,92)',// Color de fondo
            borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
            borderWidth: 0,
        };
        
        new Chart($graficaColombia, {
            type: 'bar',
            data: {
                labels: etiquetasColombia,
                datasets: [
                    datosVentas2019Colombia,
                    datosVentas2024Colombia,
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
            }
        });
    }
    

    if (selectedValue=='Mexico'){
        document.getElementById('graficaMexico').style.display = 'block';
        document.getElementById('grafica').style.display = 'none';
        document.getElementById('graficaArgentina').style.display = 'none';
        document.getElementById('graficaBrasil').style.display = 'none';
        document.getElementById('graficaColombia').style.display = 'none';
        document.getElementById('graficaPeru').style.display = 'none';
        document.getElementById('graficaResto').style.display = 'none';

        const $graficaMexico = document.querySelector("#graficaMexico");
        const etiquetasMexico = ["Mexico"]
        // Podemos tener varios conjuntos de datos
        const datosVentas2019Mexico = {
            label: "Valor de las ventas Online en 2019",
            data: [14.3], 
            backgroundColor: 'rgba(73,190,183)', // Color de fondo
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            borderWidth: 0,// Ancho del borde
        };
        const datosVentas2024Mexico = {
            label: "Valor de las ventas Online en 2024*",
            data: [24.2], 
            backgroundColor: 'rgba(252,52,92)',// Color de fondo
            borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
            borderWidth: 0,
        };
        
        new Chart($graficaMexico, {
            type: 'bar',
            data: {
                labels: etiquetasMexico,
                datasets: [
                    datosVentas2019Mexico,
                    datosVentas2024Mexico,
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
            }
        });
        
    }

    if (selectedValue=='Peru'){
        document.getElementById('graficaPeru').style.display = 'block';
        document.getElementById('grafica').style.display = 'none';
        document.getElementById('graficaArgentina').style.display = 'none';
        document.getElementById('graficaBrasil').style.display = 'none';
        document.getElementById('graficaColombia').style.display = 'none';
        document.getElementById('graficaMexico').style.display = 'none';
        document.getElementById('graficaResto').style.display = 'none';

        const $graficaPeru = document.querySelector("#graficaPeru");
        const etiquetasPeru = ["Perú"]
        // Podemos tener varios conjuntos de datos
        const datosVentas2019Peru = {
            label: "Valor de las ventas Online en 2019",
            data: [2.1], 
            backgroundColor: 'rgba(73,190,183)', // Color de fondo
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            borderWidth: 0,// Ancho del borde
        };
        const datosVentas2024Peru = {
            label: "Valor de las ventas Online en 2024*",
            data: [4.7], 
            backgroundColor: 'rgba(252,52,92)',// Color de fondo
            borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
            borderWidth: 0,
        };
        
        new Chart($graficaPeru, {
            type: 'bar',
            data: {
                labels: etiquetasPeru,
                datasets: [
                    datosVentas2019Peru,
                    datosVentas2024Peru,
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
            }
        });
        
    }

    if (selectedValue=='Resto'){
        document.getElementById('graficaResto').style.display = 'block';
        document.getElementById('grafica').style.display = 'none';
        document.getElementById('graficaArgentina').style.display = 'none';
        document.getElementById('graficaBrasil').style.display = 'none';
        document.getElementById('graficaColombia').style.display = 'none';
        document.getElementById('graficaMexico').style.display = 'none';
        document.getElementById('graficaPeru').style.display = 'none';

        const $graficaResto = document.querySelector("#graficaResto");
        const etiquetasResto = ["Resto de Latinoamérica y Caribe"]
        // Podemos tener varios conjuntos de datos
        const datosVentas2019Resto = {
            label: "Valor de las ventas Online en 2019",
            data: [8.4], 
            backgroundColor: 'rgba(73,190,183)', // Color de fondo
            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            borderWidth: 0,// Ancho del borde
        };
        const datosVentas2024Resto = {
            label: "Valor de las ventas Online en 2024*",
            data: [18.2], 
            backgroundColor: 'rgba(252,52,92)',// Color de fondo
            borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
            borderWidth: 0,
        };
        
        new Chart($graficaResto, {
            type: 'bar',
            data: {
                labels: etiquetasResto,
                datasets: [
                    datosVentas2019Resto,
                    datosVentas2024Resto,
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
            }
        });
        
    }
}

   



