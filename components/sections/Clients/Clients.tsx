import Image from 'next/image'
import styles from './Clients.module.css'

export default function Clients() {
  const allClients = [
    { name: 'Disal', type: 'current', img: '/cliente_disal.png' },
    { name: 'Capilatis', type: 'current', img: '/cliente_capilatis.png' },
    { name: 'Jumalá', type: 'current', img: '/cliente_jumala.png' },
    { name: 'Colgate', type: 'previous', img: '/cliente_colgate.jpg' },
    { name: 'Hileret', type: 'previous', img: '/cliente_hileret.png' },
    { name: 'Dellepiane', type: 'previous', img: '/cliente_dellepiane.png' },
    // { name: 'Promarc', type: 'previous', img: '/logo_completo_azul.png' },
    // { name: 'Natural Foods', type: 'previous', img: '/logo_completo_azul.png' },
  ]

  // Duplicar para el efecto infinito
  const duplicatedClients = [...allClients, ...allClients]

  return (
    <section id="trayectoria" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.clientsTitle}>Marcas que confiaron en nosotros</h2>
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
                <Image
                  src={client.img}
                  alt={client.name}
                  width={150}
                  height={150}
                  className={styles.clientLogo}
                />
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
