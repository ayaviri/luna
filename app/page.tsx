import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import background from "@/public/luna_pizza.png"
import lunaLogo from "@/public/luna_logo.png"

export default function Home() {

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
          
          <div className="mt-8 text-white font-serif text-xl space-y-4 flex flex-col items-center">
            <Link href="tel:8606592135" className="hover:underline">
              Call For Takeout
            </Link>

            <Link href="tel:8606595652" className="hover:underline">
              Call For Delivery
            </Link>
            
            <Link href="/menu.pdf" className="hover:underline">
              View Menu
            </Link>

            <Link href="https://www.clover.com/online-ordering/luna-pizza-glastonbury" className="hover:underline">
              Order Online
            </Link>

            <details>
              <summary className="cursor-pointer">Location</summary>
              <a href="https://maps.app.goo.gl/br3BX9L8vMH4HErk8">88 Hebron Ave, Glastonbury, CT 06033</a>
            </details>
            <details>
              <summary className="cursor-pointer">Hours</summary>
              <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
              <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
              <p>Sunday: 12:00 PM - 9:00 PM</p>
            </details>
          </div>
        </main>

        <footer className="p-5 text-center text-white font-serif">
          <p>© 2024 Luna Pizza. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
