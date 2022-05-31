function Contar(){
    let ini = document.getElementById('inicio_txt')
    let passo = document.getElementById('passo_txt')
    let fim = document.getElementById('fim_txt')
    let res = document.getElementById('resultado')
    if(ini.value.length == 0 || passo.value.length == 0 || fim.value.length == 0){
        window.alert('ERROR: Preencha os dados corretamente!')
    } 
    else {
        resultado.innerHTML = 'Contando:  <br>' 
        let i = Number(ini.value)
        let p = Number(passo.value)
        let f = Number(fim.value)
        if(p <= 0){
            window.alert('Passo Inválido!')
            p = 1
        }
        // Contagem Crescente
        if(i < f){
        for(let cont = i; cont <= f; cont += p){
        /* O contador vai começar no inicio e enquanto o contador for menor ou igual que 
        o fim, ele irá receber ele mesmo mais o passo. */
            resultado.innerHTML += `${cont} \u{27A1}`
        } 
    }
        // Contagem Decresente
        else{
        for(let cont = i; cont >= f; cont -= p){
            resultado.innerHTML += `${cont} \u{27A1}`
            }  
        }
    }   
}