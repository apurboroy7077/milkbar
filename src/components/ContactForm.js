import React, { useState, useEffect } from "react";

function ContactForm() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="contact_form_outer">
        <div className="contact_form_wrap position-relative">
          <form className="pt-50">
            <div className="form-groups-container">
              <div className="form-group">
                <input name="" type="text" placeholder="name" />
              </div>
              <div className="form-group">
                <input name="" type="email" placeholder="email" />
              </div>
            </div>
            <div className="form-group option-type-form">
              <label className="what-do-you-need-label">
                what do you need help with?
              </label>
              <div class="option_types_radios d-flex flex-wrap">
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios1"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios1"
                    className="form-check-label"
                  >
                    branding
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios2"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios2"
                    className="form-check-label"
                  >
                    web design
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios3"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios3"
                    className="form-check-label"
                  >
                    web development
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios4"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios4"
                    className="form-check-label"
                  >
                    social media
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios5"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios5"
                    className="form-check-label"
                  >
                    advertising
                  </label>
                </div>
                <div className="form-options">
                  <input
                    name="options"
                    type="checkbox"
                    id="budgetRadios6"
                    className="form-check-input"
                  />
                  <label
                    title=""
                    for="budgetRadios6"
                    className="form-check-label"
                  >
                    hospitality consulting
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group textareafld">
              <label className="font-18 font-sfpro letter-spacing-5 mb-40 d-flex">
                let us know about your situation
              </label>
              <textarea name="" placeholder="" />
            </div>
            <div className="form-group send-message">
              <button type="submit" className="send-message-btn underline_link">
                Send Message
              </button>
            </div>
          </form>
          {/* <div className='message text-center'>
                    <div className='light_green_dot'></div>
                    <p className='font-18 text-uppercase font-messina'>Sent</p>
                    <p>we’ll be in touch soon.</p>
                </div> */}
        </div>
      </div>
    </>
  );
}

export default ContactForm;
