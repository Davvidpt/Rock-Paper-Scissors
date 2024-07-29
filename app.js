function pilih(){
    let bot = Math.random();
    if(bot < 0.3){
        bot = "rock"
        document.getElementById('choice-bot').src = 'assets/batu.png'
    }else if (bot >0.3 && bot <0.6){
        bot = "paper"
        document.getElementById('choice-bot').src = 'assets/kertas.png'
    }else{
        bot = "scissors"
        document.getElementById('choice-bot').src = 'assets/gunting.png'
    }
         
console.log(`pilihan computer ${bot}`)
let pilihanPlayer = document.getElementById('pilihan')
let hasilPilih = pilihanPlayer.value;

if(hasilPilih == "paper"){
     document.getElementById('choice-me').src = 'assets/kertas.png'
}else if(hasilPilih == "rock"){
    document.getElementById('choice-me').src = 'assets/batu.png'
}else{
    document.getElementById('choice-me').src = 'assets/gunting.png'
}
console.log(`pilihan anda ${hasilPilih}`)

if(bot  == hasilPilih){
    document.getElementById('card-result').innerHTML = 'DRAW'
    let prize = document.getElementById('hadiah')
    prize.display = "none" 
}else if(bot == "scissors" && hasilPilih == "rock" || bot == "paper" && hasilPilih == "scissors" || bot == "rock" && hasilPilih == "paper"){
    document.getElementById('card-result').innerHTML = 'CONGRATS, YOU WIN!!'
    let prize = document.getElementById('hadiah')
    prize.innerText = 'AMBIL HADIAHNYA'
    prize.display = "block" 
}else{
    document.getElementById('card-result').innerHTML = 'OH NOO.. YOU LOSE!!'
    let prize = document.getElementById('hadiah')
    prize.display = "none" 
}


}
///





