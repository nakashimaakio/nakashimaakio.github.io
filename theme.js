// テーマ切り替え（light / dark を data-theme で強制、auto は OS 設定に追従）
(function () {
    var root = document.documentElement;
    var KEY = 'theme';
    var buttons = document.querySelectorAll('.theme-switch button');
    function apply(v) {
        if (v === 'light' || v === 'dark') root.setAttribute('data-theme', v);
        else root.removeAttribute('data-theme');
        buttons.forEach(function (b) {
            b.setAttribute('aria-pressed', String(b.dataset.themeSet === (v || 'auto')));
        });
    }
    var saved;
    try { saved = localStorage.getItem(KEY); } catch (e) { }
    apply(saved || 'auto');
    buttons.forEach(function (b) {
        b.addEventListener('click', function () {
            var v = b.dataset.themeSet;
            try {
                if (v === 'auto') localStorage.removeItem(KEY);
                else localStorage.setItem(KEY, v);
            } catch (e) { }
            apply(v);
        });
    });
})();
