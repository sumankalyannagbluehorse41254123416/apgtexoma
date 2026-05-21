// components/resorces/ResourcesSection.tsx

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  subsections?: Section[];
}

interface Props {
  section?: Section;
}

export default function ResourcesSection({
  section,
}: Props) {

  // ✅ clean html
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
    <div className="center-body opporunity-sty">

      {/* ✅ Dynamic H1 */}
      <h1>
        <a>
          {cleanText(section?.title)}
        </a>
      </h1>

      <div className="bg_new">
        <div className="row">

          <div className="col-sm-6 heading-Lft">

            {/* ✅ Dynamic H3 */}
            <h3>
              {cleanText(
                section?.shortDescription,
              )}
            </h3>

            <div className="left-list-sty">
              <ul>

                {/* ✅ Dynamic LI */}
                {section?.subsections?.map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href={
                          cleanText(
                            item?.description,
                          ) || "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cleanText(item?.title)}
                      </a>
                    </li>
                  ),
                )}

              </ul>
            </div>

          </div>

          <div className="col-sm-6"></div>

        </div>
      </div>
    </div>
  );
}