'use client'

import Button from '@/components/ui/Button'
import styles from './Hero.module.css'

export default function Hero() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hola Puntaplas, quisiera más información sobre envases para cosmética / alimentos / química.'
    )
    const whatsappUrl = `https://wa.me/5492664000000?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleScrollToProducts = () => {
    const element = document.querySelector('#productos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Título principal */}
          <h1 className={styles.heroTitle}>
            Envases plásticos para cosmética, química y alimentos
          </h1>

          {/* Párrafo intro */}
          <p className={styles.intro}>
            Somos una empresa familiar con más de 30 años de experiencia en la fabricación 
            de envases plásticos en San Luis. Acompañamos a grandes marcas y a emprendedores 
            en todo el país con soluciones confiables, flexibles y a medida.
          </p>

          {/* Bullets rápidos */}
          <ul className={styles.bullets}>
            <li className={styles.bulletItem}>
              <span className={styles.bulletIcon}>✓</span>
              <span>Matricería propia y de terceros</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletIcon}>✓</span>
              <span>Producción para grandes volúmenes y proyectos en crecimiento</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.bulletIcon}>✓</span>
              <span>Acompañamiento técnico en el desarrollo de nuevos envases</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className={styles.ctaGroup}>
            <Button variant="secondary" size="large" onClick={handleWhatsAppClick}>
              Consultar por WhatsApp
            </Button>
            <Button 
              variant="primary" 
              size="large" 
              href="#productos"
              onClick={handleScrollToProducts}
            >
              Ver líneas de envases
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
