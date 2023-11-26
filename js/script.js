document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    var arrayResult = [];

    const contexto = document.getElementById('Grafico').getContext('2d');
    const labels = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    
    
    const data = {
        labels,
        datasets: [{
            data: arrayResult,
            label: "Histórico de IMC",
            fill:true,
            backgroundColor:'#32a852'
        }]
    }

    const config = {
        type: 'line',
        data,
        options: {
            responsive: true,
            radius:5
        }
    }

    const Grafico = new Chart(contexto, config);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        document.getElementById('infos').classList.remove('hidden');

        var Peso = document.getElementById('peso').value;
        var Altura = document.getElementById('altura').value;

        var bmi = (Peso / (Altura * Altura));
        var bmiinput = document.querySelector("#bmi");
        bmiinput.innerHTML = bmi.toFixed(2);

        arrayResult.push(bmi);

        Grafico.data.datasets[0].data = arrayResult;
        Grafico.update();

        console.log(arrayResult);
    });
});
