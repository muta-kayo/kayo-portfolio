
$(document).ready(function () {
    //一定の高さまでスクロール後ヘッダーの背景色変更
    $(window).on('scroll', function () {
        if ($('.kv__top').height() < $(this).scrollTop()) {//スクロール量が.kv__topの領域を超えたら
            $('.header').addClass('change-color')
            $('.header__btn').addClass('open');
        } else {
            $('.header').removeClass('change-color')
            $('.header__btn').removeClass('open');
        }
    });

    //KVのテキストスライド
    $(window).on('scroll', function () {
        const headerH = $('.header').outerHeight();//.headerの外側の高さまでを取得
        if ($(this).scrollTop() > headerH) {
            $('.kv__title').addClass('anime');
        }
    });

    // aboutの下からフェードイン
    $(window).on('scroll', function () {
        $('.about__text').each(function () {
            const cntPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > cntPos - windowHeight + 100) {
                $(this).addClass('fadein');
            }
        });
    });

    //Trainerのタブ切り替え
    $('.tab').on('click', function () {
        $('.tab, .panel__area').removeClass('active');
        $(this).addClass('active');
        const index = $('.tab').index(this);
        $('.panel__area').eq(index).addClass('active');
    });

    //アコーディオンメニュー
    $('.question').on('click', function () {
        $(this).next().slideToggle(300);
        $(this).toggleClass('open', 300);
    });

    //スライドショー
    $('.slider').slick({
        autoplay: true, // 自動でスクロール
        autoplaySpeed: 0, // 切り替わってから次に動き出すまでの時間
        speed: 10000, // スライドが流れる速度を設定
        cssEase: "linear", // スライドの流れ方を等速に設定
        slidesToShow: 2, // 表示するスライドの数
        swipe: false, // 操作による切り替えはさせない
        arrows: false, // 矢印非表示
        pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
        pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1, // 画面幅750px以下でスライド1枚表示
                }
            }
        ]
    });
});

