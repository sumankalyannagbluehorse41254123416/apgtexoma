// components/services/NeuropsychologicalContent.tsx

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  subsections?: Section[];
}

interface Props {
  sections: Section[];
}

export default function NeuropsychologicalContent({
  sections,
}: Props) {

  // ✅ Clean HTML tags
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
    <div className="center-cls opporunity-sty">
      <div className="center-body opporunity-sty">
        <h1>
          <a>
            <span>SERVICES</span>
          </a>
        </h1>

        <br />
      </div>

      <div className="services_box">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12"
              style={{ textAlign: "justify", marginTop:"0" }}
            >
              <div className="text-sty-cls nwwwe">

                {/* ================= index 1 ================= */}
                {sections[1] && (
                  <>
                    <h4>
                      {cleanText(sections[1]?.title)}
                    </h4>

                    <p>
                      {cleanText(
                        sections[1]?.shortDescription,
                      )}
                    </p>
                  </>
                )}

                {/* ================= index 2 ================= */}
                {sections[2] && (
                  <>
                    <h4>
                      {cleanText(sections[2]?.title)}
                    </h4>

                    <p>
                      {cleanText(
                        sections[2]?.shortDescription,
                      )}
                    </p>
                  </>
                )}

                {/* ================= index 3 ================= */}
                {sections[3] && (
                  <>
                    <h4>
                      {cleanText(sections[3]?.title)}
                    </h4>

                    <ul>
                      {sections[3]?.subsections?.map(
                        (item, index) => (
                          <li key={index}>
                            {cleanText(
                              item?.description,
                            )}
                          </li>
                        ),
                      )}
                    </ul>
                  </>
                )}

                {/* ================= index 4 ================= */}
                {sections[4] && (
                  <>
                    <h4>
                      {cleanText(sections[4]?.title)}
                    </h4>

                    <p>
                      {cleanText(
                        sections[4]?.shortDescription,
                      )}
                    </p>
                  </>
                )}

                {/* ================= index 5 ================= */}
                {sections[5] && (
                  <>
                    <h4>
                      {cleanText(sections[5]?.title)}
                    </h4>

                    <p>
                      {cleanText(
                        sections[5]?.shortDescription,
                      )}
                    </p>
                  </>
                )}

                {/* ================= index 6 ================= */}
                {sections[6] && (
                  <>
                    <h4>
                      {cleanText(sections[6]?.title)}
                    </h4>

                    {sections[6]?.subsections?.map(
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
                  </>
                )}

                {/* ================= index 7 ================= */}
                {sections[7] && (
                  <>
                    <h4>
                      {cleanText(sections[7]?.title)}
                    </h4>

                    <p>
                      {cleanText(
                        sections[7]?.shortDescription,
                      )}
                    </p>
                  </>
                )}

                {/* ================= index 8 ================= */}
                {sections[8] && (
                  <>
                    <h4>
                      {cleanText(sections[8]?.title)}
                    </h4>

                    <p>
                      {cleanText(
                        sections[8]?.shortDescription,
                      )}
                    </p>

                    <ul>
                      {sections[8]?.subsections?.map(
                        (item, index) => (
                          <li key={index}>
                            {cleanText(
                              item?.description,
                            )}
                          </li>
                        ),
                      )}
                    </ul>
                  </>
                )}

                {/* ================= index 9 ================= */}
                {sections[9] && (
                  <>
                    <h4>
                      {cleanText(sections[9]?.title)}
                    </h4>

                    <p>
                      {cleanText(
                        sections[9]?.shortDescription,
                      )}
                    </p>

                    {/* subsection 1-3 */}
                    <ul>
                      {sections[9]?.subsections
                        ?.slice(0, 3)
                        ?.map((item, index) => (
                          <li key={index}>
                            {cleanText(
                              item?.description,
                            )}
                          </li>
                        ))}
                    </ul>

                    {/* subsection 4 */}
                    <p>
                      {cleanText(
                        sections[9]?.subsections?.[3]
                          ?.description,
                      )}
                    </p>

                    {/* subsection 5-9 */}
                    <ul>
                      {sections[9]?.subsections
                        ?.slice(4, 9)
                        ?.map((item, index) => (
                          <li key={index}>
                            {cleanText(
                              item?.description,
                            )}
                          </li>
                        ))}
                    </ul>

                    {/* subsection 10 */}
                    <p>
                      {cleanText(
                        sections[9]?.subsections?.[9]
                          ?.description,
                      )}
                    </p>

                    {/* subsection 11-13 */}
                    <p>
                      {cleanText(
                        sections[9]?.subsections?.[10]
                          ?.description,
                      )}

                      <br />
                      <br />

                      {cleanText(
                        sections[9]?.subsections?.[11]
                          ?.description,
                      )}

                      <br />
                      <br />

                      {cleanText(
                        sections[9]?.subsections?.[12]
                          ?.description,
                      )}
                    </p>
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}