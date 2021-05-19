import React from "react";

const AddLeadForm = () => {
  return (
    <div>
      <form className="add-lead-form">
        <div className="--left">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            id="first_name"
            name="first_name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
          />
          <label htmlFor="location_type">Location Type</label>
          <select id="location_type" name="location_type" required>
            <option value="City">City</option>
            <option value="Zip">Zip</option>
            <option value="Country">Country</option>
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
          />
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            placeholder="Mobile number"
            id="mobile"
            name="mobile"
            required
          />

          <label htmlFor="location_string">Location String</label>
          <input
            name="location_string"
            id="location_string"
            type="text"
            placeholder="Location string"
            required
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddLeadForm;
