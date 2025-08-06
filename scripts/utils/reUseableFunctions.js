export function PopUpContainer(containerElement, open) {
  if (containerElement) {
    if (open === 'show') {
      containerElement.classList.remove('hide');
      containerElement.classList.add('show');
    } else if (open === 'hide') {
      containerElement.classList.remove('show');
      containerElement.classList.add('hide');
    } else {
      console.error('Invalid action. Use "show" or "hide".');
    }
  } else {
    console.error(`Container not found: ${containerElement}`);
  }
}