# Design Systems — Derin Araştırma Raporu (Kern)

**Tarih:** 2026-07-15  
**Yöntem:** research-prism (çok turlu arama + birincil kaynak + sentez)  
**Kapsam:** SQ1 tarih · SQ2 felsefe · SQ3 UX etkililiği · SQ4 token mimarisi · SQ5 font lisans · SQ6 Kern çıkarımları

---

## 1. Yönetici özeti

Etkili design system’ler **ölçekte tutarlılık + ortak dil + yeniden kullanılabilir bileşenler** üretir (NN/g). Başarı görsel dilin “güzelliğinden” çok **erişilebilirlik, governance (enforcer), token katmanları ve progressive enhancement** ile ölçülür.

Kanıtı en güçlü sistemler:

| Sistem | Neden etkili (UX) | Güven |
|--------|-------------------|-------|
| **GOV.UK Design System** | Kullanıcı ihtiyacı, a11y-first, WCAG AA, progressive enhancement; yüzlerce kamu hizmeti | A (resmi prim. kaynak) |
| **Material Design** | Platformlar arası tutarlı dil; net prensipler (metafor, tipografi, motion) | A–B |
| **Atomic Design (metodoloji)** | Ortak dil (atom→sayfa); sistem düşüncesi | A (birincil kitap) |
| **Carbon / Polaris / Spectrum** | Kurumsal ölçek + design+code parity | B+ |
| **Radix / shadcn** | Erişilebilir primitifler + composition; dev DX | B+ |

**Kern’in pozisyonu:** Monochrome, text-first, zero-build, 3-katman CSS token — endüstri token standardı ve GOV.UK “simple + accessible” hattıyla **uyumlu**. Accent/color-driven Material/Fluent’den bilinçli sapıyor; bu sapma, Swiss/editorial minimal ve GOV.UK “be consistent, not uniform” ile desteklenir.

**Font sonucu:** Mevcut üç aile (Space Grotesk, Inter, JetBrains Mono) **hepsi SIL OFL 1.1**. “Daha net lisans” sorunu lisans belirsizliği değil — **repoda lisans metinlerinin ve atıf dosyalarının olmaması**.

---

## 2. Tarihsel harita (SQ1)

| Yıl | Sistem / metodoloji | Sürücü | Yaklaşım |
|-----|---------------------|--------|----------|
| 2012 | **GOV.UK Design Principles** | Kamu hizmeti, erişilebilirlik, sadelik | İlkeler → pattern → component |
| 2013 | **Atomic Design** (Brad Frost) | “Sayfa değil sistem kur” | atom → molecule → organism → template → page |
| 2014 | **Material Design** (Google) | Android + web tutarlılığı | Design language + multi-platform components |
| ~2015–17 | **Carbon, Lightning, Fluent, Polaris, Spectrum, Atlassian** | Kurumsal ölçek, multi-product | Dual design+code libraries |
| ~2018– | **Design tokens / DTCG** | Platform-agnostic kararlar | JSON tokens → transform |
| ~2020– | **Radix, Headless UI, shadcn/ui** | A11y + composition, framework-agnostic primitives | Code-first unstyled + examples |

**Material prensipleri (resmi):** (1) Material is the metaphor, (2) Bold/graphic/intentional, (3) Motion provides meaning. Kern **1 ve 3’ü bilinçli düşük tutar** (gölge/motion minimal); **2’yi tipografi+grid ile** alır.

**Atomic Design:** Kimyasal metafor — atomlar (label, icon, input) moleküllere (form field), organizmalara (header), şablonlara ve sayfalara birleşir. Kern’in “bir dosya = bir component” kuralı **atom/molecule** seviyesine oturur; page-level pattern galerisi zayıf (bilinçli MVP).

---

## 3. Felsefeler (SQ2)

| Felsefe | Çözdüğü problem | Güç | Başarısızlık modu | Kern |
|---------|-----------------|-----|-------------------|------|
| **Atomic / modular** | Parça-bütün tutarlılığı | Ortak dil, reuse | Over-taxonomy (her şey atom) | Uyumlu |
| **Token-first (prim→sem→comp)** | Hardcode drift, tema | Tek kaynak, dark mode | Aşırı component token | **Zaten var** |
| **Accessibility-first** | Dışlama, yasal risk | Gerçek kullanıcı erişimi | “AA sticker” sonrası ihmal | Kısmen (kontrast, focus) |
| **Content / editorial-first** | Dashboard gürültüsü | Okunabilirlik | Zayıf data density | **Çekirdek** |
| **Monochrome / Swiss** | Marka gürültüsü | Hiyerarşi tip+spacing | State’i sadece renkle anlatamama | **Çekirdek** |
| **Design language vs kit** | Kit = kopyala-yapıştır; language = prensip | Uzun ömür | Sadece Figma kit, kod yok | Language + HTML kit |
| **Headless / primitive** | Framework kilitlenmesi | A11y davranış reuse | Görsel tutarlılık ayrı iş | HTML/CSS, framework yok |
| **Governance / enforcer** (NN/g) | Drift, local optimization | Adoption | Ivory tower / her şeye hayır | Agent guide + CONTRIBUTING |

**Bileşenler iyi çalışan kombinasyon:**  
`token-first` + `a11y-first` + `content-first` + `atomic` + **hafif governance** (AGENTS.md, lint, icon check).

---

## 4. UX etkililiği — ne kanıtlandı? (SQ3)

### NN/g — Design Systems 101
Design system = ölçekte tasarımı yönetmek için standartlar + reusable components/patterns.  
Faydalar: hız, tutarlılık, ortak dil, silo’ları birleştirme, basit UI’yi standardize edip ekibi zor problemlere yöneltme.

### NN/g — “Your Design System Needs an Enforcer” (2026)
Sistemler **enforcement olmadan** tutarlılık vaadini tutmuyor.  
Küçük sapmalar birikir (carousel varyantları örneği).  
Enforcer: kullanım, katkı, çatışma çözümü.  
İlke: *3+ takıma yarayan değişim sisteme girer; tekil exception kalır.*

### GOV.UK
- **Principles:** Start with user needs · Do less · Design with data · Hard work to make it simple · Iterate · This is for everyone · Context · Services not websites · Consistent not uniform · Make things open · Minimise environmental impact.
- **A11y strategy:** WCAG AA baseline; progressive enhancement (semantic HTML → CSS → JS); 1/5 engelli nüfus; yüzlerce servis, milyonlarca görüntüleme.
- **Kritik ders:** *Design system kullanmak servisi otomatik erişilebilir yapmaz* — ek araştırma/test gerekir.

### Ölçüm pratikleri (endüstri)
Component adoption count, time-to-ship, design/dev ticket reduction, a11y audit regression, visual consistency score.  
(ProductBoard vb. adoption tracking — B seviye blog kanıtı.)

**Kern için UX başarı kriteri (ölçülebilir, küçük ölçek):**
1. Tüm interaktif elemanlarda `:focus-visible`
2. Light+dark’ta metin ≥4.5:1, border-strong ≥3:1
3. JS kapalıyken içerik okunabilir (progressive enhancement)
4. Her component standalone açılır, 0 console error
5. Icon set + data-icon tutarlılığı (`check_icons.js`)

---

## 5. Token mimarisi (SQ4)

**DTCG Format Module 2025.10:** Token’lar araçlar arası değişim için platform-agnostic format; W3C Community Final Spec.

**3 katman (Contentful, Penpot, endüstri standardı):**

1. **Primitive** — ham değer (`gray-200`, `space-4`)
2. **Semantic** — niyet (`--text`, `--border`, `--bg`)
3. **Component** — sadece gerekince (`--button-bg`)

**Tokens ≠ CSS variables:** Token abstract karar; CSS var web implementasyonu. Multi-platform’da Style Dictionary; **tek platform web + zero-build’de pure CSS var yeterli** (Kern doğru seçim).

**Dark mode:** Primitive sabit; **yalnızca semantic re-bind** — Kern zaten böyle.

---

## 6. Font lisansları (SQ5)

| Font | Lisans | Bundle/redistribute | Gotcha | Kaynak |
|------|--------|---------------------|--------|--------|
| **Inter** | SIL OFL 1.1 | Evet | OFL metni repoda olmalı | github.com/rsms/inter LICENSE.txt |
| **Space Grotesk** | SIL OFL 1.1 | Evet | OFL.txt upstream | floriankarsten/space-grotesk |
| **JetBrains Mono** | SIL OFL 1.1 | Evet | — | JetBrains Mono OFL.txt |
| **IBM Plex** | SIL OFL 1.1 | Evet | Reserved Font Name **“Plex”** | IBM/plex LICENSE.txt |
| **Source Sans 3** | SIL OFL 1.1 | Evet | Reserved **“Source”** | adobe-fonts/source-sans |
| **Geist** | OFL | Evet | Vercel steward | vercel/geist-font |

**OFL şartı (ortak):** Font yazılımı tek başına satılamaz; **bundle ile birlikte lisans metni** kopyalanmalı; türetilmiş isimde reserved name yasak.

**Kern gap:** `assets/fonts/` woff2 var, **OFL metni / FONTS.md / atıf yok**.

**Öneri (netlik sıralı):**
1. **P0 — Dokümantasyon (zorunlu):** `assets/fonts/LICENSE-*.txt` + `FONTS.md` (copyright + upstream URL + OFL). Mevcut trio kalır.
2. **P1 — Opsiyonel sadeleştirme:** Tek stewards ailesi — *IBM Plex Sans (UI+display weights) + IBM Plex Mono* — monochrome enterprise hissi, tek LICENSE, Reserved Name açık.
3. **Alternatif modern:** *Geist Sans + Geist Mono* — OFL, UI odaklı; display kişiliği zayıf olabilir.

---

## 7. Hangileri UX için kanıtlı “işe yaradı”?

| Yaklaşım | Kanıt | Not |
|----------|-------|-----|
| A11y embedded in components | GOV.UK, WCAG policy | En güçlü gerçek dünya kanıtı |
| Progressive enhancement | GOV.UK | JS/CSS kırılsa da form/okuma |
| Shared language (Atomic / NN/g) | Endüstri yaygın | İletişim maliyeti düşer |
| Token alias + semantic layer | DTCG + Contentful | Tema ve a11y rebind |
| Governance / enforcer | NN/g 2026 | Adoption olmadan kit çöp |
| Full Material-like elevation/color | Google ekosistemi | Kern scope dışı (bilinçli) |
| Dev-only kit, docs yok | Sık fail pattern | Kern docs güçlü tutulmalı |

---

## 8. Kern çıkarımları (SQ6)

### Doğrulanan (koru)
- Monochrome + text-first hierarchy  
- 3-layer tokens, dark = semantic only  
- Offline woff2, zero-build  
- One component per file  
- Focus ring monochrome ink  
- `prefers-reduced-motion`  
- DESIGN.md + AGENTS.md  

### Güçlendir  
1. **Font lisans netliği** — OFL dosyaları + FONTS.md  
2. **Daha fazla atom/molecule örnekleri** — form controls, navigation patterns, feedback  
3. **Progressive enhancement notları** — component sayfalarında “works without JS” (mümkün olduğunca)  
4. **State without color** — alert/toggle/badge desenlerini dokümante et (weight, border, text)  
5. **Governance** — CONTRIBUTING’de “3+ use case → system” kuralı (NN/g)  

### Ekleme (component adayları, öncelik)
| Öncelik | Component | Neden |
|---------|-----------|-------|
| P0 | `checkbox`, `radio` | Form atomları eksik |
| P0 | `textarea`, `select` | Input ailesi tamamlanır |
| P0 | `tabs` | Nav’ın sayfa-içi eşi |
| P0 | `alert` | Feedback monochrome (border+icon+text) |
| P1 | `accordion` | Disclosure pattern |
| P1 | `breadcrumb`, `pagination` | Wayfinding |
| P1 | `empty-state` | Content-first empty |
| P2 | `tooltip`, `progress`, `skeleton` | İkincil |

---

## 9. Bilgi haritası

```
Atomic Design ──destekler──▶ Component hierarchy (Kern files)
Token 3-layer ──destekler──▶ Dark mode + theming (Kern tokens.css)
GOV.UK a11y   ──destekler──▶ Focus, contrast, progressive enhancement
NN/g enforcer ──destekler──▶ AGENTS.md / CONTRIBUTING governance
Material motion ──çelişir──▶ Kern minimal motion (bilinçli)
Accent color systems ──çelişir──▶ Kern monochrome invariant
```

### Bilgi boşlukları
- Kern-scale için nicel adoption metriği yok (tek ürün/repo).
- Subagent dalga-1 tamamlandı (aşağıda merge).

---

## 11. Appendix — Subagent dalga-1 merge (SQ1 / SQ2 / SQ5)

Aşağısı paralel leaf subagent özetlerinden sentezlenmiştir; parent birincil kaynaklarla
çapraz doğrulandı. **Çelişki notu (SQ5):** subagent varsayılan önerisi “eski trio’yu
tut + OFL dosyaları ekle” (RFN yok); kullanıcı seçimi **IBM Plex** (RFN “Plex”) oldu —
uygulamada OFL metni + `FONTS.md` + unmodified bundle ile uyumlu.

### SQ1 — tarih tablosu (detay)

| Sistem | Yıl | Yaklaşım | Sürücü |
|--------|-----|----------|--------|
| Atlassian Design Guidelines | 2012 | Dual → code-coupled | Multi-product scale |
| Atomic Design | 2013 | Methodology + Pattern Lab | Systems not pages |
| Adobe Spectrum | ~2013 | Dual (CSS/React/WC) | 100+ app cohesion |
| Material Design | 2014 | Design-first → multi-platform code | Google ecosystem |
| Carbon (IBM) | 2015 | Dual + open-source | Enterprise + a11y |
| Fluent | 2017 | Dual (WinUI / Fluent UI) | Windows + Office |
| Shopify Polaris | 2017 | Dual React admin | Merchant/partner UX |
| Radix UI | 2020 | Code-first headless | A11y primitives |
| shadcn/ui | 2023 | Copy-own registry | DX + Radix a11y |

**Kern yakınlığı:** Atomic (mental model) + Radix/shadcn (ownership, a11y, minimal brand chrome)
daha yakın; full Material/Fluent elevation/color stack değil.

### SQ2 — Kern için compounding stack (subagent)

1. Monochrome + content-first  
2. Accessibility-first  
3. Token-first 3-layer CSS (DTCG *aligned*, pipeline yok)  
4. Lean language + small kit (DESIGN.md / AGENTS.md + one-file components)  

**Defer:** multi-brand theming, full DTCG transform, heavy component-token catalogs.

### SQ5 — lisans matrisi (ek)

| Font | OFL 1.1 | RFN | Not |
|------|---------|-----|-----|
| Inter | ✓ | Hayır (LICENSE) | Eski ad “Inter UI”; GF vs rsms |
| Space Grotesk | ✓ | Hayır | Florian Karsten |
| JetBrains Mono | ✓ | Hayır | Net commercial statement |
| **IBM Plex** | ✓ | **“Plex”** | **Kern v0.3 seçimi** |
| Source Sans/Code | ✓ | “Source” | Adobe |
| Geist | ✓ | Hayır | Vercel |
| Atkinson Hyperlegible | ✓ | Hayır | A11y; az weight |
| Public Sans | ✓ | Hayır | Unmaintained |
| Noto Sans | ✓ (modern) | — | Eski Apache → OFL |

**Uygulama (yapıldı):** IBM Plex Sans + Mono, `OFL-IBM-Plex.txt`, `FONTS.md`, latin/latin-ext woff2.
Türetilmiş isimlerde “Plex” kullanılmıyor (unmodified bundle).

---

## 12. Dalga 2 — SQ3 UX etkililiği + SQ4 token mimarisi

### SQ3 — Ne ölçülüyor, ne “işe yarıyor”?

#### Kanıtlı faydalar (ölçüm / gözlem)

| Claim | Kaynak | Seviye |
|-------|--------|--------|
| Tasarım görevi süresi **−34%** (Figma A/B: aynı tasarımcılar, banking-app görevleri; ceiling: sistem task-relevant) | https://www.figma.com/blog/measuring-the-value-of-design-systems/ | A |
| Form implementasyonu **−47%** dev süresi (Carbon; n=8, Sparkbox; scratch 4.2h medyan → Carbon 2.0h) | https://sparkbox.com/foundry/design_system_roi_impact_of_design_systems_business_value_carbon_design_system | B |
| Vanguard / Headspace / Swiggy zaman tasarrufları (aktarım) | Figma DS 104 metrics blog | B/C |
| athenahealth Forge: ~**100k component insertion / ay**; detachment = bug/enhancement sinyali | Figma Library Analytics interview | B+ |
| GOV.UK: yüzlerce servis, milyonlarca view; WCAG AA; progressive enhancement; **sistem ≠ otomatik erişilebilir servis** | GOV.UK a11y strategy | A |
| USWDS: erişilebilir kamu siteleri toolkit (WCAG 2.1 AA) | designsystem.digital.gov | A |
| Enforcement yoksa tutarlılık bozulur | NN/g “Needs an Enforcer” 2026 | A |
| Otomatik a11y araçları ~%30 issue yakalar (GDS 2017) | GOV.UK a11y strategy | A |

#### Subagent ek (dalga 2 leaf SQ3)

- **Enablement > pure enforcement:** docs, copy-paste, live examples; GOV.UK contribution model.
- **ROI aggregates** (yüzlerce % ROI, Lloyds vb.) çoğu **C** — primary bağlanmadıkça kullanma.
- **Kern risk:** mini-Material ansiklopedisi olmak; v0.3+ iteratif ürün. Pareto: yüksek frekans pattern’ler önce.

#### Adoption nasıl tanımlanıyor? (Omlet / Curtis / leaders)

1. **Erken aşama (binary):** Sistem *kullanılıyor mu?* Granüler metrik henüz değersiz.
2. **Olgun aşama:** *Kim, nerede, nasıl* kullanıyor? (Nathan Curtis: what → who/how → action)
3. **Doğru kullanım:** Saf count yetmez; “intended use” (PJ Onori) — quantitative + qualitative.

**Metrik seti (pratik):**

| Metrik | Ne söyler |
|--------|-----------|
| Component / token usage count | Breadth |
| Visual coverage (% UI from system) | User-facing adoption |
| Detach / override rate | Gap or bug signal |
| Legacy vs current version | Migration health |
| Docs page hits / search queries | Discoverability |
| Contribution / office hours | Community health |
| A11y audit regressions | Quality |
| Time-to-ship (feature) | Business impact |

#### Başarı faktörleri

1. **A11y embedded** (GOV.UK, USWDS) — kullanıcı etkisi doğrudan  
2. **Enforcement + contribution path** (NN/g) — “yes to the right things”  
3. **Ölç → aksiyon** (Curtis) — dashboard için dashboard değil  
4. **Basitlik** (Feo/Omlet: kill complexity) — over-engineered kit adoption öldürür  
5. **Code + design parity** — sadece Figma kit yetmez (Meta Davy Fung)  
6. **İş hedeflerine hizalama** (Dan Mall)

#### Başarısızlık modları

| Mod | Belirti |
|-----|---------|
| No enforcer | Her takım kendi varyantı |
| Overbuild | “Her senaryo için button” → kimse kullanmaz |
| Kit-only | Görsel tutarlı, davranış/a11y yok |
| Measure-only vanity | Sayı var, migration/fix yok |
| Binary adoption ignored | V1’de premature analytics |
| “Components a11y ⇒ product a11y” | GOV.UK: yanlış varsayım |

#### Kern için SQ3 çıkarımları (küçük / offline / monochrome)

1. **Binary adoption şimdilik yeterli:** `components/*.html` açılıyor mu, gallery link’leri var mı.  
2. **Ölçülebilir “UX kalitesi” proxy’leri:** contrast table (TOKENS.md), focus-visible, `check_icons.js`, lint DESIGN.md, 0 console error.  
3. **Detach analogu:** hardcoded hex/spacing = “detachment” — AGENTS kuralı + code review.  
4. **Doğru kullanım:** monochrome state (weight/border) dokümante; alert/toggle örnekleri pattern.  
5. **Enforcer:** CONTRIBUTING + AGENTS + agent skill (kern-design-system) — “3+ use case → system”.  
6. **Aşırı metrik yok:** Omlet/Figma Library Analytics ölçeği Kern için overhead.

---

### SQ4 — Token mimarisi etkililiği

#### 3-katman modeli (endüstri kanıtı)

| Katman | İsimler | Rol |
|--------|---------|-----|
| 1 | Primitive / base / global | Ham değer (`gray-200`, `#0A0A0A`) |
| 2 | Semantic / alias / decision | Niyet (`--text`, `--border`) |
| 3 | Component (ihtiyaca) | Component-scoped (`button-bg`) |

Kaynaklar: Contentful (2024), goodpractices.design, Penpot (2025), Nathan Curtis option→decision→component geleneği.

**Dark mode pattern (kanıtlanmış):** Mode = semantic rebind; primitive sabit. CSS:

```css
:root { --text: var(--gray-850); }
[data-theme="dark"] { --text: #ededed; }
```

#### Tokens vs CSS variables

| | Design tokens (DTCG/JSON) | CSS custom properties |
|--|---------------------------|------------------------|
| Rol | Platform-agnostic karar | Web implementasyonu |
| Exchange | DTCG Format 2025.10 | Tarayıcı runtime |
| Multi-platform | Style Dictionary transform | Web-only |
| Theming | Alias + modes | Cascade + `:root` / `[data-theme]` |
| Build | Genelde build gerekir | Zero-build mümkün |

Style Dictionary (resmi): token’lar *platform-agnostic input*; CSS/iOS/Android *output*. Forward-compatible with DTCG.

#### Ne zaman pipeline gerekir?

| Durum | Öneri |
|-------|--------|
| Tek platform web, offline, zero-build (Kern) | **Pure CSS 3-layer** — yeterli |
| Web + iOS + Android + Figma sync | JSON + Style Dictionary / Tokens Studio |
| Multi-brand (N brand × 1 kit) | Semantic + selective component tokens + modes |
| Tek tema, 5 component | Primitive-only bile yetebilir — semantic hâlâ a11y/tema için değerli |

**Over-engineering riski (Reddit DS community + Contentful):** component-token şişmesi, “subtle-secondary-background-hover” grid patlaması. Contentful: *design systems are as much about not defining things*.

#### Kern SQ4 kararı (doğrulandı)

| Karar | Gerekçe |
|-------|---------|
| ✅ 3-layer CSS in `tokens.css` | Endüstri standardı, dark = semantic only |
| ✅ No Style Dictionary | Tek consumer web; zero-build invariant |
| ✅ DESIGN.md SSOT + lint | Machine-readable without pipeline |
| ✅ Component tokens only as needed | Mevcut: button-like vars in components.css local `--_bg` |
| ❌ Full DTCG JSON export (şimdi) | Defer until second platform or Figma sync |

#### Subagent ek (dalga 2 leaf SQ4)

- DTCG 2025.10 = **interchange** (Final CG Report, W3C Rec track değil); browser runtime değil.
- Style Dictionary `outputReferences: true` → üretilen CSS hâlâ `var(--primitive)` zinciri tutar (AlwaysTwisted).
- Küçük/tek ürün: **component tier atlanabilir**; enterprise/multi-brand’te 3 tier.
- Pipeline eşiği: ≥2 platform, Figma→repo otomasyon, multi-brand, büyük token graph validation.

---

### Dalga 2 → SQ6 teyit

v0.3 uygulaması dalga 2 ile **çelişmiyor**:
- Yeni form components = adoption surface (binary → richer kit)
- IBM Plex OFL = license clarity (SQ5)
- Token model = SQ4 best practice for single-web
- A11y focus/contrast = SQ3 en güçlü UX kanıt hattı (GOV.UK/USWDS/NN/g)

---

## 10. Kaynaklar (seçilmiş)

| ID | Kaynak | Seviye |
|----|--------|--------|
| NN1 | https://www.nngroup.com/articles/design-systems-101/ | A |
| NN2 | https://www.nngroup.com/articles/design-system-enforcer/ | A |
| AF1 | https://atomicdesign.bradfrost.com/chapter-2/ | A |
| GOV1 | https://www.gov.uk/guidance/government-design-principles | A |
| GOV2 | https://design-system.service.gov.uk/accessibility/accessibility-strategy/ | A |
| MAT1 | https://m2.material.io/design/introduction | A |
| DTCG | https://www.designtokens.org/tr/2025.10/format/ | A |
| TOK1 | https://www.contentful.com/blog/design-token-system/ | B+ |
| TOK2 | https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/ | B+ |
| OFL-I | https://raw.githubusercontent.com/rsms/inter/master/LICENSE.txt | A |
| OFL-J | https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/OFL.txt | A |
| OFL-P | https://raw.githubusercontent.com/IBM/plex/master/LICENSE.txt | A |
| OFL-S | https://github.com/floriankarsten/space-grotesk/blob/master/OFL.txt | A |
| FIG1 | https://www.figma.com/blog/design-systems-104-making-metrics-matter/ | B+ |
| OML1 | https://omlet.dev/blog/how-leaders-measure-design-system-adoption/ | B+ |
| SD1 | https://styledictionary.com/info/tokens/ | A |
| GP1 | https://goodpractices.design/articles/design-tokens | B |
| USW1 | https://designsystem.digital.gov/documentation/accessibility/ | A |
| FIG2 | https://www.figma.com/blog/measuring-the-value-of-design-systems/ | A |
| SPB1 | https://sparkbox.com/foundry/design_system_roi_impact_of_design_systems_business_value_carbon_design_system | B |

---

## RACE / FACT kontrol

- [x] Claim’ler birincil veya A/B kaynaklı  
- [x] Font lisansları raw LICENSE ile doğrulandı  
- [x] Çelişki belirtildi (Material motion/color vs Kern; SQ5 RFN vs Plex seçimi)  
- [x] Kern çıkarımları mevcut kodla hizalı  
- [x] Dalga 2 SQ3/SQ4 parent sentezi eklendi  
- [x] Dalga 2 subagent özetleri merge edildi
