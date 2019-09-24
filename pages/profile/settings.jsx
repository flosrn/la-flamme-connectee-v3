import React, { useContext, useState } from 'react';
import axioswal from 'axioswal';
import { UserContext } from 'src/contexts/UserContext';
import Layout from '../../components/layout';

const ProfileSection = ({ user: { firstName: initialFirstName, lastName: initialLastName }, dispatch }) => {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  const handleSubmit = (event) => {
    event.preventDefault();
    axioswal
      .patch(
        '/api/user',
        { firstName, lastName },
      )
      .then(() => {
        dispatch({ type: 'fetch' });
      });
  };

  const profilePictureRef = React.createRef();
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmitProfilePicture = (event) => {
    if (isUploading) return;
    event.preventDefault();
    setIsUploading(true);
    const formData = new FormData();
    formData.append('profilePicture', profilePictureRef.current.files[0]);
    axioswal
      .put('/api/user/profilepicture', formData)
      .then(() => {
        setIsUploading(false);
        dispatch({ type: 'fetch' });
      });
  };

  return (
    <>
      <style jsx>
        {`
        label {
          display: block
        }
      `}
      </style>
      <section>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            firstName
            <input
              required
              id="name"
              type="text"
              placeholder="Your first name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="lastName">
            lastName
            <input
              required
              id="lastName"
              type="text"
              placeholder="Your last name"
              value={lastName}
              onChange={e => setLastame(e.target.value)}
            />
          </label>

          <button type="submit">
            Save
          </button>
        </form>
        <form action="/api/user/profilepicture" onSubmit={handleSubmitProfilePicture}>
          <label htmlFor="avatar">
            Profile picture
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              ref={profilePictureRef}
              required
            />
          </label>
          <button type="submit" disabled={isUploading}>
            Upload
          </button>
        </form>
      </section>
    </>
  );
};

const SettingPage = () => {
  const { state: { isLoggedIn, user }, dispatch } = useContext(UserContext);

  if (!isLoggedIn) return (<Layout><p>Please log in</p></Layout>);
  return (
    <Layout>
      <h1>Settings</h1>
      <ProfileSection user={user} dispatch={dispatch} />
    </Layout>
  );
};

export default SettingPage;
