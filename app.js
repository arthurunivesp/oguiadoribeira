/* ============================================================
   oGuiaDoRibeira — App Principal
   ============================================================ */

// -------------------- DADOS INICIAIS --------------------
const CIDADES_PADRAO = [
  { id: 1,  nome: "Apiaí",          lat: -24.5094, lng: -48.8425, raio: 8, descricao: "Cavernas e ecoturismo", historia: "Apiaí é conhecida por suas cavernas e pelo turismo de natureza no interior do Vale do Ribeira.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 2,  nome: "Cajati",         lat: -24.7361, lng: -48.1225, raio: 8, descricao: "Tradições e natureza", historia: "Cajati preserva tradições culturais e áreas de Mata Atlântica.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 3,  nome: "Cananéia",       lat: -25.0147, lng: -47.9269, raio: 10, descricao: "Ilha do Cardoso e manguezais", historia: "Uma das cidades mais antigas do Brasil, com forte ligação ao mar e à Ilha do Cardoso.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 4,  nome: "Eldorado",       lat: -24.5200, lng: -48.1081, raio: 8, descricao: "Mata Atlântica e trilhas", historia: "Portal para o Parque Estadual Carlos Botelho e trilhas na floresta.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 5,  nome: "Iguape",         lat: -24.7081, lng: -47.5553, raio: 10, descricao: "Centro histórico e cultura", historia: "Rica em patrimônio histórico, casarões coloniais e a Basílica do Bom Jesus.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 6,  nome: "Ilha Comprida",  lat: -24.7400, lng: -47.5400, raio: 12, descricao: "Praias e restinga", historia: "Município-ilha com dezenas de quilômetros de praia e vegetação de restinga.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 7,  nome: "Itanhaém",       lat: -24.1836, lng: -46.7889, raio: 10, descricao: "Praias e história litorânea", historia: "Uma das vilas mais antigas do Brasil, com praias e centro histórico.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 8,  nome: "Jacupiranga",    lat: -24.7036, lng: -48.0044, raio: 8, descricao: "Parque estadual e natureza", historia: "Sede do Parque Estadual de Jacupiranga, com rica biodiversidade.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 9,  nome: "Juquiá",         lat: -24.3206, lng: -47.6350, raio: 8, descricao: "Rio e ecoturismo", historia: "Cidade ribeirinha com potencial para turismo de natureza e pesca.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 10, nome: "Juquitiba",      lat: -23.9619, lng: -47.0686, raio: 10, descricao: "Serra e cachoeiras", historia: "Município da Grande São Paulo com cachoeiras e clima de serra.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 11, nome: "Miracatu",       lat: -24.2814, lng: -47.4586, raio: 8, descricao: "Cachoeiras e Mata Atlântica", historia: "Conhecida pelas cachoeiras e pelo contato com a Mata Atlântica.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 12, nome: "Pariquera-Açu",  lat: -24.7150, lng: -47.8811, raio: 8, descricao: "Agricultura e cultura local", historia: "Importante polo agrícola do Vale do Ribeira.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 13, nome: "Peruíbe",        lat: -24.3200, lng: -46.9981, raio: 10, descricao: "Praias e estância balneária", historia: "Estância balneária com praias, trilhas e o Parque Estadual da Serra do Mar.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 14, nome: "Registro",       lat: -24.4875, lng: -47.8436, raio: 10, descricao: "Capital do Vale do Ribeira", historia: "Principal centro urbano da região, com eventos culturais e gastronomia.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] },
  { id: 15, nome: "Sete Barras",    lat: -24.3875, lng: -47.9256, raio: 8, descricao: "Rio Ribeira e natureza", historia: "Cidade às margens do Rio Ribeira de Iguape, com forte ligação à natureza.", instagram: "", facebook: "", sitePrefeitura: "", fotos: [] }
];

const GUIAS_PADRAO = [
  { id: 1, nome: "Carlos Mendes", cidadeId: 11, foto: "", whatsapp: "5513999990001", referencia: "Guia local com 10 anos de experiência em trilhas e cachoeiras.", especialidades: "Trilhas, cachoeiras, ecoturismo", instagram: "", facebook: "" },
  { id: 2, nome: "Ana Paula Silva", cidadeId: 5, foto: "", whatsapp: "5513999990002", referencia: "Especialista em turismo histórico e cultural de Iguape.", especialidades: "História, centro histórico, cultura caiçara", instagram: "", facebook: "" },
  { id: 3, nome: "Roberto Costa", cidadeId: 3, foto: "", whatsapp: "5513999990003", referencia: "Passeios de barco e trilhas na Ilha do Cardoso.", especialidades: "Passeios de barco, Ilha do Cardoso, pesca", instagram: "", facebook: "" }
];

const EVENTOS_PADRAO = [
  { id: 1, titulo: "Festival de Inverno de Registro", cidadeId: 14, categoria: "cultura", data: "2026-07-15", descricao: "Shows, feira de artesanato e gastronomia típica da região.", endereco: "Praça da Matriz" },
  { id: 2, titulo: "Feira Gastronômica de Iguape", cidadeId: 5, categoria: "gastronomia", data: "2026-09-20", descricao: "Sabores do Vale do Ribeira com pratos à base de peixe e mandioca.", endereco: "Centro Histórico" },
  { id: 3, titulo: "Trilha Ecológica - Parque Estadual", cidadeId: 11, categoria: "cultura", data: "2026-09-21", descricao: "Caminhada guiada pelas trilhas da Mata Atlântica em Miracatu.", endereco: "Parque Estadual Carlos Botelho" },
  { id: 4, titulo: "Noite de Samba na Praia", cidadeId: 13, categoria: "cultura", data: "2026-09-20", descricao: "Samba ao vivo na beira da praia com food trucks.", endereco: "Praia do Centro - Peruíbe" },
  { id: 5, titulo: "Pousada Vale Verde - Pacote Especial", cidadeId: 4, categoria: "hotelaria", data: "2026-09-25", descricao: "Pacote de fim de semana com café da manhã e trilhas inclusas.", endereco: "Estrada do Eldorado, km 12" }
];

const TURISTICOS_PADRAO = [
  { id: 1, nome: "Cachoeira do Paraíso", cidadeId: 11, endereco: "Estrada da Cachoeira, Miracatu", descricao: "Belíssima queda d'água em meio à Mata Atlântica." },
  { id: 2, nome: "Centro Histórico de Iguape", cidadeId: 5, endereco: "Centro, Iguape", descricao: "Casarões coloniais e a Igreja do Bom Jesus." },
  { id: 3, nome: "Praia do Mar Casado", cidadeId: 7, endereco: "Itanhaém", descricao: "Praia calma ideal para famílias." },
  { id: 4, nome: "Ilha do Cardoso", cidadeId: 3, endereco: "Cananéia", descricao: "Parque Estadual com praias desertas e trilhas." }
];

const COMERCIAIS_PADRAO = [
  { id: 1, nome: "Restaurante Sabor do Vale", cidadeId: 14, categoria: "gastronomia", endereco: "Rua XV de Novembro, 120 - Registro", descricao: "Comida caseira e pratos típicos da região." },
  { id: 2, nome: "Pousada Beira Mar", cidadeId: 13, categoria: "hotelaria", endereco: "Av. Beira Mar, 450 - Peruíbe", descricao: "Pousada aconchegante a 50m da praia." },
  { id: 3, nome: "Café da Praça", cidadeId: 5, categoria: "gastronomia", endereco: "Praça da Basílica - Iguape", descricao: "Cafés especiais e doces artesanais." }
];

// -------------------- ESTADO --------------------
let state = {
  cidades: [],
  eventos: [],
  turisticos: [],
  comerciais: [],
  guias: [],
  monitoradas: [],
  filtro: "todos",
  busca: "",
  cidadeFiltro: "",
  tab: "eventos",
  gpsAtivo: false,
  watchId: null,
  cidadeAtual: null,
  adminLogado: false,
  tokenAtual: null,
  editId: null,
  editTipo: null,
  cidadeDetalheId: null
};

// -------------------- STORAGE --------------------
function carregarDados() {
  const raw = localStorage.getItem("oguia_data");
  if (raw) {
    const data = JSON.parse(raw);
    // Mescla campos novos de cidades (historia, fotos etc.) se faltarem
    const salvas = data.cidades || [];
    state.cidades = CIDADES_PADRAO.map(padrao => {
      const s = salvas.find(c => c.id === padrao.id);
      return s ? { ...padrao, ...s } : { ...padrao };
    });
    // Cidades extras cadastradas pelo admin
    salvas.forEach(s => {
      if (!state.cidades.find(c => c.id === s.id)) state.cidades.push(s);
    });
    state.eventos = data.eventos || [...EVENTOS_PADRAO];
    state.turisticos = data.turisticos || [...TURISTICOS_PADRAO];
    state.comerciais = data.comerciais || [...COMERCIAIS_PADRAO];
    state.guias = data.guias || [...GUIAS_PADRAO];
    state.monitoradas = data.monitoradas || state.cidades.map(c => c.id);
  } else {
    state.cidades = CIDADES_PADRAO.map(c => ({ ...c }));
    state.eventos = [...EVENTOS_PADRAO];
    state.turisticos = [...TURISTICOS_PADRAO];
    state.comerciais = [...COMERCIAIS_PADRAO];
    state.guias = [...GUIAS_PADRAO];
    state.monitoradas = state.cidades.map(c => c.id);
    salvarDados();
  }

  // sessão admin
  const sessao = sessionStorage.getItem("oguia_admin");
  if (sessao) {
    const s = JSON.parse(sessao);
    if (s.token && s.email === "ocamofo@gmail.com") {
      state.adminLogado = true;
      state.tokenAtual = s.token;
    }
  }
}

function salvarDados() {
  localStorage.setItem("oguia_data", JSON.stringify({
    cidades: state.cidades,
    eventos: state.eventos,
    turisticos: state.turisticos,
    comerciais: state.comerciais,
    guias: state.guias,
    monitoradas: state.monitoradas
  }));
}

// -------------------- UTIL --------------------
function toast(msg, tempo = 3000) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), tempo);
}

function gerarId(lista) {
  return lista.length ? Math.max(...lista.map(i => i.id)) + 1 : 1;
}

function gerarToken() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let t = "";
  for (let i = 0; i < 8; i++) t += chars[Math.floor(Math.random() * chars.length)];
  return t;
}

function cidadeNome(id) {
  const c = state.cidades.find(x => x.id === id);
  return c ? c.nome : "—";
}

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function hojeStr() {
  return new Date().toISOString().slice(0, 10);
}

function isFimDeSemana(dataStr) {
  if (!dataStr) return false;
  const d = new Date(dataStr + "T12:00:00");
  const day = d.getDay();
  return day === 0 || day === 6;
}

// -------------------- NAVEGAÇÃO --------------------
function showPage(page) {
  document.querySelectorAll("main").forEach(m => m.classList.add("page-hidden"));
  const el = document.getElementById("page-" + page);
  if (el) el.classList.remove("page-hidden");
  window.scrollTo(0, 0);

  if (page === "admin" && !state.adminLogado) {
    showPage("admin-login");
    return;
  }
  if (page === "admin") renderAdmin();
  if (page === "notificacoes") renderMonitoradas();
  if (page === "cidades") renderCidadesFull();
  if (page === "cidade-detalhe") renderCidadeDetalhe();
  if (page === "cadastro-publico") popularSelectCidades("pubCidade");
  if (page === "home") {
    renderEventos();
    renderCidadesHome();
  }
}

// -------------------- RENDER HOME --------------------
function renderCidadesHome() {
  const grid = document.getElementById("cidadesGridHome");
  grid.innerHTML = state.cidades.map(c =>
    `<button class="cidade-chip" onclick="abrirCidade(${c.id})"><span class="pin">📍</span> ${c.nome}</button>`
  ).join("");
}

function renderCidadesFull() {
  const grid = document.getElementById("cidadesGridFull");
  grid.innerHTML = state.cidades.map(c =>
    `<button class="cidade-chip" onclick="abrirCidade(${c.id})"><span class="pin">📍</span> ${c.nome}</button>`
  ).join("");
}

function abrirCidade(id) {
  state.cidadeDetalheId = id;
  showPage("cidade-detalhe");
}

function renderCidadeDetalhe() {
  const c = state.cidades.find(x => x.id === state.cidadeDetalheId);
  if (!c) { showPage("cidades"); return; }

  const fotos = c.fotos || [];
  const capa = fotos[0]
    ? `<img src="${fotos[0]}" alt="${c.nome}">`
    : `<div class="cidade-capa-placeholder">📍</div>`;

  let galeria = "";
  if (fotos.length > 1) {
    galeria = `<div class="cidade-galeria">` +
      fotos.map((f, i) => `<img src="${f}" class="${i===0?'active':''}" onclick="trocarCapaCidade('${f.replace(/'/g, "\\'")}', this)" alt="Foto">`).join("") +
      `</div>`;
  }

  const redes = [];
  if (c.instagram) redes.push(`<a href="${c.instagram.startsWith('http') ? c.instagram : 'https://instagram.com/' + c.instagram.replace('@','')}" target="_blank" class="cidade-rede">📷 Instagram</a>`);
  if (c.facebook) redes.push(`<a href="${c.facebook.startsWith('http') ? c.facebook : 'https://facebook.com/' + c.facebook}" target="_blank" class="cidade-rede">📘 Facebook</a>`);
  if (c.sitePrefeitura) redes.push(`<a href="${c.sitePrefeitura}" target="_blank" class="cidade-rede">🏛 Site da Prefeitura</a>`);

  const mapsUrl = `https://www.google.com/maps?q=${c.lat},${c.lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${c.lat},${c.lng}&navigate=yes`;

  // Eventos da cidade (agora/hoje primeiro)
  const faixas = eventosPorFaixa(c.id);
  const eventosCidade = [...faixas.agora, ...faixas.hoje, ...faixas.proximos];
  let eventosHTML = "";
  if (eventosCidade.length === 0) {
    eventosHTML = `<p class="cidade-empty">Nenhum evento cadastrado no momento.</p>`;
  } else {
    eventosHTML = `<div class="lista-cards">` + eventosCidade.slice(0, 6).map(e => {
      const img = (e.fotos && e.fotos[0]) ? `<img src="${e.fotos[0]}" alt="">` : "📅";
      return `<div class="card" onclick="abrirDetalhe('evento', ${e.id})">
        <div class="card-img">${img}</div>
        <div class="card-body">
          <span class="card-cat">${e.categoria || "evento"}</span>
          <div class="card-title">${e.titulo}</div>
          <div class="card-meta">${e.data ? formatData(e.data) : ""}</div>
          <p class="card-desc">${e.descricao || ""}</p>
        </div>
      </div>`;
    }).join("") + `</div>`;
  }

  // Guias da cidade
  const guias = state.guias.filter(g => g.cidadeId === c.id);
  let guiasHTML = "";
  if (guias.length === 0) {
    guiasHTML = `<p class="cidade-empty">Nenhum guia turístico cadastrado nesta cidade.</p>`;
  } else {
    guiasHTML = `<div class="guias-grid">` + guias.map(g => {
      const foto = g.foto
        ? `<img src="${g.foto}" alt="${g.nome}">`
        : `<div class="guia-foto-ph">${(g.nome || "?").charAt(0)}</div>`;
      const wa = (g.whatsapp || "").replace(/\D/g, "");
      const waLink = wa ? `https://wa.me/${wa}` : "#";
      const redesG = [];
      if (g.instagram) redesG.push(`<a href="${g.instagram.startsWith('http') ? g.instagram : 'https://instagram.com/' + g.instagram.replace('@','')}" target="_blank">Instagram</a>`);
      if (g.facebook) redesG.push(`<a href="${g.facebook.startsWith('http') ? g.facebook : 'https://facebook.com/' + g.facebook}" target="_blank">Facebook</a>`);
      return `<div class="guia-card">
        <div class="guia-foto">${foto}</div>
        <div class="guia-info">
          <strong>${g.nome}</strong>
          <span class="guia-esp">${g.especialidades || ""}</span>
          <p>${g.referencia || ""}</p>
          <div class="guia-acoes">
            ${wa ? `<a href="${waLink}" target="_blank" class="btn btn-sm btn-primary">WhatsApp</a>` : ""}
            ${redesG.join(" · ")}
          </div>
        </div>
      </div>`;
    }).join("") + `</div>`;
  }

  document.getElementById("cidadeDetalheConteudo").innerHTML = `
    <button class="btn-voltar" onclick="showPage('cidades')">← Cidades</button>
    <div class="cidade-hero">
      <div class="cidade-capa" id="cidadeCapa">${capa}</div>
      <div class="cidade-hero-info">
        <h1>${c.nome}</h1>
        <p class="cidade-regiao">Vale do Ribeira — SP</p>
        ${c.descricao ? `<p class="cidade-tagline">${c.descricao}</p>` : ""}
      </div>
    </div>
    ${galeria}
    <div class="cidade-links">
      <a href="${wazeUrl}" target="_blank" class="btn btn-sm btn-primary">Waze</a>
      <a href="${mapsUrl}" target="_blank" class="btn btn-sm btn-outline-green">Google Maps</a>
      ${redes.join("")}
    </div>
    ${c.historia ? `
    <div class="cidade-bloco">
      <h2>Sobre a cidade</h2>
      <p>${c.historia}</p>
    </div>` : ""}
    <div class="cidade-bloco">
      <h2>📅 Eventos em ${c.nome}</h2>
      <p class="section-sub" style="text-align:left;margin-bottom:16px">O que está acontecendo agora e hoje aparece primeiro</p>
      ${eventosHTML}
      <button class="btn btn-outline-green" style="margin-top:12px" onclick="filtrarPorCidade(${c.id})">Ver todos os eventos →</button>
    </div>
    <div class="cidade-bloco">
      <h2>🧭 Guias turísticos locais</h2>
      ${guiasHTML}
    </div>
  `;
}

function trocarCapaCidade(src, thumb) {
  const capa = document.querySelector("#cidadeCapa img");
  if (capa) capa.src = src;
  else {
    document.getElementById("cidadeCapa").innerHTML = `<img src="${src}" alt="">`;
  }
  document.querySelectorAll(".cidade-galeria img").forEach(img => img.classList.remove("active"));
  if (thumb) thumb.classList.add("active");
}

function popularSelectCidades(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  sel.innerHTML = state.cidades.map(c =>
    `<option value="${c.id}">${c.nome}</option>`
  ).join("");
}

function popularFiltroCidade() {
  const sel = document.getElementById("filtroCidade");
  sel.innerHTML = `<option value="">Todas as cidades</option>` +
    state.cidades.map(c => `<option value="${c.id}">${c.nome}</option>`).join("");
}

function renderEventos() {
  const lista = document.getElementById("listaEventos");
  const empty = document.getElementById("emptyState");
  let items = [...state.eventos];

  // filtros
  if (state.filtro === "cultura") items = items.filter(e => e.categoria === "cultura");
  if (state.filtro === "gastronomia") items = items.filter(e => e.categoria === "gastronomia");
  if (state.filtro === "hotelaria") items = items.filter(e => e.categoria === "hotelaria");
  if (state.filtro === "hoje") items = items.filter(e => e.data === hojeStr());
  if (state.filtro === "fds") items = items.filter(e => isFimDeSemana(e.data));

  if (state.cidadeFiltro) {
    items = items.filter(e => e.cidadeId == state.cidadeFiltro);
  }

  if (state.busca) {
    const q = state.busca.toLowerCase();
    items = items.filter(e =>
      e.titulo.toLowerCase().includes(q) ||
      (e.descricao || "").toLowerCase().includes(q) ||
      cidadeNome(e.cidadeId).toLowerCase().includes(q)
    );
  }

  if (items.length === 0) {
    lista.innerHTML = "";
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    lista.innerHTML = items.map(e => {
      const capa = (e.fotos && e.fotos[0]) ? `<img src="${e.fotos[0]}" alt="${e.titulo}">` : "📅";
      return `
      <div class="card" onclick="abrirDetalhe('evento', ${e.id})">
        <div class="card-img">${capa}</div>
        <div class="card-body">
          <span class="card-cat">${e.categoria || "evento"}</span>
          <div class="card-title">${e.titulo}</div>
          <div class="card-meta">
            <span>📍 ${cidadeNome(e.cidadeId)}</span>
            ${e.data ? `<span>🗓 ${formatData(e.data)}</span>` : ""}
          </div>
          <p class="card-desc">${e.descricao || ""}</p>
        </div>
      </div>`;
    }).join("");
  }
}

function renderLocais() {
  const lista = document.getElementById("listaLocais");
  const empty = document.getElementById("emptyState");
  let items = [
    ...state.turisticos.map(t => ({...t, tipo: "turistico"})),
    ...state.comerciais.map(c => ({...c, tipo: "comercial"}))
  ];

  if (state.cidadeFiltro) {
    items = items.filter(i => i.cidadeId == state.cidadeFiltro);
  }
  if (state.busca) {
    const q = state.busca.toLowerCase();
    items = items.filter(i =>
      i.nome.toLowerCase().includes(q) ||
      (i.descricao || "").toLowerCase().includes(q)
    );
  }

  if (items.length === 0) {
    lista.innerHTML = "";
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    lista.innerHTML = items.map(i => {
      const icon = i.tipo === "turistico" ? "🏞" : "🏪";
      const capa = (i.fotos && i.fotos[0]) ? `<img src="${i.fotos[0]}" alt="${i.nome}">` : icon;
      return `
      <div class="card" onclick="abrirDetalhe('${i.tipo}', ${i.id})">
        <div class="card-img">${capa}</div>
        <div class="card-body">
          <span class="card-cat">${i.tipo === "turistico" ? "Turístico" : (i.categoria || "Comercial")}</span>
          <div class="card-title">${i.nome}</div>
          <div class="card-meta">
            <span>📍 ${cidadeNome(i.cidadeId)}</span>
          </div>
          <p class="card-desc">${i.descricao || i.endereco || ""}</p>
        </div>
      </div>`;
    }).join("");
  }
}

function formatData(d) {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

// -------------------- FILTROS --------------------
function switchTab(tab) {
  state.tab = tab;
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
  document.getElementById("listaEventos").style.display = tab === "eventos" ? "grid" : "none";
  document.getElementById("listaLocais").style.display = tab === "locais" ? "grid" : "none";
  if (tab === "eventos") renderEventos();
  else renderLocais();
}

document.querySelectorAll(".filtro").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("limpar")) return;
    document.querySelectorAll(".filtro").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.filtro = btn.dataset.filtro;
    if (state.tab === "eventos") renderEventos();
  });
});

function limparFiltros() {
  state.filtro = "todos";
  state.busca = "";
  state.cidadeFiltro = "";
  document.querySelectorAll(".filtro").forEach(b => b.classList.remove("active"));
  document.querySelector('.filtro[data-filtro="todos"]').classList.add("active");
  document.getElementById("buscaEventos").value = "";
  document.getElementById("filtroCidade").value = "";
  if (state.tab === "eventos") renderEventos();
  else renderLocais();
}

function filtrarEventos() {
  state.busca = document.getElementById("buscaEventos").value;
  state.cidadeFiltro = document.getElementById("filtroCidade").value;
  if (state.tab === "eventos") renderEventos();
  else renderLocais();
}

function filtrarHoje() {
  showPage("home");
  state.filtro = "hoje";
  document.querySelectorAll(".filtro").forEach(b => b.classList.remove("active"));
  document.querySelector('.filtro[data-filtro="hoje"]').classList.add("active");
  renderEventos();
}

function filtrarPorCidade(id) {
  showPage("home");
  state.cidadeFiltro = String(id);
  document.getElementById("filtroCidade").value = id;
  renderEventos();
  toast(`Mostrando eventos de ${cidadeNome(id)}`);
}

// -------------------- GPS --------------------
function pedirPermissaoNotif() {
  if (!("Notification" in window)) {
    toast("Seu navegador não suporta notificações.");
    return;
  }
  Notification.requestPermission().then(perm => {
    if (perm === "granted") {
      toast("Notificações ativadas!");
      document.getElementById("btnPermNotif").textContent = "✓ Ativadas";
      document.getElementById("btnPermNotif").disabled = true;
    } else {
      toast("Permissão negada.");
    }
  });
}

function toggleGPS() {
  if (state.gpsAtivo) {
    pararGPS();
  } else {
    iniciarGPS();
  }
}

function iniciarGPS() {
  if (!navigator.geolocation) {
    toast("Geolocalização não suportada neste navegador.");
    return;
  }

  const btn = document.getElementById("btnGPS");
  btn.textContent = "Rastreando...";
  btn.disabled = true;

  state.watchId = navigator.geolocation.watchPosition(
    (pos) => {
      state.gpsAtivo = true;
      btn.textContent = "⏹ Parar rastreamento";
      btn.disabled = false;
      btn.onclick = toggleGPS;

      const { latitude, longitude } = pos.coords;
      verificarCidade(latitude, longitude);
      atualizarDistancias(latitude, longitude);

      const status = document.getElementById("gpsStatus");
      status.className = "gps-status active";
      status.textContent = `📍 GPS ativo — Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
    },
    (err) => {
      toast("Erro ao obter localização: " + err.message);
      btn.textContent = "Iniciar rastreamento";
      btn.disabled = false;
      state.gpsAtivo = false;
    },
    { enableHighAccuracy: true, maximumAge: 10000, timeout: 15000 }
  );
}

function pararGPS() {
  if (state.watchId !== null) {
    navigator.geolocation.clearWatch(state.watchId);
    state.watchId = null;
  }
  state.gpsAtivo = false;
  state.cidadeAtual = null;
  document.getElementById("btnGPS").textContent = "Iniciar rastreamento";
  document.getElementById("localAtual").style.display = "none";
  document.getElementById("gpsStatus").className = "gps-status";
  fecharGpsFloat();
  toast("Rastreamento GPS desativado.");
}

// Última posição conhecida (para fallback de cidade mais próxima)
let ultimaPos = { lat: null, lng: null };
let cidadeFloatId = null; // cidade da caixa flutuante atual

function verificarCidade(lat, lng) {
  ultimaPos = { lat, lng };
  let maisProxima = null;
  let menorDist = Infinity;

  for (const c of state.cidades) {
    if (!state.monitoradas.includes(c.id)) continue;
    const dist = haversine(lat, lng, c.lat, c.lng);
    if (dist < c.raio && dist < menorDist) {
      menorDist = dist;
      maisProxima = c;
    }
  }

  if (maisProxima) {
    if (state.cidadeAtual !== maisProxima.id) {
      state.cidadeAtual = maisProxima.id;
      aoChegarNaCidade(maisProxima);
    }
  } else {
    state.cidadeAtual = null;
    document.getElementById("localAtual").style.display = "none";
  }
}

/** Classifica evento: 'agora' | 'hoje' | 'proximo' | 'outro' */
function classificarEvento(e) {
  const hojeStr_ = hojeStr();
  if (!e.data) return "hoje"; // sem data = trata como disponível hoje
  if (e.data === hojeStr_) {
    // Cultura e gastronomia de hoje contam como "agora" (mais urgentes)
    if (e.categoria === "cultura" || e.categoria === "gastronomia") return "agora";
    return "hoje";
  }
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const d = new Date(e.data + "T12:00:00");
  const limite = new Date(hoje);
  limite.setDate(limite.getDate() + 14);
  if (d > hoje && d <= limite) return "proximo";
  return "outro";
}

/** Eventos de uma cidade por faixa: agora, hoje, proximos */
function eventosPorFaixa(cidadeId) {
  const lista = state.eventos.filter(e => e.cidadeId === cidadeId);
  const agora = [];
  const hoje = [];
  const proximos = [];

  for (const e of lista) {
    const faixa = classificarEvento(e);
    if (faixa === "agora") agora.push(e);
    else if (faixa === "hoje") hoje.push(e);
    else if (faixa === "proximo") proximos.push(e);
  }

  // Dentro de cada faixa: cultura primeiro, depois data
  const sortFn = (a, b) => {
    const catA = a.categoria === "cultura" ? 0 : 1;
    const catB = b.categoria === "cultura" ? 0 : 1;
    if (catA !== catB) return catA - catB;
    return (a.data || "9999").localeCompare(b.data || "9999");
  };
  agora.sort(sortFn);
  hoje.sort(sortFn);
  proximos.sort(sortFn);

  return { agora, hoje, proximos };
}

/** Encontra a cidade monitorada mais próxima (excluindo uma, se informada) */
function cidadeMaisProxima(excluirId = null) {
  if (ultimaPos.lat == null) return null;
  let melhor = null;
  let menor = Infinity;
  for (const c of state.cidades) {
    if (!state.monitoradas.includes(c.id)) continue;
    if (excluirId && c.id === excluirId) continue;
    const dist = haversine(ultimaPos.lat, ultimaPos.lng, c.lat, c.lng);
    if (dist < menor) {
      menor = dist;
      melhor = { cidade: c, dist };
    }
  }
  return melhor;
}

/**
 * Monta lista prioritária de eventos:
 * 1. Agora (local) → 2. Hoje (local) → 3. Próximos (local)
 * 4. Agora (mais próxima) → 5. Hoje (mais próxima) → 6. Próximos (mais próxima)
 */
function montarEventosPrioritarios(cidadeLocal) {
  const resultado = [];
  const idsUsados = new Set();
  let nivelUsado = null; // 'local-agora' | 'local-hoje' | ...
  let fallbackMsg = "";
  let cidadeRef = cidadeLocal;

  function adicionar(lista, nivel, cidadeOrigem, distKm) {
    for (const e of lista) {
      if (idsUsados.has(e.id)) continue;
      idsUsados.add(e.id);
      resultado.push({
        evento: e,
        nivel,
        cidadeOrigem,
        distKm: distKm || 0
      });
      if (!nivelUsado) nivelUsado = nivel;
    }
  }

  // —— LOCAL ——
  const local = eventosPorFaixa(cidadeLocal.id);
  adicionar(local.agora, "local-agora", cidadeLocal, 0);
  adicionar(local.hoje, "local-hoje", cidadeLocal, 0);
  adicionar(local.proximos, "local-proximo", cidadeLocal, 0);

  // —— CIDADE MAIS PRÓXIMA (só se local não preencheu bem ou para completar) ——
  const prox = cidadeMaisProxima(cidadeLocal.id);
  if (prox) {
    const faixasProx = eventosPorFaixa(prox.cidade.id);
    const tinhaLocal = local.agora.length + local.hoje.length + local.proximos.length > 0;

    if (!tinhaLocal) {
      fallbackMsg = `Nenhum evento em ${cidadeLocal.nome} agora. Mostrando a cidade mais próxima: <strong>${prox.cidade.nome}</strong> (${prox.dist.toFixed(0)} km).`;
      cidadeRef = prox.cidade;
    }

    adicionar(faixasProx.agora, "prox-agora", prox.cidade, prox.dist);
    adicionar(faixasProx.hoje, "prox-hoje", prox.cidade, prox.dist);
    adicionar(faixasProx.proximos, "prox-proximo", prox.cidade, prox.dist);
  }

  return { itens: resultado, nivelUsado, fallbackMsg, cidadeRef };
}

function labelNivel(nivel) {
  if (nivel === "local-agora" || nivel === "prox-agora") return "AGORA";
  if (nivel === "local-hoje" || nivel === "prox-hoje") return "HOJE";
  if (nivel === "local-proximo" || nivel === "prox-proximo") return "EM BREVE";
  return "";
}

function subtituloPorNivel(nivel, qtd) {
  if (!nivel) return "Confira o que há na região";
  if (nivel.startsWith("local-agora") || nivel === "local-agora")
    return qtd === 1 ? "1 evento acontecendo agora" : `${qtd} eventos — prioridade agora`;
  if (nivel === "local-hoje")
    return qtd === 1 ? "1 evento hoje na sua cidade" : `${qtd} eventos hoje na sua cidade`;
  if (nivel === "local-proximo")
    return "Próximos eventos na sua cidade";
  if (nivel.startsWith("prox-"))
    return "Eventos na cidade mais próxima";
  return `${qtd} evento${qtd > 1 ? "s" : ""} para você`;
}

function aoChegarNaCidade(cidade) {
  const banner = document.getElementById("localAtual");
  banner.style.display = "flex";
  document.getElementById("cidadeAtualNome").textContent = cidade.nome;

  const faixas = eventosPorFaixa(cidade.id);
  const qtdAgora = faixas.agora.length;
  const qtdHoje = faixas.hoje.length;
  const turisticos = state.turisticos.filter(t => t.cidadeId === cidade.id);

  let resumo = [];
  if (qtdAgora) resumo.push(`${qtdAgora} agora`);
  if (qtdHoje) resumo.push(`${qtdHoje} hoje`);
  resumo.push(`${turisticos.length} ponto(s) turístico(s)`);
  document.getElementById("eventosAgora").textContent = resumo.join(" · ");

  if (Notification.permission === "granted") {
    const msg = qtdAgora
      ? `${qtdAgora} evento(s) acontecendo agora em ${cidade.nome}!`
      : qtdHoje
        ? `${qtdHoje} evento(s) hoje em ${cidade.nome}.`
        : `Veja o que está rolando perto de ${cidade.nome}.`;
    new Notification(`📍 Você chegou em ${cidade.nome}!`, {
      body: msg,
      icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📍</text></svg>"
    });
  }

  const status = document.getElementById("gpsStatus");
  status.className = "gps-status alert";
  status.innerHTML = qtdAgora
    ? `🎉 Você chegou em <strong>${cidade.nome}</strong> — há eventos <strong>agora</strong>!`
    : `🎉 Você chegou em <strong>${cidade.nome}</strong>! Veja o que está acontecendo.`;

  toast(qtdAgora ? `Chegou em ${cidade.nome} — eventos agora!` : `Chegou em ${cidade.nome}!`);
  mostrarGpsFloat(cidade);
}

function mostrarGpsFloat(cidade) {
  const { itens, nivelUsado, fallbackMsg, cidadeRef } = montarEventosPrioritarios(cidade);
  cidadeFloatId = cidade.id; // mantém filtro na cidade do GPS

  const topItens = itens.slice(0, 5);
  const temAgoraLocal = itens.some(i => i.nivel === "local-agora");

  document.getElementById("gpsFloatCidade").textContent = cidade.nome;
  document.getElementById("gpsFloatSub").textContent = subtituloPorNivel(
    nivelUsado,
    topItens.length
  );

  const body = document.getElementById("gpsFloatBody");
  let html = "";

  if (fallbackMsg) {
    html += `<div class="gps-float-fallback">${fallbackMsg}</div>`;
  } else if (temAgoraLocal) {
    html += `<div class="gps-float-fallback gps-float-agora">🔥 Eventos acontecendo <strong>agora</strong> na sua localização</div>`;
  }

  if (topItens.length === 0) {
    html += `<div class="gps-float-empty">Nenhum evento encontrado na região no momento.<br>Explore os pontos turísticos!</div>`;
  } else {
    // Agrupa visualmente por seção (Agora / Hoje / Em breve)
    let ultimaSecao = "";
    for (const item of topItens) {
      const secao = labelNivel(item.nivel);
      if (secao && secao !== ultimaSecao) {
        html += `<div class="gps-float-secao">${secao}</div>`;
        ultimaSecao = secao;
      }
      const e = item.evento;
      const img = (e.fotos && e.fotos[0])
        ? `<img src="${e.fotos[0]}" alt="">`
        : "📅";
      const cidadeLabel = item.cidadeOrigem.id !== cidade.id
        ? ` · ${item.cidadeOrigem.nome} (${item.distKm.toFixed(0)} km)`
        : "";
      html += `
        <div class="gps-float-item" onclick="abrirDetalhe('evento', ${e.id}); fecharGpsFloat();">
          <div class="gps-float-item-img">${img}</div>
          <div class="gps-float-item-info">
            <div class="gps-float-item-cat">${e.categoria || "evento"}</div>
            <div class="gps-float-item-title">${e.titulo}</div>
            <div class="gps-float-item-meta">
              ${e.data ? formatData(e.data) : "Hoje"}${cidadeLabel}
            </div>
          </div>
        </div>`;
    }
  }

  body.innerHTML = html;
  document.getElementById("gpsFloat").style.display = "block";
}

function fecharGpsFloat() {
  document.getElementById("gpsFloat").style.display = "none";
}

function verTodosEventosCidade() {
  fecharGpsFloat();
  if (cidadeFloatId) {
    filtrarPorCidade(cidadeFloatId);
  } else {
    showPage("home");
  }
}

function atualizarDistancias(lat, lng) {
  // Atualiza distâncias na lista de monitoradas se a página estiver aberta
  const grid = document.getElementById("cidadesMonitoradas");
  if (!grid || grid.children.length === 0) return;

  state.cidades.forEach(c => {
    const dist = haversine(lat, lng, c.lat, c.lng);
    const el = grid.querySelector(`[data-cid="${c.id}"] .dist`);
    if (el) el.textContent = dist < 1 ? `${Math.round(dist * 1000)} m` : `${dist.toFixed(0)} km`;
  });
}

// -------------------- MONITORADAS --------------------
function renderMonitoradas() {
  const grid = document.getElementById("cidadesMonitoradas");
  grid.innerHTML = state.cidades.map(c => {
    const sel = state.monitoradas.includes(c.id);
    return `
      <div class="cm-item ${sel ? "selected" : ""}" data-cid="${c.id}" onclick="toggleMonitorada(${c.id})">
        <div class="cm-left">
          <div class="check">${sel ? "✓" : ""}</div>
          <span>${c.nome}</span>
        </div>
        <span class="dist">—</span>
      </div>
    `;
  }).join("");
  atualizarQtdMonitoradas();
}

function toggleMonitorada(id) {
  const idx = state.monitoradas.indexOf(id);
  if (idx >= 0) state.monitoradas.splice(idx, 1);
  else state.monitoradas.push(id);
  salvarDados();
  renderMonitoradas();
}

function desmarcarTodas() {
  state.monitoradas = [];
  salvarDados();
  renderMonitoradas();
}

function atualizarQtdMonitoradas() {
  document.getElementById("qtdMonitoradas").textContent =
    `${state.monitoradas.length} de ${state.cidades.length} cidades selecionadas`;
}

// -------------------- CONTATO / CADASTRO PÚBLICO --------------------
function enviarContato(e) {
  e.preventDefault();
  toast("Mensagem enviada com sucesso! Responderemos em breve.");
  e.target.reset();
}

function togglePublicoFields() {
  const tipo = document.getElementById("pubTipo").value;
  document.getElementById("pubDataGroup").style.display = tipo === "evento" ? "block" : "none";
  document.getElementById("pubCategoriaGroup").style.display = tipo !== "turistico" ? "block" : "none";
}

function cadastrarPublico(e) {
  e.preventDefault();
  const tipo = document.getElementById("pubTipo").value;
  const nome = document.getElementById("pubNome").value.trim();
  const cidadeId = parseInt(document.getElementById("pubCidade").value);
  const categoria = document.getElementById("pubCategoria").value;
  const data = document.getElementById("pubData").value;
  const desc = document.getElementById("pubDesc").value.trim();
  const endereco = document.getElementById("pubEndereco").value.trim();

  if (tipo === "evento") {
    state.eventos.push({
      id: gerarId(state.eventos),
      titulo: nome,
      cidadeId,
      categoria,
      data,
      descricao: desc,
      endereco
    });
  } else if (tipo === "turistico") {
    state.turisticos.push({
      id: gerarId(state.turisticos),
      nome,
      cidadeId,
      endereco,
      descricao: desc
    });
  } else {
    state.comerciais.push({
      id: gerarId(state.comerciais),
      nome,
      cidadeId,
      categoria,
      endereco,
      descricao: desc
    });
  }
  salvarDados();
  toast("Cadastro enviado com sucesso! Em breve estará visível no guia.");
  e.target.reset();
}

// -------------------- ADMIN LOGIN --------------------
function solicitarToken() {
  const email = document.getElementById("adminEmail").value.trim().toLowerCase();

  if (!email || !email.includes("@")) {
    toast("Digite um e-mail válido.");
    return;
  }

  // Só o e-mail autorizado recebe token de admin
  if (email === "ocamofo@gmail.com") {
    const token = gerarToken();
    state.tokenAtual = token;

    document.getElementById("emailDestino").textContent = email;
    document.getElementById("tokenGerado").textContent = token;
    document.getElementById("adminToken").value = token;
    document.getElementById("loginStep1").style.display = "none";
    document.getElementById("loginStep2").style.display = "block";
    document.getElementById("loginStepAnuncio").style.display = "none";

    console.log("%c[oGuiaDoRibeira] Token de admin gerado:", "color:green;font-weight:bold", token);
    toast("Token gerado! Clique em Entrar.");
  } else {
    // Qualquer outro e-mail → mostra pacote de anúncios
    document.getElementById("loginStep1").style.display = "none";
    document.getElementById("loginStep2").style.display = "none";
    document.getElementById("loginStepAnuncio").style.display = "block";
  }
}

function validarToken() {
  const input = document.getElementById("adminToken").value.trim().toUpperCase();
  if (input === state.tokenAtual) {
    state.adminLogado = true;
    sessionStorage.setItem("oguia_admin", JSON.stringify({
      email: "ocamofo@gmail.com",
      token: state.tokenAtual
    }));
    toast("Login realizado com sucesso!");
    showPage("admin");
  } else {
    toast("Token inválido. Tente novamente.");
  }
}

function voltarLogin() {
  document.getElementById("loginStep1").style.display = "block";
  document.getElementById("loginStep2").style.display = "none";
  document.getElementById("loginStepAnuncio").style.display = "none";
  document.getElementById("adminToken").value = "";
  document.getElementById("adminEmail").value = "";
  state.tokenAtual = null;
}

function logoutAdmin() {
  state.adminLogado = false;
  state.tokenAtual = null;
  sessionStorage.removeItem("oguia_admin");
  toast("Sessão encerrada.");
  showPage("home");
}

// -------------------- ADMIN CRUD --------------------
function switchAdminTab(tab) {
  document.querySelectorAll(".admin-tab").forEach(t => t.classList.toggle("active", t.dataset.atab === tab));
  document.querySelectorAll(".admin-panel").forEach(p => p.style.display = "none");
  document.getElementById("admin-" + tab).style.display = "block";
}

function renderAdmin() {
  // Cidades
  document.getElementById("adminCidadesBody").innerHTML = state.cidades.map(c => `
    <tr>
      <td>${c.nome}</td>
      <td>${c.lat}</td>
      <td>${c.lng}</td>
      <td>${c.raio} km</td>
      <td>
        <button class="btn-action btn-edit" onclick="abrirModal('cidade', ${c.id})">Editar</button>
        <button class="btn-action btn-del" onclick="excluirItem('cidades', ${c.id})">Excluir</button>
      </td>
    </tr>
  `).join("");

  // Eventos
  document.getElementById("adminEventosBody").innerHTML = state.eventos.map(e => `
    <tr>
      <td>${e.titulo}</td>
      <td>${cidadeNome(e.cidadeId)}</td>
      <td>${e.categoria || "—"}</td>
      <td>${e.data ? formatData(e.data) : "—"}</td>
      <td>
        <button class="btn-action btn-edit" onclick="abrirModal('evento', ${e.id})">Editar</button>
        <button class="btn-action btn-del" onclick="excluirItem('eventos', ${e.id})">Excluir</button>
      </td>
    </tr>
  `).join("");

  // Turísticos
  document.getElementById("adminTuristicosBody").innerHTML = state.turisticos.map(t => `
    <tr>
      <td>${t.nome}</td>
      <td>${cidadeNome(t.cidadeId)}</td>
      <td>${t.endereco || "—"}</td>
      <td>
        <button class="btn-action btn-edit" onclick="abrirModal('turistico', ${t.id})">Editar</button>
        <button class="btn-action btn-del" onclick="excluirItem('turisticos', ${t.id})">Excluir</button>
      </td>
    </tr>
  `).join("");

  // Comerciais
  document.getElementById("adminComerciaisBody").innerHTML = state.comerciais.map(c => `
    <tr>
      <td>${c.nome}</td>
      <td>${cidadeNome(c.cidadeId)}</td>
      <td>${c.categoria || "—"}</td>
      <td>${c.endereco || "—"}</td>
      <td>
        <button class="btn-action btn-edit" onclick="abrirModal('comercial', ${c.id})">Editar</button>
        <button class="btn-action btn-del" onclick="excluirItem('comerciais', ${c.id})">Excluir</button>
      </td>
    </tr>
  `).join("");

  // Guias
  const guiasBody = document.getElementById("adminGuiasBody");
  if (guiasBody) {
    guiasBody.innerHTML = state.guias.map(g => `
      <tr>
        <td>${g.nome}</td>
        <td>${cidadeNome(g.cidadeId)}</td>
        <td>${g.especialidades || "—"}</td>
        <td>${g.whatsapp || "—"}</td>
        <td>
          <button class="btn-action btn-edit" onclick="abrirModal('guia', ${g.id})">Editar</button>
          <button class="btn-action btn-del" onclick="excluirItem('guias', ${g.id})">Excluir</button>
        </td>
      </tr>
    `).join("");
  }
}

function excluirItem(tipo, id) {
  if (!confirm("Tem certeza que deseja excluir?")) return;
  state[tipo] = state[tipo].filter(i => i.id !== id);
  salvarDados();
  renderAdmin();
  toast("Item excluído.");
}

// -------------------- FOTOS (base64) --------------------
// Armazena temporariamente as fotos do formulário aberto
let fotosTemp = [null, null, null];

function fotoSlotsHTML(fotosExistentes) {
  fotosTemp = [null, null, null];
  if (fotosExistentes && fotosExistentes.length) {
    fotosExistentes.slice(0, 3).forEach((f, i) => { fotosTemp[i] = f; });
  }
  let html = `<div class="form-group"><label>Fotos (até 3) — a primeira é a capa</label><div class="fotos-upload" id="fotosUpload">`;
  for (let i = 0; i < 3; i++) {
    const tem = !!fotosTemp[i];
    html += `
      <div class="foto-slot ${tem ? "has-img" : ""}" id="fotoSlot${i}">
        ${i === 0 ? '<span class="foto-capa-badge">CAPA</span>' : ""}
        ${tem
          ? `<img src="${fotosTemp[i]}" alt="Foto ${i+1}"><button type="button" class="foto-remove" onclick="removerFoto(${i})">✕</button>`
          : `<span class="slot-icon">📷</span><span class="slot-label">${i === 0 ? "Capa" : "Foto " + (i+1)}<br>clique</span>`
        }
        <input type="file" accept="image/*" onchange="selecionarFoto(${i}, this)">
      </div>`;
  }
  html += `</div><p class="foto-hint">Formatos: JPG, PNG, WEBP. Máx. ~1MB por foto.</p></div>`;
  return html;
}

function selecionarFoto(idx, input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 1.5 * 1024 * 1024) {
    toast("Foto muito grande. Use até 1,5 MB.");
    input.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    // Redimensiona para não estourar localStorage
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const maxW = 800;
      let w = img.width, h = img.height;
      if (w > maxW) { h = Math.round(h * maxW / w); w = maxW; }
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      fotosTemp[idx] = canvas.toDataURL("image/jpeg", 0.75);
      atualizarSlot(idx);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function removerFoto(idx) {
  fotosTemp[idx] = null;
  atualizarSlot(idx);
}

function atualizarSlot(idx) {
  const slot = document.getElementById("fotoSlot" + idx);
  if (!slot) return;
  const tem = !!fotosTemp[idx];
  slot.className = "foto-slot" + (tem ? " has-img" : "");
  const capaBadge = idx === 0 ? '<span class="foto-capa-badge">CAPA</span>' : "";
  if (tem) {
    slot.innerHTML = `${capaBadge}<img src="${fotosTemp[idx]}" alt="Foto ${idx+1}"><button type="button" class="foto-remove" onclick="removerFoto(${idx})">✕</button><input type="file" accept="image/*" onchange="selecionarFoto(${idx}, this)">`;
  } else {
    slot.innerHTML = `${capaBadge}<span class="slot-icon">📷</span><span class="slot-label">${idx === 0 ? "Capa" : "Foto " + (idx+1)}<br>clique</span><input type="file" accept="image/*" onchange="selecionarFoto(${idx}, this)">`;
  }
}

function getFotosSalvas() {
  return fotosTemp.filter(f => f !== null);
}

// -------------------- MODAL --------------------
function abrirModal(tipo, id = null) {
  state.editTipo = tipo;
  state.editId = id;
  const mapa = { cidade: "cidades", evento: "eventos", turistico: "turisticos", comercial: "comerciais", guia: "guias" };
  const item = id ? state[mapa[tipo]]?.find(i => i.id === id) : null;

  const titles = {
    cidade: id ? "Editar Cidade" : "Nova Cidade",
    evento: id ? "Editar Evento" : "Novo Evento",
    turistico: id ? "Editar Ponto Turístico" : "Novo Ponto Turístico",
    comercial: id ? "Editar Ponto Comercial" : "Novo Ponto Comercial",
    guia: id ? "Editar Guia" : "Novo Guia Turístico"
  };
  document.getElementById("modalTitle").textContent = titles[tipo];

  let fields = "";
  if (tipo === "cidade") {
    fields = `
      <div class="form-group"><label>Nome *</label><input name="nome" required value="${item?.nome || ""}"></div>
      <div class="form-group"><label>Latitude *</label><input name="lat" type="number" step="any" required value="${item?.lat || ""}"></div>
      <div class="form-group"><label>Longitude *</label><input name="lng" type="number" step="any" required value="${item?.lng || ""}"></div>
      <div class="form-group"><label>Raio de detecção (km) *</label><input name="raio" type="number" step="0.5" required value="${item?.raio || 8}"></div>
      <div class="form-group"><label>Frase curta (ex: Cavernas e ecoturismo)</label><input name="descricao" value="${item?.descricao || ""}"></div>
      <div class="form-group"><label>História / Sobre a cidade</label><textarea name="historia" rows="4">${item?.historia || ""}</textarea></div>
      <div class="form-group"><label>Instagram (opcional)</label><input name="instagram" placeholder="@cidade ou URL" value="${item?.instagram || ""}"></div>
      <div class="form-group"><label>Facebook (opcional)</label><input name="facebook" placeholder="URL ou usuário" value="${item?.facebook || ""}"></div>
      <div class="form-group"><label>Site da Prefeitura (opcional)</label><input name="sitePrefeitura" placeholder="https://..." value="${item?.sitePrefeitura || ""}"></div>
      ${fotoSlotsHTML(item?.fotos)}
    `;
  } else if (tipo === "evento") {
    fields = `
      <div class="form-group"><label>Título *</label><input name="titulo" required value="${item?.titulo || ""}"></div>
      <div class="form-group"><label>Cidade *</label><select name="cidadeId" required>${state.cidades.map(c => `<option value="${c.id}" ${item?.cidadeId === c.id ? "selected" : ""}>${c.nome}</option>`).join("")}</select></div>
      <div class="form-group"><label>Categoria</label>
        <select name="categoria">
          <option value="cultura" ${item?.categoria === "cultura" ? "selected" : ""}>Cultura</option>
          <option value="gastronomia" ${item?.categoria === "gastronomia" ? "selected" : ""}>Gastronomia</option>
          <option value="hotelaria" ${item?.categoria === "hotelaria" ? "selected" : ""}>Hotelaria</option>
          <option value="outro" ${item?.categoria === "outro" ? "selected" : ""}>Outro</option>
        </select>
      </div>
      <div class="form-group"><label>Data</label><input name="data" type="date" value="${item?.data || ""}"></div>
      <div class="form-group"><label>Descrição</label><textarea name="descricao" rows="3">${item?.descricao || ""}</textarea></div>
      <div class="form-group"><label>Endereço</label><input name="endereco" value="${item?.endereco || ""}"></div>
      ${fotoSlotsHTML(item?.fotos)}
    `;
  } else if (tipo === "turistico") {
    fields = `
      <div class="form-group"><label>Nome *</label><input name="nome" required value="${item?.nome || ""}"></div>
      <div class="form-group"><label>Cidade *</label><select name="cidadeId" required>${state.cidades.map(c => `<option value="${c.id}" ${item?.cidadeId === c.id ? "selected" : ""}>${c.nome}</option>`).join("")}</select></div>
      <div class="form-group"><label>Endereço</label><input name="endereco" value="${item?.endereco || ""}"></div>
      <div class="form-group"><label>Descrição</label><textarea name="descricao" rows="3">${item?.descricao || ""}</textarea></div>
      ${fotoSlotsHTML(item?.fotos)}
    `;
  } else if (tipo === "comercial") {
    fields = `
      <div class="form-group"><label>Nome *</label><input name="nome" required value="${item?.nome || ""}"></div>
      <div class="form-group"><label>Cidade *</label><select name="cidadeId" required>${state.cidades.map(c => `<option value="${c.id}" ${item?.cidadeId === c.id ? "selected" : ""}>${c.nome}</option>`).join("")}</select></div>
      <div class="form-group"><label>Categoria</label>
        <select name="categoria">
          <option value="gastronomia" ${item?.categoria === "gastronomia" ? "selected" : ""}>Gastronomia</option>
          <option value="hotelaria" ${item?.categoria === "hotelaria" ? "selected" : ""}>Hotelaria</option>
          <option value="comercio" ${item?.categoria === "comercio" ? "selected" : ""}>Comércio</option>
          <option value="outro" ${item?.categoria === "outro" ? "selected" : ""}>Outro</option>
        </select>
      </div>
      <div class="form-group"><label>Endereço</label><input name="endereco" value="${item?.endereco || ""}"></div>
      <div class="form-group"><label>Descrição</label><textarea name="descricao" rows="3">${item?.descricao || ""}</textarea></div>
      ${fotoSlotsHTML(item?.fotos)}
    `;
  } else if (tipo === "guia") {
    fields = `
      <div class="form-group"><label>Nome do guia *</label><input name="nome" required value="${item?.nome || ""}"></div>
      <div class="form-group"><label>Cidade *</label><select name="cidadeId" required>${state.cidades.map(c => `<option value="${c.id}" ${item?.cidadeId === c.id ? "selected" : ""}>${c.nome}</option>`).join("")}</select></div>
      <div class="form-group"><label>WhatsApp (com DDI, ex: 5513999990001)</label><input name="whatsapp" value="${item?.whatsapp || ""}" placeholder="5513999990001"></div>
      <div class="form-group"><label>Especialidades</label><input name="especialidades" value="${item?.especialidades || ""}" placeholder="Trilhas, cachoeiras, história..."></div>
      <div class="form-group"><label>Referência (texto curto)</label><textarea name="referencia" rows="3">${item?.referencia || ""}</textarea></div>
      <div class="form-group"><label>Instagram (opcional)</label><input name="instagram" value="${item?.instagram || ""}"></div>
      <div class="form-group"><label>Facebook (opcional)</label><input name="facebook" value="${item?.facebook || ""}"></div>
      ${fotoSlotsHTML(item?.foto ? [item.foto] : item?.fotos)}
    `;
  }

  document.getElementById("modalFields").innerHTML = fields;
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
  state.editId = null;
  state.editTipo = null;
  fotosTemp = [null, null, null];
}

function salvarModal(e) {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  const tipo = state.editTipo;
  const id = state.editId;
  const fotos = getFotosSalvas();

  if (tipo === "cidade") {
    const obj = {
      id: id || gerarId(state.cidades),
      nome: fd.get("nome"),
      lat: parseFloat(fd.get("lat")),
      lng: parseFloat(fd.get("lng")),
      raio: parseFloat(fd.get("raio")),
      descricao: fd.get("descricao") || "",
      historia: fd.get("historia") || "",
      instagram: fd.get("instagram") || "",
      facebook: fd.get("facebook") || "",
      sitePrefeitura: fd.get("sitePrefeitura") || "",
      fotos
    };
    if (id) {
      const idx = state.cidades.findIndex(c => c.id === id);
      state.cidades[idx] = { ...state.cidades[idx], ...obj };
    } else {
      state.cidades.push(obj);
      state.monitoradas.push(obj.id);
    }
  } else if (tipo === "evento") {
    const obj = {
      id: id || gerarId(state.eventos),
      titulo: fd.get("titulo"),
      cidadeId: parseInt(fd.get("cidadeId")),
      categoria: fd.get("categoria"),
      data: fd.get("data"),
      descricao: fd.get("descricao"),
      endereco: fd.get("endereco"),
      fotos
    };
    if (id) {
      const idx = state.eventos.findIndex(e => e.id === id);
      state.eventos[idx] = obj;
    } else {
      state.eventos.push(obj);
    }
  } else if (tipo === "turistico") {
    const obj = {
      id: id || gerarId(state.turisticos),
      nome: fd.get("nome"),
      cidadeId: parseInt(fd.get("cidadeId")),
      endereco: fd.get("endereco"),
      descricao: fd.get("descricao"),
      fotos
    };
    if (id) {
      const idx = state.turisticos.findIndex(t => t.id === id);
      state.turisticos[idx] = obj;
    } else {
      state.turisticos.push(obj);
    }
  } else if (tipo === "comercial") {
    const obj = {
      id: id || gerarId(state.comerciais),
      nome: fd.get("nome"),
      cidadeId: parseInt(fd.get("cidadeId")),
      categoria: fd.get("categoria"),
      endereco: fd.get("endereco"),
      descricao: fd.get("descricao"),
      fotos
    };
    if (id) {
      const idx = state.comerciais.findIndex(c => c.id === id);
      state.comerciais[idx] = obj;
    } else {
      state.comerciais.push(obj);
    }
  } else if (tipo === "guia") {
    const obj = {
      id: id || gerarId(state.guias),
      nome: fd.get("nome"),
      cidadeId: parseInt(fd.get("cidadeId")),
      whatsapp: fd.get("whatsapp") || "",
      especialidades: fd.get("especialidades") || "",
      referencia: fd.get("referencia") || "",
      instagram: fd.get("instagram") || "",
      facebook: fd.get("facebook") || "",
      foto: fotos[0] || ""
    };
    if (id) {
      const idx = state.guias.findIndex(g => g.id === id);
      state.guias[idx] = obj;
    } else {
      state.guias.push(obj);
    }
  }

  salvarDados();
  fecharModal();
  renderAdmin();
  // Atualiza também a listagem pública
  if (state.tab === "eventos") renderEventos();
  else renderLocais();
  toast(id ? "Atualizado com sucesso!" : "Cadastrado com sucesso!");
}

// -------------------- DETALHES (ao clicar no card) --------------------
function abrirDetalhe(tipo, id) {
  let item = null;
  if (tipo === "evento") item = state.eventos.find(e => e.id === id);
  else if (tipo === "turistico") item = state.turisticos.find(t => t.id === id);
  else if (tipo === "comercial") item = state.comerciais.find(c => c.id === id);
  if (!item) return;

  const fotos = item.fotos || [];
  const titulo = item.titulo || item.nome;
  const cat = tipo === "evento" ? (item.categoria || "evento")
            : tipo === "turistico" ? "Turístico"
            : (item.categoria || "Comercial");
  const icon = tipo === "evento" ? "📅" : tipo === "turistico" ? "🏞" : "🏪";

  let capaHTML = fotos[0]
    ? `<img id="detalheCapaImg" src="${fotos[0]}" alt="${titulo}">`
    : `<div class="capa-placeholder">${icon}</div>`;

  let galeriaHTML = "";
  if (fotos.length > 1) {
    galeriaHTML = `<div class="detalhe-galeria">` +
      fotos.map((f, i) => `<img src="${f}" class="${i===0?'active':''}" onclick="trocarCapa('${f}', this)" alt="Foto ${i+1}">`).join("") +
      `</div>`;
  }

  const meta = [];
  meta.push(`<span>📍 ${cidadeNome(item.cidadeId)}</span>`);
  if (item.data) meta.push(`<span>🗓 ${formatData(item.data)}</span>`);
  if (item.endereco) meta.push(`<span>🏠 ${item.endereco}</span>`);

  document.getElementById("detalheConteudo").innerHTML = `
    <div class="detalhe-capa">${capaHTML}</div>
    ${galeriaHTML}
    <div class="detalhe-body">
      <span class="detalhe-cat">${cat}</span>
      <h2>${titulo}</h2>
      <div class="detalhe-meta">${meta.join("")}</div>
      <p class="detalhe-desc">${item.descricao || "Sem descrição."}</p>
    </div>
  `;
  document.getElementById("modalDetalhe").style.display = "flex";
}

function trocarCapa(src, thumb) {
  const capa = document.getElementById("detalheCapaImg");
  if (capa) capa.src = src;
  document.querySelectorAll(".detalhe-galeria img").forEach(img => img.classList.remove("active"));
  if (thumb) thumb.classList.add("active");
}

function fecharDetalhe(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains("detalhe-close") && e.target.tagName !== "BUTTON") return;
  document.getElementById("modalDetalhe").style.display = "none";
}

// -------------------- INIT --------------------
document.addEventListener("DOMContentLoaded", () => {
  carregarDados();
  popularFiltroCidade();
  renderEventos();
  renderCidadesHome();

  // Atualiza link admin se logado
  if (state.adminLogado) {
    document.getElementById("adminLink").textContent = "Painel Admin";
    document.getElementById("adminLink").onclick = () => showPage("admin");
  }
});
