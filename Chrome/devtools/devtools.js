// Load Panels
chrome.devtools.panels.create(
    'TRH-Lite',
    '/assets/icon_128.png', // No icon path
    'devtools/panel/index.html',
    null // no callback needed
);
