# 開発ガイド (Development Guide for Cursor / Sol)

このドキュメントは **Sol（Cursor AI） と開発を進める際に認識がブレないための「共通ルール」** です。
すべての開発タスクで、このガイドに従うこと。

---

## ✅ プロジェクト概要

Versea — ポートフォリオ／事業サイト  
目的：**問い合わせ（仕事依頼）を獲得するためのHP**

使用技術：
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript
- SVG assets

---

## ✅ 開発の原則

1. **スケルトン → 肉付け → UI調整 → アニメーション → デプロイ** の順で進める
2. ファイルは *役割ごとに分ける*（コンポーネントは1セクション＝1ファイル）
3. `export default function` は **1ファイルにつき1つだけ**
4. UI修正は *既存コードに追記せず、該当箇所のみ変更する*
5. 既存のUI構造を壊さないこと

**Solへの禁止事項：**
- 既存コンポーネントの重複作成
- 構造の書き換え
- inline-style の大量生成

---

## ✅ ディレクトリ構造（固定）

```
src/
 ├ app/
 │ ├ layout.tsx
 │ ├ page.tsx
 │ └ globals.css
 └ components/
     ├ Hero.tsx
     ├ WhatWeDo.tsx
     ├ Portfolio.tsx
     ├ About.tsx
     ├ Process.tsx
     ├ Contact.tsx
     └ Footer.tsx
```

コンポーネントの配置を **変えない**。

---

## ✅ Tailwind + Motion のルール

**全セクションは motion.div で包むこと。**

共通アニメーション：

```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
viewport={{ once: true }}
```

---

## ✅ 修正指示の例（Solへの指示テンプレ）

### Bad:
> Heroを書き換えて

理由：認識が曖昧になる

### ✅ Good:
```
Hero.tsx 内の h1 タグの文字サイズだけを xl → 4xl に変更。
他の処理は変更しない。
```

### ✅ Good（レイアウト変更）
```
Portfolio.tsx のカードを grid-cols-2 → grid-cols-1 に変更。
他のUIは編集しない。
```

---

## ✅ コミットメッセージのルール

```
feat: 新しいコンポーネントの追加
fix: バグ修正
refactor: コードの改善（UI変更なし）
style: スタイルのみ編集（Tailwindのみ）
deploy: デプロイに関する変更
```

例：

```
feat: add animation to Hero section
fix: remove duplicate default export in About.tsx
```

---

## ✅ 最後に

Solは優秀だけど、「曖昧な依頼」が最大のバグ原因です。  
**目的・対象ファイル・変更範囲** を常に明確にすること。

---

Develop with precision.
Let's build Versea, beautifully.
