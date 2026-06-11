import { useState, useEffect, useRef } from 'react'
import './index.css'
import GirgitonLogo from './components/Logo'
import {
  IconMic, IconStudioMic, IconBrain, IconScreen, IconChart,
  IconChartDown, IconChartUp, IconClipboard, IconRunner,
  IconSignal, IconTrophy, IconChef, IconLock, IconBolt,
  IconFree, IconX, IconTelegram, IconInstagram,
  IconStar, IconCheck, IconPlay, IconPlus, IconArrowRight,
} from './components/Icons'

// ─── Scroll Reveal Hook ───────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Animated Counter ────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const numTarget = parseInt(target.replace(/\D/g, '')) || 0
          if (numTarget === 0) { setCount(0); return }
          const duration = 2000
          const step = duration / numTarget
          let current = 0
          const timer = setInterval(() => {
            current += Math.ceil(numTarget / 60)
            if (current >= numTarget) {
              setCount(numTarget)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, step < 16 ? 16 : step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{typeof count === 'number' && target === '0' ? '0' : count}{suffix}
    </span>
  )
}

// ─── Wave Bars (voice animation) ─────────────────────────────────
function WaveBars({ color = '#00E5A0' }) {
  return (
    <div className="flex items-end gap-1" style={{ height: '48px' }}>
      {[20, 32, 44, 36, 28, 40, 24, 36, 20].map((h, i) => (
        <div
          key={i}
          className="wave-bar rounded"
          style={{
            height: `${h}px`,
            animationDelay: `${i * 0.1}s`,
            background: `linear-gradient(to top, ${color}, #00B4D8)`,
          }}
        />
      ))}
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <GirgitonLogo size={34} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Imkoniyatlar', 'Qanday ishlaydi', 'Narxlar', 'Aloqa'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="btn-primary px-6 py-2.5 rounded-xl text-sm font-bold">
              Bepul demo olish
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass rounded-2xl mb-4 p-4">
            {['Imkoniyatlar', 'Qanday ishlaydi', 'Narxlar', 'Aloqa'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="block py-2.5 text-gray-300 hover:text-white font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="btn-primary w-full py-3 rounded-xl font-bold mt-3">
              Bepul demo olish
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="mesh-bg dot-pattern relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00E5A0, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#00E5A0] font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-pulse"></span>
              O'zbek tiliga optimallashtirilgan AI
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-white">Ofitsiant</span>{' '}
              <span className="gradient-text">aytadi.</span>
              <br />
              <span className="text-white">AI</span>{' '}
              <span className="gradient-text">yozadi.</span>
              <br />
              <span className="text-white">Oshxona</span>{' '}
              <span className="gradient-text">ko'radi.</span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Girgiton AI restoraningizdagi buyurtmalarni ovoz orqali qabul qilib,
              oshxona ekranlariga avtomatik yetkazadi.{' '}
              <span className="text-white font-semibold">Xizmat tezligi — 2 barobar yuqori.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button className="btn-primary px-8 py-4 rounded-2xl text-base font-bold glow-pulse">
                14 kun bepul sinab ko'ring
              </button>
              <button className="btn-secondary px-8 py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#00E5A0]/20 flex items-center justify-center">
                  <IconPlay size={12} color="#00E5A0" />
                </span>
                Video demo ko'rish
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-500">
              {['50+ restoran ishonadi', "O'zbek tilini tushunadi", '3 daqiqada o\'rnatiladi'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <IconStar size={14} color="#00E5A0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual mockup */}
          <div className="flex items-center justify-center gap-6 animate-float">
            {/* Phone mockup */}
            <div className="phone-mockup w-44 h-80 p-4 flex flex-col items-center justify-between relative flex-shrink-0">
              <div className="w-20 h-1.5 bg-gray-700 rounded-full mb-2"></div>
              <div className="flex-1 w-full flex flex-col items-center justify-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00E5A0]/20 flex items-center justify-center">
                  <IconMic size={20} color="#00E5A0" />
                </div>
                <WaveBars />
                <div className="glass rounded-lg p-2 w-full">
                  <div className="text-[10px] text-[#00E5A0] font-semibold mb-1">Tanildi:</div>
                  <div className="text-[10px] text-white">Lag'mon × 2</div>
                  <div className="text-[10px] text-white">Kabob × 1</div>
                  <div className="text-[10px] text-gray-400">Jami: 85,000 so'm</div>
                </div>
                <div className="text-[10px] text-[#00E5A0] animate-pulse font-medium">● Jonli tinglash</div>
              </div>
              <div className="w-12 h-1 bg-gray-700 rounded-full"></div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl text-[#00E5A0] animate-pulse">→</div>
              <div className="text-[10px] text-gray-500 text-center">Real-time</div>
            </div>

            {/* Kitchen screen mockup */}
            <div className="screen-mockup w-52 h-72 p-3 flex flex-col flex-shrink-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#00E5A0]"></div>
                <span className="text-[10px] text-gray-400 font-medium">ISSIQ TAOMLAR</span>
              </div>
              {[
                { taom: 'Lag\'mon', son: '×2', stol: '5-stol', color: '#00E5A0', new: true },
                { taom: 'Mastava', son: '×1', stol: '3-stol', color: '#00B4D8', new: false },
                { taom: 'Shurva', son: '×3', stol: '7-stol', color: '#7B61FF', new: false },
              ].map((order, i) => (
                <div
                  key={i}
                  className="glass rounded-lg p-2 mb-2 flex items-center justify-between"
                  style={{ borderColor: `${order.color}30` }}
                >
                  <div>
                    <div className="text-[11px] text-white font-semibold">{order.taom}</div>
                    <div className="text-[10px] text-gray-500">{order.stol}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold" style={{ color: order.color }}>{order.son}</span>
                    {order.new && (
                      <span className="text-[9px] bg-[#00E5A0]/20 text-[#00E5A0] px-1.5 py-0.5 rounded-full font-semibold">YANGI</span>
                    )}
                  </div>
                </div>
              ))}
              <div className="mt-auto pt-2 border-t border-white/5">
                <div className="text-[10px] text-gray-500">Kabob — <span className="text-[#FFB347]">Grill bo'limi →</span></div>
                <div className="text-[10px] text-gray-500">Choy — <span className="text-[#00B4D8]">Ichimliklar →</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Pain Points ──────────────────────────────────────────────────
function PainPoints() {
  const problems = [
    {
      Icon: IconRunner,
      color: '#FF6B6B',
      title: 'Ofitsiant oshxonaga yugurib vaqt yo\'qotadi',
      desc: 'Har bir buyurtma uchun zal va oshxona orasida qatnash — vaqt va energiyaning isrof bo\'lishi.',
    },
    {
      Icon: IconClipboard,
      color: '#FFB347',
      title: 'Qog\'ozdagi buyurtmalar yo\'qoladi, chalkashadi',
      desc: 'Chalg\'igan yozuvlar, yo\'qolgan bloknotlar, noto\'g\'ri buyurtmalar — mijozlar noroziligining asosiy sababi.',
    },
    {
      Icon: IconChartDown,
      color: '#FF6B6B',
      title: 'Qaysi taom foyda keltirayotganini bilmaysiz',
      desc: 'His-tuyg\'uga emas, raqamlarga tayanib qarorlar qabul qilmasangiz, daromad ortmaydi.',
    },
  ]

  return (
    <section className="py-24 relative" style={{ background: '#080C18' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-sm font-semibold text-[#FFB347] bg-[#FFB347]/10 px-4 py-2 rounded-full mb-4 border border-[#FFB347]/20">
            Muammo
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Restoraningiz har kuni{' '}
            <span className="gradient-text-warm">qancha yo'qotmoqda?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ko'pchilik restoran egalari bu muammolarni odatiy holat deb qabul qiladi. Aslida emas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-3xl p-8"
              style={{ transitionDelay: `${i * 0.15}s`, borderColor: `${p.color}20` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
              >
                <p.Icon size={28} color={p.color} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Bridge CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-gray-500 text-lg mb-6">
            Girgiton AI bu muammolarning barchasini bir vaqtda hal qiladi
          </p>
          <div className="flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-[#00E5A0] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: '01',
      Icon: IconStudioMic,
      title: 'Ofitsiant mikrofonga aytadi',
      desc: 'Ofitsiant telefonidagi ilova orqali buyurtmani o\'zbek tilida aytadi: "5-stolga ikki lag\'mon, bir kabob"',
      color: '#00E5A0',
    },
    {
      num: '02',
      Icon: IconBrain,
      title: 'AI avtomatik aniqlaydi',
      desc: 'Girgiton AI taom nomini, sonini va narxini bir soniyada aniqlaydi. Dialekt va noto\'g\'ri talaffuzni ham tushunadi.',
      color: '#00B4D8',
    },
    {
      num: '03',
      Icon: IconScreen,
      title: 'Oshxona ekraniga tushadi',
      desc: 'Har bir taom o\'zi tayyorlanadigan bo\'lim ekraniga alohida tushadi: issiq taomlar, grill, salatlar, ichimliklar.',
      color: '#7B61FF',
    },
    {
      num: '04',
      Icon: IconChart,
      title: 'Hisobotga avtomatik yoziladi',
      desc: 'Har bir buyurtma real-time statistikaga qo\'shiladi. Kun oxirida to\'liq tahlil tayyor bo\'ladi.',
      color: '#FFB347',
    },
  ]

  return (
    <section id="qanday-ishlaydi" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-sm font-semibold text-[#00E5A0] bg-[#00E5A0]/10 px-4 py-2 rounded-full mb-4 border border-[#00E5A0]/20">
            Qanday ishlaydi
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            4 qadam.{' '}
            <span className="gradient-text">Shunchaki.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Murakkab texnologiya — oddiy jarayon sifatida
          </p>
        </div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00E5A0]/50 via-[#00B4D8]/30 to-transparent -translate-x-1/2"></div>

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ transitionDelay: `${i * 0.2}s` }}
              >
                {/* Content side */}
                <div className={`${i % 2 === 1 ? 'lg:order-2 lg:text-right' : ''} mb-8 lg:mb-0`}>
                  <div className="flex items-center gap-3 mb-3 ${i % 2 === 1 ? 'lg:justify-end' : ''}">
                    <span
                      className="text-xs font-black tracking-widest"
                      style={{ color: step.color }}
                    >
                      QADAM {step.num}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                </div>

                {/* Visual side */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} flex justify-center`}>
                  <div
                    className="glass-card rounded-3xl p-8 w-64 h-56 flex flex-col items-center justify-center text-center gap-4"
                    style={{ borderColor: `${step.color}30` }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{ background: `${step.color}15`, border: `1.5px solid ${step.color}40` }}
                    >
                      <step.Icon size={40} color={step.color} />
                    </div>
                    <div className="text-sm font-semibold" style={{ color: step.color }}>
                      {step.title}
                    </div>
                    {i === 0 && (
                      <div className="flex gap-1 items-end">
                        <WaveBars color={step.color} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 reveal">
          <button className="btn-primary px-8 py-4 rounded-2xl text-base font-bold">
            Hoziroq sinab ko'ring — bepul
          </button>
          <p className="text-gray-600 text-sm mt-3">Karta talab qilinmaydi · 3 daqiqada o'rnatiladi</p>
        </div>
      </div>
    </section>
  )
}

// ─── Features Grid ────────────────────────────────────────────────
function Features() {
  const features = [
    {
      Icon: IconStudioMic,
      title: "Ovozli buyurtma",
      desc: "O'zbek tilida, har xil sheva va talaffuzda buyurtma qabul qiladi. Real-time transkripsiya.",
      color: '#00E5A0',
    },
    {
      Icon: IconSignal,
      title: "Avtomatik filtrlash",
      desc: "Har bir taom o'zi tayyorlanadigan bo'lim ekraniga alohida tushadi. Chalkashlik yo'q.",
      color: '#00B4D8',
    },
    {
      Icon: IconChart,
      title: "Kunlik / haftalik hisobotlar",
      desc: "Har kuni avtomatik tahlil. Daromad, xarajat, solishtirma — hamma narsa bir joyda.",
      color: '#7B61FF',
    },
    {
      Icon: IconTrophy,
      title: "TOP taomlar tahlili",
      desc: "Qaysi taom eng ko'p buyurtilayotgani, qaysi vaqtlarda, qaysi stollardan — batafsil reyting.",
      color: '#FFB347',
    },
    {
      Icon: IconChef,
      title: "Ofitsiantlar reytingi",
      desc: "Har bir ofitsiantning samaradorligi, xizmat tezligi va buyurtmalar soni avtomatik kuzatiladi.",
      color: '#FF6B6B',
    },
    {
      Icon: IconChartUp,
      title: "Mijozlar oqimi",
      desc: "Qaysi soatlarda ko'p mijoz keladi, o'rtacha chek miqdori, aylanma — to'liq statistika.",
      color: '#00E5A0',
    },
  ]

  return (
    <section id="imkoniyatlar" className="py-24" style={{ background: '#080C18' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-sm font-semibold text-[#00E5A0] bg-[#00E5A0]/10 px-4 py-2 rounded-full mb-4 border border-[#00E5A0]/20">
            Imkoniyatlar
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Restoranni boshqarish{' '}
            <span className="gradient-text">yangi darajaga</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Faqat buyurtma emas — to'liq restoran boshqaruv ekotizimi
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-3xl p-8 group cursor-default"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}
              >
                <f.Icon size={26} color={f.color} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              <div
                className="mt-5 w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ background: f.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: '2', suffix: 'x', label: 'Xizmat tezligi', sub: 'barobar tezroq', color: '#00E5A0' },
    { value: '0', suffix: '', label: 'Yo\'qolgan buyurtma', sub: 'nolga tushirilgan', color: '#00B4D8' },
    { value: '30', suffix: '%', label: "Ko'proq aylanma", sub: 'gacha o\'sish', color: '#7B61FF' },
    { value: '24', suffix: '/7', label: 'Analitika', sub: 'uzluksiz monitoring', color: '#FFB347' },
  ]

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#050810' }}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(at 30% 50%, rgba(0, 229, 160, 0.15) 0px, transparent 50%),
            radial-gradient(at 70% 50%, rgba(0, 180, 216, 0.1) 0px, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Raqamlar{' '}
            <span className="gradient-text">gapiradi</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-3xl p-8 text-center"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className="text-6xl sm:text-7xl font-black mb-2 leading-none"
                style={{ color: s.color }}
              >
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white font-bold text-lg mb-1">{s.label}</div>
              <div className="text-gray-600 text-sm">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Analytics Dashboard ──────────────────────────────────────────
function Analytics() {
  const topDishes = [
    { name: "Lag'mon", count: 284, pct: 90, color: '#00E5A0' },
    { name: 'Kabob', count: 231, pct: 73, color: '#00B4D8' },
    { name: 'Mastava', count: 198, pct: 63, color: '#7B61FF' },
    { name: 'Shashlik', count: 167, pct: 53, color: '#FFB347' },
    { name: 'Naryn', count: 143, pct: 45, color: '#FF6B6B' },
  ]

  const waiters = [
    { name: 'Jasur', orders: 48, rating: 4.9 },
    { name: 'Malika', orders: 44, rating: 4.8 },
    { name: 'Bobur', orders: 39, rating: 4.7 },
  ]

  return (
    <section className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="reveal">
            <div className="inline-block text-sm font-semibold text-[#00B4D8] bg-[#00B4D8]/10 px-4 py-2 rounded-full mb-6 border border-[#00B4D8]/20">
              Analitika
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Restoraningizni his-tuyg'u bilan emas —{' '}
              <span className="gradient-text">raqamlar bilan</span> boshqaring.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Har kuni ertalab tayyor hisobot. Qaysi taom sotilayapti, kim eng samarali ishlayapti,
              qaysi vaqt pik soati — hamma ma'lumot bir joyda.
            </p>
            <div className="space-y-4">
              {[
                "Kunlik / haftalik / oylik hisobotlar",
                "TOP taomlar reytingi va dinamikasi",
                "Ofitsiantlar samaradorlik tahlili",
                "Soatlik mijozlar oqimi grafigi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-[#00E5A0]/20 flex items-center justify-center flex-shrink-0">
                    <IconCheck size={12} color="#00E5A0" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="btn-primary px-8 py-4 rounded-2xl font-bold">
                Demo dashboardni ko'rish
              </button>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="reveal screen-mockup rounded-3xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-white font-bold">Bugungi tahlil</div>
                <div className="text-gray-500 text-sm">11-iyun 2026</div>
              </div>
              <div className="flex gap-1">
                {['Kun', 'Hafta', 'Oy'].map((t, i) => (
                  <button
                    key={t}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium ${
                      i === 0
                        ? 'bg-[#00E5A0]/20 text-[#00E5A0]'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue mini chart */}
            <div className="glass rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">Daromad dinamikasi</span>
                <span className="text-[#00E5A0] text-sm font-semibold">+23%</span>
              </div>
              <div className="flex items-end gap-1 h-12">
                {[40, 55, 45, 60, 50, 70, 65, 80, 72, 88, 75, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 11
                        ? 'linear-gradient(to top, #00E5A0, #00B4D8)'
                        : 'rgba(0, 229, 160, 0.2)',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Top dishes */}
              <div className="glass rounded-2xl p-4">
                <div className="text-xs text-gray-400 font-semibold mb-3">TOP-5 Taomlar</div>
                <div className="space-y-2">
                  {topDishes.map((dish, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">{dish.name}</span>
                        <span className="font-semibold" style={{ color: dish.color }}>{dish.count}</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1">
                        <div
                          className="h-1 rounded-full transition-all duration-1000"
                          style={{ width: `${dish.pct}%`, background: dish.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Waiters */}
              <div className="glass rounded-2xl p-4">
                <div className="text-xs text-gray-400 font-semibold mb-3">Ofitsiantlar</div>
                <div className="space-y-3">
                  {waiters.map((w, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-[#0A0F1E]"
                          style={{ background: ['#00E5A0', '#00B4D8', '#7B61FF'][i] }}
                        >
                          {w.name[0]}
                        </div>
                        <span className="text-xs text-gray-300">{w.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-white">{w.orders}</div>
                        <div className="flex items-center gap-0.5">
                          <IconStar size={9} color="#FFB347" />
                          <span className="text-[10px] text-[#FFB347]">{w.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/5">
                  <div className="text-[10px] text-gray-500">Jami buyurtmalar: <span className="text-white">131</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: 'Sherzod Nazarov',
      role: "\"Oʻrikzor\" restoran egasi, Toshkent",
      text: "Ilgari kechki payt 4 ofitsiant zo'rg'a ulgurardi. Girgiton AI o'rnatganimizdan so'ng 3 tasi bemalol eplaydi. Xodim xarajatlari kamaydi, mijozlar noroziligi deyarli yo'qoldi.",
      stars: 5,
    },
    {
      name: 'Nodira Xasanova',
      role: "\"Baxtiyor\" oshxonasi boshqaruvchisi, Samarqand",
      text: "Avval qog'ozga yozib, keyin oshxonaga olib borib, keyin unutib qolardik. Endi hech narsa yo'qolmaydi. Eng yaxshi tomoni — ofitsiantlar ham sevinishdi, yugurish kamaydi.",
      stars: 5,
    },
    {
      name: 'Alisher Toshmatov',
      role: "\"Guliston\" kafelar tarmog'i, Farg'ona",
      text: "3 ta kafem bor, hamma joyni bir dashboarddan ko'raman. Qaysi kafe ko'p ishlayapti, qaysi taom eng ko'p ketayapti — real-time ko'raman. Bu katta ustunlik.",
      stars: 5,
    },
  ]

  return (
    <section className="py-24" style={{ background: '#080C18' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-sm font-semibold text-[#FFB347] bg-[#FFB347]/10 px-4 py-2 rounded-full mb-4 border border-[#FFB347]/20">
            Mijozlar fikri
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Ular allaqachon{' '}
            <span className="gradient-text">almashtirdi</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-3xl p-8"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-5">
                {Array(t.stars).fill(0).map((_, j) => (
                  <IconStar key={j} size={16} color="#FFB347" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-base italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00E5A0] to-[#00B4D8] flex items-center justify-center text-[#0A0F1E] font-black text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-600 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: 'Start',
      subtitle: 'Kichik kafe uchun',
      price: '199,000',
      period: 'so\'m/oy',
      features: [
        '1 tagacha ofitsiant',
        '2 tagacha oshxona ekrani',
        'Ovozli buyurtma (o\'zbek tili)',
        'Kunlik hisobotlar',
        'Email qo\'llab-quvvatlash',
      ],
      cta: 'Bepul boshlash',
      popular: false,
      color: '#00B4D8',
    },
    {
      name: 'Pro',
      subtitle: "To'liq restoran uchun",
      price: '499,000',
      period: 'so\'m/oy',
      features: [
        '10 tagacha ofitsiant',
        'Cheksiz oshxona bo\'limlari',
        'Barcha ovozli imkoniyatlar',
        'Kunlik/haftalik/oylik tahlil',
        'TOP taomlar va ofitsiantlar reytingi',
        'Telefon qo\'llab-quvvatlash',
        'Kassa tizimi integratsiyasi',
      ],
      cta: 'Pro boshlash',
      popular: true,
      color: '#00E5A0',
    },
    {
      name: 'Network',
      subtitle: 'Restoranlar tarmog\'i',
      price: '1,290,000',
      period: 'so\'m/oy',
      features: [
        'Cheksiz ofitsiantlar',
        'Bir nechta filiallar',
        'Markazlashgan dashboard',
        'Filiallar taqqoslash tahlili',
        'API integratsiya',
        '24/7 premium qo\'llab-quvvatlash',
        'Shaxsiy onboarding',
      ],
      cta: 'Muzokaralar boshlash',
      popular: false,
      color: '#7B61FF',
    },
  ]

  return (
    <section id="narxlar" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-sm font-semibold text-[#00E5A0] bg-[#00E5A0]/10 px-4 py-2 rounded-full mb-4 border border-[#00E5A0]/20">
            Narxlar
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Restoraningizga{' '}
            <span className="gradient-text">mos tarif</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Barcha tariflarda 14 kun bepul sinov. Karta talab qilinmaydi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal relative rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#00E5A0]/10 to-[#00B4D8]/5 border-2 border-[#00E5A0]/40 scale-105'
                  : 'glass-card'
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="badge-popular px-4 py-1.5 rounded-full text-xs font-black">
                    Eng ommabop
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ color: plan.color }}
                >
                  {plan.subtitle}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{plan.name}</h3>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-300 text-sm">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${plan.color}20` }}
                    >
                      <IconCheck size={12} color={plan.color} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
                style={plan.popular ? {} : { borderColor: `${plan.color}50`, color: plan.color }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8 text-sm reveal">
          Barcha tariflarda 14 kun bepul sinov · Bekor qilish — istalgan vaqtda · Karta talab qilinmaydi
        </p>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: "O'zbek tilidagi turli shevalarni tushunadimi?",
      a: "Ha, Girgiton AI O'zbekistonning barcha hududlarida ishlatiladigan asosiy shevalar va talaffuzlarni taniydi — toshkentcha, farg'onacha, samarqandcha va boshqalar. Model maxsus O'zbek restoran leksikoniga o'rgatilgan.",
    },
    {
      q: "O'rnatish qancha vaqt oladi?",
      a: "Oddiy holatda 3-5 daqiqa. Ilova telefonga yuklanadi, oshxona ekraniga brauzer bilan kiriladi. Maxsus uskunalar yoki IT mutaxassis kerak emas. Biz onboarding jarayonida yordam beramiz.",
    },
    {
      q: "Internet uzilsa nima bo'ladi?",
      a: "Oflayn rejim mavjud: lokal tarmoqda (Wi-Fi) ishlash davom etadi. Internet qayta ulanishi bilan barcha ma'lumotlar sinxronlashadi. Hech bir buyurtma yo'qolmaydi.",
    },
    {
      q: "Qanday qurilmalar kerak?",
      a: "Ofitsiant uchun: Android 8+ yoki iOS 13+ smartfon. Oshxona uchun: har qanday ekran yoki planshet (brauzer orqali). Alohida server yoki kompyuter kerak emas.",
    },
    {
      q: "Mavjud kassa tizimimiz bilan ishlaydimi?",
      a: "Pro va Network tariflarida kassa integratsiyasi mavjud. Iiko, r_keeper, 1C va boshqa mashhur tizimlar bilan integratsiya qilinadi. Start tarifida mustaqil ishlaydi.",
    },
  ]

  return (
    <section className="py-24" style={{ background: '#080C18' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-block text-sm font-semibold text-[#00E5A0] bg-[#00E5A0]/10 px-4 py-2 rounded-full mb-4 border border-[#00E5A0]/20">
            Ko'p so'raladigan savollar
          </div>
          <h2 className="text-4xl font-black text-white">
            Savollaringiz bormi?
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="text-white font-semibold text-base pr-4">{faq.q}</span>
                <span
                  className="w-8 h-8 rounded-full border border-[#00E5A0]/30 flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                  style={{ transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  <IconPlus size={12} color="#00E5A0" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIdx === i ? 'max-h-48 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400 leading-relaxed px-6">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────
function FinalCTA() {
  const [phone, setPhone] = useState('')

  return (
    <section
      id="aloqa"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #050D1A 0%, #0A2818 50%, #050D1A 100%)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(at 50% 0%, rgba(0, 229, 160, 0.2) 0px, transparent 60%)`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5A0]/50 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-block text-sm font-semibold text-[#00E5A0] bg-[#00E5A0]/10 px-4 py-2 rounded-full mb-6 border border-[#00E5A0]/20 reveal">
          Hoziroq boshlang
        </div>

        <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight reveal">
          Bugun o'rnating —{' '}
          <span className="gradient-text">ertaga tezroq</span> ishlang.
        </h2>

        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto reveal">
          14 kun bepul sinov. Karta kerak emas. O'rnatish — 3 daqiqa.
          Bekor qilish — istalgan vaqtda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto reveal">
          <input
            type="tel"
            placeholder="+998 __ ___ __ __"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 glass px-5 py-4 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00E5A0]/50 text-base"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          />
          <button className="btn-primary px-8 py-4 rounded-2xl font-bold text-base whitespace-nowrap">
            Demo so'rash
          </button>
        </div>

        <p className="text-gray-600 text-sm mt-5 reveal">
          Yoki{' '}
          <a href="tel:+998901234567" className="text-[#00E5A0] hover:underline">
            +998 90 123 45 67
          </a>{' '}
          raqamiga qo'ng'iroq qiling
        </p>

        {/* Trust icons */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 reveal">
          {[
            { Icon: IconLock, text: 'Xavfsiz', color: '#00E5A0' },
            { Icon: IconBolt, text: '3 daqiqada', color: '#FFB347' },
            { Icon: IconFree, text: '14 kun bepul', color: '#00B4D8' },
            { Icon: IconX, text: 'Bekor qilish bepul', color: '#7B61FF' },
          ].map((item) => (
            <div key={item.text} className="flex flex-col items-center gap-2">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
              >
                <item.Icon size={22} color={item.color} />
              </div>
              <span className="text-gray-500 text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 border-t border-white/5" style={{ background: '#050810' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <GirgitonLogo size={32} />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Restoran va oshxonalar uchun ovozli buyurtma boshqaruv tizimi.
              O'zbekistonda ishlab chiqilgan.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { SocialIcon: IconTelegram, label: 'Telegram', href: '#' },
                { SocialIcon: IconInstagram, label: 'Instagram', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00E5A0] transition-colors"
                  aria-label={s.label}
                >
                  <s.SocialIcon size={18} color="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Mahsulot</h4>
            <ul className="space-y-2.5">
              {['Imkoniyatlar', 'Qanday ishlaydi', 'Narxlar', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-300 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Aloqa</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+998901234567" className="text-gray-600 hover:text-[#00E5A0] text-sm transition-colors">
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <a href="https://t.me/girgitonai" className="text-gray-600 hover:text-[#00E5A0] text-sm transition-colors">
                  @girgitonai (Telegram)
                </a>
              </li>
              <li>
                <a href="mailto:info@girgiton.ai" className="text-gray-600 hover:text-[#00E5A0] text-sm transition-colors">
                  info@girgiton.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            © 2026 Girgiton AI. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-5">
            {["Maxfiylik siyosati", "Foydalanish shartlari"].map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-gray-500 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Sticky Mobile CTA ────────────────────────────────────────────
function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta">
      <button className="btn-primary w-full py-3.5 rounded-xl font-bold text-base">
        Demo so'rash — Bepul
      </button>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen" style={{ background: '#0A0F1E' }}>
      <Navbar />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Stats />
      <Analytics />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
