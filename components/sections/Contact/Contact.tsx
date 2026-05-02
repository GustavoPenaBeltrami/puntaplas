import styles from "./Contact.module.css";
import Button from "@/components/ui/Button";
import { HiChatBubbleLeftRight, HiEnvelope, HiPhone, HiMapPin, HiClock } from 'react-icons/hi2';

export default function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.contactTitle}>Contacto</h2>
          <p className={styles.intro}>
            ¿Tenés un proyecto en mente? Contactanos y te asesoramos sin
            compromiso.
          </p>
        </div>

        {/* Content Grid */}
        <div className={styles.content}>
          {/* Contact Info */}
          <div className={styles.infoContainer}>
            <div className={styles.infoBlocks}>
              {/* WhatsApp CTA */}
              <div className={styles.whatsappBlock}>
                <div className={styles.whatsappIcon}><HiChatBubbleLeftRight /></div>
                <h4 className={styles.whatsappTitle}>Contacto directo</h4>
                <p className={styles.whatsappText}>
                  Chateá con nosotros por WhatsApp y te respondemos al instante
                </p>
                <Button
                  href="https://wa.me/5492664223809?text=Hola,%20me%20gustaría%20hacer%20una%20consulta"
                  variant="secondary"
                  size="medium"
                >
                  Escribinos por WhatsApp
                </Button>
              </div>

              {/* Contact Details */}
              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}><HiEnvelope /></div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoLabel}>Email</h4>
                  <a
                    href="mailto:todrostomas@puntaplas.com"
                    className={styles.infoLink}
                  >
                    todrostomas@puntaplas.com
                  </a>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}><HiPhone /></div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoLabel}>Teléfono</h4>
                  <a href="tel:+5492664223809" className={styles.infoLink}>
                    +54 9 2664 22‑3809
                  </a>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}><HiMapPin /></div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoLabel}>Dirección</h4>
                  <p className={styles.infoText}>Calle 105 entre 5y8 parque industrial norte San Luis</p>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoIcon}><HiClock /></div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoLabel}>Horarios</h4>
                  <p className={styles.infoText}>
                    Lunes a Viernes: 8:00 - 17:00 hs
                    <br />
                    Sábados: 9:00 - 13:00 hs
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Envianos tu consulta</h3>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nombre completo <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="Juan Pérez"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={styles.input}
                  placeholder="Tu empresa"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="email@ejemplo.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Teléfono <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.input}
                  placeholder="266-4000000"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Mensaje <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder="Contanos sobre tu proyecto..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <Button
                variant="primary"
                size="large"
                className={styles.submitButton}
              >
                Enviar consulta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
