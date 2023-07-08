function parimpar(n){
    if(n%2 == 0){
        return 'par!'
    } else {
      return 'impar !'
    }
}

res = parimpar(23);
console.log(res) //chamando a função atraves de uma var

console.log(parimpar(2)); // chamando a função direto com um parametro 