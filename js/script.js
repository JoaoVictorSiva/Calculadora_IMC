const form = document.getElementById('form');


form.addEventListener('submit' ,function(event){
    event.preventDefault();
    
    document.getElementById('infos').classList.remove('hidden');
    
    var Peso = document.getElementById('peso').value;
    var Altura = document.getElementById('altura').value;
    //var res = Altura * Altura;

    var bmi = (Peso / (Altura*Altura));
    var bmiinput = document.querySelector("#bmi");
    bmiinput.innerHTML = bmi;

    const value = document.getElementById('value');
    let descricao = ''

   console.log(Altura)
   console.log(bmi);
   console.log(Peso)

    
})