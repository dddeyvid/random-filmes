const sortearBtn = document.getElementById("sortearBtn");
const filmeContainer = document.getElementById("filmeContainer");
const poster = document.getElementById("poster");
const filmeNome = document.getElementById("filmeNome");
const trailerLink = document.getElementById("trailerLink");

const filmes = [
  {
    nome: "Piratas do Caribe: A Maldição do Pérola Negra",
    posterUrl:
      "https://br.web.img3.acsta.net/c_310_420/pictures/14/02/06/15/11/493568.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=J4ASMPlJfmU",
  },
  {
    nome: "Piratas do Caribe: O Baú da Morte",
    posterUrl:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/94/12/24/20304627.jpg",
    trailerUrl: "https://www.1youtube.com/watch?v=IY4P1I_0zL4",
  },
  {
    nome: "Piratas do Caribe: No Fim do Mundo",
    posterUrl:
      "https://br.web.img3.acsta.net/c_310_420/pictures/210/176/21017697_20130704202238456.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=ljcJLMEPRY8",
  },
  {
    nome: "Piratas do Caribe: Navegando em Águas Misteriosas",
    posterUrl:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/33/06/20028706.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=haenBC_xPnc",
  },
  {
    nome: "Piratas do Caribe: A Vingança de Salazar",
    posterUrl:
      "https://br.web.img2.acsta.net/c_310_420/pictures/17/03/02/16/02/262397.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=H8d1pD49JOk",
  },
];

sortearBtn.addEventListener("click", () => {
  const filmeSorteado = filmes[Math.floor(Math.random() * filmes.length)];

  poster.src = filmeSorteado.posterUrl;
  filmeNome.textContent = filmeSorteado.nome;
  trailerLink.href = filmeSorteado.trailerUrl;

  filmeContainer.classList.remove("hidden");
});
