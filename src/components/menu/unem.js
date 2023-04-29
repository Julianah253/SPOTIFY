window.addEventListener('scroll', () => {
    document.getElementById('icon').classList.toggle('window-scroll', window.scrollY > 0)
})