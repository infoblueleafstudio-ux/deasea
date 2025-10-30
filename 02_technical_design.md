# 技術設計 (Technical Design)

## 🏗 使用技術
| 役割 | 技術 |
|------|------|
| Front-end Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Deployment | Vercel |
| Version Control | GitHub |

---

## 📁 ディレクトリ構造

```
src/
 ├ app/
 │ ├ page.tsx
 │ ├ layout.tsx
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

---

## 🧩 セクション共通ルール
- 全セクション `motion.div` でアニメーションを適用
- 共通アニメーション：

```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
viewport={{ once: true }}
```

---

## 🌐 デプロイ
- GitHub push → Vercel auto deploy

---

## 🔒 命名規則
- default export は **ファイルにつき1つ**
