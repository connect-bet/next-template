import { liveGames } from '@/utils/data/liveCasino'

export async function GET() {
  return Response.json({
    banner: {
      desktop: '/assets/desktop-banner.svg',
      mobile: '/assets/mobile-banner.svg'
    },
    data: liveGames
  })
}
