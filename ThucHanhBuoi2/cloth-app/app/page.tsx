import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="nav-left">
          <button className="menu-btn" type="button" aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </button>
          <nav className="main-nav" aria-label="Primary">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Collections
            </a>
            <a href="#" className="nav-link">
              New
            </a>
          </nav>
        </div>

        <div className="logo">
          <Image src="/assets/logo.png" alt="Fashion Store logo" width={40} height={40} priority />
        </div>

        <div className="nav-right">
          <button className="icon-btn" type="button" aria-label="Search">
            <svg className="icon icon-search" fill="none" viewBox="0 0 20 20" width={20} height={20} aria-hidden="true">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <button className="icon-btn" type="button" aria-label="View favorites">
            <Image src="/assets/heart.png" alt="Favorite items" width={40} height={40} />
          </button>
          <button className="cart-btn" type="button">
            <Image src="/assets/cart.png" alt="Shopping cart" width={40} height={40} />
            <span className="cart-text">Cart</span>
          </button>
          <button className="icon-btn" type="button" aria-label="Profile">
            <Image src="/assets/profile_icon.png" alt="Profile" width={40} height={40} />
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="menu-navigation">
          <a href="#" className="menu-link">
            MEN
          </a>
          <a href="#" className="menu-link">
            WOMEN
          </a>
        </div>

        <div className="hero-section">
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
            <div className="image-container main-image">
              <Image
                src="/assets/image1.png"
                alt="White outfit collection"
                fill
                className="product-image"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
            </div>
            <div className="image-container secondary-image">
              <Image
                src="/assets/image2.png"
                alt="Black t-shirt collection"
                fill
                className="product-image"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
          </div>
        </div>

        <div className="bottom-navigation">
          <button className="cta-button" type="button">
            Go To Shop
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </button>

          <div className="navigation-controls" role="group" aria-label="Collection navigation">
            <button className="nav-arrow left" type="button" aria-label="Previous collection">
              <span aria-hidden="true">←</span>
            </button>
            <button className="nav-arrow right" type="button" aria-label="Next collection">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
