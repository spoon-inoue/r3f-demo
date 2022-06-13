# 🦌About
React Three Fiberを使ったデモアプリケーションです。

https://spoon-inoue.github.io/r3f-demo/

<img src='https://user-images.githubusercontent.com/105195761/173027703-43025da3-fc76-4805-a16e-5d3d4adb3de2.gif' width='600' />

# 📏Index
- [How to create](https://github.com/spoon-inoue/r3f-demo#how-to-create)
- [Source Code](https://github.com/spoon-inoue/r3f-demo#source-code)
- [Three.js（React Three Fiber）](https://github.com/spoon-inoue/r3f-demo#threejsreact-three-fiber)
- [Documents](https://github.com/spoon-inoue/r3f-demo#documents)


# 🪶How to create
Viteでプロジェクトを作成して、GitHub Pagesに公開する手順です。

## 🪶Template
ViteのReactテンプレートを使用します。<br>
ターミナル（コマンドプロンプト）で以下を実行します。
```
npm create vite@latest <project name> -- --template react-ts
```
`<project name>`：任意（GitHubに作成するリポジトリ名と同じにすると混乱がないと思います）

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

## 🪶設定の追加
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

# 🦈Source Code
ソースコードについて簡単に説明します。

## 🦈フォルダ構成
- コンポーネントは、`src/componrnts`配下に置きます。<br>
- 特に、Three.jsに関連するものは、`src/componrnts/three`配下に置きます。<br>
- 汎用的に使用できるモジュールは、`src/modules`配下に置きます。<br>
- 型定義ファイルは、`src/types`配下に置きます。（ただし、コンポーネントの型定義などのスコープがそのファイル内で完結するものは、そのファイル内に記述しています）

## 🦈Styling
グローバルな記述は、`index.css`をそのまま使っています。<br>
コンポーネントに依存したスタイルは、`emotion/css`を使用してコンポーネントファイル（`.tsx`）内に記述しています。

## 🦈assets
画像や3Ｄモデルデータは、`public/assets/`配下に置きます。<br>
ですが、そのまま参照すると公開先では読み込めないため、以下の処理を追加します。<br>
`src/modules/utils.ts`
```.ts
export const publicPath = (path: string) => {
  path.startsWith('/') && (path = path.substring(1))
  return import.meta.env.BASE_URL + path
}
```
使い方（`src/components/App.tsx`）
```.tsx
<LinkIconButton
  imagePath={publicPath('/assets/icons/github.svg')}
  linkPath="https://github.com/spoon-inoue/r3f-demo"
/>
```

## 🦈LinkIconButton
追加すると、画面の右下にアイコンボタンを追加できます。私は、アプリケーションを見た方が「リポジトリを参照したい」という場合の誘導に使っています。<br>
実装では、意図的に`emotion/css`を使用していません。ライブラリに依存させず、他のリポジトリでも使えるように汎用的なコンポーネントにしています。

# 🐋Three.js（React Three Fiber）
語ると長くなるので、簡単に書きます。

## 🐋開発効率
React Three Fiber（R3F）は、vanillaのThree.jsと比べて記述するコードの量が格段に違います。<br>
そして、Three.jsをラッパーしたライブラリなので、R3FでできることはThree.jsでもできます。つまり、試作はR3Fで行って、実用上ではvanillaのThree.jsといった運用ができます。

## 🐋エコパッケージ
R3Fは、パッケージ分割されています。基本的な機能は、`@react-three/fiber`から提供されています。<br>
Three.jsの組み込みクラスなどを便利に使えるようにしたパッケージが、`@react-three/drei`です。Dreiは、ほぼ必須になります。<br>
他にも、物理シミュレーションをするための`@react-three/cannon`などがあります。<br>
また、開発元の`Pmndrs`（ポイマンドラス）から、状態管理ライブラリである`Zustand`や`Valtio`が提供されています。

## 🐋アニメーション
GSAPが使えます。

# 📄Documents
- [Vite](https://ja.vitejs.dev/)
- [React](https://ja.reactjs.org/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [React Three Drei](https://github.com/pmndrs/drei#readme)
- [Emotion](https://emotion.sh/docs/introduction)
- [GSAP](https://greensock.com/gsap/)
- [gh-pages](https://github.com/tschaub/gh-pages)
