"use client"
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import background from "@/public/luna_pizza.png"
import lunaLogo from "@/public/luna_logo.png"

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)

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
          {/* <h1 className="text-4xl md:text-6xl text-white font-serif">Luna Pizza</h1> */}
        </header>

        <main className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl text-white font-serif mb-8">
            The Best Pizza In Glastonbury
          </h2>
          
          <div className="space-y-4">
            <div className="relative inline-block text-left">
              <button onClick={() => setContactOpen(!contactOpen)} className="text-white px-6 py-3 text-xl font-serif">
                Contact
              </button>
              {contactOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="tel:+15551234567" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Takeout: (555) 123-4567</a>
                    <a href="tel:+15559876543" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delivery: (555) 987-6543</a>
                    <a href="mailto:info@pizzaparadise.com" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Email: info@pizzaparadise.com</a>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="#" className="text-white px-6 py-3 text-xl font-serif inline-block">
              View Menu
            </Link>

            <Link href="#" className="text-white px-6 py-3 text-xl font-serif inline-block">
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
