import React from "react";
import { connect } from "react-redux";
import { socials } from "../../configs/Params";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { posthog } from "posthog-js";

const Socials = ({ toggleMode }) => {
  function redirect(url, nameSocial) {
    posthog.capture("socials_open", {
      socialName: nameSocial,
      url: url,
    });
    return window.open(url, "__blank");
  }

  return (
    <div className={`socials-container`}>
      {socials.map((s, i) => (
        <button
          key={s.id}
          className={`btn-socials ${toggleMode ? "dark-mode" : "light-mode"}`}
          onClick={() => redirect(s.url, s.name)}
        >
          <FontAwesomeIcon icon={s.logo} color={s.color} size="3x" />
        </button>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  toggleMode: state.systemSettings.toggleMode,
});

export default connect(mapStateToProps, {})(Socials);
