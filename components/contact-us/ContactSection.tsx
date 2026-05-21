// components/contact/ContactSection.tsx

export default function ContactSection() {
  return (
    <div className="center-body opporunity-sty contact_us">
      <h1>
        <a>
          C<span>ONTAC</span>T
        </a>
      </h1>

      <br />

      <div className="container">
        <div
          className="row mar-top"
          style={{ marginTop: "5px" }}
        >
          <div className="col-lg-8 col-md-8 col-sm-7">
            <div className="wp-block-group">
              <div className="wp-block-columns">
                <div
                  className="wp-block-column"
                  style={{ flexBasis: "100%", textAlign: "left" }}
                >
                  <p>
                    For physicians and providers needing to
                    make a referral, please send referrals
                    via fax at
                    <br />
                    903-892-6323
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>

          <div className="col-lg-4 col-md-4 col-sm-5">
            <div className="right-side">
              <h3>OFFICE</h3>

              <h4>
                <p>
                  <strong>Main Office</strong>: 555 Republic Drive,
                  Suite 325, Plano, TX 75074&nbsp; Ph: 903-893-0298
                </p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}