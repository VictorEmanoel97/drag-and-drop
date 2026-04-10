# 🧱 JS Drag & Drop Blocks

Uma implementação leve e intuitiva de um sistema de "arrastar e soltar" (Drag and Drop) desenvolvida com JavaScript Vanilla. Este projeto demonstra como manipular a interface do usuário de forma dinâmica utilizando as APIs nativas do navegador.
🎯 Objetivo

# O projeto visa fornecer uma base sólida para interfaces que exigem movimentação de elementos, como quadros Kanban (estilo Trello), organizadores de tarefas ou customização de layouts, sem a necessidade de bibliotecas pesadas como jQuery ou frameworks complexos.
✨ Funcionalidades

* Movimentação Fluida: Arraste blocos de uma coluna e solte-os em outra instantaneamente.

* Feedback Visual: As colunas e itens alteram sua aparência (opacidade e cores) para indicar estados de "arrastando" e "alvo válido".

* Performance Otimizada: Utiliza eventos nativos da HTML5 Drag and Drop API, garantindo baixo consumo de memória.

* Design Responsivo: Estrutura flexível que se adapta a diferentes larguras de tela.

## 🏗️ Estrutura do Projeto

## A organização dos arquivos segue o padrão clássico de desenvolvimento web:

* index.html: Define a estrutura semântica dos containers e dos itens arrastáveis.

* style.css: Gerencia o layout visual, estados de hover e transições suaves.

* script.js: Contém toda a lógica de eventos, manipulação de classes e transferência de elementos no DOM.

# 🛠️ Tecnologias Utilizadas

* HTML5: Estrutura e atributo draggable.

* CSS3: Estilização moderna com Flexbox e transições de estado.

* JavaScript (ES6+): Manipulação de eventos como dragstart, dragover e drop.

# 📖 Como Funciona? (Conceito Técnico)

O sistema opera através de um ciclo de eventos mapeados nos elementos:

Identificação: Cada bloco é marcado como "arrastável".

Captura: Ao iniciar o movimento, o script identifica qual elemento está ativo.

Validação: As colunas de destino são configuradas para "aceitar" o objeto, prevenindo o comportamento padrão do navegador que normalmente bloqueia o drop.

Transferência: Ao soltar o item, o JavaScript move o nó do elemento para dentro do novo container pai.

🚀 Como Executar

Clone este repositório ou baixe os arquivos.

Certifique-se de que os arquivos index.html, style.css e script.js estejam na mesma pasta.

Abra o arquivo index.html em qualquer navegador moderno.

💡 Próximos Passos (Sugestões)

Para quem deseja evoluir este projeto, aqui estão algumas ideias:

    [ ] Implementar persistência de dados com localStorage.

    [ ] Adicionar animações de reordenação (Sorting).

    [ ] Criar um botão para adicionar novos blocos dinamicamente.

    [ ] Suporte para eventos de toque (Touch Events) em dispositivos móveis.

    Nota: Este projeto foi desenvolvido para fins didáticos, priorizando a clareza do código e o uso de recursos nativos da web.
