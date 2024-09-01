const buttonsTab: HTMLDivElement = document.querySelector('#buttonstab')!
const promptButtons: NodeList = buttonsTab.childNodes
const textdisplay: HTMLDivElement = document.querySelector('#textdisplay')
const healthbar: HTMLDivElement = document.querySelector('#healthbar')
const EXPbar: HTMLDivElement = document.querySelector('#EXPbar')

console.log(promptButtons)

promptButtons.forEach((button) => {
  if (button instanceof Element) {
    button.addEventListener('click', (e) => {
      switch (button.id) {
        case 'feed':
          textdisplay.textContent = 'Pet is being fed'
          console.log('Pet is being fed')
          actions('feed')
          break
        case 'play':
          textdisplay.textContent = 'Pet is playing'
          console.log('Pet is playing')
          break
        case 'talk':
          //add unique dialog per stages
          textdisplay.innerText = 'Uh...'
          break
        case 'train':
          textdisplay.innerText = 'Pet is training'
          actions('train')
          break
        case 'healthgroup':
          textdisplay.textContent = `Health is at ${healthbar.style.width}`
          break
        case 'EXPgroup':
          textdisplay.textContent = `EXP is at ${EXPbar.style.width}`
          break
        default:
          console.log('no such action')
      }
    })
  }
})

function actions(action: string): void {
  const parsedE = Number(EXPbar.style.width.split('%')[0])
  const parsedH = Number(healthbar.style.width.split('%')[0])

  if (action == 'train')
    if (parsedH > 0) {
      EXPbar.style.width = `${parsedE + 30}%`
      healthbar.style.width = `${parsedH - 20}%`
    } else {
      textdisplay.innerText = 'Pet is exhausted'
    }

  if (action == 'feed')
    if (parsedH != 100) {
      healthbar.style.width = `${parsedH + 10}%`
    } else {
      textdisplay.innerText = 'Pet is full!'
    }
}
