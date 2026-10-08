# Portfólio de Gustavo Bolsoni

Site estático em HTML, CSS e JavaScript, sem etapa de build.

## Prévia local

Execute `python -m http.server 4174 --bind 127.0.0.1` na raiz e abra http://127.0.0.1:4174.

## Conteúdo e manutenção

- `index.html`: apresentação, projetos, trajetória, competências e contato.
- `css/style.css`: identidade visual e estilos responsivos.
- `js/script.js`: filtros, cópia de e-mail e ano do rodapé.
- `assets/`: currículo, certificado e Boss Raid 0.0.6 em VSIX.
- `img/foto.jpeg`: retrato original.

Os conceitos de KOnect e Boss Raid foram descritos a partir dos projetos locais, e a experiência/formação a partir do currículo fornecido. O nível atual de inglês é B2+/C1−, conforme atualização do autor sobre a conclusão do curso em 2025. O certificado anexado corresponde à etapa anterior: B1+/B2−, 100h, conclusão em 04/07/2026; ele não comprova o nível atual. As ilustrações dos projetos são composições conceituais em CSS, não screenshots das aplicações.

KOnect: demonstração em https://konect.infinityfree.io/ e código em https://github.com/h-mello1008/KOnect. Ecomercy: site em https://ecomercy.site.je/ e código em https://github.com/bolsonii/ecomercy. Links fornecidos pelo autor.

A atuação profissional no site é descrita como freelance, conforme esclarecimento do autor sobre seu contrato. O PDF do currículo fornecido permanece original e ainda usa a descrição de estágio.

A extensão requer VS Code ^1.132.0, conforme o manifesto do próprio VSIX. O funcionamento multiplayer depende do servidor configurado na extensão; este portfólio apenas distribui o pacote, sem instalar ou executar a extensão.

Fontes: Google Fonts, com fallback para sans-serif. Não há dependência de Bootstrap ou bibliotecas JavaScript externas.

## Validação realizada

- Sintaxe JavaScript e `git diff --check`.
- Existência de arquivos locais, âncoras e IDs únicos.
- Navegador: filtro da extensão, retorno a todos os projetos, expansão de detalhes e cópia de e-mail.
- Inspeção visual desktop e mobile; ausência de transbordamento horizontal no viewport móvel verificado.

Publicação do portfólio não realizada nesta alteração.
