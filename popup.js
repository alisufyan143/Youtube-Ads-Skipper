document.getElementById('toggleButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({message: "toggle"}, function(response) {
      document.getElementById('toggleButton').textContent = response.isActive ? 'Deactivate' : 'Activate';
    });
  });