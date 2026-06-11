"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="container-fluid main_top_header wraper">
      <div className="t_hrader"></div>

      <div className="icon-social icon-lg"></div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Logo */}
        <Link href="/" onClick={handleMenuClose}>
          <Image
            src="/images/rsz_275587-3-03.png"
            alt="Logo"
            width={179}
            height={157}
            className="img-responsive logo-resp"
            unoptimized
          />
        </Link>

        {/* Hamburger Button */}
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <div
          className={`mobile-menu ${
            isDesktop ? "collapse navbar-collapse" : ""
          } ${isOpen ? "show-menu" : "hide-menu"}`}
        >
          <div className="navbar-nav" id="topManu">
            <ul className="nav navbar-nav">
              <li>
                <Link
                  href="/apg"
                  className="nav-item nav-link"
                  onClick={handleMenuClose}
                >
                  APG
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="nav-item nav-link"
                  onClick={handleMenuClose}
                >
                  SERVICES
                </Link>
              </li>

              <li>
                <Link
                  href="/resorces"
                  className="nav-item nav-link"
                  onClick={handleMenuClose}
                >
                  RESOURCES
                </Link>
              </li>

              <li>
                <Link
                  href="/staff"
                  className="nav-item nav-link"
                  onClick={handleMenuClose}
                >
                  STAFF
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="nav-item nav-link"
                  onClick={handleMenuClose}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Phone Number */}
        <ul className="list_n">
          <li>
            <a href="tel:+19038930298" className="phone-link">
              <i className="fa fa-mobile" aria-hidden="true"></i> 903-893-0298
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
