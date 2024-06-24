export async function GET() {
  const withdrawals = [
    [1, '01/01/2024', 'Aprovado', 'R$ 200,00', 'Pix'],
    [2, '01/01/2024', 'Aprovado', 'R$ 250,00', 'Pix'],
    [3, '01/01/2024', 'Recusado', 'R$ 1000,00', 'Pix']
  ]

  return Response.json({
    withdrawals
  })
}
