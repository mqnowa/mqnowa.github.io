---
title: "Map データ相互変換ツール（業務）"
description: "SEMI E142 XML 形式のMap（半導体の良/不良情報）を、装置専用形式に変換/逆変換するHTMLツール。"
image: "./e142_to_equipment_map.jpg"
startDate: "2026-7-1"
endDate: "2026-8-1"      # Optional (omit for ongoing)
skills: ["Javascript", "HTML"]
# demoLink: "https://demo.example.com"    # Optional
# sourceLink: "https://source.example.com"    # Optional
---

標準規格のSEMI E142から必要な情報を抽出し、装置独自形式のテキストファイルに変換するツールを、HTMLとJavascript を用いて作成した。

> Map: 半導体（IC）の製造工程において、円形のシリコンウェハ上の各チップの状態を2次元で可視化したデータのこと。
>
> SEMI E142: Map の標準規格

工場で装置を扱う技術者でも使えるツールにするため、Python や PowerShell などではなく、 HTML と Javascript を用いた。