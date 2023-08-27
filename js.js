function hidee(){
    $('#but').hide();
    $('#spann').hide();
    $('#div2').show();
    $('#s1').show();
    $('#b1').show();
}
function nextvo(el){
    $('#div2').hide();
    $('#div3').show();
    $('#s1').hide();
    $('#b1').hide();
    $('#s2').show();
    $('#b2').show();
}
function nextvo1(el){
    $('#div3').hide();
    $('#div4').show();
    $('#s2').hide();
    $('#b2').hide();
    $('#s3').show();
    $('#b3').show();
}
function nextvo2(el){
    $('#div4').hide();
    $('#div5').show();
    $('#s3').hide();
    $('#b3').hide();
    $('#s4').show();
    $('#b4').show();
}
function nextvo3(el){
    $('#div5').hide();
    $('#div6').show();
    $('#s4').hide();
    $('#b4').hide();
    $('#s5').show();
    $('#b5').show();
}
function nextvo4(el){
    $('#div6').hide();
    $('#div7').show();
    $('#s5').hide();
    $('#b5').hide();
    $('#s6').show();
    $('#b6').show();
}
function nextvo5(el){
    $('#div7').hide();
    $('#div8').show();
    $('#s6').hide();
    $('#b6').hide();
    $('#s7').show();
    $('#b7').show();
}
function nextvo6(el){
    $('#div8').hide();
    $('#div9').show();
    $('#s7').hide();
    $('#b7').hide();
    $('#s8').show();
    $('#b8').show();
}
function nextvo7(el){
    $('#div9').hide();
    $('#div10').show();
    $('#s8').hide();
    $('#b8').hide();
    $('#s9').show();
    $('#b9').show();
}
function nextvo8(el){
    $('#div10').hide();
    $('#div11').show();
    $('#s9').hide();
    $('#b9').hide();
    $('#s10').show();
    $('#b10').show();
}
function endd(e){
    $('#s10').hide();
    $('#b10').hide();
    $('#div11').hide();
    $('.clas11').show();
    $('#wduv').show();
    $('#divi').show()
    var k1 = document.getElementById('s1').value;
    var k2 = document.getElementById('s2').value;
    var k3 = document.getElementById('s3').value;
    var k4 = document.getElementById('s4').value;
    var k5 = document.getElementById('s5').value;
    var k6 = document.getElementById('s6').value;
    var k7 = document.getElementById('s7').value;
    var k8 = document.getElementById('s8').value;
    var k9 = document.getElementById('s9').value;
    var k10 = document.getElementById('s10').value;
    var d1 = document.getElementById('j1');
    var d2 = document.getElementById('j2');
    var d3 = document.getElementById('j3');
    var d4 = document.getElementById('j4');
    var d5 = document.getElementById('j5');
    var d6 = document.getElementById('j6');
    var d7 = document.getElementById('j7');
    var d8 = document.getElementById('j8');
    var d9 = document.getElementById('j9');
    var d10 = document.getElementById('j10');
    d1.textContent = '1 Вопрос: '+k1;
    d2.innerHTML = '2 Вопрос: '+k2
    d3.innerHTML = '3 Вопрос: '+k3;
    d4.innerHTML = '4 Вопрос: '+k4;
    d5.innerHTML = '5 Вопрос: '+k5;
    d6.innerHTML = '6 Вопрос: '+k6;
    d7.innerHTML = '7 Вопрос: '+k7;
    d8.innerHTML = '8 Вопрос: '+k8;
    d9.innerHTML = '9 Вопрос: '+k9;
    d10.innerHTML = '10 Вопрос: '+k10;
    }
    YaGames
    .init()
    .then(ysdk => {
        console.log('Yandex SDK initialized');
        window.ysdk = ysdk;
    });