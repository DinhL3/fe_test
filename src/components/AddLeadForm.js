/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import axios from "axios";

// Adding validation for user input
// onChange, changeHandler and useState for every key stroke -> not needed for this form, maybe for reactive search bar
// better to use useRef after done typing

const AddLeadForm = () => {
  // const [firstName, setFirstName] = useState("");

  // const fisrtNameInputChangeHandler = (event) => {
  //   setFirstName(event.target.value);
  // };

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const mobileInputRef = useRef();
  const locationTypeInputRef = useRef();
  const locationStringInputRef = useRef();

  const formSubmissionHandler = (event) => {
    // ref the input value on submit
    const firstName = firstNameInputRef.current;
    const lastName = lastNameInputRef.current;
    const email = emailInputRef.current;
    const mobile = mobileInputRef.current;
    const locationType = locationTypeInputRef.current;
    const locationString = locationStringInputRef.current;
    const arr = [
      firstName,
      lastName,
      email,
      mobile,
      locationType,
      locationString,
    ];

    // convert data into object, then json
    const object = {};
    for (const item of arr) {
      object[item.name] = item.value;
    }
    const json = JSON.stringify(object);

    postData();

    // post data to backend
    async function postData() {
      try {
        const url = "https://bitna-senior-test.herokuapp.com/api/leads";
        const res = await axios.post(url, json, {
          headers: { "Content-Type": "application/json" },
        });
        res.data.data;
      } catch (err) {
        console.log("Error posting data", err);
      }
    }
  };

  return (
    <div>
      <form className="add-lead-form" onSubmit={formSubmissionHandler}>
        <div className="--left">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            id="first_name"
            name="first_name"
            required
            ref={firstNameInputRef} // ref this
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
            ref={emailInputRef}
          />
          <label htmlFor="location_type">Location Type</label>
          <select
            id="location_type"
            name="location_type"
            required
            ref={locationTypeInputRef}
          >
            <option value="City">City</option>
            <option value="Zip">Zip</option>
          </select>
        </div>
        <div className="--right">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            id="last_name"
            name="last_name"
            required
            ref={lastNameInputRef}
          />
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            placeholder="Mobile number"
            id="mobile"
            name="mobile"
            required
            ref={mobileInputRef}
          />

          <label htmlFor="location_string">Location String</label>
          <input
            name="location_string"
            id="location_string"
            type="text"
            placeholder="Location string"
            required
            ref={locationStringInputRef}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddLeadForm;
