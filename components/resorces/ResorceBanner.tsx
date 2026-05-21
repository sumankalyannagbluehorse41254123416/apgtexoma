// components/resources/ResorceBanner.tsx

import Image from "next/image";

interface Props {
  title?: string;
  shortDescription?: string;
  image?: string;
}

export default function ResorceBanner({
  title,
  shortDescription,
  image,
}: Props) {

  // ✅ remove html tags
  const cleanText = (text?: string) => {
    if (!text) return "";

    return text
      .replace(/<br\s*\/?>/gi, "")
      .replace(/&nbsp;/gi, "")
      .replace(/<\/?ul>/gi, "")
      .replace(/<\/?li>/gi, "")
      .replace(/<[^>]*>/g, "")
      .trim();
  };

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

        {/* ✅ Dynamic Image */}
        <div className="banner-img">
          <Image
            src={image || "/images/img-banner.png"}
            alt={cleanText(title) || "Banner"}
            width={700}
            height={500}
            className="banner-sty"
          />
        </div>

        {/* ✅ Dynamic Content */}
        <div className="text-banner">
          <h3>
            {cleanText(title)}
          </h3>

          <p>
            {cleanText(shortDescription)}
          </p>
        </div>

      </div>
    </div>
  );
}