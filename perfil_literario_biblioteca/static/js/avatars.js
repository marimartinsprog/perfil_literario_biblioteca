const avatarSvgs = {
  aventureiro: `
    <svg viewBox="0 0 320 280" role="img" aria-label="Silhueta de um explorador">
      <g fill="currentColor">
        <circle cx="166" cy="78" r="36"/>
        <path d="M123 72c13-38 76-42 92-3l-12 4c-12-20-55-22-69 2z"/>
        <path d="M114 70h109c8 0 11 11 3 15l-13 6H116l-13-6c-8-4-5-15 11-15z"/>
        <path d="M111 272c5-79 14-130 41-148 7-5 19-8 29-4 36 12 49 67 49 152z"/>
        <rect x="76" y="139" width="48" height="101" rx="17" transform="rotate(8 100 190)"/>
        <rect x="217" y="131" width="17" height="123" rx="8" transform="rotate(-19 225 192)"/>
        <circle cx="246" cy="125" r="25" fill="none" stroke="currentColor" stroke-width="11"/>
        <path d="M246 105l7 23-22 10z" fill="#fff"/>
        <path d="M148 137h38l7 59-27 25-26-26z" fill="#fff" opacity=".2"/>
      </g>
    </svg>`,

  sonhador: `
    <svg viewBox="0 0 320 280" role="img" aria-label="Silhueta de uma pessoa sonhadora">
      <g fill="currentColor">
        <circle cx="161" cy="91" r="36"/>
        <path d="M89 86l62-73 43 60 46 16-150 4z"/>
        <path d="M118 80c14 9 72 10 91-3l2 17c-18 14-77 13-96 0z"/>
        <path d="M91 273c7-88 24-140 68-145 47 4 68 57 73 145z"/>
        <path d="M129 147l30 27 31-27-7 77-24 24-25-24z" fill="#fff" opacity=".18"/>
        <path d="M59 75l5 15 16 5-16 5-5 16-5-16-16-5 16-5z"/>
        <path d="M252 43l4 12 13 4-13 4-4 13-4-13-13-4 13-4z"/>
        <path d="M263 129l3 9 10 3-10 3-3 10-3-10-10-3 10-3z"/>
        <circle cx="79" cy="145" r="7"/>
        <circle cx="238" cy="188" r="6"/>
      </g>
    </svg>`,

  analitico: `
    <svg viewBox="0 0 320 280" role="img" aria-label="Silhueta de uma pessoa analítica">
      <g fill="currentColor">
        <circle cx="158" cy="83" r="37"/>
        <path d="M104 273c6-89 22-142 55-142 36 0 55 54 59 142z"/>
        <rect x="116" y="72" width="37" height="25" rx="9" fill="#fff" stroke="currentColor" stroke-width="8"/>
        <rect x="165" y="72" width="37" height="25" rx="9" fill="#fff" stroke="currentColor" stroke-width="8"/>
        <rect x="151" y="79" width="18" height="7"/>
        <path d="M120 157h77l-8 62-31 25-31-25z" fill="#fff" opacity=".18"/>
        <circle cx="247" cy="174" r="37" fill="none" stroke="currentColor" stroke-width="12"/>
        <rect x="266" y="199" width="15" height="60" rx="7" transform="rotate(-42 273 229)"/>
        <path d="M247 148v52M221 174h52M229 156l37 37M266 156l-37 37" fill="none" stroke="currentColor" stroke-width="7"/>
        <circle cx="77" cy="181" r="24"/>
        <circle cx="77" cy="181" r="9" fill="#fff"/>
        <rect x="72" y="143" width="10" height="22" rx="4"/>
        <rect x="72" y="197" width="10" height="22" rx="4"/>
        <rect x="39" y="176" width="22" height="10" rx="4"/>
        <rect x="93" y="176" width="22" height="10" rx="4"/>
      </g>
    </svg>`,

  sentimental: `
    <svg viewBox="0 0 320 280" role="img" aria-label="Silhueta de uma pessoa sentimental">
      <g fill="currentColor">
        <circle cx="160" cy="79" r="37"/>
        <path d="M112 67c12-45 83-45 96 1-8-9-18-15-28-18-5 10-15 18-31 22-10 3-23 3-37-5z"/>
        <path d="M91 273c7-88 25-142 68-142s63 54 69 142z"/>
        <path d="M160 230c-8-22-51-35-51-72 0-22 27-33 45-12l6 9 7-9c18-21 45-10 45 12 0 37-43 50-52 72z" fill="#fff"/>
        <path d="M160 219c-6-17-37-28-37-56 0-14 17-20 29-7l8 10 8-10c12-13 29-7 29 7 0 28-31 39-37 56z"/>
        <path d="M54 102c-5-13-28-20-28-41 0-13 16-18 26-7l5 7 5-7c10-11 26-6 26 7 0 21-23 28-29 41z"/>
        <path d="M257 120c-4-10-21-15-21-30 0-9 12-13 19-5l4 5 4-5c7-8 19-4 19 5 0 15-17 20-21 30z"/>
      </g>
    </svg>`,

  misterioso: `
    <svg viewBox="0 0 320 280" role="img" aria-label="Silhueta de um investigador misterioso">
      <g fill="currentColor">
        <circle cx="154" cy="92" r="35"/>
        <path d="M104 78c10-39 88-45 105 0z"/>
        <rect x="86" y="75" width="139" height="17" rx="8"/>
        <path d="M88 273c5-89 23-143 67-143 46 0 64 55 69 143z"/>
        <path d="M114 137l40 49 42-49-14 104-28 19-27-19z" fill="#fff" opacity=".16"/>
        <path d="M129 91h51c-4 18-15 29-27 29-12 0-21-10-24-29z" fill="#fff" opacity=".22"/>
        <circle cx="238" cy="180" r="35" fill="none" stroke="currentColor" stroke-width="12"/>
        <rect x="259" y="203" width="15" height="63" rx="7" transform="rotate(-43 266 234)"/>
        <circle cx="238" cy="180" r="9"/>
        <path d="M56 51h39v9H56zM50 71h53v8H50zM64 91h27v8H64z"/>
      </g>
    </svg>`,

  reflexivo: `
    <svg viewBox="0 0 320 280" role="img" aria-label="Silhueta de uma pessoa em reflexão">
      <g fill="currentColor">
        <circle cx="160" cy="61" r="32"/>
        <path d="M119 126c5-37 20-54 41-54 22 0 37 18 42 54l-10 54h-65z"/>
        <path d="M160 151c-26 0-47 21-47 47 0 18 10 34 25 42H70c-27 0-41-32-22-51l39-39 18 18-24 24h48z"/>
        <path d="M160 151c26 0 47 21 47 47 0 18-10 34-25 42h68c27 0 41-32 22-51l-39-39-18 18 24 24h-48z"/>
        <path d="M79 260c25-29 52-43 81-43s56 14 81 43z"/>
        <circle cx="61" cy="74" r="5"/><circle cx="259" cy="74" r="5"/>
        <circle cx="83" cy="42" r="4"/><circle cx="237" cy="42" r="4"/>
        <path d="M160 8v20M99 18l12 17M221 18l-12 17" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
      </g>
    </svg>`,

  curioso: `
    <svg viewBox="0 0 320 280" role="img" aria-label="Silhueta de uma pessoa curiosa lendo">
      <g fill="currentColor">
        <circle cx="160" cy="73" r="35"/>
        <path d="M119 62c12-40 74-39 84 1-15-9-28-13-40-12-11 1-26 4-44 11z"/>
        <path d="M105 191c4-74 21-105 55-105s51 31 55 105z"/>
        <path d="M39 137c45 0 82 10 121 39v86c-37-26-76-38-121-37z"/>
        <path d="M281 137c-45 0-82 10-121 39v86c37-26 76-38 121-37z"/>
        <path d="M153 177h14v86h-14z" fill="#fff" opacity=".35"/>
        <circle cx="77" cy="84" r="31" fill="none" stroke="currentColor" stroke-width="11"/>
        <rect x="91" y="105" width="14" height="54" rx="7" transform="rotate(-38 98 132)"/>
        <path d="M240 34l5 14 15 5-15 5-5 15-5-15-15-5 15-5z"/>
      </g>
    </svg>`,
};

window.renderProfileAvatar = function renderProfileAvatar(slug) {
  return avatarSvgs[slug] || avatarSvgs.curioso;
};
