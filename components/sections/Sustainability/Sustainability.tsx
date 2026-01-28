import Image from 'next/image'
import styles from './Sustainability.module.css'

export default function Sustainability() {
  const initiatives = [
    'Recuperación y reelaboración del scrap de producción',
    'Bolsas de embalaje fabricadas con nuestro propio scrap',
    'Pallets reelaborados para optimizar el uso de recursos',
  ]

  return (
    <section id="sostenibilidad" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <h2 className={styles.sustainabilityTitle}>Compromiso con la sostenibilidad</h2>
            <p className={styles.intro}>
              Sabemos que trabajar con plásticos implica una gran responsabilidad. 
              Por eso, incorporamos procesos que nos permiten reducir el desperdicio 
              y aprovechar mejor los materiales.
            </p>
            <p className={styles.description}>
              Recuperamos y reelaboramos el scrap de producción para transformarlo 
              en nuevos recursos, como bolsas de embalaje y pallets reutilizados.
            </p>

            {/* Initiatives List */}
            <ul className={styles.list}>
              {initiatives.map((initiative, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{initiative}</span>
                </li>
              ))}
            </ul>

            <p className={styles.closing}>
              Nuestro objetivo es que cada paso del proceso sea más eficiente y respetuoso 
              con el entorno, sin perder calidad ni seguridad en los envases.
            </p>
          </div>

          {/* Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/sostentabilidad.png"
              alt="Sostenibilidad en Puntaplas"
              width={600}
              height={450}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
