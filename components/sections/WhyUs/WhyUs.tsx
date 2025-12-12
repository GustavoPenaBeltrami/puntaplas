import styles from './WhyUs.module.css'

export default function WhyUs() {
  const features = [
    {
      id: 'experiencia',
      icon: '🏆',
      title: 'Más de 30 años de experiencia',
      description: 'Tres décadas fabricando envases plásticos para distintas industrias, con procesos consolidados y mejora continua.',
    },
    {
      id: 'escalabilidad',
      icon: '📈',
      title: 'Escalamos con tu proyecto',
      description: 'Trabajamos tanto con grandes volúmenes como con emprendedores que están dando sus primeros pasos.',
    },
    {
      id: 'flexibilidad',
      icon: '⚙️',
      title: 'Flexibilidad en diseño y matricería',
      description: 'Podemos trabajar con nuestra matricería propia o con matrices de terceros, según las necesidades de tu marca.',
    },
    {
      id: 'acompanamiento',
      icon: '🤝',
      title: 'Acompañamiento cercano',
      description: 'Te asesoramos en capacidad, materiales y formatos para encontrar el envase más adecuado para tu producto.',
    },
  ]

  return (
    <section id="por-que" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>¿Por qué las marcas eligen Puntaplas?</h2>
          <p className={styles.intro}>
            Combinamos experiencia industrial, flexibilidad en producción y un fuerte 
            vínculo con el trabajo local en San Luis.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feature) => (
            <article key={feature.id} className={styles.card}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
