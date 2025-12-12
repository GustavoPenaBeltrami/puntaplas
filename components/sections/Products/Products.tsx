'use client'

import ProductCard from '@/components/ui/ProductCard'
import styles from './Products.module.css'

export default function Products() {
  const products = [
    {
      id: 'cosmetica',
      title: 'Cosmética',
      description: 'Fabricamos envases para líneas capilares, corporales y faciales, cuidando tanto la funcionalidad como la presencia en góndola.',
      items: [
        'Botellas PET en 500, 410, 330, 200 y 120 cc para shampoos, acondicionadores, cremas y lociones',
        'Envases de polietileno para oleo calcáreo en 1000, 500 y 250 cc',
      ],
      image: '/cosmetica-1.png',
      ctaText: 'Consultar',
      whatsappMessage: 'Hola, me interesa desarrollar envases para una línea cosmética. ¿Me pueden asesorar?',
    },
    {
      id: 'talqueras',
      title: 'Talqueras',
      description: 'Envases diseñados específicamente para talcos y productos en polvo, pensados para una dosificación cómoda y parejo flujo del producto.',
      items: [
        'Talqueras de polietileno de 200 g',
        'Talqueras de polietileno de 100 g',
      ],
      image: '/talquera-1.png',
      ctaText: 'Quiero cotizar',
      whatsappMessage: 'Hola, me interesa cotizar talqueras. ¿Me pueden enviar información?',
    },
    {
      id: 'cremas',
      title: 'Potes tipo crema',
      description: 'Potes de polietileno ideales para cremas, geles, ungüentos y productos dermatológicos.',
      items: [
        'Potes tipo crema de afeitar en 250 g',
        'Potes tipo crema de afeitar en 125 g',
      ],
      image: '/afeitar-1.png',
      ctaText: 'Consultar',
      whatsappMessage: 'Hola, necesito información sobre potes para cremas. ¿Me pueden asesorar?',
    },
    {
      id: 'quimica',
      title: 'Industria química',
      description: 'Envases robustos y confiables para productos de la industria química, pensados para soportar las exigencias del uso cotidiano.',
      items: [
        'Envases genéricos de polietileno de 1000 cc',
        'Envases genéricos PET de 1000 cc',
      ],
      image: '/quimica-1.png',
      ctaText: 'Ver opciones',
      whatsappMessage: 'Hola, necesito envases para productos químicos. ¿Me pueden asesorar?',
    },
    {
      id: 'alimenticio',
      title: 'Alimenticio',
      description: 'Envases plásticos para alimentos y bebidas, pensados para marcas consolidadas y nuevos desarrollos.',
      items: [
        'Envases de polietileno para edulcorantes en 400, 250 y 200 cc',
        'Botellas PET para agua en 6 L, 2 L, 1,5 L y 600 cc',
        'Botellas PET para cerveza en 1 L',
      ],
      image: '/Agua-1.jpg',
      ctaText: 'Consultar',
      whatsappMessage: 'Hola, necesito envases para alimentos y bebidas. ¿Me pueden asesorar?',
    },
  ]

  const handleCustomWhatsApp = () => {
    const message = encodeURIComponent(
      '¡Hola! No encuentro el envase que necesito. Me gustaría información sobre diseños personalizados.'
    )
    const whatsappUrl = `https://wa.me/5492664000000?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="productos" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Líneas de envases</h2>
          <p className={styles.intro}>
            Desarrollamos y fabricamos envases plásticos para distintas industrias, 
            con matricería propia y de terceros. Adaptamos formatos, capacidades y 
            terminaciones según las necesidades de cada producto.
          </p>
        </div>

        {/* Products Grid */}
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          
          {/* Custom Card */}
          <article className={styles.customCard}>
            <div className={styles.customContent}>
              <h3 className={styles.customTitle}>¿No encontrás el envase que necesitás?</h3>
              <p className={styles.customDescription}>
                Desarrollamos diseños personalizados con matricería propia. 
                Creamos el envase perfecto para tu producto.
              </p>
              <button className={styles.customButton} onClick={handleCustomWhatsApp}>
                Consultá por diseños personalizados
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
