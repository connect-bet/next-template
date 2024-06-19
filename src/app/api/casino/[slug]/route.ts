import { IApiParams } from '@/types/api'
import { getPromotionBySlug } from '@/utils/data/promotions'

export async function GET(request: Request, { params }: IApiParams) {
  const { slug } = params

  const promotion = getPromotionBySlug(slug)
  return Response.json({ promotion })
}
