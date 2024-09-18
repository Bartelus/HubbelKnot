console.log('Hello!');

function tallkontroll() {
  let tallinput = document.getElementById(antall);
  let tallverdi = tallinput.value;

  {
    if (tallverdi > 10) console.log('Dette er et bra tall');
    let commentElement = document.createElement('p');
    commentElement.textContent = tallverdi;
  }
}
