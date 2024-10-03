function sortear() {
    const input = document.getElementById('inputItens').value;
    const itens = input.split(',').map(item => item.trim());

    if (itens.length > 1) {
        const indiceSorteado = Math.floor(Math.random() * itens.length);
        document.getElementById('resultado').innerText = `Item sorteado: ${itens[indiceSorteado]}`;
    } else {
        document.getElementById('resultado').innerText = "Por favor, insira mais de um item.";
    }
}
