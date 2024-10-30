const applyFilterBtn = document.getElementById('apply-button2');
const formElement = document.getElementById('grid1');
const tableContainer = document.querySelector('div[style*="overflow"]');
const statusSection = document.querySelector('.status');
const filterImage = document.querySelector('.filterrr'); 

function isMobile() {
    return window.innerWidth <= 768;
}

function showTable() {
    formElement.style.display = 'none';
    statusSection.style.display = 'none';
    tableContainer.style.display = 'block';
}

function showForm() {
    formElement.style.display = 'block';
    statusSection.style.display = 'block';
    tableContainer.style.display = 'none';
}

function hideTable() {
    if (isMobile()) { 
        formElement.style.display = 'block';
        statusSection.style.display = 'block';
        tableContainer.style.display = 'none';
    }
}

function setInitialState() {
    if (isMobile()) {
        tableContainer.style.display = 'none';
        formElement.style.display = 'block';
        statusSection.style.display = 'block';
    }
}

setInitialState();

applyFilterBtn.addEventListener('click', showTable);

filterImage.addEventListener('click', hideTable);

window.addEventListener('resize', setInitialState);

document.addEventListener('click', function(event) {
    if (isMobile() && 
        tableContainer.style.display === 'block' && 
        !applyFilterBtn.contains(event.target) && 
        !filterImage.contains(event.target)) {
        return;
    }
});

setInitialState();
window.addEventListener('load', setInitialState);
