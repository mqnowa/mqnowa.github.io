---
title: "Gemini DL"
description: "Gemini で作成した画像をまとめてダウンロードする Chrome 拡張機能"
image: "./gemini-dl.jpg"
startDate: "2026-3-26"
endDate: "2026-6-13"      # Optional (omit for ongoing)
skills: ["Antigravity", "Agent Driven Development", "Javascript", "HTML", "CSS"]
# demoLink: "https://mqnowa.github.io/"    # Optional
sourceLink: "https://github.com/mqnowa/GeminiMystuffDL"    # Optional
---

Gemini の画像生成では、

- 一覧ページからダウンロードすると低画質
- 個別チャットでダウンロードすると高画質

といった仕様が存在する。

この仕様を回避し、一覧ページからまとめて高画質でダウンロードしたいという思いを叶える拡張機能。

基本的なロジックは以下の通り。

1. 一覧ページを開いた際に、API通信をインターセプトし、各画像のIDを取得
1. 一括ダウンロードが実行されたら、IDを元にURLを生成し、バックグラウンドで開く
1. バックグラウンドで開かれたタブ上で、「高画質でダウンロード」ボタンをクリック
1. 高画質画像が生成され、自動的にダウンロードされるのでこれをインターセプト
1. ID を元にわかり易い名前をつけ、これを保存

上記ロジックは自分で考え、実装は Antigravity を使用して Gemini に書いてもらいました...