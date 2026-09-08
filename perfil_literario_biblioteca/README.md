# Perfil Literário — Biblioteca Senac

Site em Flask que identifica o nível e o perfil literário do visitante e recomenda cinco livros do acervo, priorizando autores diferentes.

## O que está pronto

- Primeira pergunta com três níveis: iniciante, intermediário e avançado.
- Cinco perguntas adicionais para formar as tags e a pontuação dos sete perfis.
- Transição em 3D simulando o virar de uma página.
- Resultado no formato de carta de Trunfo.
- Sete avatares em SVG construídos com formas pretas: Aventureiro, Sonhador, Analítico, Sentimental, Misterioso, Reflexivo e Curioso.
- Cinco recomendações extraídas dos 1.133 títulos do arquivo enviado.
- Regra de diversidade que agrupa variações do mesmo sobrenome e evita repetição de autor.
- Similaridade de Jaccard combinada com compatibilidade de nível.
- Layout responsivo para computador, celular e tela touch.
- Impressão em formato térmico de 80 mm, compatível com a proposta da Sweda.
- Painel administrativo para CSV/XLSX e Google Sheets público.

## Como executar no Windows

1. Dê dois cliques em `iniciar.bat`.
2. Aguarde a instalação das dependências.
3. Abra `http://127.0.0.1:5000` no navegador.

Também é possível executar manualmente:

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Painel administrativo

Endereço: `http://127.0.0.1:5000/admin`

Senha inicial: `biblioteca2026`

Em produção, altere a senha e a chave da sessão:

```bash
set ADMIN_PASSWORD=uma-senha-forte
set SECRET_KEY=uma-chave-longa-e-aleatoria
python app.py
```

## Formato do acervo

O painel aceita `.csv` ou `.xlsx` com:

- `TÍTULO`
- `AUTOR`
- `Cód` opcional

Ao atualizar o acervo, o sistema gera automaticamente tags e níveis a partir do título e do autor.

## Estrutura

```text
perfil_literario_biblioteca/
├── app.py
├── requirements.txt
├── iniciar.bat
├── iniciar.sh
├── data/
│   ├── acervo.json
│   └── meta.json
├── templates/
│   ├── index.html
│   └── admin.html
├── static/
│   ├── css/style.css
│   └── js/
│       ├── app.js
│       └── avatars.js
└── referencias/
    ├── DOCUMENTACAO.md
    └── ACERVO COMPLETO.xlsx
```

## Observação sobre as recomendações

O arquivo de acervo contém título e autor, mas não contém gênero, número de páginas, sinopse ou classificação editorial. Por isso, as tags e os níveis são inferidos por regras transparentes de palavras-chave e autores. O painel permite atualizar o acervo, e as listas `TAG_KEYWORDS`, `AUTHOR_TAGS` e `ADVANCED_AUTHORS`, em `app.py`, podem ser refinadas pela equipe da biblioteca.
