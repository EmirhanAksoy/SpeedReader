let reading = false;
let paused = false;
let currentWords = [];
let currentIndex = 0;
let intervalId = null;
const baseWPM = 300;
let wpm = baseWPM;

const modal = document.createElement('div');
modal.id = 'speed-reader-modal';
modal.innerHTML = `
  <div id="reader-text">Ready</div>
  <div id="controls">
    <label>Speed:
      <select id="speed-multiplier">
        <option value="1" selected>1x</option>
        <option value="2">2x</option>
        <option value="3">3x</option>
        <option value="4">4x</option>
        <option value="5">5x</option>
      </select>
    </label>
    <button id="pause-resume-button">Pause</button>
    <button id="cancel-reading-button">Cancel</button>
    <span id="progress-indicator">0 / 0</span>
  </div>
`;
document.body.appendChild(modal);

const readerText = document.getElementById('reader-text');
const speedSelect = document.getElementById('speed-multiplier');
const pauseResumeBtn = document.getElementById('pause-resume-button');
const cancelBtn = document.getElementById('cancel-reading-button');
const progressIndicator = document.getElementById('progress-indicator');

speedSelect.addEventListener('change', () => {
  const multiplier = parseFloat(speedSelect.value);
  wpm = baseWPM * multiplier;
  if (reading && !paused) {
    restartInterval();
  }
});

pauseResumeBtn.addEventListener('click', () => {
  paused = !paused;
  pauseResumeBtn.textContent = paused ? 'Resume' : 'Pause';
});

cancelBtn.addEventListener('click', () => {
  stopReading();
});

const startBtn = document.createElement('button');
startBtn.id = 'start-reading-button';
startBtn.textContent = 'Start Reading';
document.body.appendChild(startBtn);

let hoveredParagraph = null;
let hideBtnTimeout;

document.addEventListener('mouseover', (e) => {
  if (e.target.tagName.toLowerCase() === 'p') {
    hoveredParagraph = e.target;
    const rect = hoveredParagraph.getBoundingClientRect();
    startBtn.style.top = `${window.scrollY + rect.top - 40}px`;
    startBtn.style.left = `${window.scrollX + rect.left}px`;
    startBtn.style.display = 'block';
    clearTimeout(hideBtnTimeout);
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target === hoveredParagraph) {
    hideBtnTimeout = setTimeout(() => {
      if (!reading) startBtn.style.display = 'none';
    }, 800);
  }
});

startBtn.addEventListener('click', () => {
  if (!hoveredParagraph) return;

  currentWords = hoveredParagraph.innerText.trim().split(/\s+/);
  currentIndex = 0;
  reading = true;
  paused = false;
  startBtn.style.display = 'none';
  showModal();
  startInterval();
});

function showModal() {
  modal.style.display = 'block';
  modal.style.top = '35%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.cursor = 'move';
  progressIndicator.textContent = `0 / ${currentWords.length}`;
}

function hideModal() {
  modal.style.display = 'none';
}

function startInterval() {
  clearInterval(intervalId);
  const interval = 60000 / wpm;

  intervalId = setInterval(() => {
    if (!paused && currentIndex < currentWords.length) {
      readerText.textContent = currentWords[currentIndex];
      progressIndicator.textContent = `${currentIndex + 1} / ${currentWords.length}`;
      currentIndex++;
    } else if (currentIndex >= currentWords.length) {
      stopReading();
    }
  }, interval);
}

function restartInterval() {
  if (reading && !paused) {
    startInterval();
  }
}

function stopReading() {
  clearInterval(intervalId);
  reading = false;
  paused = false;
  currentIndex = 0;
  hideModal();
  startBtn.style.display = 'none';
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (!reading) return;

  if (e.code === 'Space') {
    paused = !paused;
    pauseResumeBtn.textContent = paused ? 'Resume' : 'Pause';
    readerText.textContent = paused ? 'Paused' : currentWords[currentIndex] ?? '';
    e.preventDefault();
  }

  if (e.code === 'Escape') {
    stopReading();
  }
});

// Draggable modal with resize detection
let isDragging = false;
let offsetX = 0, offsetY = 0;

modal.addEventListener('mousedown', (e) => {
  // Prevent dragging from controls
  const tag = e.target.tagName;
  if (tag === 'INPUT' || tag === 'SELECT' || tag === 'BUTTON') return;

  // Prevent drag if clicking near bottom-right corner (resizing)
  const rect = modal.getBoundingClientRect();
  const resizeThreshold = 20;
  const nearRightEdge = e.clientX > rect.right - resizeThreshold;
  const nearBottomEdge = e.clientY > rect.bottom - resizeThreshold;

  if (nearRightEdge && nearBottomEdge) return;

  isDragging = true;
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    modal.style.left = `${e.clientX - offsetX}px`;
    modal.style.top = `${e.clientY - offsetY}px`;
    modal.style.transform = 'none';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
