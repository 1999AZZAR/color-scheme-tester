
document.addEventListener('DOMContentLoaded', () => {
    const applySchemeButton = document.getElementById('applySchemeButton');
    const colorSchemeInput = document.getElementById('colorSchemeInput');
    const colorBoxesContainer = document.getElementById('colorBoxesContainer');

    applySchemeButton.addEventListener('click', () => {
        const colorScheme = colorSchemeInput.value;
        applyColorScheme(colorScheme);
    });

    function applyColorScheme(colorScheme) {
        const style = document.createElement('style');
        style.innerHTML = colorScheme;
        document.head.appendChild(style);

        const colors = extractColors(colorScheme);
        updateColorBoxes(colors);
    }


    function extractColors(colorScheme) {
        const colorRegex = /--\w+-color:\s*(#[0-9a-fA-F]{6});/g;
        let match;
        const colors = [];
        while ((match = colorRegex.exec(colorScheme)) !== null) {
            colors.push(match[1]);
        }
        return colors;
    }

    function updateColorBoxes(colors) {
        colorBoxesContainer.innerHTML = '';
        colors.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = color;

            const icon = document.createElement('i');
            icon.className = 'fas fa-tint';
            icon.style.color = '#FFFFFF'; // Set icon color to white for contrast

            const colorName = document.createElement('div');
            colorName.className = 'color-name';
            colorName.textContent = color;

            colorBox.appendChild(icon);
            colorBox.appendChild(colorName);
            colorBoxesContainer.appendChild(colorBox);
        });
    }

    // Apply the default color scheme on page load
    window.addEventListener('load', () => {
        const defaultColorScheme = colorSchemeInput.value;
        applyColorScheme(defaultColorScheme);
    });
});
