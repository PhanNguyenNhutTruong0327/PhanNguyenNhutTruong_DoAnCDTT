function Script() {
    const toggleButton = document.getElementById('toggleButton');
    const hiddenElement = document.getElementById('hiddenElement');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            hiddenElement.classList.toggle('d-none');
        });
    }
}

export default Script;