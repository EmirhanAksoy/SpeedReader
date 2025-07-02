// Load and display current settings
document.addEventListener('DOMContentLoaded', () => {
    const enabledCheckbox = document.getElementById('enabled');
    const minWordsInput = document.getElementById('minWords');
    const saveButton = document.getElementById('save');
    const statusDiv = document.getElementById('status');

    // Helper function to safely handle chrome storage operations
    function safeChromeStorageGet(keys, callback) {
        try {
            if (chrome && chrome.storage && chrome.storage.sync) {
                chrome.storage.sync.get(keys, callback);
            }
        } catch (error) {
            console.warn('Chrome storage get operation failed:', error.message);
            callback({}); // Return empty object to use default values
        }
    }

    function safeChromeStorageSet(data, callback) {
        try {
            if (chrome && chrome.storage && chrome.storage.sync) {
                chrome.storage.sync.set(data, callback);
            }
        } catch (error) {
            console.warn('Chrome storage set operation failed:', error.message);
            if (callback) callback();
        }
    }

    // Load current settings
    safeChromeStorageGet(['speedReaderEnabled', 'speedReaderMinWords'], (result) => {
        enabledCheckbox.checked = result.speedReaderEnabled !== false; // Default to true
        minWordsInput.value = result.speedReaderMinWords || 30; // Default to 30
    });

    // Save settings
    saveButton.addEventListener('click', () => {
        const settings = {
            speedReaderEnabled: enabledCheckbox.checked,
            speedReaderMinWords: parseInt(minWordsInput.value, 10)
        };

        safeChromeStorageSet(settings, () => {
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