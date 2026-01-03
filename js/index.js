// index.js - ONLY LOADER FOR HOME PAGE

document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const header = document.getElementById('header');
    const mainContent = document.querySelector('.mainContent');

    function shouldShowLoader() {
        if (sessionStorage.getItem('loaderShown') === 'true') return false;
        const referrer = document.referrer;
        const currentDomain = window.location.origin;
        if (referrer && referrer.startsWith(currentDomain)) return false;
        return true;
    }

    function skipLoader() {
        if (loader) loader.style.display = 'none';
        if (mainContent) mainContent.classList.add('show');
        if (header) header.classList.add('show');
        document.body.style.overflow = '';
    }

    function showLoader() {
        document.body.style.overflow = 'hidden';
        const totalTime = 5200;

        setTimeout(() => {
            if (mainContent) mainContent.classList.add('show');
            setTimeout(() => { if (header) header.classList.add('show'); }, 200);
            setTimeout(() => { if (loader) loader.classList.add('slide-up'); }, 400);
            setTimeout(() => {
                if (loader) {
                    loader.style.display = 'none';
                    loader.remove();
                }
                document.body.style.overflow = '';
                sessionStorage.setItem('loaderShown', 'true');
            }, 1400);
        }, totalTime);
    }

    if (shouldShowLoader() && loader) {
        showLoader();
    } else {
        skipLoader();
    }

    // Fallback
    setTimeout(skipLoader, 10000);
});