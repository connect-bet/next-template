export async function GET() {
  const deposits = [
    [1, '01/01/2024', 'Aprovado', 'R$ 100,00', 'Pix'],
    [2, '01/01/2024', 'Aprovado', 'R$ 100,00', 'Pix'],
    [3, '01/01/2024', 'Aprovado', 'R$ 100,00', 'Pix'],
    [4, '01/01/2024', 'Recusado', 'R$ 100,00', 'Pix'],
    [5, '01/01/2024', 'Aprovado', 'R$ 100,00', 'Pix']
  ]
  return Response.json({
    deposits
  })
}
