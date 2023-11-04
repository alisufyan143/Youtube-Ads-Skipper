const clear = (() => {
    const defined = v => v !== null && v !== undefined;
    let lastCheckTime = 0;
    const checkInterval = 500; // checks every 500ms
    const timeout = setInterval(() => {
        const now = Date.now();
        if (now - lastCheckTime < checkInterval) return;
        lastCheckTime = now;
        const ad = [...document.querySelectorAll('.ad-showing')][0];
        if (defined(ad)) {
            const skipButton = document.querySelector('.ytp-ad-skip-button.ytp-button');
            if (defined(skipButton)) {
                skipButton.click();
                console.log("Clicked Skip Ad");
            }
        }
    }, checkInterval);
    return function() {
        clearTimeout(timeout);
    }
})();
