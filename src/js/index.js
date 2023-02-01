const adviceButton = document.getElementById('button-advice');

adviceButton.addEventListener('click', () => {
    getAdvice()
});

async function getAdvice() {
    const adviceId = document.getElementById('number-advice');
    const adviceText = document.getElementById('advice');
    
    const url = await 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url);
    const frase = await resposta.json();
    
    adviceId.innerHTML = `#${frase.slip.id}`;
    adviceText.innerHTML = `"${frase.slip.advice}"`
}

getAdvice()