(function () {
  if (window.__recruiterStripEmailInit) {
    return;
  }
  window.__recruiterStripEmailInit = true;

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) {
      return;
    }
    var button = target.closest(".recruiter-strip__email");
    if (!button) {
      return;
    }
    var encoded = button.getAttribute("data-email-encoded") || button.textContent || "";
    var email = encoded.trim().split("").reverse().join("");
    if (email) {
      window.location.href = "mailto:" + email;
    }
  });
})();
