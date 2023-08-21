// Función para cambiar entre los modos claro y oscuro
document.getElementById('input').addEventListener('change', function () {
  if (!document.body.classList.contains('dark')) {
    document.body.classList.add('dark');
  }
  else {
    document.body.classList.remove('dark');
  }
});


const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

const menuItems = document.querySelectorAll('.menu-item')

const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', function () {
  document.body.classList.toggle('mobile-menu-active')
})

menuItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    const currentItem = document.querySelector('.active')
    currentItem.classList.remove('active')
    e.target.classList.add('active')
  })
})