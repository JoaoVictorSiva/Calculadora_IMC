const form = document.getElementById('form');


form.addEventListener('submit' ,function(event){
    event.preventDefault();
    
    document.getElementById('infos').classList.remove('hidden');
    
    var Peso = document.getElementById('peso').value;
    var Altura = document.getElementById('altura').value;
    //var res = Altura * Altura;

    var bmi = (Peso / (Altura*Altura));
    var bmiinput = document.querySelector("#bmi");
    bmiinput.innerHTML = bmi.toFixed(2);

    const value = document.getElementById('value');
    let descricao = ''

   console.log(Altura)
   console.log(bmi);
   console.log(Peso)
})

const contexto = document.getElementById('Grafico');

const labels = [

    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023'
]

const data = {
    labels,
    datasets:[{
        data:[251 , 214 , 201 , 254, 258, 245, 214],
        label:"Progressão de custos"
    }]
}

const config = {
    type: 'line',
    data,
    options:{
        responsive: true
    }
}

const Grafico = new Chart(contexto, config)