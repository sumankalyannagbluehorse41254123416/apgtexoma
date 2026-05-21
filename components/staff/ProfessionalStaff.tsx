// components/staff/ProfessionalStaff.tsx

"use client";

import { useState } from "react";
import Image from "next/image";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

interface Props {
  sections: Section[];
}

type StaffMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  shortText: string;
  fullText: string;
};

export default function ProfessionalStaff({
  sections,
}: Props) {

  const [selectedMember, setSelectedMember] =
    useState<StaffMember | null>(null);

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

  // ✅ dynamic data
  const staffMembers: StaffMember[] = sections
    ?.slice(2)
    ?.map((section, index) => ({
      id: index + 1,

      // ✅ section title
      name: cleanText(section?.title),

      // ✅ section shortdescription
      role: cleanText(
        section?.shortDescription,
      ),

      // ✅ section image
      image:
        section?.image ||
        "/images/default-image.jpg",

      // ✅ subsection index 0 description
      shortText:
        cleanText(
          section?.subsections?.[0]
            ?.description,
        ).slice(0, 120) + "...",

      // ✅ all subsection descriptions
      fullText:
        section?.subsections
          ?.map((sub) =>
            cleanText(sub?.description),
          )
          .join("\n\n") || "",
    }));

  return (
    <>
      <div className="clearfix"></div>

      <div className="staff_box">
        <div className="wrapper">
          <div className="bottom-img-sce">

            <h4 style={{ textAlign: "center" }}>
              PROFESSIONAL STAFF
            </h4>

            <div className="row section group">

              {staffMembers.map((member) => (
                <div
                  className="col-sm-3"
                  style={{
                    paddingBottom: "30px",
                  }}
                  key={member.id}
                >

                  <div className="img-section staff_img">

                    {/* ✅ Dynamic Image */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={248}
                      height={355}
                      className="staffpiccenter wp-post-image"
                    />

                    {/* ✅ Dynamic Name */}
                    <h5>{member.name}</h5>

                    {/* ✅ Dynamic Role */}
                    <h6
                      style={{
                        height: "20px",
                      }}
                    >
                      {member.role}
                    </h6>

                    {/* ✅ Dynamic Short Text */}
                    <p>{member.shortText}</p>

                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() =>
                        setSelectedMember(member)
                      }
                      style={{
                        display: "block",
                        margin: "0 auto",
                        width: "104.58px",
                        height: "33.6px",
                        padding: "0",
                        borderRadius: "10px",
                      }}
                    >
                      READ MORE
                    </button>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      {selectedMember && (
        <>
          <div
            className="modal-backdrop fade show"
            onClick={() =>
              setSelectedMember(null)
            }
          ></div>

          <div
            className="modal fade show"
            style={{
              display: "block",
              overflowY: "auto",
            }}
          >
            <div
              className="modal-dialog"
              style={{
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              <div className="modal-content">

                <div className="modal-header">

                  <button
                    type="button"
                    className="close"
                    onClick={() =>
                      setSelectedMember(null)
                    }
                  >
                    ×
                  </button>

                  <h4 className="modal-title">
                    {selectedMember.name}
                  </h4>

                </div>

                <div
                  className="modal-body"
                  style={{
                    maxHeight: "70vh",
                    overflowY: "auto",
                  }}
                >
                  <p
                    style={{
                      whiteSpace: "pre-line",
                    }}
                  >
                    {selectedMember.fullText}
                  </p>
                </div>

                <div className="modal-footer">

                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={() =>
                      setSelectedMember(null)
                    }
                  >
                    Close
                  </button>

                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}