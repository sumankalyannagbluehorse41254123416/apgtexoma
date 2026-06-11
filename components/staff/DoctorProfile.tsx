// components/staff/DoctorProfile.tsx

import Image from "next/image";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

interface Props {
  section?: Section;
}

export default function DoctorProfile({
  section,
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
    <>
      <div className="center-body opporunity-sty">

        <h1>
          <a>
            PROFE<span>SSIONAL</span> STAFF
          </a>
        </h1>

        <br />
      </div>

      <div className="staff_box">
        <div className="wrapper">
          <div className="bottom-img-sce">

            <div
              className="row"
              style={{
                marginLeft: "0px",
                marginRight: "0px",
              }}
            >
              <div className="col-xl-3 col-lg-4 col-md-5">

                <div className="two_ptl">




                  {/* ✅ Dynamic Image */}
                  <Image
                    className="maindoctor"
                    src={
                      section?.image ||
                      "/images/IMG_3683.jpeg"
                    }
                    alt={
                      cleanText(section?.title) ||
                      "Doctor"
                    }
                    width={311}
                    height={415}
                  />

                  {/* ✅ Dynamic Title */}
                  <p className="patel-name"
                    style={{

                      fontWeight: "600",
                      marginTop: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    {cleanText(section?.title)}
                  </p>

                  {/* ✅ Dynamic Short Description */}
                  <p className="p-text p-designation">
                    {cleanText(
                      section?.shortDescription,
                    )}
                  </p>

                </div>

              </div>
              <div className="col-xl-9 col-lg-8 col-md-7">
                {/* ✅ Dynamic Subsection Description */}
                <div className="patel_details">

                  {section?.subsections?.map(
                    (item, index) => (
                      <p key={index}>
                        {cleanText(
                          item?.description,
                        )}

                        <br />
                        <br />
                      </p>
                    ),
                  )}

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}