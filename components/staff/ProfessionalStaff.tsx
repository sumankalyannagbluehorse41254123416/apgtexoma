"use client";

import { useState } from "react";
import Image from "next/image";

type StaffMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  shortText: string;
  fullText: string;
};

export default function ProfessionalStaff() {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(
    null,
  );

  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: "Kimberly Gajeton, PsyD",
      role: "Clinical Psychologist",
      image: "/images/Gageton-1-scaled-e1667437890852.jpg",
      shortText:
        "Dr. Gajeton received her Doctorate and Master's Degree in Clinical Psychology from the APA accredite...",
      fullText: `Dr. Gajeton received her Doctorate and Master's Degree in Clinical Psychology from the APA accredited Clinical Psychology program at Regent University in Virginia Beach, Virginia. She also holds a Bachelor's Degree in Psychology & Social Behavior from the University of California, Irvine.

Dr. Gajeton completed her Post-Doctoral Fellowship at the Grayson County Children's Advocacy Center and her Pre-Doctoral Internship at the Applied Psychology Group of Texoma. She is a generalist by training but also specializes in the assessment and treatment of children and adolescents and has extensive experience with those on the autism spectrum and those with a history of trauma.

Previous to coming back to APG, Dr. Gajeton served as the Clinical Director/Lead Clinical Therapist at the Grayson County Children's Advocacy Center, receiving specialized training in trauma-informed care. Her background also includes home-based behavior therapy, developmental and educational evaluations of autism spectrum disorder, forensic services, juvenile court services, parenting skills, career services, outreach services, and psychological assessment of children, adolescents, and adults.

Outside of her clinical work, Dr. Gajeton loves to spend time with her growing family which currently includes her husband and two young children. They love to explore outside, work on their garden, try new restaurants, and be active in their church. Dr. Gajeton especially loves any opportunity she has to spend time at the beach.`,
    },

    {
      id: 2,
      name: "Cammie Casarez",
      role: "Social History Writer",
      image: "/images/Cammie-e1668523041372.jpeg",
      shortText:
        "Ms. Casarez is currently a Neuropsychological Social History Writer for the Applied Psychology Group...",
      fullText: `Ms. Casarez is currently a Neuropsychological Social History Writer for the Applied Psychology Group of Texoma (APG). She joined the practice in June 2018.

Ms. Casarez graduated Cum Laude from Grayson College in May 2011 with a double major in Psychology and Sociology. She later attended Austin College in 2011 for two semesters but decided to change to a fully online college with Victory University. Maintaining a 3.8 GPA with Victory University she earned an equivalency Bachelor's Degree in Psychology with a minor in Sociology in May 2014.

While attending college, Ms. Casarez was invited to join the Phi Theta Kappa Honor Society, Honors College, and Model United Nations thus, participating in many seminars, conferences, and other leadership opportunities.

During her college career and beyond she has participated in numerous community service events, accumulating more than 500 hours of volunteerism. Ms. Casarez plans to continue her education and earn a Master's Degree in Psychology at Texas A&M University-Commerce.`,
    },

    {
      id: 3,
      name: "David Bellows",
      role: "Social History Writer",
      image: "/images/Daves.jpeg",
      shortText:
        "Mr. Bellows graduated from Texas A&M University-Commerce in December 1999 with a Bachelor of Arts...",
      fullText: `Mr. Bellows graduated from Texas A&M University-Commerce in December 1999 with a Bachelor of Arts degree in English (philosophy minor).

Before he started helping psychologists and neuropsychologists prepare their detailed evaluation reports in 2008, he sampled a menagerie of career paths, including journalism, teaching, and military service.

He has been working for the Applied Psychology Group since the practice was formed in 2010. His strengths include his strong writing skills combined with an old-school work ethic.

His hobbies and interests are basically all of the arts and humanities, but especially culinary arts, politics, current events, history, media and communications, comedy, and science fiction.

He is an adoring husband, as well as a proud father of two amazing human boys and dog dad to three spoiled fur babies. If he's not at work or at home, you can probably find him on a beach with a book in one hand and a drink in the other.`,
    },

    {
      id: 4,
      name: "Cheryl Erickson, Ph.D.",
      role: "Licensed Clinical Psychologist",
      image: "/images/Cheryl-scaled.jpg",
      shortText:
        "Dr. Erickson received her Doctorate in School Psychology from an APA accredited program...",
      fullText: `Dr. Erickson received her Doctorate in School Psychology from an APA-accredited program at Texas Woman’s University in Denton, TX. She also holds a bachelor’s degree in Mathematics with a minor in education from Texas Woman’s University.

Dr. Erickson completed her pre-doctoral internship at Deer Valley Unified School District, which is a part of the Avondale Unified School District APPIC-accredited program. Afterwards, she completed her two-year post-doctoral fellowship with the Applied Psychology Group of Texoma.

Dr. Erickson has a variety of experiences with school-based and outside clinical evaluations. Currently, her focus is on assessment and diagnosis with children and young adults for a wide variety of conditions, including Autism, ADHD, Intellectual Disabilities, anxiety, depression, OCD, trauma, Bipolar Disorder, and many more.

In her spare time, Dr. Erickson enjoys reading crime and romance novels, taking vacations with family and friends, and hopes to visit Greece someday soon.`,
    },

    {
      id: 5,
      name: "Jabeen Shamji, Ph.D.",
      role: "Licensed Clinical Psychologist",
      image: "https://apgtexoma.com/images/2022/08/Shamji Photo.jpeg",
      shortText:
        "Jabeen F. Shamji, Ph.D., is a Licensed Psychologist specializing in clinical neuropsychology...",
      fullText: `Jabeen F. Shamji, Ph.D., is a Licensed Psychologist in the state of Texas, specializing in clinical neuropsychology at the Applied Psychology Group of Texoma.

She provides comprehensive neuropsychological assessments for children, adolescents, and adults. Her expertise includes evaluating autism spectrum disorder, ADHD, learning disorders, mood and anxiety conditions, dementia, stroke, traumatic brain injury, and neurological conditions.

Dr. Shamji completed her postdoctoral fellowship in Clinical Neuropsychology at the Applied Psychology Group of Texoma following her APA-accredited doctoral internship at Pennsylvania Counseling Services.

Outside of her professional work, Dr. Shamji enjoys traveling with her husband and son, cooking, building LEGO creations and puzzles, meditating, and relaxing with favorite TV shows.`,
    },

    {
      id: 6,
      name: "Constanza Morales Vivero",
      role: "Receptionist/Scheduler",
      image: "/images/constanza.jpg",
      shortText:
        "Constanza is a front desk receptionist at Applied Psychology Group with years of customer service...",
      fullText: `Constanza Morales Vivero is a front desk receptionist at Applied Psychology Group with years of customer service experience.

She is known for her positive attitude, exceptional organization skills, and ensuring a welcoming atmosphere.

In her spare time, she enjoys going on runs with friends, watching movies with her family, and spoiling her two beautiful cats.`,
    },

    {
      id: 7,
      name: "Neha Patel",
      role: "Practice Manager",
      image: "/images/Neha-scaled-e1667569771270.jpeg",
      shortText:
        "Neha Patel graduated with a Bachelor of Science degree in Computer Science...",
      fullText: `Neha Patel graduated with a Bachelor of Science degree in Computer Science.

Neha came to work at APGT with 10 years of experience in customer service from different sectors like banking, telecom and medical billing industry.

She started working for the Applied Psychology Group in 2016 as admin support gradually growing with practice in current role of practice manager.

She has strong understanding of the mental health insurance billing, process and workflow of the practice.

She enjoys cooking, baking and gardening. She loves to spend time with her family and her girlfriends.`,
    },

    {
      id: 8,
      name: "Mahwish Qayyum, LPA",
      role: "Licensed Psychological Associate",
      image: "/images/Qayyum - Professional Picture - 2025.jpg",
      shortText:
        "Ms. Qayyum is a Licensed Psychological Associate who received her master’s in clinical psychology...",
      fullText: `Ms. Qayyum is a Licensed Psychological Associate who received her master’s in clinical psychology from Midwestern University located in Downers Grove, Illinois.

She has over ten years of experience providing psychological and neuropsychological assessments and counseling (individual and group) to children, adolescents, and adults with various clinical issues.

Ms. Qayyum has provided psychological and neuropsychological services in various clinical settings such as inpatient facilities, outpatient facilities, hospitals, jails, schools, clinics, and private practice.

She is certified in screening and assisting individuals who are victims or perpetrators of domestic violence or who are suicidal and homicidal.

Ms. Qayyum has extensive practice working with families and children from various diverse populations.`,
    },
  ];

  return (
    <>
      <div className="clearfix"></div>

      <div className="staff_box">
        <div className="wrapper">
          <div className="bottom-img-sce">
            <h4 style={{ textAlign: "center" }}>PROFESSIONAL STAFF</h4>

            <div className="row section group">
              {staffMembers.map((member) => (
                <div
                  className="col-sm-3"
                  style={{ paddingBottom: "30px" }}
                  key={member.id}
                >
                  <div className="img-section staff_img">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={248}
                      height={355}
                      className="staffpiccenter wp-post-image"
                    />

                    <h5>{member.name}</h5>

                    <h6 style={{ height: "20px" }}>{member.role}</h6>

                    <p>{member.shortText}</p>

                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => setSelectedMember(member)}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        width: "104.58px",
                        height: "33.6px",
                        padding: "0",
                        borderRadius:"10px"
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

      {selectedMember && (
        <>
          <div
            className="modal-backdrop fade show"
            onClick={() => setSelectedMember(null)}
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
                    onClick={() => setSelectedMember(null)}
                  >
                    ×
                  </button>

                  <h4 className="modal-title">{selectedMember.name}</h4>
                </div>

                <div
                  className="modal-body"
                  style={{
                    maxHeight: "70vh",
                    overflowY: "auto",
                  }}
                >
                  <p style={{ whiteSpace: "pre-line" }}>
                    {selectedMember.fullText}
                  </p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={() => setSelectedMember(null)}
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
