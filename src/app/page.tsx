import Image from 'next/image'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center">Hello World</h1>
        <Image src="/images/hero.jpg" width={300} height={300} />
    </div>
    </div>
  )
}
