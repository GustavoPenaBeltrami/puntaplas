'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  title: string
  description: string
  items: string[]
  image: string
  ctaText: string
  whatsappMessage: string
}

export default function ProductCard({
  title,
  description,
  items,
  image,
  ctaText,
  whatsappMessage,
}: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/5492664000000?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <button 
          className={styles.titleButton} 
          onClick={toggleExpand}
          aria-expanded={isExpanded}
        >
          <h3 className={styles.title}>{title}</h3>
          <span className={`${styles.arrow} ${isExpanded ? styles.arrowExpanded : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#0268ad" d="M12 1.67a2.91 2.91 0 0 0-2.492 1.403L1.398 16.61a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503-4.371L14.494 3.078A2.92 2.92 0 0 0 12 1.67"/></svg>
          </span>
        </button>
        
        <div className={`${styles.collapsible} ${isExpanded ? styles.collapsibleExpanded : ''}`}>
          <p className={styles.description}>{description}</p>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Button 
          variant="outline" 
          size="small" 
          onClick={handleWhatsAppClick}
        >
          {ctaText}
        </Button>
      </div>
    </article>
  )
}
