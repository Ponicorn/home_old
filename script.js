const projects = {
  synth: {
    url: 'https://ponicorn.github.io/synth/'
  },
  europe: {
    url: 'http://europe.sauder.fr'
  },
  aocaop: {
    url: 'https://ponicorn.github.io/aocaop/'
  },
  startupify: {
    url: 'https://ponicorn.github.io/startupify/'
  },
  pxfr: {
    url: 'https://ponicorn.github.io/PixelFightingReload/'
  },
  chevaul: {
    url: 'http://chevaul.sauder.fr'
  },
  ctrl: {
    url: 'https://ponicorn.github.io/ctrl/'
  },
}

let main = document.querySelector('#main')
main.addEventListener('click', (e) => {
  let block = e.target.closest('.block')
  if (block && main.contains(block) && projects[block.dataset.block]) {
    let url = projects[block.dataset.block].url
    window.location.href = url
  }
})