import { providers } from '@/utils/data/casino'

export async function GET() {
  return Response.json(providers)
}
