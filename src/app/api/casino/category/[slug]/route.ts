import { IApiParams } from '@/types/api'
import { getGamesByCategory } from '@/utils/data/casino'

export async function GET(request: Request, { params }: IApiParams) {
  const { slug } = params

  const games = getGamesByCategory(slug)
  return Response.json(games)
}
