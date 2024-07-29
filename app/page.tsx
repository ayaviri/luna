import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import background from "@/public/luna_pizza.png"
import lunaLogo from "@/public/luna_logo.png"

export default function Home() {
  const onlineOrderingURL = process.env.ONLINE_ORDERING_URL

  return (
    <div className="min-h-screen relative">
      <Image
        src={background}
        alt="Pizza background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      
      <div className="min-h-screen bg-black bg-opacity-50 flex flex-col justify-between relative z-10">
        <Head>
          <title>Luna Pizza</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="p-5">
          <div className="w-2/6 relative">
            <Image src={lunaLogo} alt="luna logo"/>
          </div>
        </header>

        <main className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl text-white font-serif mb-8">
            The Best Pizza In Glastonbury
          </h2>
          
          <div className="space-y-4">
            <Link href="tel:8606592135" className="text-white px-6 py-3 text-xl font-serif inline-block">
              Call For Takeout
            </Link>

            <Link href="tel:8606595652" className="text-white px-6 py-3 text-xl font-serif inline-block">
              Call For Delivery
            </Link>
            
            <Link href="/menu.pdf" className="text-white px-6 py-3 text-xl font-serif inline-block">
              View Menu
            </Link>

            <Link href={onlineOrderingURL} className="text-white px-6 py-3 text-xl font-serif inline-block">
              Order Online
            </Link>
          </div>
        </main>

        <footer className="p-5 text-center text-white">
          <p>© 2024 Luna Pizza. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
