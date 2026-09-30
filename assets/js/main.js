window.addEventListener('DOMContentLoaded', () => {
    // Load Dynamic Data from Config
    document.getElementById('profile-name').innerText = SITE_CONFIG.profile.name;
    document.getElementById('profile-title').innerText = SITE_CONFIG.profile.title;
    document.getElementById('profile-bio').innerText = SITE_CONFIG.profile.bio;
    document.getElementById('profile-avatar').src = SITE_CONFIG.profile.avatar;
    document.getElementById('linkedin-link').href = SITE_CONFIG.profile.linkedin;
    document.getElementById('email-link').href = `mailto:${SITE_CONFIG.profile.email}?subject=Secure%20Inquiry`;
    document.getElementById('email-text').innerText = SITE_CONFIG.profile.email;

    // Footer Year & Clock
    const currentYear = new Date().getFullYear();
    document.getElementById('footer-copyright').innerText = `© ${currentYear} ${SITE_CONFIG.profile.name}`;

    setInterval(() => {
        const now = new Date();
        document.getElementById('live-clock').innerText = now.toLocaleTimeString();
    }, 1000);

    initMatrixCanvas();
});

// Matrix Digital Rain Animation
function initMatrixCanvas() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\{}[]*#$_-';
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

// Crypto Payment Switcher
function updateCryptoPayment() {
    const select = document.getElementById('crypto-selector');
    const selectedVal = select.value;
    const data = SITE_CONFIG.cryptoWallets[selectedVal];

    document.getElementById('crypto-label').innerText = data.label;
    document.getElementById('crypto-address').innerText = data.address;
    document.getElementById('qr-img').src = data.qr;
}

function copyAddress() {
    const addressText = document.getElementById('crypto-address').innerText;
    navigator.clipboard.writeText(addressText);
    alert('Secure Crypto Hash Copied to Clipboard!');
}

// Trading Platforms Switcher
function updateInvestorPlatform() {
    const sel = document.getElementById('platform-selector').value;
    const data = SITE_CONFIG.tradingNodes[sel];
    document.getElementById('inv-platform').innerText = data.platform;
    document.getElementById('inv-server').innerText = data.server;
    document.getElementById('inv-login').innerText = data.login;
    document.getElementById('inv-pass').innerText = data.pass;
}

// Toggle Credentials Decryption
function toggleInvestorCredentials() {
    const creds = document.getElementById('investor-credentials');
    const eyeIcon = document.getElementById('eye-icon');
    const toggleText = document.getElementById('toggle-text');

    if (creds.classList.contains('hidden')) {
        creds.classList.remove('hidden');
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        toggleText.innerText = "ENCRYPT";
    } else {
        creds.classList.add('hidden');
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        toggleText.innerText = "DECRYPT";
    }
}