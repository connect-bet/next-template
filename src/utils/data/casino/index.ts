export const providers = [
  {
    name: 'BGaming',
    slug: 'bgaming',
    image: '/assets/casino/providers/bgaming.svg',
    baseUrl: 'https://demo.bgaming-network.com/games/{gameCode}/FUN'
  },
  {
    name: 'Booongo',
    slug: 'booongo',
    image: '/assets/casino/providers/booongo.svg'
  },
  {
    name: 'Evolution',
    slug: 'evolution',
    image: '/assets/casino/providers/evolution.svg'
  },
  {
    name: 'HackSaw',
    slug: 'hacksaw',
    image: '/assets/casino/providers/hacksaw.svg'
  },
  {
    name: 'Playson',
    slug: 'playson',
    image: '/assets/casino/providers/playson.svg'
  },
  {
    name: 'Pragmatic',
    slug: 'pragmatic',
    image: '/assets/casino/providers/pragmatic.svg',
    baseUrl: 'https://demogamesfree.jtmmizms.net/gs2c/openGame.do?gameSymbol={gameCode}'
  },
  {
    name: 'Push Gaming',
    slug: 'push-gaming',
    image: '/assets/casino/providers/push-gaming.svg'
  },
  {
    name: 'Relax',
    slug: 'relax',
    image: '/assets/casino/providers/relax.svg'
  },
  {
    name: 'SmartSoft',
    slug: 'smartsoft',
    image: '/assets/casino/providers/smartsoft.svg'
  },
  {
    name: 'Spinza',
    slug: 'spinza',
    image: '/assets/casino/providers/spinza.svg'
  },
  {
    name: 'Spribe',
    slug: 'spribe',
    image: '/assets/casino/providers/spribe.svg',
    baseUrl: 'https://demo.spribe.io/launch/{gameCode}'
  }
]

const games = [
  {
    name: 'Aviator',
    slug: 'aviator',
    gameCode: 'aviator',
    image: '/assets/casino/games/aviator.avif',
    provider: 'spribe',
    categories: ['popular', 'crash']
  },
  {
    name: 'Alien Fruits',
    slug: 'alien-fruits',
    gameCode: 'AlienFruits',
    image: '/assets/casino/games/alien-fruits.avif',
    provider: 'bgaming',
    categories: ['new', 'slots']
  },
  {
    name: 'Aztec Clusters',
    slug: 'aztec-clusters',
    gameCode: 'AztecClusters',
    image: '/assets/casino/games/aztec-clusters.avif',
    provider: 'bgaming',
    categories: ['popular', 'slots']
  },
  {
    name: 'Aztec Magic',
    slug: 'aztec-magic-bonanza',
    gameCode: 'AztecMagicBonanza',
    image: '/assets/casino/games/aztec-magic.avif',
    provider: 'bgaming',
    categories: ['featured', 'slots']
  },
  {
    name: 'Big Bass Splash',
    slug: 'big-bass-splash',
    gameCode: 'vs10txbigbass',
    image: '/assets/casino/games/big-bass-splash.avif',
    provider: 'pragmatic',
    categories: ['popular', 'slots']
  },
  {
    name: 'Bonanza Billion',
    slug: 'bonanza-billion',
    gameCode: 'BonanzaBillion',
    image: '/assets/casino/games/bonanza-billion.avif',
    provider: 'bgaming',
    categories: ['featured', 'slots']
  },
  {
    name: 'Candy Blitz',
    slug: 'candy-blitz',
    gameCode: 'vs20candybltz2',
    image: '/assets/casino/games/candy-blitz.avif',
    provider: 'pragmatic',
    categories: ['featured', 'slots']
  },
  {
    name: 'Dice',
    slug: 'dice',
    gameCode: 'dice',
    image: '/assets/casino/games/dice.avif',
    provider: 'spribe',
    categories: ['new', 'table']
  },
  {
    name: 'Elvis Frog',
    slug: 'elvis-frog',
    gameCode: 'ElvisFrog',
    image: '/assets/casino/games/elvis-frog.avif',
    provider: 'bgaming',
    categories: ['popular', 'slots']
  },
  {
    name: 'Floating Dragon',
    slug: 'floating-dragon',
    gameCode: 'vs10floatdrg',
    image: '/assets/casino/games/floating-dragon.avif',
    provider: 'pragmatic',
    categories: ['new', 'slots']
  },
  {
    name: 'Gates of Olympus',
    slug: 'gates-of-olympus',
    gameCode: 'vs20olympx',
    image: '/assets/casino/games/gates-of-olympus.avif',
    provider: 'pragmatic',
    categories: ['new', 'slots']
  },
  {
    name: 'Gemhalla',
    slug: 'gemhalla',
    gameCode: 'Gemhalla',
    image: '/assets/casino/games/gemhalla.avif',
    provider: 'bgaming',
    categories: ['featured', 'slots']
  },
  {
    name: 'Goal',
    slug: 'goal',
    gameCode: 'goal',
    image: '/assets/casino/games/goal.avif',
    provider: 'spribe',
    categories: ['popular', 'slots']
  },
  {
    name: 'Hilo',
    slug: 'hi-lo',
    gameCode: 'hi-lo',
    image: '/assets/casino/games/hilo.avif',
    provider: 'spribe',
    categories: ['new', 'table']
  },
  {
    name: 'Mines',
    slug: 'mines',
    gameCode: 'mines',
    image: '/assets/casino/games/mines.avif',
    provider: 'spribe',
    categories: ['featured', 'table']
  },
  {
    name: 'Mini Roulette',
    slug: 'mini-roulette',
    gameCode: 'mini-roulette',
    image: '/assets/casino/games/mini-roulette.avif',
    provider: 'spribe',
    categories: ['popular', 'table']
  },
  {
    name: 'Sugar Rush',
    slug: 'sugar-rush',
    gameCode: 'vs20sugarrush',
    image: '/assets/casino/games/sugar-rush.avif',
    provider: 'pragmatic',
    categories: ['new', 'slots']
  },
  {
    name: 'Zeus vs Hades',
    slug: 'zeus-vs-hades',
    gameCode: 'vs15godsofwar',
    image: '/assets/casino/games/zeus-vs-hades.avif',
    provider: 'pragmatic',
    categories: ['featured', 'slots']
  }
]

const categories = [
  {
    name: 'Featured',
    slug: 'featured'
  },
  {
    name: 'Popular',
    slug: 'popular'
  },
  {
    name: 'New',
    slug: 'new'
  },
  {
    name: 'Slots',
    slug: 'slots'
  },
  {
    name: 'Table',
    slug: 'table'
  }
]

export const getGamesByProvider = (provider: string) => {
  return games.filter((game) => game.provider === provider)
}

export const getGameBySlug = (slug: string) => {
  const game = games.find((game) => game.slug === slug)
  if (!game) return null
  const provider = providers.find((provider) => provider.slug === game.provider)
  if (!provider) return null

  return {
    ...game,
    gameSrc: provider.baseUrl ? provider.baseUrl.replace('{gameCode}', game.gameCode) : null
  }
}

export const getGamesByCategory = (category: string) => {
  const list = games.filter((game) => game.categories.includes(category))

  if (list.length > 0) {
    return list
  }

  return games.filter((game) => game.provider === category)
}

export const getCasinoLobby = () => {
  const lobby: any[] = categories.map((category) => {
    return {
      ...category,
      type: 'game',
      items: getGamesByCategory(category.slug)
    }
  })

  lobby.push({
    type: 'providers',
    title: 'Provedores',
    slug: 'provedores',
    items: providers
  })

  return lobby
}
