import React, { useState } from "react";

function Home() {
  const [nic, setNic] = useState("");
  const [error, setError] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const handleFind = () => {
    setError("");
    setGender("");
    setYear("");
    setMonth("");
    setDay("");

    const NICNo = nic.trim();
    let dayText = 0;
    let birthYear = "";
    let birthMonth = "";
    let birthDay = "";
    let genderText = "";

    if (NICNo.length !== 10 && NICNo.length !== 12) {
      setError("Invalid NIC NO");
    } else if (NICNo.length === 10 && !/^\d+$/.test(NICNo.substr(0, 9))) {
      setError("Invalid NIC NO");
    } else {
      // Year
      if (NICNo.length === 10) {
        birthYear = "19" + NICNo.substr(0, 2);
        dayText = parseInt(NICNo.substr(2, 3));
      } else {
        birthYear = NICNo.substr(0, 4);
        dayText = parseInt(NICNo.substr(4, 3));
      }

      // Gender
      if (dayText > 500) {
        genderText = "Female";
        dayText = dayText - 500;
      } else {
        genderText = "Male";
      }

      // Day Digit Validation
      if (dayText < 1 || dayText > 366) {
        setError("Invalid NIC NO");
      } else {
        // Month
        if (dayText > 335) {
          birthDay = dayText - 335;
          birthMonth = "December";
        } else if (dayText > 305) {
          birthDay = dayText - 305;
          birthMonth = "November";
        } else if (dayText > 274) {
          birthDay = dayText - 274;
          birthMonth = "October";
        } else if (dayText > 244) {
          birthDay = dayText - 244;
          birthMonth = "September";
        } else if (dayText > 213) {
          birthDay = dayText - 213;
          birthMonth = "August";
        } else if (dayText > 182) {
          birthDay = dayText - 182;
          birthMonth = "July";
        } else if (dayText > 152) {
          birthDay = dayText - 152;
          birthMonth = "June";
        } else if (dayText > 121) {
          birthDay = dayText - 121;
          birthMonth = "May";
        } else if (dayText > 91) {
          birthDay = dayText - 91;
          birthMonth = "April";
        } else if (dayText > 60) {
          birthDay = dayText - 60;
          birthMonth = "March";
        } else if (dayText < 32) {
          birthMonth = "January";
          birthDay = dayText;
        } else if (dayText > 31) {
          birthDay = dayText - 31;
          birthMonth = "February";
        }

        // Show Details
        setGender("Gender : " + genderText);
        setYear("Year : " + birthYear);
        setMonth("Month : " + birthMonth);
        setDay("Day :" + birthDay);
      }
    }
  };

  return (
    <center>
      <h1 style={{ color: "#000" }}>NIC Birth Day Finder</h1>
      <p style={{ color: "#000" }}>Both New & Old Format</p>
      <input type="text" id="nic" value={nic} onChange={(e) => setNic(e.target.value)} />
      <button onClick={handleFind}>Find</button>
      <br />
      <br />
      <p id="error" style={{ color: "red" }}>{error}</p>
      <p id="gender" style={{ color: "#000" }}>{gender}</p>
      <p id="year" style={{ color: "#000" }}>{year}</p>
      <p id="month" style={{ color: "#000" }}>{month}</p>
      <p id="day" style={{ color: "#000" }}>{day}</p>
    </center>
   
    
  );
}

export default Home;
