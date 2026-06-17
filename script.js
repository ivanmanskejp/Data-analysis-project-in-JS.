let num = document.querySelector(`input#fnum`)
let lista = document.querySelector(`select#flista`)
let res = document.querySelector(`div#res`)
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista (n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}



function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} adionado`
        lista.appendChild(item)
        res.innerHTML = " "
    } else {

    window.alert ("valor invalido ou ja encontrado  na lista ")
    }

    num.value = ''
    num.focus()

}


function finalizar() {
    if (valores.length == 0 || NaN) {
        window.alert ("Adicione Valores, Caixa em branco")
    }else {
     let total =  valores.length
     let maior = valores[0]
     let menor = valores[0]
     for(let pos in valores) {
        soma += valores[pos]
        if(valores[pos] > maior)
            maiores = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
     }

     res.innerHTML = " "

     res.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados</p>`
res.innerHTML += `<p>O maior numero informado foi ${maior} </p>`
res.innerHTML += `<p>O menor numero informado foi ${menor} </p>`
res.innerHTML += `<p>A SOMA DOS NUMEROS foi ${soma} </p>`

    }
}