import { promotions } from '@/utils/data/promotions'

export async function GET() {
  return Response.json({
    banner: {
      desktop: '/assets/desktop-banner.svg',
      mobile: '/assets/mobile-banner.svg'
    },
    promotions
  })
}
