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

document.addEventListener('DOMContentLoaded', () => {
//   const skills = [
//       'code-logos/html.png',
//       'code-logos/js.png',
//       'code-logos/css.png',
//       'code-logos/react.png',
//       'code-logos/mongoDB.png',
//       'code-logos/nodejs.png',
//       'code-logos/expressjs.png',
//       'code-logos/c.png',
//       'code-logos/cpp.png',
//       'code-logos/tailwind.png'
//   ];
  const skills = [
      'code-logos/html.png',
      'code-logos/cpp.svg',
      'code-logos/js.svg',
      'code-logos/css.png',
      'code-logos/react.svg',
      'code-logos/mongodb.svg',
      'code-logos/nodejs.svg',
      'code-logos/express.svg',
      'code-logos/c.png',
      'code-logos/tailwind.svg',
  ];

  const orbitContainer = document.getElementById('skills-orbit');
  skills.forEach((skill, index) => {
      const skillWrapper = document.createElement('div');
      skillWrapper.style.transform = `rotate(${index * (360 / skills.length)}deg)`;
      
      const skillDiv = document.createElement('div');
      skillDiv.className = 'skill';
      skillDiv.style.right = `${(index %2) ? '7.5em' : '3.5em'}`;
      

      const img = document.createElement('img');
      img.className = 'logo';
      img.src = skill;
      img.alt = 'Logo';
      img.style.transform = `rotate(${index * -1 * (360 / skills.length)}deg)`;

      skillDiv.appendChild(img);
      skillWrapper.appendChild(skillDiv);
      orbitContainer.appendChild(skillWrapper);
  });
});


// <div className="skill" transform="rotate(${index * (360 / skills.length)}deg)"  right=`${index % 2 ? '7.5em' : '3.5em'}`>
//     <img src={img-skill} transform = `rotate(${index * -1 * (360 / skills.length)}deg)`
// </div>