import React, { useState } from "react";
import emailjs from "emailjs-com";
import weddingArrow from "../images/wedding_arrow.svg";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "400px",
  margin: "auto",
  backgroundColor: "rgba(69, 89, 73, 0.9)",
  borderRadius: "8px",
  color: "#e5f5f0",
  padding: "0 20px",
};

const labelStyles = {
  lineHeight: "34px",
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Spectral', serif",
  fontWeight: 300,
};

const inputStyles = (isFocused) => ({
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  color: "black",
  fontFamily: "'Spectral', serif",
  fontWeight: 300,
  outline: isFocused ? "solid 2px rgb(245, 183, 66)" : "none",
});

const selectStyles = (isFocused) => ({
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  color: "black",
  fontFamily: "'Spectral', serif",
  fontWeight: 300,
  lineHeight: "1.5",
  outline: isFocused ? "solid 2px rgb(245, 183, 66)" : "none",
  appearance: "none",
  WebkitAppearance: "none",
  backgroundImage: `url(${weddingArrow})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 10px center",
  backgroundSize: "12px",
});

const buttonStyles = (isHovered) => ({
  margin: "0 auto",
  minWidth: "170px",
  padding: "10px",
  backgroundColor: isHovered ? "rgb(245, 183, 66)" : "transparent",
  border: "solid 1px rgb(245, 183, 66)",
  color: isHovered ? "#455949" : "rgb(245, 183, 66)",
  cursor: "pointer",
  fontSize: "16px",
  borderRadius: "50px",
  transition: "background-color 0.3s, color 0.3s",
  fontFamily: "'Spectral', serif",
  fontWeight: 300,
});

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyles = {
  background: "rgba(245, 183, 66)",
  maxWidth: "420px",
  padding: "44px",
  margin: "30px",
  borderRadius: "5px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const RSVPForm = () => {
  console.log("RSVPForm is rendering");

  const [name, setName] = useState("");
  const [isAttending, setIsAttending] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [dietaryFocused, setDietaryFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      attending: isAttending ? "Yes" : "No",
      subject: `RSVP from ${name}`,
      dietaryRestrictions,
    };

    emailjs
      .send(
        "service_pj5tdw8", // Your service ID
        "template_8enh78r", // Your template ID
        templateParams,
        "G1t7FNOVBVY03wSbQ" // Your public key
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setMessage("Your RSVP has been sent to Chanel and Yuya! Thank you :)");
        setError("");
        setName("");
        setIsAttending(true);
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
        }, 5000);
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
        setError("Oops! Something went wrong. Please try again.");
        setMessage("");
      });
  };

  return (
    <div style={formStyles}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "24px" }}>
          <label style={labelStyles}>
            Name(s):
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyles(inputFocused)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          </label>
        </div>
        <div>
          <label style={labelStyles}>
            Attendance:
            <select
              value={isAttending ? "yes" : "no"}
              onChange={(e) => setIsAttending(e.target.value === "yes")}
              style={selectStyles(selectFocused)}
              onFocus={() => setSelectFocused(true)}
              onBlur={() => setSelectFocused(false)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <label style={labelStyles}>
            Dietary Restrictions:
            <input
              type="text"
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
              style={inputStyles(dietaryFocused)}
              onFocus={() => setDietaryFocused(true)}
              onBlur={() => setDietaryFocused(false)}
            />
          </label>
        </div>
        <button
          type="submit"
          style={buttonStyles(buttonHovered)}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Send RSVP
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {modalVisible && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <p
              style={{
                color: "#455949",
                fontSize: "34px",
                fontFamily: "'Alice', serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              {message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVPForm;
