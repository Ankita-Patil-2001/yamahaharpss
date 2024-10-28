// Add this to your existing JavaScript file
document.addEventListener("DOMContentLoaded", function() {
    const userIcon = document.querySelector('.proileuser img[src="assets/images/usericon.png"]');
    const popup = document.createElement('div');
    popup.className = 'user-popup';
    
    popup.innerHTML = `
      <div class="popup-content">
        <div class="profile">
                <img src="assets/images/iconoir_profile-circle.png" />
                <span>Jayakrishna Raju Tanikella Reddy</span>
              </div>
        <div class="popup-item">
          <img src="assets/images/ion_language.png" alt="Icon 2" />
          <span>Language</span>
        </div>
        
        <div class="popup-item">
          <img src="assets/images/material-symbols_help-outline.png" alt="Icon 3" />
          <span>Help</span>
        </div>
        <div class="popup-item">
          <img src="assets/images/icon-park-outline_config.png" alt="Icon 4" />
          <span>Configuration</span>
        </div>
        <div class="popup-item">
          <img src="assets/images/hugeicons_logout-04.png" alt="Icon 4" />
          <span>Logout</span>
        </div>
      </div>
    `;
    
    document.body.appendChild(popup);
  
    userIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      popup.classList.toggle('active');
      
      // Position the popup below the icon
      const rect = userIcon.getBoundingClientRect();
      popup.style.top = `${rect.bottom + 5}px`;
      popup.style.left = `${rect.left - popup.offsetWidth + userIcon.offsetWidth}px`;
    });
  
    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
      if (!popup.contains(e.target) && e.target !== userIcon) {
        popup.classList.remove('active');
      }
    });
  });