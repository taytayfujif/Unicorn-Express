function ToggleSigns( element ) {
    console.log(element);
    let temp = document.querySelector(element);
    if(temp.style.display == 'none')
        temp.style.display = 'flex';
    else
        temp.style.display = 'none'
}