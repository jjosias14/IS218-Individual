// cookies.js
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? decodeURIComponent(cookieValue[2]) : null;
}

function askForConsent() {
    if (!getCookie('consent')) {
        const consent = confirm('This website uses cookies. Do you consent to their use?');
        if (consent) {
            setCookie('consent', 'true', 365); // Set cookie to last for a year
        }
    }
}

askForConsent();
