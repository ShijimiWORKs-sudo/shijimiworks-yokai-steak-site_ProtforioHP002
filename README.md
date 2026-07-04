# HIRAMEKI — 株式会社ヒラメキ（架空）

企画提案型コンサルティング・アトリエのポートフォリオ／コーポレートサイト。
**その手があったか、を量産する。** をコンセプトにした、架空企業のデモサイトです。

> ⚠️ これは学習・ポートフォリオ目的の**架空（フィクション）**のWebサイトです。実在の企業・団体とは関係ありません。

## コンセプト

**レトロ / Y2K・コラージュ**スタイル。白＋蛍光色（ピンク／シアン／イエロー／ライム）、
ハードシャドウ、ステッカー貼り、レトロOS風ウィンドウ、キラキラ✦、マーキーで、
「まじめ」を「たのしい」でくるんだポップな世界観。

## 特徴

- **静的サイト**（HTML / CSS / Vanilla JS）— ビルド不要
- **GSAP + ScrollTrigger** による pop-in（back.out）スクロール登場・数値カウントアップ
- **Lenis** による慣性スムーズスクロール
- レトロウィンドウUI／ステッカーコラージュ／ハードシャドウ／2重マーキー／回転チップ
- フルスクリーンの円形ワイプ・モバイルメニュー
- レスポンシブ対応・`prefers-reduced-motion` 配慮
- **アニメ／マンガ調イラスト**（CC BY 4.0）を採用 — 詳細は [CREDITS.md](CREDITS.md)

## セクション構成

| # | Section | 内容 |
|---|---------|------|
| 01 | About | 理念・信条・実績チップ |
| 02 | できること | 企画のタネ出し / 事業設計 / ブランド&コミュ / 走りながら伴走 |
| 03 | すすめかた | きく → みつける → ひらめく → みせる → うごかす |
| 04 | やったこと | 実績サンプル 6件（ステッカーカード） |
| 05 | なかま | メンバー紹介 |
| 06 | よくあるこえ | FAQ |
| — | Contact | お問い合わせフォーム（デモ） |

## ローカルでの表示

```bash
npx serve . -l 4322     # 例
# または
python -m http.server 4322
```

## 技術スタック

- HTML5 / CSS3 / JavaScript (ES6)
- [GSAP 3.12](https://gsap.com/) + ScrollTrigger（CDN）
- [Lenis 1.1](https://github.com/darkroomengineering/lenis)（CDN）
- Google Fonts: Dela Gothic One / Mochiy Pop One / Zen Maru Gothic / Bungee / Space Mono

## ファイル構成

```
hirameki/
├─ index.html        # 全コンテンツ・マークアップ
├─ css/style.css     # Y2K/レトロ・コラージュのデザイン
├─ js/main.js        # アニメーション・インタラクション
├─ assets/img/       # イラスト（CC BY 4.0 / Pepper&Carrot）
├─ CREDITS.md        # 画像・フォント・ライブラリのクレジット
├─ README.md
└─ .gitignore
```

## ライセンス

コードは MIT。画像は各作者のライセンス（[CREDITS.md](CREDITS.md) 参照）。
