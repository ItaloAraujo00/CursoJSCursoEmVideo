function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('erro')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.jpg')

            } else if (idade >= 11 && idade <= 21){
               //jovem
               img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if(idade >= 22 && idade < 50 ){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                console.log('idoso')
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
            
        } else if(fsex[1].checked){
            gênero = 'mulher'
            if(idade >= 0 && idade < 10){
                console.log('criança')
                img.setAttribute('src', 'foto-bebe-f.jpg')

            } else if (idade >= 11 && idade <= 21){
                console.log('jovem')
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if(idade >= 22 && idade < 50 ){
                console.log('adulto')
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                console.log('idoso')
                img.setAttribute('src', 'foto-idosa-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    

}