// components/privacypolicy/PrivacyPolicyContaintPage.tsx

import React from "react";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
}

interface Props {
  sections: Section[];
}

// ✅ remove html tags
const stripHtml = (html: string) =>
  html
    ? html
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .trim()
    : "";

const PrivacyPolicyContaintPage: React.FC<Props> = ({
  sections,
}) => {
  return (
    <div className="container">
      {/* ================= SECTION 1 ================= */}

      {/* section title array index 1 */}
      <h2>{sections[1]?.title}</h2>

      <h4>
        {/* subsection title */}
        {stripHtml(
          sections[1]?.subsections?.[0]?.title || "",
        )}

        <br />
        <br />

        {/* subsection description */}
        {stripHtml(
          sections[1]?.subsections?.[0]?.description ||
            "",
        )}
      </h4>

      <div className="right-bar con-sticky col-lg-9 col-md-7 col-sm-12">
        {/* ================= SECTION 2 ================= */}

        {/* section title */}
        <h2>{sections[2]?.title}</h2>

        <div className="case_answer collect_box">
          <ul>
            {/* section shortdescription */}
            <li>
              {stripHtml(
                sections[2]?.shortDescription || "",
              )}
            </li>
          </ul>

          {/* subsection description */}
          <h4>
            {stripHtml(
              sections[2]?.subsections?.[0]?.description ||
                "",
            )}
          </h4>
        </div>

        {/* ================= SECTION 3 ================= */}

        <div className="case_answer">
          {/* section title */}
          <h2>{sections[3]?.title}</h2>

          {/* section shortdescription */}
          <h4>
            {stripHtml(
              sections[3]?.shortDescription || "",
            )}
          </h4>

          <ul>
            {/* subsection description */}
            {sections[3]?.subsections?.map(
              (item, index) => (
                <li key={index}>
                  {stripHtml(item?.description || "")}
                </li>
              ),
            )}
          </ul>

          {/* ================= SECTION 4 ================= */}

          {/* section title */}
          <h2>{sections[4]?.title}</h2>

          {/* section shortdescription */}
          <p>
            {stripHtml(
              sections[4]?.shortDescription || "",
            )}
          </p>
        </div>

        {/* ================= SECTION 5 ================= */}

        <div className="case_answer">
          {/* section title */}
          <h2>{sections[5]?.title}</h2>

          {/* section shortdescription */}
          <h4>
            {stripHtml(
              sections[5]?.shortDescription || "",
            )}
          </h4>

          <ul>
            {/* subsection description */}
            {sections[5]?.subsections?.map(
              (item, index) => (
                <li key={index}>
                  {stripHtml(item?.description || "")}
                </li>
              ),
            )}
          </ul>

          {/* ================= SECTION 6 ================= */}

          {/* section title */}
          <h2>{sections[6]?.title}</h2>

          {/* section shortdescription */}
          <h4>
            {stripHtml(
              sections[6]?.shortDescription || "",
            )}
          </h4>

          <ul>
            {/* subsection description */}
            {sections[6]?.subsections?.map(
              (item, index) => (
                <li key={index}>
                  {stripHtml(item?.description || "")}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* ================= SECTION 7 ================= */}

        <div className="case_answer">
          {/* section title */}
          <h2>{sections[7]?.title}</h2>

          <h4>
            {/* section shortdescription */}
            {stripHtml(
              sections[7]?.shortDescription || "",
            )}

            <br />

            {/* section description */}
            {stripHtml(
              sections[7]?.description || "",
            )}
          </h4>

          <ul>
            {/* subsection description */}
            {sections[7]?.subsections?.map(
              (item, index) => (
                <li key={index}>
                  {stripHtml(item?.description || "")}
                </li>
              ),
            )}
          </ul>

          {/* ================= SECTION 8 ================= */}

          {/* section title */}
          <h2>{sections[8]?.title}</h2>

          <ul>
            {/* subsection description */}
            {sections[8]?.subsections?.map(
              (item, index) => (
                <li key={index}>
                  {stripHtml(item?.description || "")}
                </li>
              ),
            )}
          </ul>

          {/* ================= SECTION 9 ================= */}

          {/* section title */}
          <h2>{sections[9]?.title}</h2>

          {/* section shortdescription */}
          <p>
            {stripHtml(
              sections[9]?.shortDescription || "",
            )}
          </p>

          {/* ================= SECTION 10 ================= */}

          {/* section title */}
          <h2>{sections[10]?.title}</h2>

          {/* section shortdescription */}
          <p>
            {stripHtml(
              sections[10]?.shortDescription || "",
            )}
          </p>

          <br />

          {/* ================= SECTION 11 ================= */}

          {/* section title */}
          <h4>{sections[11]?.title}</h4>
        </div>
      </div>

      <div className="col-lg-3"></div>
    </div>
  );
};

export default PrivacyPolicyContaintPage;