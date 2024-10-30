document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleSidebarBtn = document.getElementById("toggleSidebar");
  const sidebarIcon = document.getElementById("sidebar-icon");
  const masterItem = document.getElementById("master");
  const subNav = masterItem.querySelector(".sub-nav");
  const toggleIcon = masterItem.querySelector(".nav-text133");
  const submenuItems = document.querySelectorAll(".has-submenu");
  const tabs = document.querySelectorAll(".tabs2 .tab");
  const contents = document.querySelectorAll(".content");
  const userIcon = document.querySelector(".mobile-user-icon");
  const mobileSidebar = document.querySelector(".mobile-sidebar");
  const overlay = document.querySelector(".mobile-overlay");
  const closeBtn = document.querySelector(".mobile-sidebar-close");
  const iconRow = document.querySelector(".icon-row");

  // Function to set sidebar icon position on load
  function setInitialSidebarIconPosition() {
    sidebar.classList.toggle("closed");

    if (sidebar.classList.contains("closed")) {
      sidebarIcon.style.left = "8px"; // Keep icon on the left
      sidebarIcon.style.right = "auto"; // Reset right positioning
      sidebarIcon.style.backgroundColor = "white"; // Only icon background for closed state
    } else {
      sidebarIcon.style.left = "8px"; // Always ensure it stays on the left
      sidebarIcon.style.right = "auto"; // Reset right
      sidebarIcon.style.backgroundColor = "blue"; // Only icon background for open state
    }
  }

  // Call the function initially to ensure correct positioning on load
  setInitialSidebarIconPosition();

  // Function to toggle sidebar open/close
  function toggleSidebar() {
    sidebar.classList.toggle("closed");

    if (sidebar.classList.contains("closed")) {
      sidebarIcon.style.left = "8px"; // Keep icon on the left
      sidebarIcon.style.right = "auto"; // Reset right positioning
      sidebarIcon.style.backgroundColor = "white"; // Background for closed state
    } else {
      sidebarIcon.style.left = "5px"; // Always ensure it stays on the left
      sidebarIcon.style.right = "auto"; // Reset right
      sidebarIcon.style.backgroundColor = "white"; // Blue background for open state
    }
  }

  // Sidebar toggle functionality for both button and sidebar-icon
  toggleSidebarBtn.addEventListener("click", toggleSidebar);
  sidebarIcon.addEventListener("click", toggleSidebar); // Added functionality for sidebar-icon

  // Re-check icon positioning and styling on window resize to be responsive
  window.addEventListener("resize", setInitialSidebarIconPosition);

  // Master item toggle functionality
  masterItem.addEventListener("click", function (e) {
    if (e.target === masterItem || e.target.closest(".ffff")) {
      const isVisible = subNav.style.display === "block";

      subNav.style.display = isVisible ? "none" : "block";

      toggleIcon.src = isVisible
        ? "./assets/images/Vectorplus.png"
        : "./assets/images/Vector (1).png";

      masterItem.classList.toggle("active");
    }
  });

  // Submenu toggle functionality
  submenuItems.forEach((item) => {
    const submenuHeader = item.querySelector(".submenu-header");
    const toggleIcon = submenuHeader.querySelector(".toggle-icon");
    const nestedNav = item.querySelector(".nested-sub-nav");

    submenuHeader.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent click event from bubbling up

      const isExpanded = item.classList.contains("active");

      item.classList.toggle("active");
      nestedNav.style.display = isExpanded ? "none" : "block";

      toggleIcon.src = isExpanded
        ? "./assets/images/Vectorplus.png"
        : "./assets/images/minus.png";

      toggleIcon.style.transform = isExpanded
        ? "rotate(0deg)"
        : "rotate(180deg)";
    });
  });

  // Initially trigger the first tab with white background
  const firstTab = tabs[0];
  const firstContent = contents[1];

  firstTab.classList.add("active");
  firstTab.style.backgroundColor = "white";

  firstContent.style.display = "block"; // Show the first tab's content

  // Hide other content initially
  for (let i = 1; i < contents.length; i++) {
    contents[i].style.display = "none"; // Hide all other tab content
  }

  // Tab functionality
  function handleTabClick(tab) {
    const tabNumber = tab.getAttribute("data-tab");

    // Remove 'active' class and reset background for all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.style.backgroundColor = "";
    });

    // Add 'active' class and set background for the clicked tab
    tab.classList.add("active");
    tab.style.backgroundColor = "white";

    // Hide all tab contents
    contents.forEach((content) => {
      content.style.display = "none";
    });

    // Show the content for the clicked tab
    const activeContent = document.getElementById(`content-${tabNumber}`);
    activeContent.style.display = "block";

    // Hide other containers initially
    document.querySelectorAll(".container2").forEach((container) => {
      container.style.display = "none";
    });

    // Show the relevant container if it exists
    const activeContainer = document.getElementById(`container2-${tabNumber}`);
    if (activeContainer) {
      activeContainer.style.display = "block";
    }
  }

  // Add event listeners to tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      handleTabClick(this);
    });
  });

  // Trigger the default tab when the page loads
  window.addEventListener("load", function () {
    const defaultTab = tabs[0]; // Set the first tab as the default (you can change this to another tab if needed)
    handleTabClick(defaultTab);
  });

  // Clone icon-row content to sidebar
  const sidebarContent = iconRow.cloneNode(true);
  mobileSidebar.appendChild(sidebarContent);

  // Open mobile sidebar
  userIcon.addEventListener("click", function () {
    mobileSidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  });

  // Close mobile sidebar function
  function closeSidebar() {
    mobileSidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }

  // Event listeners for closing the sidebar
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // Close sidebar on escape key press
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSidebar();
    }
  });

  // Handle touch events for better mobile experience
  let touchStartX = 0;
  let touchEndX = 0;

  mobileSidebar.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    false
  );

  mobileSidebar.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX - touchStartX > 50) {
        // Swipe right to close sidebar
        closeSidebar();
      }
    },
    false
  );

  // Create user icon popup functionality
  const userPopup = document.createElement("div");
  userPopup.classList.add("user-popup");
  userPopup.innerHTML = `
    <div class="popup-content">
        <div class="icon"><img src="assets/images/icon1.png" alt="Icon 1" /></div>
        <div class="icon"><img src="assets/images/icon2.png" alt="Icon 2" /></div>
        <div class="icon"><img src="assets/images/icon3.png" alt="Icon 3" /></div>
        <div class="icon"><img src="assets/images/icon4.png" alt="Icon 4" /></div>
    </div>
  `;
  document.body.appendChild(userPopup);

  // Show/hide user popup on user icon click
  const profileUserIcon = document.querySelector(".proileuser img");
  profileUserIcon.addEventListener("click", function (event) {
    userPopup.classList.toggle("active");
    event.stopPropagation(); // Prevent the event from bubbling up
  });

  // Close user popup on outside click
  document.addEventListener("click", function (event) {
    if (
      !profileUserIcon.contains(event.target) &&
      !userPopup.contains(event.target)
    ) {
      userPopup.classList.remove("active");
    }
  });
});
