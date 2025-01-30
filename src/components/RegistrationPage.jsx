import React, { useEffect, useState,useRef } from 'react';
import '../assets/css/login.css';
import axios from 'axios';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    fatherName: '',
    gender: '',
    email: '',
    password:'',
    phone: '',
    address: '',
    idProof: null,
    politicalInterests: '',
    membershipType: '',
    communicationMethod: '',
  });

  const fileRef =  useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target,"e.target")
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    alert('Registration form submitted!');

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('dob', formData.dob);
    formDataToSend.append('fatherName', formData.fatherName);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('idProof', formData.idProof); // Append the file
    formDataToSend.append('politicalInterests', formData.politicalInterests);
    formDataToSend.append('membershipType', formData.membershipType);
    formDataToSend.append('communicationMethod', formData.communicationMethod);

    axios.post('http://localhost:3000/api/register', formDataToSend , {
      headers : {
      'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      console.log("data is posted", res.data)
    })
    .catch(err => {
      console.log(err)
    })
   setFormData({
    fullName: '',
    dob: '',
    fatherName: '',
    gender: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    politicalInterests: '',
    membershipType: '',
    communicationMethod: '',

   })
 if(fileRef){
  fileRef.current.value = '';
 }
  };


  return (
    <div className="registration-page">
      <header>
        <h1>Register as a Political Party Member</h1>
      </header>

      <main>
        <section className="registration-form-container">
          <h2>Fill out the registration form</h2>
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="fatherName">Father's Name</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                rows="4"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="idProof">Upload ID Proof (Aadhaar/Pan/Voter ID)</label>
              <input
                type="file"
                id="idProof"
                name="idProof"
                onChange={handleFileChange}
                ref = {fileRef}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="politicalInterests">Political Interests/Skills</label>
              <textarea
                id="politicalInterests"
                name="politicalInterests"
                rows="4"
                value={formData.politicalInterests}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="membershipType">Membership Type</label>
              <select
                id="membershipType"
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                required
              >
                <option value="">Select Membership Type</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Core Member">Core Member</option>
                <option value="Supporter">Supporter</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="communicationMethod">Preferred Communication Method</label>
              <select
                id="communicationMethod"
                name="communicationMethod"
                value={formData.communicationMethod}
                onChange={handleChange}
                required
              >
                <option value="">Select Communication Method</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
            </div>

            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default RegistrationPage;
