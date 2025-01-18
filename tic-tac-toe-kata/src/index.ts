const instructions = document.querySelector('.popup-container') as HTMLElement
const startButton = document.querySelector('#start-btn') as HTMLButtonElement
const customContainer = document.querySelector(
  '.container-custom',
) as HTMLElement

// adding functionalities to the instructions container
startButton.addEventListener('click', () => {
  instructions.style.display = 'none'
  customContainer.style.display = 'flex'
})
