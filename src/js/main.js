setTheme();


document.getElementById('toggle').addEventListener('change', function() {
    if (this.checked) {
        localStorage.theme= "light";
        
    } else {    
        localStorage.theme = "dark";
    }
    setTheme();
})


function setTheme() {
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
          (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
      );
}