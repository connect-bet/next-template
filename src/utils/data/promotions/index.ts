const promotionContent = `
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita! 
  </p>
  <br />
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita! 
  </p>
  <br />
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita! 
  </p>
  <br />
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id iste esse nostrum dolore neque cumque sapiente, numquam adipisci praesentium qui vero! Facilis, temporibus vel assumenda incidunt eos delectus expedita! 
  </p>
`

export const promotions = [
  {
    title: 'Boas-Vindas do Cassino',
    description: 'Disponível até 30/12/2024 às 23:59',
    image: '/assets/promo-banner.svg',
    category: 'casino',
    slug: 'boas-vindas-cassino',
    content: promotionContent
  },
  {
    title: 'Boas-Vindas do Esportes',
    description: 'Disponível até 30/12/2024 às 23:59',
    image: '/assets/promo-banner.svg',
    category: 'sports',
    slug: 'boas-vindas-esportes',
    content: promotionContent
  },
  {
    title: 'Free Spins',
    description: 'Disponível até 30/12/2024 às 23:59',
    image: '/assets/promo-banner.svg',
    category: 'casino',
    slug: 'free-spins',
    content: promotionContent
  },
  {
    title: 'Free Bets',
    description: 'Disponível até 30/12/2024 às 23:59',
    image: '/assets/promo-banner.svg',
    category: 'sports',
    slug: 'free-bets',
    content: promotionContent
  }
]

export const getPromotionBySlug = (slug: string) => {
  return promotions.find((promotion) => promotion.slug === slug)
}
