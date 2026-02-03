"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Home() {
  const blogPostsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-5")
          }
        })
      },
      { threshold: 0.1 }
    )

    blogPostsRef.current.forEach((post) => {
      if (post) observer.observe(post)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !blogPostsRef.current.includes(el)) {
      blogPostsRef.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a8edea] to-[#fed6e3]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white text-center py-12 px-5 rounded-b-[20px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Mirxomidxon Journey</h1>
        <p className="text-lg">Travel | Language | Motivation | Art | Study Plans</p>
      </header>

      {/* Navigation */}
      <nav className="bg-[#1c3f5a] text-center sticky top-0 z-50 shadow-lg">
        <div className="flex flex-wrap justify-center">
          <Link href="#home" className="text-white px-5 py-3.5 hover:bg-[#3a7ca5] hover:rounded transition-colors font-medium">
            Home
          </Link>
          <Link href="#about" className="text-white px-5 py-3.5 hover:bg-[#3a7ca5] hover:rounded transition-colors font-medium">
            About Me
          </Link>
          <Link href="#plans" className="text-white px-5 py-3.5 hover:bg-[#3a7ca5] hover:rounded transition-colors font-medium">
            Study Plans
          </Link>
          <Link href="#blog" className="text-white px-5 py-3.5 hover:bg-[#3a7ca5] hover:rounded transition-colors font-medium">
            Blog
          </Link>
          <Link href="#gallery" className="text-white px-5 py-3.5 hover:bg-[#3a7ca5] hover:rounded transition-colors font-medium">
            Gallery
          </Link>
          <Link href="#contact" className="text-white px-5 py-3.5 hover:bg-[#3a7ca5] hover:rounded transition-colors font-medium">
            Contact
          </Link>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="max-w-4xl mx-auto my-5 p-10 bg-white/90 rounded-2xl shadow-lg">
        <h2 className="text-[#2193b0] text-2xl font-bold text-center mb-6">Welcome!</h2>
        <p className="text-foreground leading-relaxed">
          Salom! Bu mening shaxsiy saytim. Bu yerda men sayohat hikoyalari, til o&apos;rganish maslahatlari, 
          motivatsiya, ijodiy ishlar va o&apos;qish rejalari bilan bo&apos;lishaman. Tadqiqotlar, grantlar va 
          xarajatlar haqida ham ma&apos;lumot olishingiz mumkin. Explore & enjoy!
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto my-5 p-10 bg-white/90 rounded-2xl shadow-lg">
        <h2 className="text-[#2193b0] text-2xl font-bold text-center mb-6">About Me & Ikigai</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Men Mirxomidxon. Sayohat qilish, blog yuritish, til o&apos;rganish va odamlarni motivatsiya qilish 
          mening asosiy qiziqishlarim. Shu bilan birga rasm chizish va ijodiy ishlarga qiziqaman. Men yaxshi 
          tinglovchi va suhbatdoshman, odamlar bilan yaxshi chiqishim, fikr almashishni va bilim berishni yoqtiraman.
        </p>
        <p className="text-foreground leading-relaxed">
          <strong>Ikigai:</strong> Men o&apos;zimni topish uchun quyidagi to&apos;rtta elementni uyg&apos;unlashtirdim:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-foreground">
          <li><em>Nimani sevaman?</em> – Sayohat, blog, til o&apos;rganish, ijod</li>
          <li><em>Nimani yaxshi qilaman?</em> – Odamlar bilan ishlash, suhbat, maslahat berish</li>
          <li><em>Nima dunyo uchun foydali?</em> – Bilim berish, motivatsiya</li>
          <li><em>Qanday qilib daromad qilaman?</em> – Blog yuritish, til o&apos;rgatish, kontent yaratish</li>
        </ul>
      </section>

      {/* Study Plans Section */}
      <section id="plans" className="max-w-4xl mx-auto my-5 p-10 bg-white/90 rounded-2xl shadow-lg">
        <h2 className="text-[#2193b0] text-2xl font-bold text-center mb-6">Study Plans & Grants</h2>
        
        <div ref={addToRefs} className="border-b border-muted py-5 opacity-0 translate-y-5 transition-all duration-600">
          <h3 className="text-xl font-semibold mb-3 text-foreground">Universities & Majors</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="https://www.bogazici.edu.tr/" target="_blank" rel="noopener noreferrer" className="text-[#2193b0] hover:underline">
                Bogazici University, Turkey
              </a> – Business & Entrepreneurship
            </li>
            <li>
              <a href="https://www.tum.de/en/" target="_blank" rel="noopener noreferrer" className="text-[#2193b0] hover:underline">
                Technical University of Munich, Germany
              </a> – Management & Innovation
            </li>
            <li>
              <a href="https://www.ukm.my/en/" target="_blank" rel="noopener noreferrer" className="text-[#2193b0] hover:underline">
                Universiti Kebangsaan Malaysia
              </a> – International Business
            </li>
            <li>
              <a href="https://www.snu.ac.kr/" target="_blank" rel="noopener noreferrer" className="text-[#2193b0] hover:underline">
                Seoul National University, South Korea
              </a> – Language & Cultural Studies
            </li>
          </ul>
        </div>

        <div ref={addToRefs} className="border-b border-muted py-5 opacity-0 translate-y-5 transition-all duration-600">
          <h3 className="text-xl font-semibold mb-3 text-foreground">Expenses & Scholarships</h3>
          <p className="text-foreground leading-relaxed mb-4">
            O&apos;qish va yashash xarajatlari: <strong>$2000–$4000/yil</strong> davlat va universitetga qarab. 
            Stipendiyalar va grantlar orqali bu xarajatlarni kamaytirish mumkin. Hozirdan tayyorgarlik, 
            IELTS/TOEFL imtihonlariga tayyorlanish va moliyaviy rejalashtirish zarur.
          </p>
          <button 
            onClick={() => alert("Grantlar va stipendiyalar bo'yicha batafsil ma'lumot uchun universitet saytlariga qarang")}
            className="bg-[#2193b0] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#6dd5ed] hover:text-[#1c3f5a] transition-colors"
          >
            Grantlar haqida
          </button>
        </div>

        <div ref={addToRefs} className="py-5 opacity-0 translate-y-5 transition-all duration-600">
          <h3 className="text-xl font-semibold mb-3 text-foreground">Preparation</h3>
          <p className="text-foreground leading-relaxed">
            Til bilimini kuchaytirish, IELTS/TOEFL tayyorgarligi, shaxsiy brend va blog yaratish bo&apos;yicha 
            ishlar rejalashtirilgan. Shu bilan birga, universitetga hujjat topshirish va moliyaviy rejani 
            aniqlash muhim.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="max-w-4xl mx-auto my-5 p-10 bg-white/90 rounded-2xl shadow-lg">
        <h2 className="text-[#2193b0] text-2xl font-bold text-center mb-6">Blog</h2>
        
        <div ref={addToRefs} className="border-b border-muted py-5 opacity-0 translate-y-5 transition-all duration-600">
          <h3 className="text-xl font-semibold mb-2 text-foreground">Travel to Istanbul</h3>
          <p className="text-foreground">Istanbul sayohatim: tarixiy joylar, madaniyat va mazali taomlar.</p>
        </div>

        <div ref={addToRefs} className="border-b border-muted py-5 opacity-0 translate-y-5 transition-all duration-600">
          <h3 className="text-xl font-semibold mb-2 text-foreground">Language Learning Tips</h3>
          <p className="text-foreground">Til o&apos;rganish tezroq va samarali bo&apos;lishi uchun kundalik maslahatlar.</p>
        </div>

        <div ref={addToRefs} className="py-5 opacity-0 translate-y-5 transition-all duration-600">
          <h3 className="text-xl font-semibold mb-2 text-foreground">Motivation & Self-Development</h3>
          <p className="text-foreground">Imtihonlar va shaxsiy rivojlanish jarayonida motivatsiyani saqlash yo&apos;llari.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="max-w-4xl mx-auto my-5 p-10 bg-white/90 rounded-2xl shadow-lg">
        <h2 className="text-[#2193b0] text-2xl font-bold text-center mb-6">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <img 
            src="https://via.placeholder.com/200x150?text=Art1" 
            alt="Art 1" 
            className="w-[200px] h-[150px] rounded-xl cursor-pointer hover:scale-105 transition-transform"
          />
          <img 
            src="https://via.placeholder.com/200x150?text=Travel1" 
            alt="Travel 1" 
            className="w-[200px] h-[150px] rounded-xl cursor-pointer hover:scale-105 transition-transform"
          />
          <img 
            src="https://via.placeholder.com/200x150?text=Art2" 
            alt="Art 2" 
            className="w-[200px] h-[150px] rounded-xl cursor-pointer hover:scale-105 transition-transform"
          />
          <img 
            src="https://via.placeholder.com/200x150?text=Travel2" 
            alt="Travel 2" 
            className="w-[200px] h-[150px] rounded-xl cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto my-5 p-10 bg-white/90 rounded-2xl shadow-lg">
        <h2 className="text-[#2193b0] text-2xl font-bold text-center mb-6">Contact</h2>
        <div className="space-y-3 text-center">
          <p className="text-foreground">
            Phone: <a href="tel:+998996117779" className="text-[#2193b0] hover:underline">+998996117779</a>
          </p>
          <p className="text-foreground">
            Instagram: <a href="https://instagram.com/mr_rustamov.17" target="_blank" rel="noopener noreferrer" className="text-[#2193b0] hover:underline">@mr_rustamov.17</a>
          </p>
          <p className="text-foreground">
            Telegram: <a href="https://t.me/Mr_Rus1amov" target="_blank" rel="noopener noreferrer" className="text-[#2193b0] hover:underline">@Mr_Rus1amov</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-5 bg-[#1c3f5a] text-white mt-5 rounded-t-[20px]">
        <p>&copy; 2025 Mirxomidxon Journey. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
