import sys

import bs4
import requests
from pyperclip import copy

    # rustlabs = sys.argv[1]
r = input("Round > ")
date = input("Date > ")
m = input("Month > ")
# rustlabsurls = input("URLs > ").split(" ")

emptys = []
aligns = []
titles = []
icons = []
groups = []
hours = []

while True:
    rustlabs = input("rustlab > ")
    if not rustlabs:
        break
    res = requests.get(rustlabs, headers={"User-Agent": ""})
    if res.status_code != 200:
        sys.stderr.write("Fetch faild.\n")
        print(res.status_code)
        sys.exit(1)
    document = bs4.BeautifulSoup(res.text, features="html.parser")
    info = document.select_one(".info-block")
    icon = info.select_one(".main-icon")
    title = info.select_one("h1")
    stats_table = document.select_one(".stats-table")

    stats_table = dict(map(lambda x: (x.select("td")[0].text, x.select("td")[1].text), stats_table.select("tr")))

    title = ("[" + title.text + "](https://steamcommunity.com/sharedfiles/filedetails?id=" + stats_table["Workshop ID"] + ")") if "Workshop ID" in stats_table else (title.text)
    icon = "[![](https:" + icon.attrs["src"] + ")](" + rustlabs + ")"

    # text = f"  |\n:-:|\n {title} |\n {icon} |\n G |\n h |"
    emptys.append("")
    aligns.append(":-:")
    titles.append(title)
    icons.append(icon)
    groups.append("")
    hours.append("2h")

text = f"""### {m}: Drops on Twitch Round {r}

{date}

| {' | '.join(emptys)} |
| {' | '.join(aligns)} |
| {' | '.join(titles)} |
| {' | '.join(icons)} |
| {' | '.join(groups)} |
| {' | '.join(hours)} |"""

print(text)
copy(text)