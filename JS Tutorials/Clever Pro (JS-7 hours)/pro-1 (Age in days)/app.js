let btn = document.getElementById("bt-1");
let btn_re = document.getElementById('bt-2');
let res = document.getElementById('result')

let nah = btn.addEventListener('click', function(){
    let age = prompt("What is Your BirthYear..?")
    let final = (2020-age)*365;
    res.innerHTML = "Voila..! " + 'You are '+ final+' days old.. Live your Life happily'
});

let nag = btn_re.addEventListener('click', function(){
    res.innerHTML ='';
});

//SetInterval Practice...
let nas = setInterval(() => {
    console.log('hagu koro');
}, 3000);



1