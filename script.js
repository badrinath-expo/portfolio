const nameHeader = document.getElementById('name-header')
let fullName = `I'm BADRINATH`
let currentLoadedName = ''
let i=0;
let timer = setInterval(()=> {
    if(i == fullName.length-1) clearInterval(timer)
    currentLoadedName+=fullName[i];
    nameHeader.innerHTML = currentLoadedName
    i++;
},100)