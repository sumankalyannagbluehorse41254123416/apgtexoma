// components/footer/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer  opporunity-sty">
      <div className="container1">
        <div className="footer_bottom">
          <p>
            Applied Psychology Group of Texoma, P.A.
            <br />
            555 Republic Drive, Suite 325, Plano, TX 75074
            <br />
            Phone: 903-893-0298 &nbsp;&nbsp;&nbsp;&nbsp; Fax:
            903-892-6323
            <br />
          </p>
        </div>
      </div>

      <div
        className="container2"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <div className="footer_left">
          <Link
            href="/privacypolicy"
            className="Link"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}