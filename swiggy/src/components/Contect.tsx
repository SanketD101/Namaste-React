import React, { useState } from "react";

const Contect = () => {
  const [contact, setContact] = useState({ Name: "", Last: "", Email: "" });
  const onchange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
    console.log(contact);
  };
  const sendemailonsub = (e) => {
    e.preventDefault();
    window.alert("Mail sent");
  };
  return (
    <div className="pt-26 text-amber-300 size-4 font-bold border w-[100%] h-100">
      Contact Us :
      <div>
        <form action="" className="flex flex-col">
          <label htmlFor="">
            Name :
            <input
              type="text"
              name="Name"
              className="border pl-2"
              value={contact.Name}
              onChange={onchange}
            />
          </label>
          <label htmlFor="">
            Last Name :
            <input
              type="text"
              name="Last"
              value={contact.Last}
              className="border pl-2"
              onChange={onchange}
            />
          </label>
          <label htmlFor="">
            Email :
            <input
              type="text"
              name="Email"
              value={contact.Email}
              className="border pl-2"
              onChange={onchange}
            />
          </label>
          <div>
            <button className="" onSubmit={sendemailonsub}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contect;
