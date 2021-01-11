import React from "react";
import "./about.style.css";

function AboutCard() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-4">
            <img
              className="d-block w-100 image"
              src={process.env.PUBLIC_URL + "/about-me-photo.jpeg"}
              alt="Andrew Theisen"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Andrew Theisen</h5>
              <p className="card-text">
                I completed the Full Stack Developer program at University of
                Minnesota. I am currently working at Alarm.com as a Support
                Operations Associate. In my current roll I work with security
                professionals over the phone to find creative solutions to
                complex issues and situations.
              </p>
              <p className="card-text">
                Before my current job I lived in the Philippines fo 2 years
                helping out a non-profit starting up a screen printing and
                sewing shop. During that time I also worked with LSJ collective
                working as a marketing strategist. I would edit and create
                videos and visual content using Adobe photoshop, premiere pro
                and after effects. Before starting both of those positions I
                didn’t have any experience with Adobe or working textiles. I had
                to learn on the job which was my favorite part about those
                positions. I am looking for a job that pushes me and helps me
                grow and learn more about this exciting field.
              </p>
            </div>
            <div className="row">
              <div className="col">
                <h6 className="card-title contact">Contact me</h6>
                <a
                  href="https://github.com/theisen92"
                  target="_blank"
                  rel="noreferrer"
                  className="btn first btn-primary"
                >
                  Github Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/andrew-theisen-7813751ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn margin btn-primary"
                >
                  Linkedin Profile
                </a>
                <a
                  href="mailto:andrew.peter.theisen@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn margin btn-primary"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutCard;
