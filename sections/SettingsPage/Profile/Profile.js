import React from "react";
import PropTypes from "prop-types";
import { ProfileDetails, ProfileForm } from "./components";

function Profile({
  profile,
  values,
  changeProfileHandler,
  changeDateHandler,
  submitHandler,
  editHandler,
  isEditMode,
  cancelHandler,
  isLoading
}) {
  return (
    <>
      <ProfileDetails profile={profile} isLoading={isLoading} />
      <ProfileForm
        values={values}
        changeHandler={changeProfileHandler}
        changeDateHandler={changeDateHandler}
        submitHandler={submitHandler}
        editHandler={editHandler}
        isEditMode={isEditMode}
        cancelHandler={cancelHandler}
        isLoading={isLoading}
      />
    </>
  );
}

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
