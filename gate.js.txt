/* =====================================================================
   Melipona Bacalar — site gate
   ---------------------------------------------------------------------
   This one file controls the password for the whole site.

   TO CHANGE THE PASSWORD:
     1. Open set-password.html in your browser (locally or on the site).
     2. Type the new password — it shows you a new hash.
     3. Paste that hash into MB_GATE_HASH below and commit gate.js.
     Everyone will need the new password on their next visit.

   HOW IT WORKS:
     - index.html (the cover page) asks for a password, hashes it, and
       compares it to MB_GATE_HASH. If it matches, the browser remembers
       the unlock and forwards the visitor to home.html.
     - Every other page includes this script at the very top of <head>.
       If the browser has not been unlocked, the page is hidden and the
       visitor is sent back to the cover page.
   ===================================================================== */

var MB_GATE_HASH = "62e691957932af5effc8fa77dc408c5d11e473c5c8967da7063bb32f646bbb61";
var MB_GATE_SALT = "melipona-bacalar-gate-v1";   /* leave this as-is */
var MB_GATE_KEY  = "mb_access";                  /* localStorage key   */

(function () {
  var script = document.currentScript;
  var isCover = script && script.hasAttribute("data-cover");
  if (isCover) return; /* the cover page handles its own logic */

  var unlocked = false;
  try { unlocked = localStorage.getItem(MB_GATE_KEY) === MB_GATE_HASH; } catch (e) {}

  if (!unlocked) {
    /* Hide the page immediately so nothing flashes before the redirect */
    document.documentElement.style.visibility = "hidden";
    var here = location.pathname.split("/").pop() || "";
    var back = here && here !== "index.html" ? "?return=" + encodeURIComponent(here + location.hash) : "";
    location.replace("index.html" + back);
  }
})();
