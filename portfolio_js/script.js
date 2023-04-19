let photo = document.getElementById('photo');
photo.addEventListener('click', zoom);

function zoom() {
    photo.classList.toggle('zoomIn');
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
        case 84:
            document.getElementById('repos').scrollIntoView({behavior: 'smooth'}, true);
        break;
    }
}

const url = 'https://api.github.com/users/stacihanim/repos';
const repos = document.querySelector('.repos');
const loader = document.querySelector('.loader');

function createElement(data) {

    let size = data.length;
    let count = 0;

    while (count < size) {
         let obj = data[count];

         const repo = document.createElement('div');
         repo.classList.add('repo');
    
        const a = document.createElement('a');
         a.textContent = obj.full_name;
         a.setAttribute('href', obj.html_url);
         a.setAttribute('target', '_blank');
         a.classList.add('text', 'cell_link', 'repo_style');
        //  a.classList.add();

        repo.appendChild(a);

         if(data.description) {
             const desc = document.createElement('div');
            desc.textContent = obj.description;

             repo.appendChild(desc);
        }
        repos.appendChild(repo);

        count += 1;
        
    }


    if(!data.length) {
        return
    } else {
    loader.remove(); }
    
}

fetch(url).then(response => response.json()).then(data => createElement(data));