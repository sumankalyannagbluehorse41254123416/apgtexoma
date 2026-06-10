import Image from "next/image";

interface BannerProps {
  title: string;
  shortDescription: string;
  image: string;
}

export default function Banner({
  title,
  shortDescription,
  image,
}: BannerProps) {
  return (
    <div className="wraper">
      <div className="container"></div>

      <div className="clearfix"></div>

      <div className="banner">
        <div className="banner-img">
          <Image
            src={image || "/images/2017/01/img-banner.png"}
            alt={title}
            width={700}
            height={500}
            className="banner-sty"
            unoptimized
          />
        </div>

        <div className="text-banner">
          <h3
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />

          <p>{shortDescription}</p>
        </div>
      </div>
    </div>
  );
}