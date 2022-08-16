$(document).ready(function () {

    $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract,#modulo, #multiply, #divide, #dot, #lpara, #rpara").on('click',function () {
        $(".screen").val($('.screen').val()+$(this).html());
        
        // $(".screen").val($('.screen').val()+$(this).html());
        // var press=$(this).html();
        // console.log(press);
    })
    
    $("#equal").on('click',function() {
        $('.screen').val(eval($('.screen').val()));
    })

    $("#clear").on('click',function () {
        $(".screen").val('');
    })

    // $("#backspace")
})

