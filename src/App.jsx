import { useState } from 'react'
import { Menu, X, ShoppingCart, Globe, Brain, Zap, Shield, Star, ArrowRight, Check, Crown } from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('portfolio')

  const services = [
    { icon: Brain, title: 'Live Translator AI', desc: 'Tłumaczenie w czasie rzeczywistym PL ↔ DE ↔ RU', price: 'od 49€/mies' },
    { icon: Globe, title: 'Geilenkirchen Assistant', desc: 'Pomoc urzędowa i społeczna dla emigrantów', price: 'od 29€/mies' },
    { icon: Zap, title: 'Business Assistant', desc: 'Zarządzanie klientami, dokumenty, raporty', price: 'od 79€/mies' },
    { icon: Shield, title: 'Firmware Unlock', desc: 'Odblokowywanie i naprawa sprzętu', price: 'wycena' },
  ]

  const products = [
    { id: 1, name: 'Translator AI Pro', desc: 'Pełny tłumacz AI z Bluetooth', price: 199, category: 'mobile' },
    { id: 2, name: 'Business Pro Suite', desc: 'Pełny pakiet asystenta biznesowego', price: 149, category: 'service' },
    { id: 3, name: 'Geilenkirchen Premium', desc: 'Pakiet pomocy urzędowej + dokumenty', price: 99, category: 'service' },
    { id: 4, name: 'API Access', desc: 'Dostęp do API wszystkich modeli AI', price: 299, category: 'api' },
  ]

  const plans = [
    { name: 'Starter', price: 29, features: ['Tłumacz AI basic', 'Email support', '1 użytkownik'], popular: false },
    { name: 'Business', price: 79, features: ['Wszystkie aplikacje', 'Priorytet support', '5 użytkowników', 'API access'], popular: true },
    { name: 'Enterprise', price: 199, features: ['Nieograniczone API', 'Dedykowany support', 'Wdrożenie on-site', 'SLA 99.9%'], popular: false },
  ]

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-rey-black/90 backdrop-blur border-b border-rey-gray/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rey-gold to-rey-green rounded-lg flex items-center justify-center font-bold text-rey-black">
              R
            </div>
            <span className="text-xl font-bold">RECYTRONIX</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setActiveTab('portfolio')} className={`hover:text-rey-gold ${activeTab === 'portfolio' ? 'text-rey-gold' : ''}`}>Portfolio</button>
            <button onClick={() => setActiveTab('shop')} className={`hover:text-rey-gold ${activeTab === 'shop' ? 'text-rey-gold' : ''}`}>E-Shop</button>
            <button onClick={() => setActiveTab('plans')} className={`hover:text-rey-gold ${activeTab === 'plans' ? 'text-rey-gold' : ''}`}>Plany</button>
            <button className="bg-rey-gold text-rey-black px-4 py-2 rounded-lg font-semibold hover:bg-rey-green">
              Login
            </button>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-rey-dark border-b border-rey-gray/20 px-4 py-4 flex flex-col gap-4">
            <button onClick={() => { setActiveTab('portfolio'); setMenuOpen(false) }}>Portfolio</button>
            <button onClick={() => { setActiveTab('shop'); setMenuOpen(false) }}>E-Shop</button>
            <button onClick={() => { setActiveTab('plans'); setMenuOpen(false) }}>Plany</button>
            <button className="bg-rey-gold text-rey-black px-4 py-2 rounded-lg">Login</button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rey-card border border-rey-gray/30 rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-rey-gold" />
            <span className="text-sm text-rey-gray">Business Pro Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-rey-gold">RECYTRONIX</span>
            <br />
            <span className="text-white">AI Solutions</span>
          </h1>
          <p className="text-xl text-rey-gray max-w-2xl mx-auto mb-8">
            Kompleksowe rozwiązania AI dla tłumaczeń, asystencji biznesowej i pomocy urzędowej
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setActiveTab('shop')} className="bg-rey-gold text-rey-black px-8 py-3 rounded-lg font-semibold hover:bg-rey-green flex items-center justify-center gap-2">
              <ShoppingCart />
              Przejdź do sklepu
            </button>
            <button onClick={() => setActiveTab('portfolio')} className="border border-rey-gray px-8 py-3 rounded-lg hover:border-rey-gold">
              Zobacz portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      {activeTab === 'portfolio' && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Nasze Usługi</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div key={i} className="bg-rey-card border border-rey-gray/30 rounded-2xl p-6 hover:border-rey-gold/50 transition-all">
                  <service.icon className="w-12 h-12 text-rey-gold mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-rey-gray mb-4">{service.desc}</p>
                  <p className="text-rey-green font-semibold">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'shop' && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">E-Shop</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-rey-card border border-rey-gray/30 rounded-2xl p-6 hover:border-rey-gold/50 transition-all">
                  <div className="h-32 bg-gradient-to-br from-rey-dark to-rey-black rounded-lg mb-4 flex items-center justify-center">
                    <Star className="w-12 h-12 text-rey-gold/50" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-rey-gray mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-rey-gold">{product.price}€</span>
                    <button className="bg-rey-gold text-rey-black px-4 py-2 rounded-lg hover:bg-rey-green">
                      Kup
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'plans' && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Plany Subskrypcji</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <div key={i} className={`bg-rey-card border rounded-2xl p-8 ${plan.popular ? 'border-rey-gold scale-105' : 'border-rey-gray/30'}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-rey-gold text-rey-black px-3 py-1 rounded-full text-sm font-semibold">Popularny</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-4xl font-bold text-rey-gold mb-6">{plan.price}€<span className="text-lg text-rey-gray">/mies</span></p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-rey-gray">
                        <Check className="w-5 h-5 text-rey-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold ${plan.popular ? 'bg-rey-gold text-rey-black hover:bg-rey-green' : 'border border-rey-gray hover:border-rey-gold'}`}>
                    Wybierz plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-rey-gray/20 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-rey-gray">
          <p>© 2026 RECYTRONIX. Wszystkie prawa zastrzeżone.</p>
          <p className="mt-2 text-sm">AI-powered solutions for translation, business, and government assistance.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
