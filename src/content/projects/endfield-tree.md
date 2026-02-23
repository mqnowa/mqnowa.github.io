---
title: "Endfield Tree"
description: "ゲームのアイテム製作ツリーマップ生成器"
image: "./endfield-tree.jpg"
startDate: "2026-1-28"
endDate: "2026-1-28"      # Optional (omit for ongoing)
skills: ["Antigravity", "Agent Driven Development", "Javascript", "HTML", "CSS"]
demoLink: "https://mqnowa.github.io/endfield-tree"    # Optional
sourceLink: "https://github.com/mqnowa/endfield-tree"    # Optional
---

エンドフィールドで、目標アイテムと目標分間生産数を元に、

必要な装置や素材の数を表示してくれる Web アプリケーション。

デモでは、「完成品を選択」のプルダウンから「息壌装備部品」を選択すると分かりやすいです。

[デモはこちら](https://mqnowa.github.io/endfield-tree)

**Antigravity を使用して、私自身のコーディング作業は殆ど無しで作成しました。**

---

### より詳しい説明

エンドフィールドというゲームでは、欲しいアイテムを工場ラインで製造することができます。

計画的にラインを作成するには、

- Aを30個作るには、Bが30個、Cが30個必要

- Cを30個作るには、Dが30個必要

- ・・・

といった具合に計算が必要。

この計算を行ってくれるWebアプリケーションを作成した。