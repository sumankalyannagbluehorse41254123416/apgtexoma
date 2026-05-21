// components/contact-us/ContactSection.tsx

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  subsections?: Section[];
}

interface Props {
  section?: Section;
}

export default function ContactSection({
  section,
}: Props) {

  // ✅ remove html
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
    <div className="center-body opporunity-sty contact_us">

      {/* ✅ Dynamic Title */}
      <h1>
        <a>
          {cleanText(section?.title)}
        </a>
      </h1>

      <br />

      <div className="container">

        <div
          className="row mar-top"
          style={{ marginTop: "5px" }}
        >

          {/* LEFT SIDE */}
          <div className="col-lg-8 col-md-8 col-sm-7">

            <div className="wp-block-group">

              <div className="wp-block-columns">

                <div
                  className="wp-block-column"
                  style={{
                    flexBasis: "100%",
                    textAlign: "left",
                  }}
                >

                  {/* ✅ Dynamic Short Description */}
                  <p>
                    {cleanText(
                      section?.shortDescription,
                    )}
                  </p>

                </div>

              </div>

            </div>

            <br />
            <br />

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4 col-md-4 col-sm-5">

            <div className="right-side">

              {/* ✅ subsection title */}
              <h3>
                {cleanText(
                  section?.subsections?.[0]
                    ?.title,
                )}
              </h3>

              <h4>

                {/* ✅ subsection description */}
                <p>
                  {cleanText(
                    section?.subsections?.[0]
                      ?.description,
                  )}
                </p>

              </h4>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}