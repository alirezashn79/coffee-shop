const cartBox=document.getElementById("cart-box"),cartBoxOpen=document.getElementById("cart-box-open"),cartBoxClose=document.getElementById("cart-box-close"),sidebar=document.getElementById("sidebar"),sidebarOpen=document.getElementById("sidebar-open"),sidebarClose=document.getElementById("sidebar-close"),shopMenu=document.getElementById("shop-menu"),shopMenuToggle=document.getElementById("shop-menu-toggle"),themeToggle=document.querySelectorAll(".theme-toggle");themeToggle.forEach((e=>{e.addEventListener("click",(()=>{"dark"===localStorage.theme?(document.documentElement.classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"))}))})),shopMenuToggle.addEventListener("click",(e=>{shopMenu.classList.contains("hidden")?shopMenu.classList.replace("hidden","flex"):shopMenu.classList.replace("flex","hidden"),e.currentTarget.parentElement.classList.toggle("text-orange-300")}));const overlay=document.getElementById("overlay");cartBoxClose.addEventListener("click",(e=>{cartBox.classList.replace("left-0","-left-64"),overlay.classList.add("hidden")})),cartBoxOpen.addEventListener("click",(()=>{cartBox.classList.replace("-left-64","left-0"),overlay.classList.remove("hidden")})),sidebarOpen.addEventListener("click",(()=>{sidebar.classList.replace("-right-64","right-0"),overlay.classList.remove("hidden")})),sidebarClose.addEventListener("click",(()=>{sidebar.classList.replace("right-0","-right-64"),overlay.classList.add("hidden")})),overlay.addEventListener("click",(()=>{cartBox.classList.contains("left-0")&&cartBox.classList.replace("left-0","-left-64"),overlay.classList.add("hidden"),sidebar.classList.contains("right-0")&&sidebar.classList.replace("right-0","-right-64")}));