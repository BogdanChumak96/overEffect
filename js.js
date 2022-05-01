const items = document.querySelectorAll('.item')

items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        removeActiveClasses()
        console.log('sss')
        item.classList.add('full')
    })
})
function removeActiveClasses(){
    items.forEach((item) => {
        item.classList.remove('full')
    })
}