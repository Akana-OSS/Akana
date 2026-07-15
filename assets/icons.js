/* ============================================================
   Kern — icons.js
   Inline SVG icon set. Text-first: icons are small, 1px-stroke,
   currentColor. No image files, no external requests.
   Use:  <span class="k-icon" data-icon="search"></span>
         or  kern.icon('arrow-right')  -> SVG string
   ============================================================ */
(function (global) {
  "use strict";

  var P = {
    "arrow-right": '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
    "arrow-left":  '<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>',
    "chevron-down":'<path d="M6 9l6 6 6-6"/>',
    "chevron-right":'<path d="M9 6l6 6-6 6"/>',
    "check":       '<path d="M20 6L9 17l-5-5"/>',
    "close":       '<path d="M18 6L6 18"/><path d="M6 6l12 12"/>',
    "search":      '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    "menu":        '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>',
    "user":        '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>',
    "mail":        '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    "info":        '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
    "warning":     '<path d="M12 3L2 20h20L12 3z"/><path d="M12 10v5"/><path d="M12 18h.01"/>',
    "document":    '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
    "filter":      '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
    "download":    '<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/>',
    "plus":        '<path d="M12 5v14"/><path d="M5 12h14"/>',
    "settings":    '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.3 1a7 7 0 0 0-1.7-1l-.3-2.6H10.4l-.3 2.6a7 7 0 0 0-1.7 1l-2.3-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 1.7 1l.3 2.6h3.2l.3-2.6a7 7 0 0 0 1.7-1l2.3 1 2-3.4-2-1.5a7 7 0 0 0 .1-1z"/>',
    "sun":         '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',
    "moon":        '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    "grid":        '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    "tag":         '<path d="M3 3h8l9 9-8 8-9-9z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
    "clock":       '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "star":        '<path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 17.8 6.7 19.6l1.1-6L3.4 9.4l6-.8z"/>'
  };

  function svg(name, size) {
    var body = P[name];
    if (!body) return "";
    var s = size || 20;
    return (
      '<svg class="k-svg" width="' + s + '" height="' + s +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true" focusable="false">' + body + "</svg>"
    );
  }

  function mount(root) {
    root = root || document;
    var els = root.querySelectorAll("[data-icon]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.dataset.kernIconDone) continue;
      var s = parseInt(el.getAttribute("data-size"), 10) || 20;
      el.classList.add("k-icon");
      el.innerHTML = svg(el.getAttribute("data-icon"), s);
      el.dataset.kernIconDone = "1";
    }
  }

  global.kern = {
    icons: function () { return Object.keys(P); },
    icon: svg,
    mount: mount
  };

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () { mount(); });
    } else {
      mount();
    }
  }
})(typeof window !== "undefined" ? window : this);
