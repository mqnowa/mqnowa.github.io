---
title: "テキストログExcel変換（業務）"
description: "テキスト形式のログをExcelに変換するプログラム"
image: "https://api.dicebear.com/9.x/glass/svg?seed=asciilog2excel"
startDate: "2025-8-1"
endDate: "2026-1-30"      # Optional (omit for ongoing)
skills: ["Python", "openpyxl", "GoLang", "excelize"]
# demoLink: "https://demo.example.com"    # Optional
# sourceLink: "https://source.example.com"    # Optional
---

テキスト形式のログをExcelに変換するプログラム。

***「テストのフェーズが進行するにつて、ログファイルが巨大化し、既存の変換ツールでは変換に時間がかかる」***

といった課題に対して、

- ログパーサーの再設計
- pandasテーブルを用いたメモリの効率化
- Python - openpyxl ではなく、Go - excelize を採用し、Excel出力の高速化
- python → Go のデータ受け渡しは、parquetを用いてIOを最小限に

等、変換ツールを一から見直して、高速化を達成した。

---

新しい変換ツールの完成後は、その改修に従事し、現在に至る。

ログ出力の仕様書などは無いため、未知の記述が現れる度に改修を行うなどした。