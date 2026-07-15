/* Shared light/dark toggle for gallery + component demos.
   Expects #theme-btn with a .ak-icon child. Storage key: akana-theme. */
(function () {
  "use strict";
  function isDarkNow() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t === "dark") return true;
    if (t === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function apply(theme) {
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    var btn = document.getElementById("theme-btn");
    if (!btn) return;
    var icon = btn.querySelector(".ak-icon");
    var dark = theme
      ? theme === "dark"
      : isDarkNow();
    if (icon) icon.setAttribute("data-icon", dark ? "sun" : "moon");
    var label = dark ? " Light " : " Dark ";
    // last text node or rebuild label after icon
    var nodes = btn.childNodes;
    var textNode = null;
    for (var i = nodes.length - 1; i >= 0; i--) {
      if (nodes[i].nodeType === 3) {
        textNode = nodes[i];
        break;
      }
    }
    if (textNode) textNode.textContent = label;
    else btn.appendChild(document.createTextNode(label));
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    if (window.akana && typeof window.akana.mount === "function") {
      window.akana.mount(btn);
    }
  }
  function wire() {
    var btn = document.getElementById("theme-btn");
    if (!btn || btn.dataset.themeWired) return;
    btn.dataset.themeWired = "1";
    btn.addEventListener("click", function () {
      var next = isDarkNow() ? "light" : "dark";
      try {
        localStorage.setItem("akana-theme", next);
      } catch (e) {}
      apply(next);
    });
    var saved = null;
    try {
      saved = localStorage.getItem("akana-theme");
    } catch (e) {}
    if (saved === "light" || saved === "dark") apply(saved);
    else apply(null);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
  window.akanaTheme = { apply: apply, wire: wire };
})();
