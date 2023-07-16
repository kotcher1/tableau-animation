const cross = document.getElementById('cross');
const block = document.getElementById('logoBlock');
const title = document.getElementById('title');
const logoTitle = document.getElementById('logoTitle');
const a = document.getElementById('letterA');
const mainText = document.getElementById('mainText');
const columnsBlock = document.getElementById('columns');
const columnsBlockSm = document.getElementById('columnsSm');
const crossClone = document.getElementById('crossClone');
const promo = document.getElementById('promo');
const article2 = document.getElementById('article2');
const article4 = document.getElementById('article4');
const t =  document.getElementById('letterT');
const button = document.getElementById('button');


let columnHeight = 40;
let columnHeightSm = 5;
let delay = 0;
let delaySm = 0.5;
let lastColumn;

for (let i = 0; i < 40; i++) {
  
  const div = document.createElement('div');
  div.style.maxHeight = `${columnHeight + Math.floor(Math.random() * Math.floor(20))}px`;
  div.style.animationDelay = `${delay}s`;
  delay += 0.005;
  columnsBlock.appendChild(div);
  if (i % 3 === 0) {
    columnHeight += 30;
  }
}

for (let i = 0; i < 40; i++) {
  
  const div = document.createElement('div');
  if (i < 20) {
    div.style.maxHeight = `0px`;
  } else {
    div.style.maxHeight = `${columnHeightSm + Math.floor(Math.random() * Math.floor(20))}px`;
    div.style.animationDelay = `${delaySm}s`;
    delaySm += 0.005;
    if (i % 2 === 0) {
      columnHeightSm += 15;
    }
  }
  if (i === 39) {
    div.setAttribute('id', 'lastColumn');
  }
  columnsBlockSm.appendChild(div);
  if (i === 39) {
    lastColumn = document.getElementById('lastColumn');
  }
}



let p = 3;

cross.addEventListener('animationend', () => {
  p++;
    if (p === 4) {
      cross.setAttribute('class', 'cross back');
      block.setAttribute('class', 'block anima');
      title.setAttribute('class', 'title anima');
      logoTitle.setAttribute('class', 'logo-title anima');
      columnsBlock.setAttribute('class', 'columns anima');
      columnsBlockSm.setAttribute('class', 'columns-sm anima');
    }
})

a.addEventListener('animationstart', () => {
  if (title.className === 'title anima') {
    mainText.setAttribute('class', 'main-screen-text anima');
  } else if (title.className === 'title end') {
    const span1 = document.querySelector(".main-screen-text span:first-child");
    const span2 = document.querySelector(".main-screen-text span:nth-child(2)");
    span1.innerHTML = "Your most important decisions";
    span2.innerHTML = "begin with data";
    mainText.setAttribute('class', 'main-screen-text end');
    promo.style.display = "none";
    button.setAttribute('class', 'button end');

  }
})

let coord2;

lastColumn.addEventListener('animationend', () => {

  if (columnsBlock.className === 'columns anima') {
    setTimeout(() => {
      coord2 =  t.getBoundingClientRect();
      logoTitle.setAttribute('class', 'logo-title anima closeup');
      columnsBlock.setAttribute('class', 'columns anima closeup');
      columnsBlockSm.setAttribute('class', 'columns-sm anima closeup');
      mainText.setAttribute('class', 'main-screen-text anima closeup');
      cross.setAttribute('class', 'cross anima closeup');
      promo.setAttribute('class', 'promo-block anima');
        const coord =  cross.getBoundingClientRect();
        crossClone.style.left = `${coord.left + 24}px`;
        crossClone.style.top = `${coord.top +5}px`;
        crossClone.setAttribute('class', 'cross-clone anima');
    }, 500);
  }

})

article2.addEventListener('animationend', () => {
  if(promo.className === 'promo-block anima') {
    promo.setAttribute('class', 'promo-block out-anima');
  }
})

article4.addEventListener('animationend', () => {
  if(promo.className === 'promo-block out-anima') {

      let rule = `\
          susy {\
            from {
              top: calc(50% - 15px);
              left: calc(50% - 15px);
            }
            25% {
              transform: rotate(90deg) scale(1.5);
            }
            50% {
              transform: rotate(180deg) scale(1.5);
            }
            75% {
              transform: rotate(270deg) scale(1.5);
            }
          
            100% {
              transform: rotate(360deg) scale(1.5);
            }
            to {\
                left: ${coord2.left + 4}px;\
                top: ${coord2.top}px;\
                background-color: white;\
              }\
            }\
          `;

    crossClone.setAttribute('style', '');
    const style = document.createElement('style');
    style.innerHTML = '@keyframes ' + rule;
    document.body.appendChild(style);

    crossClone.setAttribute('class', 'cross-clone end');
    logoTitle.setAttribute('class', 'logo-title end');
    cross.setAttribute('class', 'cross end');
    block.setAttribute('class', 'block end');
    title.setAttribute('class', 'title end');
    promo.setAttribute('class', 'promo-block out-anima second-out');
  }
})

let blockAnima = 1;

block.addEventListener('animationstart', () => {
  if (block.className === 'block end') {
    if (blockAnima === 1) {
      setTimeout(() => {
        columnsBlock.setAttribute('class', 'columns end');
        columnsBlockSm.setAttribute('class', 'columns-sm end');
      }, 1500);
    }
    blockAnima += 1;
  }
})

crossClone.addEventListener('animationend', () => {
  if (crossClone.className === "cross-clone end") {
    crossClone.style.display = "none";
    t.style.visibility = "visible";
    t.style.transform = "scale(1)";
  }
})


