import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement("section", {
    className: "contact-short"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-two-column"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Ready to get started?"), /*#__PURE__*/React.createElement("h3", null, "Talk to us today")), /*#__PURE__*/React.createElement("div", {
    className: "contact-short-btn"
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: "/"
  }, /*#__PURE__*/React.createElement(Button, null, "Get Started"))))), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "container grid grid-four-column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-about"
  }, /*#__PURE__*/React.createElement("h3", null, "Thapa Technical"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-subscribe"
  }, /*#__PURE__*/React.createElement("h3", null, "Subscribe to get important updates"), /*#__PURE__*/React.createElement("form", {
    action: "#"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    autoComplete: "off",
    placeholder: "Email"
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Subscribe"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "footer-social"
  }, /*#__PURE__*/React.createElement("h3", null, "Follow Us"), /*#__PURE__*/React.createElement("div", {
    className: "footer-social--icons"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FaDiscord, {
    className: "icons"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FaInstagram, {
    className: "icons"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(FaYoutube, {
    className: "icons"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-contact"
  }, /*#__PURE__*/React.createElement("h3", null, "Call Us"), /*#__PURE__*/React.createElement("h3", null, "+91 12345678978"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom--section"
  }, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "container grid grid-two-column"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " ThapaTechnical. All Rights Reserved."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "PRIVACY POLICY"), /*#__PURE__*/React.createElement("p", null, "TERMS & CONDITIONS"))))));
};

// Styled Components
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({
  theme
}) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({
  theme
}) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({
  theme
}) => theme.colors.footer_bg};

    h3 {
      color: ${({
  theme
}) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p {
      color: ${({
  theme
}) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({
  theme
}) => theme.colors.white};

        .icons {
          color: ${({
  theme
}) => theme.colors.white};
          font-size: 2.4rem;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({
  theme
}) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({
  theme
}) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;
export default Footer;