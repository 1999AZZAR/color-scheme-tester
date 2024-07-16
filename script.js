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
});

document.getElementById('applySchemeButton').addEventListener('click', function() {
    const colorBoxesContainer = document.getElementById('colorBoxesContainer');
    colorBoxesContainer.innerHTML = ''; // Clear previous boxes

    const rootStyles = getComputedStyle(document.documentElement);
    const colorVariables = [
        '--primary-color', '--secondary-color', '--tertiary-color', '--quaternary-color',
        '--quinary-color', '--senary-color', '--septenary-color', '--octonary-color',
        '--nonary-color', '--denary-color'
    ];

    colorVariables.forEach(colorVar => {
        const colorValue = rootStyles.getPropertyValue(colorVar).trim();
        if (colorValue) {
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = colorValue;
            colorBoxesContainer.appendChild(colorBox);
        }
    });
});

