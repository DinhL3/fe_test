import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

import LeadTable from "./components/LeadTable";
import AddLeadForm from "./components/AddLeadForm";

function App() {
  const [leads, setLeads] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "30rem",
    },
  };

  async function getLeads() {
    try {
      const url = "https://bitna-senior-test.herokuapp.com/api/leads";
      const res = await axios.get(url);
      console.log(res.data.data);
      setLeads(res.data.data);
    } catch (err) {
      console.log("Error fetching data: ", err);
    }
  }

  useEffect(() => {
    getLeads();
  }, []);

  // const arr = [
  //   { name: "Tom", age: 16 },
  //   { name: "Dick", age: 17 },
  //   { name: "Harry", age: 14 },
  // ];

  return (
    <div className="App">
      <button className="add-lead-btn" onClick={openModal}>
        Add Lead
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Lead"
      >
        <div className="modal-header">
          <h4>Add Lead</h4>
          <button className="mini" onClick={closeModal}>
            ╳
          </button>
        </div>
        <AddLeadForm />
      </Modal>
      <LeadTable leads={leads} />
    </div>
  );
}

export default App;
