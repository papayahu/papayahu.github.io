var a_idx = 0;

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
    //return "rgb(72,85,137)"
}
jQuery(document).ready(function($) {


    $("body").click(function(e) {
        var a = new Array("閱讀","剪輯","慢跑","合唱","游泳","創作","說唱","電子","流行","原聲帶","搖滾","爵士","國風","民謠","輕音樂","朋克","鄉村","藍調","另類","獨立","新世紀","金屬","慢搖");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 25,
            "left": x,
            "position": "absolute",
            "font-weight": "bolder",
            "color": randomColor
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
    });
});