let projects = [
  { 
    name: 'Irregex',
    url: 'https://ponicorn.github.io/Irregex/',
    desc: `Site en one page, avec Vue.js. Rien de technique ou de particulier, juste des jeux de mots de qualités douteuses.`,
  },
  { 
    name: 'gralette',
    url: 'https://ponicorn.github.io/gralette/',
    desc: `Née du besoin de décider où manger avec d'anciens collègues, cette petite application web stock les changements de manière pérenne via localStorage.`,
  },
  { 
    name: 'startupify',
    url: 'https://ponicorn.github.io/startupify/',
    desc: `Vous avez besoin d'inspiration pour votre prochaine société, ou simplement d'une citation du peintre Bob Ross ? Ce site est pour vous. Il a été créé pour travailler le pré-chargement en arrière plan d'image via une source externe, unsplash dans ce cas.`,
  },
  { 
    name: 'synth',
    url: 'https://ponicorn.github.io/synth/',
    desc: `Simple en apparence, ce synthétiseur exploite l'api Javascript de gestion du son pour la création de l'onde et ses modulations, et l'api de gestion des périphériques midi (supporté par chrome uniquement). Il est donc possible de brancher un piano pour profiter de cette expérimentation technique.`,
  },
  { 
    name: 'ctrl',
    url: 'https://ponicorn.github.io/ctrl/',
    desc: `Éxperimentation des différentes méthodes d'entrées supportées par le navigateur : Souris, clavier, Gamepad (Chrome uniquement) et Accéléromètre quand celui-ci est disponible (à activer avec la cinquième case). La boucle de gestion des évements est calée sur requestAnimationFrame pour obtenir un rendu fluide.`,
  },
  { 
    name: 'pxfr',
    url: 'https://ponicorn.github.io/PixelFightingReload/',
    desc: `Reprise du code d'un projet existant (http://pixelsfighting.com/), pour y ajouter des graphiques et statistiques.`,
  },
  { 
    name: 'aocaop',
    url: 'https://ponicorn.github.io/aocaop/',
    desc: `Exploitation de jeux de données du site gouvernemental https://www.data.gouv.fr/fr/, pour ressortir les produit AOC et AOP produit dans chaque département.`,
  }
]
let app = new Vue({
  el: '#main',
  data: {
    projects,
    // TODO: Changer la qualité en fonction de la résolution et du dpi
    quality: 'med'
  },
  methods: {
    projectClick (project) {
      // On pourrait faire une page d'explication à l'occasion ?
      window.location.href = project.url
    }
  }
})