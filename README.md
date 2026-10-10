# SECOND SIGHT

**左右2枚のランダムドット・モザイクを立体視すると、隠れた文字や図形が浮かび上がるPWAです。**

[アプリを開く（GitHub Pages）](https://masato-nasu.github.io/SECIND-SIGHT/)

## 機能

- 文字、図形（ハート・星・円・同心円・ひし形）、手描き、画像から立体視モザイクを生成
- **交差法（寄り目） / 平行法（遠くを見る）の切り替え**
- 立体の強さ、モザイクの粒、色の変更
- **左眼用 L / 右眼用 R を個別にPNG保存**（各720×450）
- **左右2枚セットをPNG保存**（1600×900）
- 元の形をPNG保存
- PC・スマートフォン対応、PWAとしてホーム画面に追加、キャッシュによるオフライン起動

L/Rは画面の左右位置ではなく、**左眼用・右眼用**です。交差法では画面の左右を入れ替えます。

## 使い方

1. 隠したい文字・図形・画像を選ぶ
2. 交差法または平行法を選ぶ
3. 左右のモザイクを視線で重ねる
4. 必要ならL/Rを別々にPNG保存する

## GitHub Pages

リポジトリの **Settings → Pages → Build and deployment → Source → GitHub Actions** を選択してください。
`.github/workflows/deploy.yml` がpush時に公開を実行します。

## ローカル実行

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開いてください。PWAのインストールとService WorkerにはHTTPSまたはlocalhostが必要です。

生成はブラウザ内で完結し、入力した画像をサーバーへ送信しません。

**v0.9**
