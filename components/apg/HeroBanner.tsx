// components/apg/HeroBanner.tsx

import Image from "next/image";

interface HeroBannerProps {
  title: string;
  shortDescription: string;
  image: string;
}

export default function HeroBanner({
  title,
  shortDescription,
  image,
}: HeroBannerProps) {
  return (
    <div className="">
      <div className="container">
        <div className="header-area">
          <div className="icon-hide">
            <div className="icon-social">
              <ul></ul>
            </div>

            <div className="clearfix"></div>

            <p></p>

            <div className="icon-social"></div>

            <p></p>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>

      <div className="banner">
        <div className="banner-img">
          <Image
            src={image || "/images/img-banner.png"}
            alt={title || "Banner"}
            width={700}
            height={500}
            className="banner-sty"
          />
        </div>

        <div className="text-banner">
          <h3>{title}</h3>

          <p>{shortDescription}</p>
        </div>
      </div>
    </div>
  );
}