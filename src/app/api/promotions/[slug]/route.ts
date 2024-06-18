import { getPromotionBySlug } from '@/utils/data/promotions'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params

  const promotion = getPromotionBySlug(slug)
  return Response.json({ promotion })
}
