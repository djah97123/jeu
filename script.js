document.addEventListener('DOMContentLoaded', function () {
    // Déclaration de l'alphabet arabe
    const alphabet = [
        { letter: 'أ', name: 'aleph' },
        { letter: 'ب', name: 'ba' },
        { letter: 'ت', name: 'ta' },
        { letter: 'ث', name: 'tha' },
        { letter: 'ج', name: 'jim' },
        { letter: 'ح', name: 'ha' },
        { letter: 'خ', name: 'khah' },
        { letter: 'د', name: 'dal' },
        { letter: 'ذ', name: 'thal' },
        { letter: 'ر', name: 'ra' },
        { letter: 'ز', name: 'zay' },
        { letter: 'س', name: 'sin' },
        { letter: 'ش', name: 'shin' },
        { letter: 'ص', name: 'sad' },
        { letter: 'ض', name: 'dad' },
        { letter: 'ط', name: 'taa' },
        { letter: 'ظ', name: 'zah' },
        { letter: 'ع', name: 'ayn' },
        { letter: 'غ', name: 'ghayn' },
        { letter: 'ف', name: 'fa' },
        { letter: 'ق', name: 'qaf' },
        { letter: 'ك', name: 'kaf' },
        { letter: 'ل', name: 'lam' },
        { letter: 'م', name: 'mim' },
        { letter: 'ن', name: 'nun' },
        { letter: 'ه', name: 'haa' },
        { letter: 'و', name: 'waw' },
        { letter: 'ي', name: 'ya' }
    ];

    const startGameButton = document.getElementById('start-game-btn');
    const letterDisplay = document.getElementById('letter-display');
    const options = document.getElementById('options');
    const feedback = document.getElementById('feedback');

    startGameButton.addEventListener('click', startGame);

    function startGame() {
        // Récupère les lettres sélectionnées
        const selectedLetters = getSelectedLetters();

        if (selectedLetters.length === 0) {
            feedback.textContent = 'Veuillez sélectionner au moins une lettre.';
            return;
        }

        feedback.textContent = '';
        options.innerHTML = '';
        const randomLetter = getRandomLetter(selectedLetters);
        letterDisplay.textContent = randomLetter.letter;

        // Affiche les options de réponses
        selectedLetters.forEach(letter => {
            const optionButton = document.createElement('button');
            optionButton.textContent = letter.name;
            optionButton.classList.add('bg-gray-200', 'hover:bg-gray-300', 'border', 'border-gray-400', 'rounded', 'p-2', 'text-base', 'text-gray-800', 'font-semibold');
            optionButton.addEventListener('click', function () {
                if (letter.name === randomLetter.name) {
                    feedback.textContent = 'Bonne réponse !';
                } else {
                    feedback.textContent = 'Mauvaise réponse. Essayez encore.';
                }
                setTimeout(startGame, 1000);
            });
            options.appendChild(optionButton);
        });
    }

    function getSelectedLetters() {
        const checkboxes = document.querySelectorAll('.form-checkbox:checked');
        const selectedLetters = [];
        checkboxes.forEach(checkbox => {
            const letterName = checkbox.value;
            const selectedLetter = alphabet.find(letter => letter.name === letterName);
            if (selectedLetter) {
                selectedLetters.push(selectedLetter);
            }
        });
        return selectedLetters;
    }

    function getRandomLetter(letters) {
        return letters[Math.floor(Math.random() * letters.length)];
    }
});
