import { Coffee, Croissant, Heart, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const menuItems = [
    {
      name: 'Espresso',
      description: 'Rich and aromatic single shot of espresso',
      price: '$3.50'
    },
    {
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam',
      price: '$4.50'
    },
    {
      name: 'Avocado Toast',
      description: 'Sourdough bread with avocado, cherry tomatoes and feta',
      price: '$8.50'
    },
    {
      name: 'Blueberry Muffin',
      description: 'Freshly baked with organic blueberries',
      price: '$3.75'
    }
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0" 
          alt="Cafe interior"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Brew &amp; Bites</h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Artisanal coffee and fresh pastries in the heart of the city
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition">
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image 
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86" 
              alt="Coffee beans"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h2>
            <p className="text-lg text-amber-800 mb-4">
              Founded in 2015, Brew &amp; Bites started as a small coffee cart and has grown into a beloved neighborhood cafe.
            </p>
            <p className="text-lg text-amber-800 mb-6">
              We source our beans directly from sustainable farms and bake all our pastries fresh daily.
            </p>
            <div className="flex items-center gap-4 text-amber-700">
              <MapPin className="w-6 h-6" />
              <span>123 Coffee Street, Beanville</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                  <span className="text-amber-600 font-medium">{item.price}</span>
                </div>
                <p className="text-amber-800">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Brew &amp; Bites</h3>
              <p className="mb-2">Open daily 7am - 6pm</p>
              <p>Weekends 8am - 5pm</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-300 transition">
                <Coffee className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-300 transition">
                <Croissant className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-300 transition">
                <Heart className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-amber-800 text-center">
            <p>&copy; {new Date().getFullYear()} Brew &amp; Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}