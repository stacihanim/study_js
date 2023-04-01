let photo = document.getElementById('photo');
photo.addEventListener('click', zoom);

function zoom() {
    //alert('ok');
    if (photo.classList.contains('zoomIn')) {
        photo.classList.remove('zoomIn');
    } else {
    photo.classList.add('zoomIn');
}
}

document.addEventListener('keydown', scroll_to)

function scroll_to(e) {
    const key = e.keyCode;
    //console.log(key);
    switch (key) {
        case 81:
            document.getElementById('summary').scrollIntoView({behavior: 'smooth'}, true);
        break;
        case 87:
            document.getElementById('skills').scrollIntoView({behavior: 'smooth'}, true);
        break;
        case 69:
            document.getElementById('work').scrollIntoView({behavior: 'smooth'}, true);
        break;
        case 82:
            document.getElementById('education').scrollIntoView({behavior: 'smooth'}, true);
        break;
    }
}