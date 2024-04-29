
$(document).ready(function () {
    //ローディング画面
    $(window).on('load', function () {
        $('.loader--bg').delay(3000).fadeOut(600);
    });
    //強制的にローディング画面をフェードアウト    
    setTimeout(function () {
        $('.loader--bg').fadeOut(600);
    }, 3000);

    $(window).on('scroll', function () {
        let color = $('.header').outerHeight();
        if($(this).scrollTop() > color) {
            $('.header').addClass('color--change');
        } else {
            $('.header').removeClass('color--change');
        }
    });

    //navタグ押したときの動き
    $('.nav__item a[href*="#"]').click(function () {
        let href = $(this).attr('href'); //リンクされているエリアidの値を取得
        let position = $(href).offset().top;  //idの上部の距離を取得
        $('body,html').animate({ scrollTop: position }, 300); //取得した位置にスクロール。
        return false;
    });

    //ハンバーガーボタンをクリックしたときの動き
    $('.hamburger__btn').click(function () {
        $('.hamburger__btn , .js-nav').toggleClass('active');
    });

    //SP時のnavタグ押したときの動き
    $('.js-nav__item a[href*="#"]').click(function () {
        $('.hamburger__btn , .js-nav').removeClass('active');
    });

    //スクロールしたときのページトップボタンの動き
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) {
            $('.pagetop__btn').fadeIn().css('display', 'block');
        } else {
            $('.pagetop__btn').fadeOut();
        }
    });

    //ページトップボタン押したときに戻る動き
    $('.pagetop__btn').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    //スクロールすると要素が下からふわっと
    $(window).on('scroll', function () {
        $('.skills__item').each(function () {
            let element = $(this).offset().top -50;//.skills__itemのウィンドウからの高さを取得
            let scroll = $(window).scrollTop();// スクロールした量を取得
            let wHeight = $(window).height();//ウィンドウの高さを取得
            if (scroll > element - wHeight + 100) {
                $(this).addClass('fadein');
            } else {
                $(this).removeClass('fadein');
            }
        });
    });
});