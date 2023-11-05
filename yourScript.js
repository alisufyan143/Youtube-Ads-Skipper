let checkExist = setInterval(function() {
    let skipButton = document.querySelector('.ytp-ad-skip-button.ytp-button');
    if (skipButton != null) {
       skipButton.click();
       console.log("Clicked Skip Ad");
    }
 }, 1000);
