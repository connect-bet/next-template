import { IApiParams } from '@/types/api'
import { getGameBySlug } from '@/utils/data/casino'

export async function GET(request: Request, { params }: IApiParams) {
  const { slug } = params

  const game = getGameBySlug(slug)
  return Response.json(game)
}
