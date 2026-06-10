// import Image from "next/image";
// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="container-fluid main_top_header wraper">
//       <div className="t_hrader">
//         {/* Your header content goes here */}
//       </div>

//       <div className="icon-social icon-lg"></div>

//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <Link href="/">
//           <Image
//             src="/images/rsz_275587-3-03.png"
//             alt=""
//             width={179}
//             height={157}
//             className="img-responsive logo-resp"
//             unoptimized
//           />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse  justify-content-center"
//           id="navbarNavAltMarkup"
//         >
//           <div className="navbar-nav" id="topManu">
//             <ul className="nav navbar-nav">
//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   id="Home-top"
//                   href="/apg"
//                 >
//                   APG
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   id="Services-top"
//                   href="/services"
//                 >
//                   SERVICES
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   id="Resorces-top"
//                   href="/resorces"
//                 >
//                   RESOURCES
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   id="staff-top"
//                   href="/staff"
//                 >
//                   STAFF
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   id="contact-us-top"
//                   href="/contact-us"
//                 >
//                   CONTACT
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <ul className="list_n">
//           <li>
//             <i className="fa fa-mobile" aria-hidden="true"></i> 903-893-0298
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="container-fluid main_top_header wraper">
//       <div className="t_hrader"></div>

//       <div className="icon-social icon-lg"></div>

//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/images/rsz_275587-3-03.png"
//             alt="Logo"
//             width={179}
//             height={157}
//             className="img-responsive logo-resp"
//             unoptimized
//           />
//         </Link>

//         {/* Hamburger */}
//         <button
//           type="button"
//           className="navbar-toggler"
//           onClick={() => setIsOpen((prev) => !prev)}
//         >
//           ☰
//         </button>

//         {/* Menu */}
//         <div
//           style={{
//             display:
//               typeof window !== "undefined" && window.innerWidth > 991
//                 ? "flex"
//                 : isOpen
//                 ? "block"
//                 : "none",
//             width: "100%",
//           }}
//         >
//           <div className="navbar-nav mx-auto" id="topManu">
//             <ul className="nav navbar-nav">
//               <li>
//                 <Link className="nav-item nav-link" href="/apg">
//                   APG
//                 </Link>
//               </li>

//               <li>
//                 <Link className="nav-item nav-link" href="/services">
//                   SERVICES
//                 </Link>
//               </li>

//               <li>
//                 <Link className="nav-item nav-link" href="/resorces">
//                   RESOURCES
//                 </Link>
//               </li>

//               <li>
//                 <Link className="nav-item nav-link" href="/staff">
//                   STAFF
//                 </Link>
//               </li>

//               <li>
//                 <Link className="nav-item nav-link" href="/contact-us">
//                   CONTACT
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <ul className="list_n">
//           <li>
//             <i className="fa fa-mobile" aria-hidden="true"></i>
//             {" "}903-893-0298
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   // Route change হলে menu auto close হবে
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   return (
//     <header className="container-fluid main_top_header wraper">
//       <div className="t_hrader"></div>

//       <div className="icon-social icon-lg"></div>

//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/images/rsz_275587-3-03.png"
//             alt="Logo"
//             width={179}
//             height={157}
//             className="img-responsive logo-resp"
//             unoptimized
//           />
//         </Link>

//         {/* Hamburger */}
//         <button
//           type="button"
//           className="navbar-toggler"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle navigation"
//         >
//           ☰
//         </button>

//         {/* Menu */}
//         <div className={`mobile-menu ${isOpen ? "show-menu" : "hide-menu"}`}>
//           <div className="navbar-nav mx-auto" id="topManu">
//             <ul className="nav navbar-nav">
//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   href="/apg"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   APG
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   href="/services"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   SERVICES
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   href="/resorces"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   RESOURCES
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   href="/staff"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   STAFF
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="nav-item nav-link"
//                   href="/contact-us"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   CONTACT
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <ul className="list_n">
//           <li>
//             <i className="fa fa-mobile" aria-hidden="true"></i>
//             {" "}903-893-0298
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMenuClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header className="container-fluid main_top_header wraper">
//       <div className="t_hrader"></div>

//       <div className="icon-social icon-lg"></div>

//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         {/* Logo */}
//         <Link href="/" onClick={handleMenuClose}>
//           <Image
//             src="/images/rsz_275587-3-03.png"
//             alt="Logo"
//             width={179}
//             height={157}
//             className="img-responsive logo-resp"
//             unoptimized
//           />
//         </Link>

//         {/* Hamburger Button */}
//         <button
//           type="button"
//           className="navbar-toggler"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Navigation"
//         >
//           ☰
//         </button>

//         {/* Navigation Menu */}
//         <div className={`mobile-menu collapse navbar-collapse ${isOpen ? "show-menu" : "hide-menu"}`}>
//           <div className="navbar-nav" id="topManu">
//             <ul className="nav navbar-nav">
//               <li>
//                 <Link
//                   href="/apg"
//                   className="nav-item nav-link"
//                   onClick={handleMenuClose}
//                 >
//                   APG
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/services"
//                   className="nav-item nav-link"
//                   onClick={handleMenuClose}
//                 >
//                   SERVICES
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/resorces"
//                   className="nav-item nav-link"
//                   onClick={handleMenuClose}
//                 >
//                   RESOURCES
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/staff"
//                   className="nav-item nav-link"
//                   onClick={handleMenuClose}
//                 >
//                   STAFF
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/contact-us"
//                   className="nav-item nav-link"
//                   onClick={handleMenuClose}
//                 >
//                   CONTACT
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Phone Number */}
//         <ul className="list_n">
//           <li>
//             <i className="fa fa-mobile" aria-hidden="true"></i>
//             {" "}903-893-0298
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
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
            <i className="fa fa-mobile" aria-hidden="true"></i>
            {" "}903-893-0298
          </li>
        </ul>
      </nav>
    </header>
  );
}