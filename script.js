document.getElementById('applySchemeButton').addEventListener('click', function() {
    const colorScheme = document.getElementById('colorSchemeInput').value;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = colorScheme;
    document.head.appendChild(styleSheet);
});
