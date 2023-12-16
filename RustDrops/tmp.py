with open("RustDrops.md") as f:
    f.readline()
    while True:
        line = f.readline()
        if not line:
            break

        if line.startswith("###"):
            print(line[4:-1])
        elif line.startswith("#"):
            print(line[2:-1])
        elif line.startswith("|"):
            