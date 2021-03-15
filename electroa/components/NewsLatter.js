import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NewsLatter = () => {
  return (
    <div id="newsletter" class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="newsletter">
              <p>
                Sign Up for the <strong>NEWSLETTER</strong>
              </p>
              <form>
                <input
                  class="input"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button class="newsletter-btn">
                  <FontAwesomeIcon icon="envelope" /> Subscribe
                </button>
              </form>
              <ul class="newsletter-follow">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={["fab", "pinterest"]} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
