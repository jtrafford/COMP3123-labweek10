import { useState } from "react";
import "./App.css";

function App() {
  // set states values by uisng the useState hook
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);
  const [email, setEmail] = useState("");
  const [showEamil, setShowEamil] = useState(false);
  const [address, setAddress] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [address2, setAddress2] = useState("");
  const [showAddress2, setShowAddress2] = useState(false);
  const [city, setCity] = useState("");
  const [showCity, setShowCity] = useState(false);
  const [province, setProvince] = useState("");
  const [showProvince, setShowProvince] = useState(false);
  const [postCode, setPostCode] = useState("");
  const [showPostCode, setShowPostCode] = useState(false);

  // run a function on form submit
  const funcToHandleSubmit = (e) => {
    e.preventDefault();
    // set show states to true for showing submitted values as output
    setShowName(true);
    setShowEamil(true);
    setShowAddress(true);
    setShowAddress2(true);
    setShowCity(true);
    setShowProvince(true);
    setShowPostCode(true);
    setShowName(true);
  };

  return (
    <>
      {/* submit the form to funcToHandleSubmit function */}
      {/* form */}
      <form onSubmit={funcToHandleSubmit}>
        <h1>Data Entry Form</h1>
        <div className="first">
          {/* form fields */}
          <div>
            <label htmlFor="emailval">Email</label>
            {/* set state on change of value */}
            <input type="email" id="emailval" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="nameVal">Name</label>
            <input type="text" id="nameVal" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <label htmlFor="addrval">Address</label>
        <input type="text" id="addrval" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label htmlFor="AddressVal">Address 2</label>
        <input type="text" id="AddressVal" placeholder="Apartment, studio, or floor"value={address2} onChange={(e) => setAddress2(e.target.value)} />
        <div className="second">
          <div>
            <label htmlFor="cityval">City</label>
            <input type="text" id="cityval" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label htmlFor="pr" id="prlabel">
              Province
            </label>
            <select id="pr" value={province} onChange={(e) => setProvince(e.target.value)}>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div>
            <label htmlFor="posval">Postal Code</label>
            <input type="text" id="posval" value={postCode} onChange={(e) => setPostCode(e.target.value)} />
          </div>
        </div>
        <input type="checkbox" /> Agree Terms &amp; Condition?
        {/* submit button */}
        <input type="submit" value="Submit" id="btn" />
      </form>

      {/* output div */}
      {/* show values on form submit */}
      <div className="opdiv">
        <div>{showName ? `Full name: ${name}` : ''}</div>
        <div>{showEamil && `Email: ${email}`}</div>
        <div>{showAddress && `Address: ${address}`}</div>
        <div>{showAddress2 && `Adddress 2: ${address2}`}</div>
        <div>{showCity && `City: ${city}`}</div>
        <div>{showProvince && `Province: ${province}`}</div>
        <div>{showPostCode && `Postal code: ${postCode}`}</div>
      </div>
    </>
  );
}

export default App;