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
    const listContainer = document.getElementById('listContainer');
    listContainer.querySelectorAll('li').forEach(li => {
        li.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--quaternary-color').trim();
        li.querySelector('i').style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    });

    const articleContainer = document.getElementById('articleContainer');
    articleContainer.querySelector('article').style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--quaternary-color').trim();
    articleContainer.querySelector('h3').style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    articleContainer.querySelector('p').style.color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();

    const blockquoteContainer = document.getElementById('blockquoteContainer');
    blockquoteContainer.querySelector('blockquote').style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--quaternary-color').trim();
    blockquoteContainer.querySelector('blockquote').style.borderLeftColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    blockquoteContainer.querySelectorAll('i').forEach(icon => {
        icon.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    });

document.getElementById('applySchemeButton').addEventListener('click', function() {
    const textContainer = document.getElementById('textContainer');
    textContainer.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color').trim();
    textContainer.querySelector('h2').style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    textContainer.querySelector('p').style.color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
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
            const icon = document.createElement('i');
            icon.className = 'fas fa-palette';
            icon.style.color = '#FFFFFF'; // Set icon color to white
            colorBox.appendChild(icon);
            const colorName = document.createElement('span');
            colorName.className = 'color-name';
            colorName.textContent = `${colorVar.replace('--', '').replace('-', ' ')}: ${colorValue}`;
            colorBox.appendChild(icon);
            colorBox.appendChild(colorName);
            colorBoxesContainer.appendChild(colorBox);
        }
    });
});

