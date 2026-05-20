"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-light main_top_header">
      <div className="t_hrader">
        {/* Your header content goes here */}
      </div>

      <div className="icon-social icon-lg"></div>

      <nav className="bg-light navbar navbar-expand-lg navbar-light wraper container-fluid navbar navbar-expand-lg navbar-light wraper container-fluid">
        <Link href="/apg">
          <Image
            src="/images/rsz_275587-3-03.png"
            alt="Logo"
            width={179}
            height={157}
            className="img-responsive logo-resp"
            priority
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto" id="topManu">
            <ul className="nav navbar-nav">
              <li>
                <Link
                  className="nav-item nav-link"
                  id="Home-top"
                  href="/apg"
                >
                  APG
                </Link>
              </li>

              <li>
                <Link
                  className="nav-item nav-link"
                  id="Services-top"
                  href="/services"
                >
                  SERVICES
                </Link>
              </li>

              <li>
                <Link
                  className="nav-item nav-link"
                  id="Resorces-top"
                  href="/resorces"
                >
                  RESOURCES
                </Link>
              </li>

              <li>
                <Link
                  className="nav-item nav-link"
                  id="staff-top"
                  href="/staff"
                >
                  STAFF
                </Link>
              </li>

              <li>
                <Link
                  className="nav-item nav-link"
                  id="contact-us-top"
                  href="/contact-us"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <ul className="list_n">
          <li>
            <i className="fa fa-mobile" aria-hidden="true"></i> 903-893-0298
          </li>
        </ul>
      </nav>
    </header>
  );
}