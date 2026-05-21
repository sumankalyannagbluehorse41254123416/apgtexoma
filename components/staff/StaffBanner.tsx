import Image from "next/image";

export default function StaffBanner() {
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
            src="/images/img-banner.png"
            alt="APG Banner"
            width={700}
            height={500}
            className="banner-sty"
          />
        </div>

        <div className="text-banner">
          <h3>
            Applied <span>Psychology</span> Group of Texoma
          </h3>

          <p>
            APG is a comprehensive mental health clinic serving North Texas and
            Southern Oklahoma. We provide state-of-the-art treatment and
            evaluation services for children, adolescents, adults, and families.
            By combining the experience of seasoned professionals with the most
            recent knowledge and proven techniques available, APG of Texoma
            strives to provide the highest quality mental health services
            possible for its patients.
          </p>
        </div>
      </div>
    </div>
  );
}