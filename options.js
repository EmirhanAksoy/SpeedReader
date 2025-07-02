// Load and display current settings
document.addEventListener('DOMContentLoaded', () => {
    const enabledCheckbox = document.getElementById('enabled');
    const minWordsInput = document.getElementById('minWords');
    const saveButton = document.getElementById('save');
    const statusDiv = document.getElementById('status');

    // Load current settings
    chrome.storage.sync.get(['speedReaderEnabled', 'speedReaderMinWords'], (result) => {
        enabledCheckbox.checked = result.speedReaderEnabled !== false; // Default to true
        minWordsInput.value = result.speedReaderMinWords || 30; // Default to 30
    });

    // Save settings
    saveButton.addEventListener('click', () => {
        const settings = {
            speedReaderEnabled: enabledCheckbox.checked,
            speedReaderMinWords: parseInt(minWordsInput.value, 10)
        };

        chrome.storage.sync.set(settings, () => {
            // Show success message
            statusDiv.className = 'status success';
            statusDiv.textContent = 'Settings saved successfully!';
            statusDiv.style.display = 'block';

            // Hide message after 3 seconds
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 3000);
        });
    });

    // Validate input
    minWordsInput.addEventListener('input', () => {
        const value = parseInt(minWordsInput.value, 10);
        if (value < 5) {
            minWordsInput.value = 5;
        } else if (value > 500) {
            minWordsInput.value = 500;
        }
    });
});