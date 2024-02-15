import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../Button/Button";
import FinalStep from "./Steps/FinalStep";
import Password from "./Steps/Password";
import PersonalData from "./Steps/PersonalData";
import { Link } from "react-router-dom";

function RegistrationView() {
  const [registrationData, setRegData] = useState({});
  const [registrationStep, setRegStep] = useState(1);

  const nextStep = () => {
    registrationStep === 1 ? setRegStep(2) : setRegStep(3);
  };

  const prevStep = () => {
    if (registrationStep === 2) setRegStep(1);
  };

  const onSubmit = (data) => {
    let formData = registrationData;
    formData = { ...formData, ...data };

    setRegData(formData);
    nextStep();
  };

  const history = useNavigate();

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <section className="registration__container">
        {registrationStep === 1 && <PersonalData onSubmit={onSubmit} formData={registrationData} />}
        {registrationStep === 2 && <Password onClick={() => prevStep()} onSubmit={onSubmit} formData={registrationData} />}
        {registrationStep !== 3 && (
          <div className="registration__form__login">
            <p>Already have an account?</p>
            <Link to={"/login"} className="btn btn--small btn--lightcollar">
              Login
            </Link>
          </div>
        )}
        {registrationStep === 3 && <FinalStep goToLogin={goToLogin} />}
      </section>
    </>
  );
}

export default RegistrationView;

