import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Puntaplas, más de 30 años en envases plásticos</h2>
        </div>

        <div className={styles.content}>
          {/* Text Content */}
          <div className={styles.textContent}>
            {/* Párrafo 1 - Historia y esencia */}
            <div className={styles.paragraph}>
              <h3 className={styles.subtitle}>Historia y esencia</h3>
              <p className={styles.text}>
                Puntaplas es una empresa familiar con más de 30 años de experiencia en la 
                elaboración de envases plásticos. Desde el inicio, nuestro foco estuvo puesto 
                en ofrecer soluciones confiables y consistentes para cada cliente.
              </p>
            </div>

            {/* Párrafo 2 - Ubicación y alcance */}
            <div className={styles.paragraph}>
              <h3 className={styles.subtitle}>Ubicación y alcance</h3>
              <p className={styles.text}>
                Estamos ubicados en la ciudad de San Luis y proveemos envases a grandes clientes 
                dentro y fuera de la provincia. Conocemos de cerca las necesidades de la industria 
                local y regional.
              </p>
            </div>

            {/* Párrafo 3 - Presente y emprendedores */}
            <div className={styles.paragraph}>
              <h3 className={styles.subtitle}>Presente y emprendedores</h3>
              <p className={styles.text}>
                Hoy, además de trabajar con grandes marcas, ampliamos nuestra cobertura para 
                acompañar a pequeños emprendedores de la provincia, poniendo nuestra experiencia 
                industrial al servicio de nuevos proyectos.
              </p>
            </div>

            {/* Párrafo 4 - Equipo */}
            <div className={styles.paragraph}>
              <h3 className={styles.subtitle}>Nuestro equipo</h3>
              <p className={styles.text}>
                Nuestro equipo combina oficio, conocimiento técnico y una atención cercana. 
                Nos involucramos en cada etapa del desarrollo para que cada envase cumpla con 
                los requisitos de calidad, funcionalidad y presentación que tu producto necesita.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/Instalaciones.png"
              alt="Instalaciones de Puntaplas"
              width={600}
              height={450}
              className={styles.image}
            />
            <div className={styles.locationBadge}>
              <span className={styles.locationIcon}>📍</span>
              <span className={styles.locationText}>San Luis, Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
