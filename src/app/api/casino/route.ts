import { getCasinoLobby } from '@/utils/data/casino'

export async function GET() {
  return Response.json({
    banner: {
      desktop: '/assets/desktop-banner.svg',
      mobile: '/assets/mobile-banner.svg'
    },
    data: getCasinoLobby()
  })
}
