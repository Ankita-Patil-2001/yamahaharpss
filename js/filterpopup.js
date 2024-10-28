// Get references to the elements
const applyFilterBtn = document.getElementById('apply-button2');
const formElement = document.getElementById('grid1');
const tableContainer = document.querySelector('div[style*="overflow"]');
const statusSection = document.querySelector('.status');
const filterImage = document.querySelector('.filterrr'); // Reference to the image

// Function to check if device is mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Function to show table
function showTable() {
    formElement.style.display = 'none';
    statusSection.style.display = 'none';
    tableContainer.style.display = 'block';
}

// Function to show form and hide table
function showForm() {
    formElement.style.display = 'block';
    statusSection.style.display = 'block';
    tableContainer.style.display = 'none';
}

// Function to hide table only
function hideTable() {
    formElement.style.display = 'block';
    statusSection.style.display = 'block';
    tableContainer.style.display = 'none';
}

// Set initial state - Important: Always hide table on mobile initially
function setInitialState() {
    if (isMobile()) {
        tableContainer.style.display = 'none';
        formElement.style.display = 'block';
        statusSection.style.display = 'block';
    }
}

// Initialize the page
setInitialState();

// Add click event listener to the Apply Filter button
applyFilterBtn.addEventListener('click', showTable);

// Add click event listener to the image to hide the table
filterImage.addEventListener('click', hideTable);

// Handle window resize
window.addEventListener('resize', setInitialState);

// Prevent closing the table when clicking outside the buttons
document.addEventListener('click', function(event) {
    if (isMobile() && 
        tableContainer.style.display === 'block' && 
        !applyFilterBtn.contains(event.target) && 
        !filterImage.contains(event.target)) {
        // Do nothing if clicked outside the specific buttons
        return;
    }
});

// Important: Call setInitialState immediately and after page load
setInitialState();
window.addEventListener('load', setInitialState);
