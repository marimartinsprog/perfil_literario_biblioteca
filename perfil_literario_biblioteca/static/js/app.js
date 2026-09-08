const questions = [
  {
    title: "Seu ritmo de leitura",
    kicker: "Antes de escolher a história...",
    question: "Como a leitura faz parte da sua rotina hoje?",
    help: "Sua resposta define o nível dos livros recomendados.",
    options: [
      { label: "Estou começando ou voltando", detail: "Prefiro leituras acessíveis e que me conquistem rápido.", level: "iniciante" },
      { label: "Leio de vez em quando", detail: "Gosto de histórias envolventes com profundidade equilibrada.", level: "intermediario" },
      { label: "Leio com frequência", detail: "Quero obras densas, complexas ou desafiadoras.", level: "avancado" },
    ],
  },
  {
    title: "A porta de entrada",
    kicker: "Toda história começa com um convite",
    question: "Qual destas cenas faria você abrir um livro?",
    help: "Escolha a que desperta mais curiosidade em você.",
    options: [
      { label: "Um mapa com um caminho desconhecido", detail: "Viagens, desafios e territórios a explorar.", tags: ["aventura", "jornada", "viagem", "exploracao"], profiles: { Aventureiro: 4, Curioso: 1 } },
      { label: "Uma porta brilhando no meio da floresta", detail: "Magia, criaturas e mundos impossíveis.", tags: ["fantasia", "magia", "mitologia"], profiles: { Sonhador: 4, Aventureiro: 1 } },
      { label: "Uma mensagem enviada do futuro", detail: "Tecnologia, ciência e realidades alternativas.", tags: ["ficcao_cientifica", "futuro", "tecnologia"], profiles: { "Analítico": 4, Curioso: 1 } },
      { label: "Uma carta de amor nunca entregue", detail: "Relações, escolhas e sentimentos guardados.", tags: ["romance", "amor", "sentimental"], profiles: { Sentimental: 4, Reflexivo: 1 } },
      { label: "Uma chave encontrada em uma cena de crime", detail: "Pistas, suspeitos e segredos perigosos.", tags: ["misterio", "crime", "investigacao", "suspense"], profiles: { Misterioso: 4, "Analítico": 1 } },
    ],
  },
  {
    title: "O que prende você",
    kicker: "Entre o início e a última página",
    question: "O que faz você esquecer do tempo enquanto lê?",
    help: "Pense no elemento que mais mantém sua atenção.",
    options: [
      { label: "A sensação de que algo vai acontecer", detail: "Perigo, ritmo e reviravoltas constantes.", tags: ["aventura", "suspense", "terror"], profiles: { Aventureiro: 3, Misterioso: 2 } },
      { label: "Descobrir as regras de um novo universo", detail: "Mundos detalhados, magia ou tecnologia.", tags: ["fantasia", "ficcao_cientifica", "tecnologia"], profiles: { Sonhador: 3, "Analítico": 2 } },
      { label: "Entender por que as pessoas agem assim", detail: "Comportamento, conflitos internos e escolhas.", tags: ["psicologia", "filosofia", "sentimental"], profiles: { Reflexivo: 3, Sentimental: 2 } },
      { label: "Juntar pistas antes do personagem", detail: "Enigmas, crimes e investigação.", tags: ["misterio", "investigacao", "crime"], profiles: { Misterioso: 4, "Analítico": 1 } },
      { label: "Aprender algo que realmente aconteceu", detail: "Vidas, épocas e fatos do mundo real.", tags: ["biografia", "historia", "conhecimento"], profiles: { Curioso: 4, Reflexivo: 1 } },
    ],
  },
  {
    title: "Seu objeto literário",
    kicker: "Em cima de uma mesa antiga",
    question: "Qual objeto parece esconder a melhor história?",
    help: "Não pense demais: escolha pelo instinto.",
    options: [
      { label: "Uma bússola quebrada", detail: "Ela aponta para um lugar que não existe no mapa.", tags: ["aventura", "viagem", "exploracao"], profiles: { Aventureiro: 4 } },
      { label: "Um frasco com poeira de estrelas", detail: "Dentro dele há uma promessa de outro mundo.", tags: ["fantasia", "magia", "poesia"], profiles: { Sonhador: 4, Reflexivo: 1 } },
      { label: "Um relógio com números desconhecidos", detail: "Talvez seja uma máquina, um código ou um portal.", tags: ["ficcao_cientifica", "tecnologia", "misterio"], profiles: { "Analítico": 4, Misterioso: 1 } },
      { label: "Um álbum de fotografias sem nomes", detail: "Cada imagem guarda uma vida e uma memória.", tags: ["biografia", "historia", "romance"], profiles: { Curioso: 2, Sentimental: 3 } },
      { label: "Um caderno cheio de perguntas", detail: "Nenhuma resposta está escrita, apenas pistas para pensar.", tags: ["filosofia", "psicologia", "conhecimento"], profiles: { Reflexivo: 4, Curioso: 1 } },
    ],
  },
  {
    title: "A força da narrativa",
    kicker: "Quando uma história termina",
    question: "Qual sensação você espera levar da leitura?",
    help: "Escolha o efeito que um bom livro deve deixar em você.",
    options: [
      { label: "Coragem para enfrentar algo novo", detail: "Quero sentir que vivi uma jornada.", tags: ["aventura", "heroi", "autoajuda"], profiles: { Aventureiro: 4 } },
      { label: "Encantamento e vontade de imaginar", detail: "Quero continuar vendo aquele mundo na cabeça.", tags: ["fantasia", "magia", "poesia"], profiles: { Sonhador: 4 } },
      { label: "Uma ideia que reorganiza minha mente", detail: "Quero entender um conceito ou uma possibilidade.", tags: ["ficcao_cientifica", "filosofia", "psicologia"], profiles: { "Analítico": 3, Reflexivo: 2 } },
      { label: "O coração apertado de um jeito bonito", detail: "Quero me conectar profundamente com os personagens.", tags: ["romance", "sentimental", "poesia"], profiles: { Sentimental: 4 } },
      { label: "A surpresa de ter sido enganado", detail: "Quero uma revelação que mude tudo.", tags: ["misterio", "suspense", "crime"], profiles: { Misterioso: 4 } },
    ],
  },
  {
    title: "Sua última escolha",
    kicker: "Antes de fechar o livro",
    question: "Qual frase mais combina com seu jeito de ler?",
    help: "Esta resposta ajuda a desempatar seu perfil literário.",
    options: [
      { label: "“Quero descobrir o que existe depois da curva.”", detail: "O movimento da história me leva adiante.", tags: ["aventura", "viagem", "jornada"], profiles: { Aventureiro: 4, Curioso: 1 } },
      { label: "“O impossível é só um mundo ainda não visitado.”", detail: "Imaginar é uma forma de viajar.", tags: ["fantasia", "magia", "ficcao_cientifica"], profiles: { Sonhador: 4, "Analítico": 1 } },
      { label: "“Toda resposta boa cria uma pergunta melhor.”", detail: "Ideias e descobertas tornam a leitura valiosa.", tags: ["conhecimento", "filosofia", "tecnologia"], profiles: { "Analítico": 3, Curioso: 2 } },
      { label: "“Uma história importa quando toca alguma coisa em mim.”", detail: "Leio para sentir e compreender relações.", tags: ["romance", "sentimental", "psicologia"], profiles: { Sentimental: 4, Reflexivo: 1 } },
      { label: "“A verdade quase sempre está escondida nos detalhes.”", detail: "Observar, desconfiar e interpretar faz parte do prazer.", tags: ["misterio", "investigacao", "historia"], profiles: { Misterioso: 3, Reflexivo: 1, Curioso: 1 } },
    ],
  },
];

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
  level: null,
  tags: new Set(),
  profiles: {},
};

const screens = {
  intro: document.getElementById("introScreen"),
  quiz: document.getElementById("quizScreen"),
  loading: document.getElementById("loadingScreen"),
  result: document.getElementById("resultScreen"),
};

const elements = {
  startButton: document.getElementById("startButton"),
  backButton: document.getElementById("backButton"),
  printButton: document.getElementById("printButton"),
  restartButton: document.getElementById("restartButton"),
  questionPage: document.getElementById("questionPage"),
  questionText: document.getElementById("questionText"),
  questionHelp: document.getElementById("questionHelp"),
  questionKicker: document.getElementById("questionKicker"),
  answersList: document.getElementById("answersList"),
  chapterNumber: document.getElementById("chapterNumber"),
  chapterTitle: document.getElementById("chapterTitle"),
  pageNumber: document.getElementById("pageNumber"),
  progressLabel: document.getElementById("progressLabel"),
  progressBar: document.getElementById("progressBar"),
  collectionCount: document.getElementById("collectionCount"),
};

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle("is-hidden", key !== name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetDerivedState() {
  state.level = null;
  state.tags = new Set();
  state.profiles = {};

  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const option = questions[questionIndex].options[answerIndex];
    if (option.level) state.level = option.level;
    (option.tags || []).forEach((tag) => state.tags.add(tag));
    Object.entries(option.profiles || {}).forEach(([profile, points]) => {
      state.profiles[profile] = (state.profiles[profile] || 0) + points;
    });
  });
}

function renderQuestion() {
  const question = questions[state.current];
  elements.chapterNumber.textContent = state.current + 1;
  elements.chapterTitle.textContent = question.title;
  elements.pageNumber.textContent = String(state.current + 1).padStart(2, "0");
  elements.progressLabel.textContent = `${state.current + 1}/${questions.length}`;
  elements.progressBar.style.width = `${((state.current + 1) / questions.length) * 100}%`;
  elements.questionKicker.textContent = question.kicker;
  elements.questionText.textContent = question.question;
  elements.questionHelp.textContent = question.help;
  elements.backButton.disabled = state.current === 0;
  elements.answersList.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    if (state.answers[state.current] === index) button.classList.add("is-selected");
    button.innerHTML = `
      <span class="answer-button__letter">${String.fromCharCode(65 + index)}</span>
      <span class="answer-button__label">
        <strong>${option.label}</strong>
        <small>${option.detail}</small>
      </span>`;
    button.addEventListener("click", () => selectAnswer(index));
    elements.answersList.appendChild(button);
  });
}

function animatePage(direction, callback) {
  const className = direction === "back" ? "turn-back" : "turn-next";
  elements.questionPage.classList.remove("turn-next", "turn-back");
  void elements.questionPage.offsetWidth;
  elements.questionPage.classList.add(className);
  window.setTimeout(() => {
    callback();
  }, 350);
  window.setTimeout(() => {
    elements.questionPage.classList.remove(className);
  }, 760);
}

function selectAnswer(index) {
  state.answers[state.current] = index;
  resetDerivedState();

  [...elements.answersList.children].forEach((button, buttonIndex) => {
    button.classList.toggle("is-selected", buttonIndex === index);
    button.disabled = true;
  });

  if (state.current < questions.length - 1) {
    animatePage("next", () => {
      state.current += 1;
      renderQuestion();
    });
  } else {
    window.setTimeout(generateResult, 280);
  }
}

function goBack() {
  if (state.current === 0) return;
  animatePage("back", () => {
    state.current -= 1;
    renderQuestion();
  });
}

async function generateResult() {
  resetDerivedState();
  showScreen("loading");

  try {
    const response = await fetch("/api/recomendar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nivel: state.level,
        tags: [...state.tags],
        perfis: state.profiles,
      }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.erro || "Não foi possível gerar o resultado.");

    await new Promise((resolve) => setTimeout(resolve, 850));
    renderResult(result);
    showScreen("result");
  } catch (error) {
    window.alert(error.message);
    showScreen("quiz");
    renderQuestion();
  }
}

const profileStats = {
  aventureiro: [86, 82, 94],
  sonhador: [98, 79, 71],
  analitico: [84, 96, 88],
  sentimental: [91, 83, 73],
  misterioso: [85, 94, 91],
  reflexivo: [88, 90, 86],
  curioso: [82, 99, 80],
};

function renderResult(result) {
  document.getElementById("profileName").textContent = result.perfil;
  document.getElementById("profileDescription").textContent = result.descricao;
  document.getElementById("profileLevelBadge").textContent = result.nivel;
  document.getElementById("avatarContainer").innerHTML = window.renderProfileAvatar(result.slug);

  const stats = profileStats[result.slug] || [85, 85, 85];
  document.getElementById("statImagination").textContent = stats[0];
  document.getElementById("statCuriosity").textContent = stats[1];
  document.getElementById("statChallenge").textContent = stats[2];

  const codeSeed = [...result.perfil].reduce((total, char) => total + char.charCodeAt(0), 0);
  document.getElementById("profileCode").textContent = `PT-${String(codeSeed).padStart(3, "0")}`;

  const list = document.getElementById("bookRecommendations");
  const template = document.getElementById("bookTemplate");
  list.innerHTML = "";

  result.livros.forEach((book, index) => {
    const item = template.content.firstElementChild.cloneNode(true);
    item.style.animationDelay = `${index * 90}ms`;
    item.querySelector(".book-item__number").textContent = index + 1;
    item.querySelector("h4").textContent = book.titulo;
    item.querySelector("p").textContent = book.autor;
    item.querySelector(".level-pill").textContent = book.nivel;
    list.appendChild(item);
  });
}

function restart() {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  resetDerivedState();
  renderQuestion();
  showScreen("intro");
}

async function updateCollectionCount() {
  try {
    const response = await fetch("/api/status");
    if (!response.ok) return;
    const data = await response.json();
    elements.collectionCount.textContent = new Intl.NumberFormat("pt-BR").format(data.total);
  } catch (_) {
    // O número padrão da página permanece visível se o status não carregar.
  }
}

elements.startButton.addEventListener("click", () => {
  renderQuestion();
  showScreen("quiz");
});
elements.backButton.addEventListener("click", goBack);
elements.printButton.addEventListener("click", () => window.print());
elements.restartButton.addEventListener("click", restart);

document.addEventListener("keydown", (event) => {
  if (screens.quiz.classList.contains("is-hidden")) return;
  const optionIndex = Number(event.key) - 1;
  if (optionIndex >= 0 && optionIndex < questions[state.current].options.length) {
    selectAnswer(optionIndex);
  } else if (event.key === "ArrowLeft") {
    goBack();
  }
});

updateCollectionCount();
