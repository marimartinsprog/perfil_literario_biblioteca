# 📚 Especificação Técnica Mestra: Sistema de Recomendação - Perfil Literário

Este documento serve como a **Especificação Técnica Mestra** para o sistema web "Perfil Literário" desenvolvido para a Biblioteca Senac. Ele detalha a arquitetura, as regras de negócio, a lógica de recomendação e a estrutura do código, incorporando todas as funcionalidades e refinamentos implementados.

---

## 1. Escopo e Arquitetura do Projeto

O sistema é um **Knowledge-Based Recommender** construído em **Flask (Python)**, projetado para cruzar o perfil de leitura de um usuário com o acervo da biblioteca, oferecendo sugestões personalizadas. Ele aborda o problema de *Cold Start* (falta de histórico de leitura) ao inferir preferências do leitor através de um questionário interativo.


### 1.2. Design System e UI (Frontend)

A interface do usuário foi desenvolvida para ser intuitiva, interativa e visualmente alinhada à identidade do Senac. As principais características incluem:

*   **Cores Principais:** Utilização do **Azul Senac (`#004587`)** para elementos de destaque e tipografia, e **Laranja Senac (`#F7941D`)** para botões de ação e interatividade, conforme a identidade visual da instituição.
*   **Comportamento Interativo:** O questionário no `index.html` não recarrega a página a cada resposta. A navegação entre as perguntas é fluida, e a submissão final do formulário leva à página de resultados.
*   **Responsividade:** O layout deverá ser adaptado para diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktops. O designer será adaptado também para dispositivos touch screen.
*   **Botões:** Botões para passar para próxima pergunta e voltar, deverão ser de acordo com o layout de cada dispositivo. Incluir um botão com design moderno.  
*   **Páginas:** Cada página deverá simular um livro e ao passar para a próxima pergunta, deverá ter um efeito de página de livro passando. 
*   **Resultado:** O resultado deverá informar o perfil do leitor em formato de um card estilo jogo de Trunfo, com um desenho de personagem/avatar de acordo com o perfil gerado, junto do nome do perfil gerado do leitor e abaixo deverá mostrar as sugestões de livros e seus devidos autores e o nível de cada livro (iniciante, intermediário ou avançado). A página do resultado deverá apresentar um layout adaptado para a impressão na máquina Sweda. O card, preciso que você monte com formas pretas que possibilita criar uma silhueta de cada perfil. Tente criar todo card utilizando essas formas e deixe os cards guardado como exemplo de acordo com cada perfil gerado.

---

## 2. A Teoria: Conjuntos e Similaridade de Jaccard

O sistema emprega um **Knowledge-Based Recommender** que utiliza a **Teoria dos Conjuntos** e a **Similaridade de Jaccard** para gerar recomendações. Diferente de sistemas baseados em Redes Neurais, esta abordagem é transparente e eficaz para acervos com dados estruturados.

### 2.1. Como o Perfil da Pessoa é Montado?

O questionário de 6 perguntas (com 5 opções cada) mapeia as preferências do leitor para um conjunto de **tags técnicas** invisíveis. Por exemplo, uma resposta pode injetar tags como `{'fantasia', 'ficção_científica'}` no perfil do leitor. O sistema então realiza a **união matemática** de todas as tags geradas pelas respostas, criando um **Perfil Literário** único para o usuário. Segue abaixo as tags que iremos filtrar:
```
        "fantasia": ["fantasia", "magia", "bruxa", "dragão", "castelo", "elfos", "anões"]
        "ficcao_cientifica": ["ficção científica", "robô", "espaço", "futuro", "tecnologia", "alien", "distopia"],
        "misterio": ["mistério", "crime", "investigação", "detetive", "suspense", "policial", "assassinato", "enigma"],
        "romance": ["romance", "amor", "paixão", "casal", "namoro", "sentimental"],
        "aventura": ["aventura", "jornada", "viagem", "exploração", "herói"],
        "terror": ["terror", "horror", "medo", "fantasma", "sombrio", "morte", "zumbi"],
        "biografia": ["biografia", "história de vida", "memórias"],
        "historia": ["história", "passado", "guerra", "império", "século"],
        "filosofia": ["filosofia", "ética", "pensamento", "existencialismo", "platão", "aristóteles", "nietzsche"],
        "psicologia": ["psicologia", "mente", "comportamento", "terapia", "freud", "jung"],
        "autoajuda": ["autoajuda", "desenvolvimento pessoal", "sucesso", "motivação", "inspirador"],
        "juvenil": ["juvenil", "jovem", "adolescente", "escola"],
        "infantil": ["infantil", "criança", "fábula", "contos"],
        "classico": ["clássico", "machado de assis", "shakespeare", "dostoievski", "tolstoi"],
        "poesia": ["poesia", "poema", "versos", "rima"]
```
### 2.2. A Similaridade de Jaccard

Com o Perfil do Usuário (conjunto de tags) em mãos, o algoritmo compara este perfil com o conjunto de tags de cada livro no acervo. A **Similaridade de Jaccard** é calculada pela fórmula:

`J(A, B) = |A ∩ B| / |A ∪ B|`

Onde:
*   `A` é o conjunto de tags do perfil do usuário.
*   `B` é o conjunto de tags de um livro.
*   `|A ∩ B|` (Intersecção) representa o número de tags que o usuário e o livro têm em comum.
*   `|A ∪ B|` (União) representa o número total de tags únicas quando os conjuntos do usuário e do livro são combinados.

O resultado é um `Score` de compatibilidade entre 0 e 1, indicando o quão similar o livro é ao perfil do leitor. Os livros com os maiores scores são recomendados.

---

## 3. Regras de Negócio Detalhadas

As regras de negócio foram cuidadosamente desenvolvidas para oferecer recomendações precisas e relevantes, considerando as nuances dos leitores.

### 3.1. Níveis de Leitura

A primeira pergunta do questionário classifica o leitor em um dos três níveis, influenciando diretamente as recomendações:

*   **Iniciante:** Leitores que estão começando ou retornando à leitura. O sistema prioriza livros mais curtos, juvenis, contos, autoajuda, poesias ou gêneros de leitura rápida (como suspense), evitando obras densas ou clássicos complexos.
*   **Intermediário:** Leitores ocasionais que buscam histórias envolventes. Recebem uma gama mais ampla de sugestões, equilibrando profundidade e acessibilidade.
*   **Avançado:** Leitores frequentes que apreciam obras densas, complexas e desafiadoras. O sistema inclui clássicos, filosofia e literatura mais exigente em suas recomendações.

### 3.2. Perfis Literários

O sistema utiliza 7 perfis literários principais, agrupados a partir de 15 perfis iniciais para otimizar a experiência com um questionário mais curto. Cada perfil é associado a um conjunto específico de tags:

| Perfil       | Emoji | Descrição                                                              | Tags Associadas (Exemplos)                                     |
| :----------- | :---- | :--------------------------------------------------------------------- | :------------------------------------------------------------- |
| **Aventureiro** | 🧭    | Busca adrenalina e grandes jornadas; ama histórias de exploração.       | `aventura`, `jornada`, `viagem`, `exploração`, `herói`         |
| **Sonhador**    | ✨    | Imaginação é o guia; adora fugir para mundos mágicos e fantásticos.    | `fantasia`, `magia`, `bruxa`, `elfo`, `dragão`, `mitologia`    |
| **Analítico**   | 🔬    | Gosta de lógica, ciência e futuro; interessa-se por como as coisas funcionam. | `ficcao_cientifica`, `robô`, `espaço`, `futuro`, `tecnologia`  |
| **Sentimental** | 🧡    | Conecta-se pelas emoções; valoriza amor, família e relações humanas.    | `romance`, `amor`, `paixão`, `casal`, `drama_familiar`         |
| **Misterioso**  | 🔍    | Adora enigmas, suspense e mistério; mantém-se lendo até o fim.         | `misterio`, `crime`, `investigacao`, `detetive`, `suspense`    |
| **Reflexivo**   | 🧘    | Busca profundidade; gosta de livros que fazem pensar sobre a vida.      | `filosofia`, `ética`, `pensamento`, `existencialismo`, `espiritualidade` |
| **Curioso**     | 📚    | Eterno aprendiz; ama descobrir fatos reais, história e biografias.      | `biografia`, `historia`, `passado`, `documentario`, `conhecimento` |

### 3.3. Diversidade de Autores

Para enriquecer a experiência do leitor e evitar a repetição excessiva, o algoritmo de recomendação inclui uma regra de diversidade: as 5 sugestões de livros apresentadas são, preferencialmente, de **autores diferentes**. Caso o acervo seja muito limitado em um nicho específico, o sistema pode apresentar no máximo dois livros do mesmo autor.

---

## 4. Painel Administrativo

O sistema inclui um **Painel Administrativo** acessível via web, permitindo que a equipe da biblioteca gerencie o acervo de livros de forma autônoma, sem a necessidade de intervenção no código.

### 4.1. Acesso ao Painel

*   **URL:** `http://127.0.0.1:5000/admin` (quando rodando localmente)
*   **Senha:** `biblioteca2026` (pode ser alterada diretamente no `app.py`)

### 4.2. Funcionalidades

O painel oferece duas formas principais de atualização do acervo:

1.  **Upload de Arquivo CSV:**
    *   Permite o upload de um arquivo CSV contendo as colunas `TÍTULO` e `AUTOR`.
    *   O sistema processa o CSV, gera tags e níveis para cada livro, e atualiza o `acervo_niveis.json`.
2.  **Sincronização com Google Sheets:**
    *   Permite colar o link de uma planilha do Google Sheets (com acesso público).
    *   O sistema baixa o conteúdo da planilha em tempo real, processa os livros e atualiza o `acervo_niveis.json`.

### 4.3. Geração Automática de Tags e Níveis

Ao realizar um upload ou sincronização, o `app.py` executa a lógica de processamento:

*   **`gerar_tags_livro(titulo, autor)`:** Analisa o título e autor do livro para atribuir tags relevantes (ex: `fantasia`, `misterio`, `historia`).
*   **`classificar_nivel_livro(titulo, autor, tags)`:** Baseado nas tags e em palavras-chave no título/autor, classifica o livro como `iniciante`, `intermediario` ou `avancado`.

### 4.4. Status do Acervo

O painel exibe informações em tempo real sobre o acervo:

*   **Acervo Atual:** Número total de livros cadastrados.
*   **Última Atualização:** Data e hora da última vez que o acervo foi atualizado.

---

## 5. Considerações Finais

Este sistema representa uma solução robusta e flexível para a mediação de leitura na Biblioteca Senac. A arquitetura modular permite futuras expansões, como a integração com um banco de dados relacional para persistência de dados e funcionalidades mais avançadas de gestão de acervo. A capacidade de atualização autônoma garante que o sistema permaneça sempre relevante e alinhado às novidades da biblioteca.

---

**Desenvolvido por:** Manus AI
**Data:** 29 de Julho de 2026
