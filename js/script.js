$(function () {

    //ページ内スクロール
    var navHeight = $(".header").outerHeight();

    $('a[href^="#"]').on("click", function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate({ scrollTop: position, }, 300, "swing");
        return false;
    });

    //ページトップ
    $("#js-page-top").on("click", function () {
        $("body,html").animate({ scrollTop: 0, }, 300);
        return false;
    });
});

$(function(){
    $('#skill-item-movie a').on('click' , function(e){
        e.preventDefault();//リンクの停止
        $(this).parent().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/JHkcjIRlQJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
});

//$(function(){
//    var effect_pos = 3; // 画面下からどの位置でフェードさせるか(px)
//    var effect_move = 10; // どのぐらい要素を動かすか(px)
//    var effect_time = 500; // エフェクトの時間(ms) 1秒なら1000
//
//    // フェードする前のcssを定義
//    $('.scroll-fade').css({
//        opacity: 0,
//        transform: 'translateY('+ effect_move +'px)',
//        transition: effect_time + 'ms'
//    });
//
//    // スクロールまたはロードするたびに実行
//    $(window).on('scroll load', function(){
//        var scroll_top = $(this).scrollTop();
//        var scroll_btm = scroll_top + $(this).height();
//        effect_pos = scroll_btm - effect_pos;
//
//        // effect_posがthis_posを超えたとき、エフェクトが発動
//        $('.scroll-fade').each( function() {
//            var this_pos = $(this).offset().top;
//            if ( effect_pos > this_pos ) {
//                $(this).css({
//                    opacity: 1,
//                    transform: 'translateY(0)'
//                });
//            }
//        });
//    });
//
//    window.onload = function(){
//
//        //画像を配列に格納
//        var images =[
//                     'url(img/top_remake.jpg)',
//                     'url(img/top_ec_remake.jpg)',
//                    ]
//
//        //要素をHTMLから取得
//        //画像
//        var target = document.getElementById('slide');
//        //>,<
//        var right = document.getElementById('right');
//        var left = document.getElementById('left');
//
//
//        //クリックしたときに変わるようにカウント変数
//        var count = 0;
//
//        //クリックしたら画像変更
//        function change(){
//            target.style.backgroundImage = images[count];
//        }
//
//        //>をクリックしたらcountを+1する
//        function goNext(){
//            if(count == 2){
//                count = 0;
//            }else{
//                count++;
//            }
//            change();
//        }
//
//        //<をクリックしたらcountを-1する
//        function goBack(){
//            if(count == 0){
//                count = 2;
//            }else{
//                count--;
//            }
//            change();
//        }
//
//        //クリックイベント
//        right.addEventListener('click',goNext,false);
//        left.addEventListener('click',goBack,false);
//    };
//});
