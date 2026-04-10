let caixas = document.querySelectorAll('.caixas');
function pegar() {
    caixas.forEach(caixa => {
        caixas.setAttribute('draggable', true);
        cai
        caixas.addEventListener('dragstart', () => {
            caixas.classList.add('dragging');
        });
        caixas.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(caixas, e.clientY);
            const draggable = document.querySelector('.dragging');
        });
        caixas.addEventListener('drop', () => {
            const draggable = document.querySelector('.dragging');
            caixas.appendChild(draggable);
        });
        caixas.addEventListener('dragend', () => {
            caixas.classList.remove('dragging');
        });
    });
}