import Image from "next/image";
import Link from "next/link";

const SHOP_URL = "https://shop.xyvot.com";
const BUSINESS_URL = "https://business.xyvot.com";
const RIDER_URL = "https://rider.xyvot.com";

export default function Home() {
  return (
    <main>
      {/* ============ NAVIGATION ============ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Xyvot home">
            <span className="text-2xl font-black tracking-tight">
              xyvot<span className="text-orange-600">.</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#customers" className="hover:text-slate-900 transition-colors">
              Customers
            </Link>
            <Link href="#businesses" className="hover:text-slate-900 transition-colors">
              Businesses
            </Link>
            <Link href="#riders" className="hover:text-slate-900 transition-colors">
              Riders
            </Link>
            <Link href="#how-it-works" className="hover:text-slate-900 transition-colors">
              How it works
            </Link>
            <Link href="#faq" className="hover:text-slate-900 transition-colors">
              FAQ
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={SHOP_URL}
              className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              Shop now
            </Link>
            <Link
              href={BUSINESS_URL}
              className="inline-flex px-4 py-2 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
            >
              Sell on Xyvot
            </Link>
          </div>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" aria-hidden="true" />
            Now delivering in your neighbourhood
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.05]">
            Instant commerce for{" "}
            <span className="text-orange-600">local businesses</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Xyvot connects neighbourhood shops with customers for 15-minute
            delivery of groceries and daily essentials — while giving every
            merchant the tools to sell online and grow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SHOP_URL}
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 text-base font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/25"
            >
              Shop groceries
            </Link>
            <Link
              href={BUSINESS_URL}
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white border-2 border-slate-200 rounded-full hover:border-slate-900 transition-colors"
            >
              Become a seller
            </Link>
          </div>
          <dl className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <dt className="sr-only">Delivery time</dt>
              <dd className="text-3xl sm:text-4xl font-black text-slate-900">15<span className="text-lg font-bold text-slate-500"> min</span></dd>
              <dd className="mt-1 text-sm text-slate-500">Express delivery</dd>
            </div>
            <div className="text-center border-x border-slate-200">
              <dt className="sr-only">Product categories</dt>
              <dd className="text-3xl sm:text-4xl font-black text-slate-900">500<span className="text-lg font-bold text-slate-500">+</span></dd>
              <dd className="mt-1 text-sm text-slate-500">Products listed</dd>
            </div>
            <div className="text-center">
              <dt className="sr-only">Local shops</dt>
              <dd className="text-3xl sm:text-4xl font-black text-slate-900">100<span className="text-lg font-bold text-slate-500">+</span></dd>
              <dd className="mt-1 text-sm text-slate-500">Partner shops</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ============ FOR CUSTOMERS ============ */}
      <section id="customers" className="py-20 sm:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
                For customers
              </p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Groceries at your door in 15 minutes
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Order from shops in your neighbourhood — fresh vegetables,
                dairy, snacks, and household essentials. Real-time tracking,
                honest pricing, no hidden fees.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "15-minute express delivery from nearby dark stores",
                  "Live order tracking with delivery PIN verification",
                  "WhatsApp OTP login — no passwords to remember",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={SHOP_URL}
                className="mt-8 inline-flex px-6 py-3 text-base font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
              >
                Start shopping →
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-orange-100">
              <Image
                src="/images/customer-grocery.jpg"
                alt="Fresh groceries delivered to a customer's door in 15 minutes via Xyvot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOR BUSINESSES ============ */}
      <section id="businesses" className="py-20 sm:py-28 bg-slate-950 text-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-800 order-2 lg:order-1">
              <Image
                src="/images/business-dashboard.jpg"
                alt="Xyvot business dashboard showing inventory, orders, and sales analytics for merchants"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400 mb-4">
                For businesses
              </p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Take your shop online in minutes
              </h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                A complete business platform — online storefront, inventory
                management, POS billing, rider dispatch, and customer
                invoicing. Everything a local shop needs to compete online.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Instant online storefront on your own subdomain",
                  "Inventory, POS billing, and GST-ready invoicing",
                  "Automatic rider dispatch for every order",
                  "Free to start — no commission traps",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={BUSINESS_URL}
                className="mt-8 inline-flex px-6 py-3 text-base font-bold text-slate-950 bg-white rounded-full hover:bg-orange-100 transition-colors"
              >
                Open your shop →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOR RIDERS ============ */}
      <section id="riders" className="py-20 sm:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
                For delivery partners
              </p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Earn on your schedule
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Join Xyvot as a delivery partner. Smart dispatch sends you
                nearby orders, you deliver, you earn. Flexible hours, weekly
                payouts, zero joining fee.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Nearby orders matched to your live location",
                  "Transparent per-delivery earnings",
                  "Flexible shifts — work when you want",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={RIDER_URL}
                className="mt-8 inline-flex px-6 py-3 text-base font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
              >
                Become a rider →
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-emerald-50">
              <Image
                src="/images/rider-delivery.jpg"
                alt="Xyvot delivery partner on a bike delivering groceries to a customer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
              How it works
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              From shop shelf to doorstep
            </h2>
          </div>
          <ol className="mt-14 grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "You order",
                text: "Browse your neighbourhood shops on the Xyvot marketplace and place an order in seconds.",
              },
              {
                step: "2",
                title: "Shop packs",
                text: "The nearest partner shop confirms and packs your items fresh — nothing sits in a warehouse.",
              },
              {
                step: "3",
                title: "Rider delivers",
                text: "A nearby delivery partner picks up and reaches you in about 15 minutes. Track it live.",
              },
            ].map((s) => (
              <li
                key={s.step}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80"
              >
                <span
                  className="inline-flex w-12 h-12 rounded-2xl bg-orange-600 text-white text-xl font-black items-center justify-center"
                  aria-hidden="true"
                >
                  {s.step}
                </span>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[2.5rem] px-8 py-16 sm:p-20 text-center text-white">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Ready to experience instant commerce?
            </h2>
            <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto">
              Shop from local stores, sell your products online, or deliver
              with us — Xyvot is built for everyone in the neighbourhood.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={SHOP_URL}
                className="w-full sm:w-auto inline-flex justify-center px-8 py-4 text-base font-bold text-slate-950 bg-white rounded-full hover:bg-orange-100 transition-colors"
              >
                Shop now
              </Link>
              <Link
                href={BUSINESS_URL}
                className="w-full sm:w-auto inline-flex justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-full hover:border-white transition-colors"
              >
                Sell on Xyvot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-20 sm:py-28 bg-slate-50 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "What is Xyvot?",
                a: "Xyvot is an instant commerce platform that connects local neighbourhood shops with customers. Customers get groceries and daily essentials delivered in about 15 minutes, while merchants get a complete online business platform.",
              },
              {
                q: "How fast is Xyvot delivery?",
                a: "Xyvot offers 15-minute express delivery from nearby partner shops and dark stores. Every order includes live tracking and a delivery PIN for secure handoff.",
              },
              {
                q: "How can my shop sell on Xyvot?",
                a: "Visit business.xyvot.com to open your online storefront in minutes. You get inventory management, POS billing, GST-ready invoicing, and automatic rider dispatch — free to start.",
              },
              {
                q: "How do I become a Xyvot delivery partner?",
                a: "Sign up at rider.xyvot.com. There is zero joining fee. You receive nearby orders matched to your live location, earn transparent per-delivery payouts, and work flexible shifts.",
              },
              {
                q: "Where does Xyvot operate?",
                a: "Xyvot currently operates in select neighbourhoods in India, expanding area by area. Check shop.xyvot.com to see if delivery is available in your location.",
              },
              {
                q: "How do customers log in to Xyvot?",
                a: "Customers log in with WhatsApp OTP — enter your phone number, receive a code on WhatsApp, and you are in. No passwords to remember.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-2xl border border-slate-200/80 px-6 py-5 open:shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 list-none">
                  {item.q}
                  <span
                    className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <p className="text-2xl font-black tracking-tight">
                xyvot<span className="text-orange-600">.</span>
              </p>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Instant commerce for local businesses. Groceries and
                essentials delivered in 15 minutes.
              </p>
            </div>
            <nav aria-label="Shop links">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">
                Shop
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link href={SHOP_URL} className="hover:text-slate-900 transition-colors">
                    Marketplace
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Business links">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">
                Business
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link href={BUSINESS_URL} className="hover:text-slate-900 transition-colors">
                    Sell on Xyvot
                  </Link>
                </li>
                <li>
                  <Link href={RIDER_URL} className="hover:text-slate-900 transition-colors">
                    Become a rider
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Company links">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link href="#customers" className="hover:text-slate-900 transition-colors">
                    For customers
                  </Link>
                </li>
                <li>
                  <Link href="#businesses" className="hover:text-slate-900 transition-colors">
                    For businesses
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-slate-900 transition-colors">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-slate-900 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2026 Xyvot. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Made for neighbourhoods, by Xyvot.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
