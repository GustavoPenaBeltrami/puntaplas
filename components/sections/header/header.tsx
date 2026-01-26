'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Productos', href: '#productos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Por qué Puntaplas', href: '#por-que' },
    { label: 'Sostenibilidad', href: '#sostenibilidad' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: 'Sobre nosotros', href: '#sobre' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const handleMenuClick = (href: string) => {
    setMenuOpen(false)
    // Smooth scroll al hacer click
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMenuOpen(false)
    const element = document.querySelector('#hero')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="/isologotipo.png"
            alt="Puntaplas"
            width={150}
            height={150}
            className={styles.logo}
            priority
          />
        </div>

        {/* Navegación Desktop */}
        <nav className={styles.navDesktop}>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault()
                handleMenuClick(item.href)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa Mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={menuOpen ? styles.hamburgerActive : ''}></span>
          <span className={menuOpen ? styles.hamburgerActive : ''}></span>
          <span className={menuOpen ? styles.hamburgerActive : ''}></span>
        </button>
      </div>

      {/* Menú Mobile */}
      <nav className={`${styles.navMobile} ${menuOpen ? styles.navMobileOpen : ''}`}>
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.navLinkMobile}
            onClick={(e) => {
              e.preventDefault()
              handleMenuClick(item.href)
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
