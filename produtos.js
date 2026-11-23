// =========================================================================
// CADASTRO DE PRODUTOS DA VITRINE
// -------------------------------------------------------------------------
// Para adicionar ou editar um item:
// 1. Substitua o campo "link" pelo seu link oficial de afiliado.
// 2. (Opcional) Coloque uma imagem na pasta /img e informe ex: "./img/livro.jpg".
//    Se deixar "", aparece automaticamente um ícone temático da categoria.
// 3. Evite colocar preços fixos na descrição (regra da Amazon Associados).
// =========================================================================

const PRODUTOS = [
  {
    nome: "Kit de Livros — Piloto Privado (ANAC)",
    categoria: "Livros",
    loja: "Amazon",
    descricao: "Base clássica com Teoria de Voo, Meteorologia, Navegação, Regulamentos e Conhecimentos Técnicos.",
    imagem: "",
    link: "https://associados.amazon.com.br/",
    textoBotao: "Conferir preço na Amazon"
  },
  {
    nome: "Joystick Thrustmaster T.16000M FCS",
    categoria: "Simulador",
    loja: "Amazon",
    descricao: "Sensor magnético de alta precisão — excelente custo-benefício para MSFS, X-Plane e DCS.",
    imagem: "",
    link: "https://associados.amazon.com.br/",
    textoBotao: "Conferir na Amazon"
  },
  {
    nome: "Preparatório Teórico ANAC (PP / PC / IFR)",
    categoria: "Cursos",
    loja: "Hotmart",
    descricao: "Curso EAD focado nas matérias cobradas na banca da ANAC com simulados atualizados.",
    imagem: "",
    link: "https://hotmart.com/pt-br/afiliados",
    textoBotao: "Ver detalhes do curso"
  },
  {
    nome: "Inglês para Aviação & Prova ICAO",
    categoria: "Cursos",
    loja: "Hotmart",
    descricao: "Treinamento direcionado para fraseologia aeronáutica e aprovação no teste de proficiência ICAO.",
    imagem: "",
    link: "https://hotmart.com/pt-br/afiliados",
    textoBotao: "Conhecer treinamento"
  },
  {
    nome: "Miniatura Aeronave em Metal (Escala 1:400)",
    categoria: "Miniaturas",
    loja: "Shopee",
    descricao: "Modelo colecionável em metal com base acrílica para decorar a mesa ou estante.",
    imagem: "",
    link: "https://shopee.com.br/m/afiliados",
    textoBotao: "Ver modelos na Shopee"
  },
  {
    nome: "Computador de Voo E6B + Transferidor",
    categoria: "Livros",
    loja: "Mercado Livre",
    descricao: "Kit essencial para aulas práticas de navegação visual e resolução de questões da prova.",
    imagem: "",
    link: "https://www.mercadolivre.com.br/l/afiliados-home",
    textoBotao: "Ver no Mercado Livre"
  },
  {
    nome: "Microfone Condensador USB para Vídeos",
    categoria: "Setup",
    loja: "Amazon",
    descricao: "Áudio limpo e direto no PC para gravar tutoriais, narrações e voar online na IVAO/VATSIM.",
    imagem: "",
    link: "https://associados.amazon.com.br/",
    textoBotao: "Conferir na Amazon"
  }
];
