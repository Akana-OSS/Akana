import urllib.request, re, os

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

ROOT = r"C:\Users\alptekin\Projeler\Kern"
OUT = os.path.join(ROOT, "assets", "fonts")
os.makedirs(OUT, exist_ok=True)

families = {
    "SpaceGrotesk": "Space+Grotesk:wght@500;700",
    "Inter": "Inter:wght@400;500;600",
    "JetBrainsMono": "JetBrains+Mono:wght@400;500",
}
want = {"latin", "latin-ext"}
faces = []

for _key, spec in families.items():
    url = f"https://fonts.googleapis.com/css2?family={spec}&display=swap"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    css = urllib.request.urlopen(req, timeout=30).read().decode("utf-8")
    parts = re.split(r'/\*\s*([\w-]+)\s*\*/', css)
    for i in range(1, len(parts), 2):
        subset = parts[i].strip()
        block = parts[i + 1]
        if subset not in want:
            continue
        fam = re.search(r"font-family:\s*'([^']+)'", block)
        w = re.search(r'font-weight:\s*(\d+)', block)
        u = re.search(r'url\((https://[^)]+\.woff2)\)', block)
        rng = re.search(r'unicode-range:\s*([^;]+);', block)
        if not (fam and w and u and rng):
            continue
        fn = f"{_key}-{w.group(1)}-{subset}.woff2"
        dst = os.path.join(OUT, fn)
        req2 = urllib.request.Request(
            u.group(1),
            headers={"User-Agent": UA, "Referer": "https://fonts.googleapis.com/"})
        data = urllib.request.urlopen(req2, timeout=30).read()
        with open(dst, "wb") as f:
            f.write(data)
        faces.append((fam.group(1), w.group(1), subset, fn, rng.group(1).strip()))
        print("saved", fn, len(data), "bytes")

css = []
for fam, w, subset, fn, rng in faces:
    css.append(
        "@font-face {\n"
        f"  font-family: '{fam}';\n"
        "  font-style: normal;\n"
        f"  font-weight: {w};\n"
        "  font-display: swap;\n"
        f"  src: url('fonts/{fn}') format('woff2');\n"
        f"  unicode-range: {rng};\n"
        "}\n")
with open(os.path.join(ROOT, "assets", "fonts.css"), "w", encoding="utf-8") as f:
    f.write("\n".join(css))
print(f"\nWrote fonts.css with {len(faces)} @font-face rules")
