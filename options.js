// Define variables for checkbox elements
const block60fpsCheckbox = document.getElementById('block_60fps');
const blockH264Checkbox = document.getElementById('block_h264');
const blockVP8Checkbox = document.getElementById('block_vp8');
const blockVP9Checkbox = document.getElementById('block_vp9');
const blockAV1Checkbox = document.getElementById('block_av1');
const disableLNCheckbox = document.getElementById('disable_LN');

// Saves options to chrome.storage
function saveOptions() {
  chrome.storage.local.set({
    block_60fps: block60fpsCheckbox.checked,
    block_h264: blockH264Checkbox.checked,
    block_vp8: blockVP8Checkbox.checked,
    block_vp9: blockVP9Checkbox.checked,
    block_av1: blockAV1Checkbox.checked,
    disable_LN: disableLNCheckbox.checked
  });
}

// Restores checkbox state using the options stored in chrome.storage.
function restoreOptions() {
  chrome.storage.local.get({
    block_60fps: false,
    block_h264: false,
    block_vp8: true,
    block_vp9: true,
    block_av1: true,
    disable_LN: false
  }, function(options) {
    block60fpsCheckbox.checked = options.block_60fps;
    blockH264Checkbox.checked = options.block_h264;
    blockVP8Checkbox.checked = options.block_vp8;
    blockVP9Checkbox.checked = options.block_vp9;
    blockAV1Checkbox.checked = options.block_av1;
    disableLNCheckbox.checked = options.disable_LN;
  });
}

// Restore saved options when extension is loaded
document.addEventListener('DOMContentLoaded', restoreOptions);

// Save options when checkboxes are clicked
const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', saveOptions);
});

// l10n
const elementsWithDataL10nId = document.querySelectorAll('[data-l10n-id]');
for (const element of elementsWithDataL10nId) {
  element.textContent = chrome.i18n.getMessage(element.dataset.l10nId);
}
