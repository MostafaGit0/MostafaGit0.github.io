/*=============== LIGHT DARK THEME ===============*/
// This code should be added to each of your project pages
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById("theme-button");
    const lightTheme = "light-theme";
    const iconTheme = "bx-sun";
  
    // Previously selected theme (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");
  
    // Apply the saved theme when the page loads
    if (selectedTheme) {
      // If there's a saved theme, apply it
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme);
      
      // If the theme button exists on this page, update its icon
      if (themeButton) {
        themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme);
        
        // Add click event to toggle theme if button exists
        themeButton.addEventListener("click", () => {
          // Add or remove the light / icon theme
          document.body.classList.toggle(lightTheme);
          themeButton.classList.toggle(iconTheme);
          
          // Save the theme and the current icon that the user chose
          localStorage.setItem("selected-theme", 
            document.body.classList.contains(lightTheme) ? "dark" : "light");
          localStorage.setItem("selected-icon", 
            themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun");
        });
      }
    }
  });