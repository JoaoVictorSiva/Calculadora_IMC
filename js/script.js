const form = document.getElementById('form');

form.addEventListener('submit' ,function(event){
    event.preventDefault();

    document.getElementById('infos').classList.remove('hidden');
    
    const Peso = docoment.getElementById('peso').value;
    const Altura = docoment.getElementById('altura').value;

    const bmi = (Peso / (Altura * Altura)).toFixed(2);

    const value = document.getElementById('value');
    let descricao = ''

    

    
})