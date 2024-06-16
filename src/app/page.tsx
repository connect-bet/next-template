import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <Image src="/assets/logo.png" alt="Logo" width={200} height={60} />
      <h1 className="text-white text-2xl">Hello World!</h1>
    </main>
  )
}
