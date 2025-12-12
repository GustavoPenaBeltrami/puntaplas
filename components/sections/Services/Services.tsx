'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import styles from './Services.module.css'

export default function Services() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hola, me gustaría conocer más sobre sus servicios. ¿Podemos coordinar para que me asesoren?'
    )
    const whatsappUrl = `https://wa.me/5492664000000?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const services = [
    {
      id: 'matriz-terceros',
      title: 'Fabricación con matriz de terceros',
      description: 'Trabajamos con matrices de terceros para producir envases específicos de cada marca, respetando sus diseños, medidas y requerimientos técnicos.',
      image: '/maquina-inyección.png',
      icon: '⚙️',
    },
    {
      id: 'etiquetado',
      title: 'Etiquetado',
      description: 'Ofrecemos servicios de etiquetado para que tus envases puedan salir listos, con una presentación prolija y consistente con tu identidad de marca.',
      image: '/etiquetado.png',
      icon: '🏷️',
    },
    {
      id: 'desarrollo-matrices',
      title: 'Asesoramiento en desarrollo de matrices',
      description: 'Te asesoramos en el desarrollo de nuevas matrices, ayudándote a definir el formato, capacidad y detalles técnicos del envase que tu producto necesita.',
      image: '/asesoramiento.png',
      icon: '💡',
    },
  ]

  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Más que fabricación de envases</h2>
          <p className={styles.intro}>
            Acompañamos a nuestros clientes en todo el proceso, desde la idea inicial 
            hasta el producto listo para salir al mercado.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
                <div className={styles.iconOverlay}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaContainer}>
          <Button variant="secondary" size="large" onClick={handleWhatsAppClick}>
            Contanos tu proyecto por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
