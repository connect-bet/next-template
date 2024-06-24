export async function GET() {
  const history = [
    [1, 'Aviator', '01/01/2021', 'R$ 100,00', 'Ganhou'],
    [2, 'Mines', '01/01/2021', 'R$ 100,00', 'Perdeu'],
    [3, 'Aztec Magic', '01/01/2021', 'R$ 100,00', 'Ganhou'],
    [4, 'Aztec Magic', '01/01/2021', 'R$ 100,00', 'Perdeu']
  ]

  return Response.json({
    history
  })
}
