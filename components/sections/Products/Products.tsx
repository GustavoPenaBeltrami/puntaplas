'use client'

import ProductCard from '@/components/ui/ProductCard'
import styles from './Products.module.css'

export default function Products() {
  const products = [
    {
      id: 'botellas',
      title: 'Botellas',
      description: 'Botellas PET y de polietileno en múltiples capacidades para bebidas, cosméticos y productos químicos. Disponibles en diferentes especificaciones según tu necesidad.',
      items: [
        'Botellas PET en 500, 410, 330, 200 y 120 cc',
        'Botellas PET para agua en 6 L, 2 L, 1,5 L y 600 cc',
        'Botellas de polietileno en 1000, 500 y 250 cc',
      ],
      image: '/cosmetica-1.png',
      ctaText: 'Consultar',
      whatsappMessage: 'Hola, me interesa información sobre botellas. ¿Me pueden asesorar?',
    },
    {
      id: 'bidones',
      title: 'Bidones',
      description: 'Bidones de gran capacidad fabricados con polietileno de alta densidad, ideales para transporte y almacenamiento de productos líquidos y químicos.',
      items: [
        'Bidones de 1000 cc con tapa de seguridad',
        'Bidones de 500 cc reforzados para productos químicos',
        'Envases genéricos de polietileno de alta densidad',
      ],
      image: '/quimica-1.png',
      ctaText: 'Ver opciones',
      whatsappMessage: 'Hola, necesito información sobre bidones. ¿Me pueden asesorar?',
    },
    {
      id: 'potes',
      title: 'Potes',
      description: 'Potes de polietileno de diferentes capacidades, perfectos para cosméticos, cremas, ungüentos y productos dermatológicos con cierre seguro.',
      items: [
        'Potes tipo crema de 250 g con tapa rosca',
        'Potes tipo crema de 125 g con tapa snap',
        'Potes para talcos y polvos de 200 g y 100 g',
      ],
      image: '/afeitar-1.png',
      ctaText: 'Consultar',
      whatsappMessage: 'Hola, me interesa información sobre potes. ¿Me pueden asesorar?',
    },
  ]

  const handleCustomWhatsApp = () => {
    const message = encodeURIComponent(
      '¡Hola! Me interesa conocer otros tipos de envases no listados en el catálogo. ¿Me pueden asesorar?'
    )
    const whatsappUrl = `https://wa.me/5492664000000?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="productos" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.productsTitle}>Catálogo de envases</h2>
          <p className={styles.intro}>
            Contamos con una amplia variedad de envases plásticos clasificados por tipo: 
            botellas, bidones y potes. Cada uno diseñado para garantizar la máxima funcionalidad 
            y seguridad de tu producto.
          </p>
        </div>

        {/* Products Grid */}
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Others Section */}
        <div className={styles.othersSection}>
          <p className={styles.othersText}>
            ¿Buscás otro tipo de envase? Disponemos de soluciones adicionales y personalizadas 
            para envases especiales. Contáctanos para conocer todas las opciones disponibles.
          </p>
          <button className={styles.othersButton} onClick={handleCustomWhatsApp}>
            Consultar otros tipos de envases
          </button>
        </div>
      </div>
    </section>
  )
}
