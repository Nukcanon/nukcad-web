(function () {
  if (window.__nukcadKernel) return;
  try {
    var w = new Worker(new URL("kernel.worker-C4zME92J.js", document.currentScript.src), { type: "module" });
    var q = [], err = null;
    w.onmessage = function (e) { q.push(e.data); };
    w.onerror = function (e) { e.preventDefault(); err = e.message || "error"; };
    window.__nukcadKernel = { worker: w, messages: q, error: function () { return err; } };
  } catch (e) {}
})();
