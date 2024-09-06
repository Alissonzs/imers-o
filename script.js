const searchInput = document.getElementById("atleta-search");
const searchButton = document.getElementById("search-button");
const resultList = document.getElementById("atleta-list");
const atletas = [
{ nome: "Isaquias Queiroz", esporte: "Canoagem", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Isaquias_Queiroz_2016b.jpg/200px-Isaquias_Queiroz_2016b.jpg", descricao: "Isaquias Queiroz é um canoísta brasileiro com destaque internacional, conhecido por suas conquistas em competições de canoagem de velocidade.", wikipedia: "https://pt.wikipedia.org/wiki/Isaquias_Queiroz" },
{ nome: "Rebeca Andrade", esporte: "Ginástica Artística", foto:"https://media.gettyimages.com/id/2165379522/pt/foto/paris-france-gold-medalist-rebeca-andrade-of-team-brazil-poses-on-the-podium-at-the-artistic.jpg?s=612x612&w=0&k=20&c=Bp6SPCjyljpfaIyVUOE59UarPZM_NqbYFNnexifcSsk=", descricao: "Rebeca Andrade é uma ginasta artística brasileira que se destacou nas Olimpíadas de Tóquio 2020, conquistando medalhas de ouro e prata.", wikipedia: "https://pt.wikipedia.org/wiki/Rebeca_Andrade" },
{ nome: "Alison Cerutti", esporte: "Vôlei de Praia", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Alison_Cerutti.jpg/220px-Alison_Cerutti.jpg", descricao: "Alison Cerutti é um jogador de vôlei de praia brasileiro, campeão olímpico e mundial, conhecido por suas habilidades e conquistas em competições internacionais.", wikipedia: "https://pt.wikipedia.org/wiki/Alison_Cerutti" },
{ nome: "Gabriel Medina", esporte: "Surf", foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Gabriel_Medina_2.jpg/220px-Gabriel_Medina_2.jpg", descricao: "Gabriel Medina é um surfista brasileiro que se tornou campeão mundial de surfe e é reconhecido por seu talento nas ondas e suas vitórias em competições internacionais.", wikipedia: "https://pt.wikipedia.org/wiki/Gabriel_Medina" },
{ nome: "Martina Navratilova", esporte: "Tênis", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Martina_Navratilova_trim.jpg/200px-Martina_Navratilova_trim.jpg", descricao: "Martina Navratilova é uma das maiores tenistas de todos os tempos, com uma carreira repleta de títulos de Grand Slam e inovações no esporte.", wikipedia: "https://pt.wikipedia.org/wiki/Martina_Navratilova" },
{ nome: "Thiago Braz", esporte: "Salto com Vara", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Thiago_Braz_em_2021_%28crop%29.jpg/220px-Thiago_Braz_em_2021_%28crop%29.jpg", descricao: "Thiago Braz é um atleta brasileiro de salto com vara, campeão olímpico e recordista mundial, conhecido por suas performances impressionantes em competições.", wikipedia: "https://pt.wikipedia.org/wiki/Thiago_Braz" },
{ nome: "Arthur Nory", esporte: "Ginástica Artística", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Arthur_Mariano_2016.jpg/200px-Arthur_Mariano_2016.jpg", descricao: "Arthur Nory é um ginasta brasileiro, medalhista em competições internacionais e conhecido por suas habilidades na ginástica artística.", wikipedia: "https://pt.wikipedia.org/wiki/Arthur_Nory" },
{ nome: "Ana Marcela Cunha", esporte: "Maratonas Aquáticas", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ana_Marcela_em_2021.jpg/175px-Ana_Marcela_em_2021.jpg", descricao: "Ana Marcela Cunha é uma nadadora brasileira especializada em maratonas aquáticas, com vários títulos internacionais e medalhas de ouro em competições.", wikipedia: "https://pt.wikipedia.org/wiki/Ana_Marcela_Cunha" },
{ nome: "Felipe Lima", esporte: "Natação", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kazan_2015_-_Filipe_Lima_50m_breast_semi.JPG/200px-Kazan_2015_-_Filipe_Lima_50m_breast_semi.JPG", descricao: "Felipe Lima é um nadador brasileiro que se destacou nas competições internacionais de natação, com várias medalhas em eventos importantes.", wikipedia: "https://pt.wikipedia.org/wiki/Felipe_Lima" },
{ nome: "Paula Pequeno", esporte: "Vôlei", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paula_cropped%2C_Grand_Prix_%C5%81%C3%B3d%C5%BA%2C_Poland.jpg/220px-Paula_cropped%2C_Grand_Prix_%C5%81%C3%B3d%C5%BA%2C_Poland.jpg", descricao: "Paula Pequeno é uma jogadora de vôlei brasileira, conhecida por suas atuações em clubes e seleções, com títulos importantes em competições de vôlei.", wikipedia: "https://pt.wikipedia.org/wiki/Paula_Pequeno" },
{ nome: "Júlio Campos", esporte: "Futebol", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/J%C3%BAlio_Campos.jpg/200px-J%C3%BAlio_Campos.jpg", descricao: "Júlio Campos é um jogador de futebol brasileiro, conhecido por suas contribuições em clubes e seleções, e suas habilidades em campo.", wikipedia: "https://pt.wikipedia.org/wiki/J%C3%BAlio_Campos" },
{ nome: "Luana Martins", esporte: "Judô", foto:"https://example.com/luana.jpg", descricao: "Luana Martins é uma judoca brasileira, com várias medalhas em competições nacionais e internacionais e um destaque no judô.", wikipedia: "https://pt.wikipedia.org/wiki/Luana_Martins" },
{ nome: "Sabrina Dourado", esporte: "Esqui Náutico", foto:"https://example.com/sabrina.jpg", descricao: "Sabrina Dourado é uma atleta brasileira de esqui náutico, conhecida por suas performances em eventos internacionais e conquistas no esporte.", wikipedia: "https://pt.wikipedia.org/wiki/Sabrina_Dourado" },
{ nome: "Lucas Moliterno", esporte: "Basquete", foto:"https://example.com/lucas.jpg", descricao: "Lucas Moliterno é um jogador de basquete brasileiro, que se destacou em competições nacionais e internacionais, conhecido por seu talento em quadra.", wikipedia: "https://pt.wikipedia.org/wiki/Lucas_Moliterno" },
{ nome: "César Cielo", esporte: "Natação", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Filhopodium50cropped.jpg/200px-Filhopodium50cropped.jpg", descricao: "César Cielo é um nadador brasileiro, campeão olímpico e mundial, com vários recordes e títulos no esporte da natação.", wikipedia: "https://pt.wikipedia.org/wiki/C%C3%A9sar_Cielo" },
{ nome: "Aline Silva", esporte: "Luta Olímpica", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Aline_Wirley_-_BBB_23.png/230px-Aline_Wirley_-_BBB_23.png", descricao: "Aline Silva é uma lutadora olímpica brasileira, conhecida por suas conquistas em competições de luta olímpica e sua dedicação ao esporte.", wikipedia: "https://pt.wikipedia.org/wiki/Aline_Silva" },
{ nome: "Duda Lisboa", esporte: "Vôlei de Praia", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/20170730_Beach_Volleyball_WM_Vienna_3907.jpg/250px-20170730_Beach_Volleyball_WM_Vienna_3907.jpg", descricao: "Duda Lisboa é uma jogadora de vôlei de praia brasileira, com várias vitórias em competições internacionais e destaque no esporte.", wikipedia: "https://pt.wikipedia.org/wiki/Duda_Lisboa" },
{ nome: "Carlos Andre", esporte: "Atletismo", foto:"https://example.com/carlos.jpg", descricao: "Carlos Andre é um atleta de atletismo brasileiro, conhecido por suas performances em eventos de corrida e outras modalidades do atletismo.", wikipedia: "https://pt.wikipedia.org/wiki/Carlos_Andre" },
{ nome: "Bruno Schmidt", esporte: "Vôlei de Praia", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bruno_Oscar_Schmidt.jpg/220px-Bruno_Oscar_Schmidt.jpg", descricao: "Bruno Schmidt é um jogador de vôlei de praia brasileiro, com destaque em competições internacionais e uma carreira de sucesso no esporte.", wikipedia: "https://pt.wikipedia.org/wiki/Bruno_Schmidt" },
{ nome: "Mariana de Almeida", esporte: "Natação", foto:"https://example.com/mariana.jpg", descricao: "Mariana de Almeida é uma nadadora brasileira, conhecida por suas habilidades nas competições de natação e suas conquistas internacionais.", wikipedia: "https://pt.wikipedia.org/wiki/Mariana_de_Almeida" },
{ nome: "Diego Hypólito", esporte: "Ginástica Artística", foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ginastas_ol%C3%ADmpicos_brasileiros_treinam_para_as_Olimp%C3%ADadas_%2827675350313%29.jpg/300px-Ginastas_ol%C3%ADmpicos_brasileiros_treinam_para_as_Olimp%C3%ADadas_%2827675350313%29.jpg", descricao: "Diego Hypólito é um ginasta artístico brasileiro, com várias medalhas e títulos em competições internacionais, conhecido por sua técnica e performances.", wikipedia: "https://pt.wikipedia.org/wiki/Diego_Hyp%C3%B3lito" }
];
function filterAtletas(searchTerm) {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const filteredAtletas = atletas.filter((atleta) => {
    const atletaNome = atleta.nome.toLowerCase();
    const atletaEsporte = atleta.esporte.toLowerCase();
    return atletaNome.includes(lowerSearchTerm) || atletaEsporte.includes(lowerSearchTerm);
  });
  return filteredAtletas;
}
function displayResults(filteredAtletas) {
  resultList.innerHTML = ""; 
  if (filteredAtletas.length === 0) {
    resultList.innerHTML = "<p>Nenhum atleta foi encontrado.</p>";
  } else {
    let resultsHtml = "";
    filteredAtletas.forEach((atleta) => {
      resultsHtml += `
        <article>
          <img src="${atleta.foto}" alt="${atleta.nome}">
          <div>
            <h2>${atleta.nome}</h2>
            <p>Esporte: ${atleta.esporte}</p>
            <p>${atleta.descricao}</p>
            <a href="${atleta.wikipedia}" target="_blank" class="more-info">Mais informações</a>
          </div>
        </article>`;
    });
    resultList.innerHTML = resultsHtml;
  }
}
displayResults(atletas);
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim(); 
  if (searchTerm === "") {
    resultList.innerHTML = "<p>Por favor, insira um termo para pesquisar.</p>";
  } else {
    const filteredAtletas = filterAtletas(searchTerm);
    displayResults(filteredAtletas);
  }
});
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  const filteredAtletas = filterAtletas(searchTerm);
  displayResults(filteredAtletas);
});