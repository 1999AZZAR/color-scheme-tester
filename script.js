document.getElementById('applySchemeButton').addEventListener('click', function() {
    const colorScheme = document.getElementById('colorSchemeInput').value;
    const existingStyleSheet = document.getElementById('dynamicColorScheme');
    if (existingStyleSheet) {
        existingStyleSheet.remove();
    }
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.id = 'dynamicColorScheme';
    styleSheet.textContent = colorScheme;
    document.head.appendChild(styleSheet);
    const colorDisplayBox = document.getElementById('colorDisplayBox');
    colorDisplayBox.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
});

