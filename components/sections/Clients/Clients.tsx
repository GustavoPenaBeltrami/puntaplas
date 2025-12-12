import styles from './Clients.module.css'

export default function Clients() {
  const allClients = [
    { name: 'Disal', type: 'current' },
    { name: 'Capilatis', type: 'current' },
    { name: 'Jumalá', type: 'current' },
    { name: 'Colgate', type: 'previous' },
    { name: 'Hileret', type: 'previous' },
    { name: 'Dellepiane', type: 'previous' },
    { name: 'Promarc', type: 'previous' },
    { name: 'Natural Foods', type: 'previous' },
  ]

  // Duplicar para el efecto infinito
  const duplicatedClients = [...allClients, ...allClients]

  return (
    <section id="trayectoria" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Marcas que confían en nosotros</h2>
          <p className={styles.intro}>
            A lo largo de nuestra historia trabajamos con empresas líderes de distintos rubros, 
            así como con nuevas marcas que recién comienzan a crecer.
          </p>
        </div>

        {/* Marquee Container */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            {duplicatedClients.map((client, index) => (
              <div key={index} className={styles.clientCard}>
                <span className={styles.clientName}>{client.name}</span>
                <span className={styles.clientBadge}>
                  {client.type === 'current' ? 'Cliente actual' : 'Cliente anterior'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <p className={styles.closing}>
          Esta trayectoria nos permite adaptarnos a los estándares y requerimientos técnicos 
          de distintos mercados, desde cosmética hasta alimentos y química.
        </p>
      </div>
    </section>
  )
}
