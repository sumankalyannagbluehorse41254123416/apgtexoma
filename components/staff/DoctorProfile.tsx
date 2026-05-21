import Image from "next/image";

export default function DoctorProfile() {
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
              style={{ marginLeft: "0px", marginRight: "0px" }}
            >
              <div className="col-lg-3 col-md-3">

                <div className="two_ptl">
                  <Image
                    className="maindoctor"
                    src="/images/IMG_3683.jpeg"
                    alt="Purvi Patel"
                    width={311}
                    height={415}
                  />

                  <p
                  className="patel-name"
                    style={{
                      
                      fontWeight: "600",
                      marginTop: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    Purvi Patel, PsyD, LP
                  </p>

                  <p className="p-designation">
                    Licensed Clinical Neuropsychologist
                  </p>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="patel_details">
                  <p>
                    Dr. Patel is currently the practice administrator
                    and clinical training director for Applied
                    Psychology Group of Texoma (APG). She currently
                    holds as a license as a psychologist in State of
                    Texas. She initially joined APG in 2011 as a
                    post-doctoral fellow in neuropsychology and later
                    became a partner in the practice. Presently, she
                    is sole partner/owner of the practice. Dr. Patel
                    has worked in number of settings including
                    corporate settings, non-profit organizations, and
                    educational setting. Presently, as a clinical
                    neuropsychologist, she primarily focuses on
                    assessment of various neuropsychological
                    conditions across the lifespan, including
                    developmental and neurological conditions. She
                    holds special interest in assessment of Autism
                    Spectrum Disorder, Parkinson’s disease, and
                    Alzheimer’s disease.
                    <br />
                    <br />

                    Dr. Patel graduated from the Texas School of
                    Professional Psychology at Argosy University
                    Dallas in September 2011. As part of the doctoral
                    program, Dr. Patel completed her externship at
                    Southern Methodist University for one year with
                    primary focus on providing individual counseling
                    to college students. Furthermore, she completed
                    one-year externship with focus on assessment and
                    intervention with Center for Psychological
                    Development. Lastly, Dr. Patel’s formal
                    pre-doctoral internship was at San Antonio State
                    Hospital where she was trained in assessment and
                    intervention with adolescent, adult acute, and
                    forensic patients with chronic mental illness.
                    <br />
                    <br />

                    Professionally, Dr. Patel has also worked in
                    number of roles throughout her career, including
                    starting her career in psychology and the
                    counseling field by working with victims of
                    domestic violence with her holding a role as a
                    Children’s Program Coordinator for Hope’s Door, a
                    local domestic violence shelter. She also was able
                    to work with perpetrators of domestic violence
                    during her externship training while working on
                    her master’s degree in counseling. Later upon
                    obtaining her master’s degree, Dr. Patel completed
                    her training hours towards licensure by working
                    for an addiction treatment center, Homeward Bound,
                    in Dallas, Texas. Primary roles during her tenure
                    there was working with patients who were admitted
                    for detox level of care. Additionally, Dr. Patel
                    also held a part-time position at Avenues
                    Counseling Center in McKinney, Texas where she led
                    outpatient recovery groups for individuals
                    suffering from alcohol and drug addiction.
                    <br />
                    <br />

                    Dr. Patel has a passion for working with
                    vulnerable clients, particularly in a rural
                    community where individuals are faced with lack of
                    resources. She holds high expectations of herself
                    as well as her staff in providing quality
                    evaluations and treating each client with respect
                    and dignity. Mentoring of staff and students has
                    always been a passion and through her role at APG,
                    she strives to help students not only strengthen
                    their clinical skills, but to also develop a
                    professional identify as they progress through
                    their career goals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}