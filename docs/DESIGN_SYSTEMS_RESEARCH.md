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
- Font “netlik” için kullanıcı tercihi: sadece lisans dosyası mı, yoksa IBM Plex geçişi mi?  
- Subagent dalga-1 (SQ1/SQ2/SQ5) arka planda; bu rapor birincil kaynaklarla tamamlandı — subagent özetleri gelirse eklenir.

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

---

## RACE / FACT kontrol

- [x] Claim’ler birincil veya A/B kaynaklı  
- [x] Font lisansları raw LICENSE ile doğrulandı  
- [x] Çelişki belirtildi (Material motion/color vs Kern)  
- [x] Kern çıkarımları mevcut kodla hizalı  
- [ ] Subagent secondary synthesis (opsiyonel merge)
