let bookGame;

// Carregar o JSON do arquivo
fetch('dungeon_data.json')
    .then(response => response.json())
    .then(data => {
        bookGame = data;
        document.getElementById("title").innerText = bookGame.title;
        loadPage(bookGame.startPage.id);
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));




  
  // Função para carregar uma página
function loadPage(pageId) {
    const page = bookGame.pages[pageId.toString()];
    document.getElementById("narrative").innerText = page.narrative;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Limpa opções anteriores

    page.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.choice;
        button.onclick = () => loadPage(option.nextPage);
        optionsContainer.appendChild(button);
    });
}
  