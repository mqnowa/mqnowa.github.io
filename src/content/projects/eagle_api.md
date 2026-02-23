---
title: "Eagle API"
description: "画像管理ソフトEagleの、ローカルAPI用クライアント"
image: "https://api.dicebear.com/9.x/glass/svg?seed=eagle_api"
startDate: "2022-8-1"
endDate: "2022-8-1"      # Optional (omit for ongoing)
skills: ["Python3", "requests"]
# demoLink: "https://demo.example.com"    # Optional
# sourceLink: "https://source.example.com"    # Optional
---

WebAPI クライアント。

Eagle という素材管理アプリケーションでは、localhost の WebAPI を通して

- 画像のインポート
- アイテムの取得
- メタデータの更新

などを行うことができる。

これを簡単に利用できるようにするためのPythonライブラリを自作した。