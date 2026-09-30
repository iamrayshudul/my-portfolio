document.addEventListener('DOMContentLoaded', () => {
    if (typeof SITE_CONFIG !== 'undefined') {
        document.getElementById('profile-name').innerText = SITE_CONFIG.profile.name;
        document.getElementById('profile-title').innerText = SITE_CONFIG.profile.title;
        document.getElementById('profile-name-main').innerText = SITE_CONFIG.profile.name;
        document.getElementById('profile-title-main').innerText = SITE_CONFIG.profile.title;
        document.getElementById('profile-bio').innerText = SITE_CONFIG.profile.bio;
        
        const linkedinLink = document.getElementById('linkedin-link');
        if (linkedinLink) linkedinLink.href = SITE_CONFIG.profile.linkedin;
        
        const emailLink = document.getElementById('email-link');
        if (emailLink) emailLink.href = 'mailto:' + SITE_CONFIG.profile.email;
        
        const emailText = document.getElementById('email-text');
        if (emailText) emailText.innerText = SITE_CONFIG.profile.email;
        
        const footerCopyright = document.getElementById('footer-copyright');
        if (footerCopyright) footerCopyright.innerText = `© 2026 ${SITE_CONFIG.profile.name}`;
    }

    setInterval(() => {
        const now = new Date();
        const clockElem = document.getElementById('live-clock');
        if (clockElem) clockElem.innerText = now.toLocaleTimeString();
    }, 1000);

    initMatrixCanvas();
});

function initMatrixCanvas() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const chars = '01ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789<>/\\[]#$_;';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
    }

    function draw() {
        ctx.fillStyle = 'rgba(2, 11, 5, 0.12)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#00ff66';
        ctx.font = fontSize + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 33);
}

function updateCryptoPayment() {
    const select = document.getElementById('crypto-selector');
    if (!select || typeof SITE_CONFIG === 'undefined') return;
    const selectedVal = select.value;
    const data = SITE_CONFIG.cryptoWallets[selectedVal];
    if (!data) return;
    document.getElementById('crypto-label').innerText = data.label;
    document.getElementById('crypto-address').innerText = data.address;
    document.getElementById('qr-img').src = data.qr;
}

function copyAddress() {
    const addressText = document.getElementById('crypto-address').innerText;
    navigator.clipboard.writeText(addressText);
    alert('Secure Crypto Hash Copied to Clipboard!');
}

function updateInvestorPlatform() {
    const selElem = document.getElementById('platform-selector');
    if (!selElem || typeof SITE_CONFIG === 'undefined') return;
    const selVal = selElem.value;
    const data = SITE_CONFIG.tradingNodes[selVal];
    if (!data) return;
    document.getElementById('inv-platform').innerText = data.platform;
    document.getElementById('inv-server').innerText = data.server;
    document.getElementById('inv-login').innerText = data.login;
    document.getElementById('inv-pass').innerText = data.password;
}

function toggleInvestorCredentials() {
    const creds = document.getElementById('investor-credentials');
    const iconElem = document.getElementById('eye-icon');
    const toggleText = document.getElementById('toggle-text');
    if (!creds) return;
    if (creds.classList.contains('hidden')) {
        creds.classList.remove('hidden');
        iconElem.classList.remove('fa-eye');
        iconElem.classList.add('fa-eye-slash');
        toggleText.innerText = 'ENCRYPT';
    } else {
        creds.classList.add('hidden');
        iconElem.classList.remove('fa-eye-slash');
        iconElem.classList.add('fa-eye');
        toggleText.innerText = 'DECRYPT';
    }
}

function toggleTheme() {
    const body = document.body;
    if(body.style.backgroundColor === 'rgb(2, 11, 5)') {
        body.style.backgroundColor = '#111827';
    } else {
        body.style.backgroundColor = '#020b05';
    }
}