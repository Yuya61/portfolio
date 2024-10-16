import React, { useState, useEffect, useRef } from "react";
import {
  DropdownContainer,
  DropdownWrapper,
  DropdownInnerWrapper,
  DropdownComponent,
} from "../DropdownElements";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  let dropdownRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setOpen(false);
        console.log(dropdownRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <DropdownContainer id="Dropdown" ref={dropdownRef}>
      <DropdownWrapper>
        <DropdownInnerWrapper>
          <div className="dropdown-container">
            <div
              className="dropdown-trigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className={`dropdown-chip ${open ? "active" : "inactive"}`}>
                Education&nbsp;
              </span>
              {/* <span>+</span> */}
            </div>
            <div
              className={`dropdown-contents ${open ? "active" : "inactive"}`}
            >
              <ul>
                <DropdownItem
                  textTitle={"The Interaction Design Foundation"}
                  textContent={
                    "Human-Computer Interaction, Behavioral Neuroscience"
                  }
                  textDate={"2024"}
                />
                <DropdownItem
                  textTitle={
                    "Cornerstone International Community College of Canada"
                  }
                  textContent={"Web & Mobile App Development Diploma"}
                  textDate={"School of 2021"}
                />
                <DropdownItem
                  textTitle={"Osaka University of Arts"}
                  textContent={"Bachelor of Fine Arts"}
                  textDate={"School of 2009"}
                />
              </ul>
            </div>
          </div>
        </DropdownInnerWrapper>
      </DropdownWrapper>
    </DropdownContainer>
  );

  function DropdownItem(props) {
    return (
      <li>
        <p>{props.textTitle}</p>
        <div>
          <h4>{props.textContent}</h4>
          <p>{props.textDate}</p>
        </div>
      </li>
    );
  }
};

export default Dropdown;
