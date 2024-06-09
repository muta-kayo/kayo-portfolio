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

## 1.自身のポートフォリオサイト
- ローディング画面
- ハンバーガーメニュー
- フェードイン
- TOPに戻るボタン
- スクロールするとヘッダーを固定


#### 工夫・こだわった点
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

#### 工夫・こだわった点
1.スライドショーでswiperの実装


<img width="450" alt="" src="./readme_img/swiper.png">

  デザインカンプはAdobeXDを使用。


## 3.架空ジムサイト
- フェードイン
- TOPに戻るボタン
- スクロールするとヘッダーを固定
- タブ切り替え
- アコーディオンメニュー
- スライドショー
  - slick

  デザインカンプはFigmaを使用。

※共有のためにまとめてデプロイしています。