# About
React Three Fiberを使ったデモアプリケーションです。

https://spoon-inoue.github.io/r3f-demo/

# How to create
Viteでプロジェクトを作成して、GitHub Pageに公開する手順です。

## 🪶Template
ViteのReactテンプレートを使用します。<br>
ターミナル（コマンドプロンプト）で以下を実行します。
```
npm create vite@latest <project name> -- --template react-ts
```
`<project name>`：任意（GitHub作成するリポジトリ名にすると混乱がないと思います）

## 🪶Install
### Three.js関連
```
npm i three @react-three/fiber @react-three/drei
```
```
npm i -D @types/three
```

### Styling
```
npm i @emotion/css
```

### Animation
```
npm i gsap
```

### Deploy
```
npm i -D gh-pages
```

## 🪶ファイルの書き替え
設定を追加します。

### package.json
```.json
"homepage": "https://<user name>.github.io/<project name>/",

"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
},
```

### vite.config.ts
```.ts
export default defineConfig({
  base: '/<project name>/'
})
```

## 🪶GitHubへの登録 / 公開
VSCodeのターミナルから、localhostで正常に起動するか確認します。

### リポジトリの登録
`<project name>`のリポジトリを作成して、コミットします。

### GitHub Pages
問題なくコミットできたら、ターミナルで以下を実行してGitHub Pagesに公開します。
```
npm run deploy
```
公開される`url`は、`package.json`に追加した`homepage`になります。
