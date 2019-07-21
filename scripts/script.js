// comments
let counter = 1;
let buttonNodes = document.getElementsByClassName('comments__bar__button-list__item');
let bg = document.getElementsByClassName('comments')[0];

buttonNodes[0].onclick = () => {
  counter = 0;
  buttonNodes[0].style.background = 'white';
  buttonNodes[1].style.background = 'none';
  buttonNodes[2].style.background = 'none';
  bg.style.background = 'url(./assets/images/comments/page1-bg.png)';
}

buttonNodes[1].onclick = () => {
  counter = 1;
  buttonNodes[0].style.background = 'none';
  buttonNodes[1].style.background = 'white';
  buttonNodes[2].style.background = 'none';
  bg.style.backgroundImage = 'url(./assets/images/comments/page2-bg.png)';
}

buttonNodes[2].onclick = () => {
  counter = 2;
  buttonNodes[0].style.background = 'none';
  buttonNodes[1].style.background = 'none';
  buttonNodes[2].style.background = 'white';
  bg.style.background = 'url(./assets/images/comments/page3-bg.png)';
}

const sliderAnimation = nodes => {
  let nodesAmount = nodes.length - 1;
  const tempFunc = () => {
    nodes[counter].click();
    counter === nodesAmount ? counter = 0 : counter++;
  }
  setInterval(tempFunc, 3000);
};
sliderAnimation(buttonNodes);