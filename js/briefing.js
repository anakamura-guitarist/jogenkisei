document.addEventListener('DOMContentLoaded', function() {
  
  // --- 1. MENU (ハンバーガーメニュー) ---
  const btn = document.querySelector('.menuBtn');
  const panel = document.querySelector('.menupanel');
  const links = document.querySelectorAll('.menupanel a');
  const htmlEl = document.documentElement;	

  // 要素が存在する場合のみ実行（エラー防止）
  if (btn && panel) {
    btn.addEventListener('click', function() {
      btn.classList.toggle('open');
      panel.classList.toggle('open');
		htmlEl.classList.toggle('fix');	
    });

    links.forEach(link => {
      link.addEventListener('click', function() {
        btn.classList.remove('open');
        panel.classList.remove('open');
		htmlEl.classList.remove('fix');	  
      });
    });
  }

 }
);




//フェードイン
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".fadeIn");

  const options = {
    root: null, // ビューポートを基準にする
    rootMargin: "0px", // 判定の余白（必要に応じて -10% などに調整）
    threshold: 0.3, // 要素の20%が見えたら発火
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 画面内に入ったら .is-visible を付与
        entry.target.classList.add("is-visible");
        // 一度表示されたら監視を解除（何度もフェードさせたくない場合）
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // 全てのターゲットを監視対象に追加
  targets.forEach((target) => {
    observer.observe(target);
  });
});





///
(function() {
    // メアドのアスキーコード配列
    const asciiAddress = [
        106, 111, 103, 101, 110, 107, 105, 115, 101, 105, 45, 115, 117, 112, 112, 111, 
        114, 116, 64, 106, 111, 103, 101, 110, 107, 105, 115, 101, 105, 46, 109, 104, 
        108, 119, 46, 103, 111, 46, 106, 112
    ];

    // アスキーコードを文字列に復元
    let email = "";
    for (let i = 0; i < asciiAddress.length; i++) {
        email += String.fromCharCode(asciiAddress[i]);
    }

    // HTMLにリンクを挿入（id="email-container" の要素内に出力）
    window.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('email-container');
        if (container) {
            const anchor = document.createElement('a');
            anchor.href = 'mailto:' + email;
            anchor.textContent = email;
            container.appendChild(anchor);
        }
    });
})();









