var imgList = [
    'img/bj01.png',
    'img/load01.png',
    'img/load02.png',
    'img/loading01.png',
    'img/man01.png',
    'img/man02.png',
    'img/women.png',
]
var timer = null;
function man(that) {
    var that = that;
    timer = setInterval(function () {
        that.manRun = !that.manRun;
    },200)
}
function load(data,that) {
    var list = data,
        maxLen = data.length,
        len = 0;
    var timer1 = setInterval(function () {
        var starImg = new Image();
        starImg.src = data[len];
        starImg.onload = function () {
            len++;
        }
        if(len/maxLen<1){
            var length = parseInt(len/maxLen*100)+'%';
            console.log(length)
            $('#load02').css('height',length);
            if(parseInt(len/maxLen*100)>5){
                var l = 5*(len/maxLen);
                $('.man').css({
                    '-webkit-transform': 'translateY('+l+'rem)',
                    '-moz-transform': 'translateY('+l+'rem)',
                    '-ms-transform': 'translateY('+l+'rem)',
                    '-o-transform': 'translateY('+l+'rem)',
                    'transform': 'translateY('+l+'rem)'
                })
            }
        }else{
            $('#load02').css('height','105%');
            $('.man').css({
                '-webkit-transform': 'translateY(5rem)',
                '-moz-transform': 'translateY(5rem)',
                '-ms-transform': 'translateY(5rem)',
                '-o-transform': 'translateY(5rem)',
                'transform': 'translateY(5rem)'
            })
            setTimeout(function () {
                that.show = 2;
            },500);
            clearInterval(timer1);
            clearInterval(timer);
        }
    },100)
}