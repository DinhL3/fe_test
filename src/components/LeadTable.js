/* eslint-disable react/prop-types */
import React from "react";

const LeadTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Num</th>
          <th>Location Type</th>
          <th>Location String</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.leads.map((lead) => (
          <tr key={lead._id}>
            <td>{lead.first_name + " " + lead.last_name}</td>
            <td>{lead.email}</td>
            <td>{lead.mobile}</td>
            <td>{lead.location_type}</td>
            <td>{lead.location_string}</td>
            <td>
              <button>Mark Update</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;
