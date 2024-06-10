# kayo-portfolio
 牟田佳代のポートフォリオサイトです。
 JavaScript、jQueryを使用しており、レスポンシブ対応しているのでスマホからもご確認いただけます。全てデザインカンプからのコーディングをしており、デザインカンプはAdobeXDとFigmaを使用しました。
 AWSのRoute 53にてドメインを取得、SSL証明書を発行後、CloudFrontを利用してサーバーアップを行いました。
 <br>

 <img width="1400" alt="" src="./img/kayo portfolio_img.png">

 # URL
 https://kayo-muta.com/

 # 使用技術
- JavaScript
- jQuery
- AWS
  - Route53

<img width="995" alt="" src="./readme_img/Diagram.png">

 # 実装内容
 Productsには<br>
 1.自身のポートフォリオサイト<br>
 2.8ページの架空WEBサービス会社サイト<br>
 3.架空ジムサイト<br>
 の3つをのせています。

 それぞれのサイトで違う動きを取り入れることを意識して制作しました。


## 1.自身のポートフォリオサイト
- ローディング画面
- ハンバーガーメニュー
- フェードイン
- TOPに戻るボタン
- スクロールするとヘッダーを固定


#### こだわった点
1.ローディング画面
間差で正方形が回るように動きをつけ、ローディングに時間がかかった場合、
離脱率を上げないよう一定の時間で強制終了させるようにしました。

<img width="450" alt="" src="./readme_img/loading.png">

2.awsを利用することで、SSL証明書を取得しHTTPS化、セキュリティーの強化を行いCloudFrontを使い静的ウェブコンテンツの配信を高速化しました。

デザインカンプはAdobeXDを使用。


## 2.8ページの架空WEBサービス会社サイト
- ハンバーガーメニュー
- TOPに戻るボタン
- スクロールするとヘッダーを固定
- スクロールダウン
- Googleマップの挿入
- YouTubeの挿入
- スライドショー
  - swiper

#### こだわった点
1.スライドショーでswiperの実装
  position: absoluteでスライドショーと背景の前後関係を作りスライドショーに目がいくような
  レイアウトにし、画面サイズが変わっても崩れが起きないように気を付けました。
  一定時間で画像がスライドしたり矢印を押すことで好きなタイミングで切り替わるようにしました。

<img width="450" alt="" src="./readme_img/swiper.png">

2.スクロールダウン

<img width="250" alt="" src="./readme_img/scroll.png">

　デザインカンプはAdobeXDを使用。


## 3.架空ジムサイト
- テキストがスライドで表示
- フェードイン
- TOPに戻るボタン
- スクロールするとヘッダーを固定
- タブ切り替え
- アコーディオンメニュー
- スライドショー
  - slick

#### こだわった点
1.slickの実装
　2つ目の8ページの架空WEBサービス会社サイトと違うプラグインを使用したいと思いslickを
　実装しました。こちらはループ再生にしスタジオの雰囲気などが感じられるようにしました。

<img width="450" alt="" src="./readme_img/slick.png>

2.テキストがスライドで表示

<img width="450" alt="" src="./readme_img/text.png>

3.タブ切り替え

<img width="450" alt="" src="./readme_img/tab.png>

4.アコーディオンメニュー

<img width="450" alt="" src="./readme_img/accordion.png">

  デザインカンプはFigmaを使用。

※共有のためにまとめてデプロイしています。