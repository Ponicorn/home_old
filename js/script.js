let projects = [
  { 
    name: 'gralette',
    url: 'https://ponicorn.github.io/gralette/',
  },
  { 
    name: 'startupify',
    url: 'https://ponicorn.github.io/startupify/',
  },
  { 
    name: 'perche',
    url: 'https://ponicorn.github.io/TUP/',
  },
  { 
    name: 'synth',
    url: 'https://ponicorn.github.io/synth/',
  },
  { 
    name: 'pxfr',
    url: 'https://ponicorn.github.io/PixelFightingReload/',
  },
  { 
    name: 'ctrl',
    url: 'https://ponicorn.github.io/ctrl/',
  },
  { 
    name: 'aocaop',
    url: 'https://ponicorn.github.io/aocaop/',
  },
  // { 
  //   name: 'chevaul',
  //   url: 'http://chevaul.sauder.fr',
  // },
  // { 
  //   name: 'europe',
  //   url: 'http://europe.sauder.fr',
  // },
]
let app = new Vue({
  el: '#main',
  data: {
    projects,
    quality: 'med'
  },
  methods: {
    projectClick (project) {
      // On pourrait faire une page d'explication à l'occasion ?
      window.location.href = project.url
    }
  }
})