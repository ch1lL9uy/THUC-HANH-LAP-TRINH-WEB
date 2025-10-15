'use client';

import Image from "next/image";
import { useEffect, useState } from 'react';

const navLinks = [
  { href: "", label: "Trang Chủ" },
  { href: "#", label: "Bộ Sưu Tập" },
  { href: "#", label: "Giảm Giá" },
];

type HeroImage = {
  id: string;
  src: string;
  alt: string;
  priority?: boolean;
};

const INITIAL_HERO_IMAGES: HeroImage[] = [
  {
    id: 'main',
    src: '/products/item1.png',
    alt: 'White outfit collection',
    priority: true,
  },
  {
    id: 'secondary',
    src: '/products/item2.png',
    alt: 'Black t-shirt collection',
  },
];

export default function HomePage() {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [heroImages, setHeroImages] = useState<HeroImage[]>(INITIAL_HERO_IMAGES);
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  useEffect(() => {
    let isMounted = true;

    const fetchHeroImages = async () => {
      try {
        const response = await fetch('/api/hero-images');
        if (!response.ok) {
          throw new Error(`Failed to load hero images: ${response.status}`);
        }

        const data: HeroImage[] = await response.json();
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setHeroImages(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchHeroImages();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="nav-left">
          <button className="menu-btn" type="button" aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </button>
          <nav className="main-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="logo">
          <Image src="/logo.png" alt="Fashion Store logo" width={40} height={40} priority />
        </div>

        <div className="nav-right">
          <button onClick={openSearch} className="icon-btn" type="button" aria-label="Search">
            <Image src="/search_icon.png" alt="Search" width={35} height={35} />
          </button>
          <button className="icon-btn" type="button" aria-label="View favorites">
            <Image src="/heart.png" alt="Favorite items" width={30} height={30} />
          </button>
          <button className="icon-btn" type="button" aria-label="Shopping cart">
            <Image src="/image.png" alt="Shopping cart" width={30} height={30} />
          </button>
          <button className="icon-btn" type="button" aria-label="Profile">
            <Image src="/profile_icon.png" alt="Profile" width={30} height={30} />
          </button>
        </div>
      </header>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-bar">
            <input type="text" placeholder="Tìm kiếm..." autoFocus />
            <button onClick={closeSearch} className="close-btn" aria-label="Close search">
              &times;
            </button>
          </div>
        </div>
      )}

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">
              NEW
              <br />
              COLLECTION
            </h1>
            <p className="hero-subtitle">
              Fashion
              <br />
              2025
            </p>
          </div>

          <div className="hero-images">
            {heroImages.map((image, index) => {
              const containerClass = index === 0 ? 'main-image' : 'secondary-image';
              return (
                <div key={image.id ?? index} className={`image-container ${containerClass}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="product-image"
                    sizes="(max-width: 1024px) 100vw, 320px"
                    priority={index === 0 || Boolean(image.priority)}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <div className="bottom-navigation">
          <button className="cta-button" type="button">
            {/* Go To Shop */}
            Mua Sắm
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </main>
    </>
  );
}
