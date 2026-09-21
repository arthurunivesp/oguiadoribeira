# oGuiaDoRibeira

Guia cultural e turístico do **Vale do Ribeira e Baixada Santista** (SP).

Site em HTML, CSS e JavaScript para divulgar eventos, pontos turísticos, comércios locais e guias, com alertas por GPS ao chegar nas cidades.

## Como abrir

1. Abra o arquivo `index.html` no navegador (Chrome ou Firefox).
2. Não precisa instalar nada nem rodar servidor.

## Arquivos

| Arquivo       | Função                          |
|---------------|---------------------------------|
| `index.html`  | Estrutura das páginas           |
| `styles.css`  | Visual e layout                 |
| `app.js`      | Lógica, GPS, admin e dados      |

Os dados ficam salvos no navegador (`localStorage`).

## Funcionalidades

- Eventos, pontos turísticos e pontos comerciais
- Filtros por categoria, cidade, hoje e fim de semana
- GPS com alerta ao chegar na cidade
- Caixa flutuante com eventos (agora → hoje → próximos dias)
- Página de cada cidade (história, fotos, redes, prefeitura)
- Guias turísticos locais (foto, WhatsApp, especialidades)
- Área administrativa com login por e-mail e token

## Área admin

1. No menu, clique em **Admin**.
2. Informe o e-mail autorizado.
3. Gere o token e entre no painel.
4. Cadastre ou edite: cidades, eventos, pontos turísticos, comerciais e guias.

## Cidades cobertas

Apiaí, Cajati, Cananéia, Eldorado, Iguape, Ilha Comprida, Itanhaém, Jacupiranga, Juquiá, Juquitiba, Miracatu, Pariquera-Açu, Peruíbe, Registro e Sete Barras.

## Publicar no GitHub

```bash
git init
git branch -M main
git add index.html styles.css app.js README.md
git commit -m "Initial commit: oGuiaDoRibeira"
git remote add origin https://github.com/arthurunivesp/oguiadoribeira.git
git push -u origin main