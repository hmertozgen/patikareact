import React from "react";
import { useState } from "react";

// function InputExample() {
//   const [name, setName] = useState("Mert");
//   const [surName, setsurName] = useState("Ozgen");

//   const onChangeName = (event) => setName(event.target.value);
//   const onChangesurName = (event) => setsurName(event.target.value);

//   return (
//     <div>
//       Please enter a name
//       <br />
//       <input value={name} onChange={onChangeName} />
//       <br></br>
//       Please enter a name
//       <br />
//       <input value={surName} onChange={onChangesurName} />
//       <br></br>
//       {name} {surName}
//     </div>
//   );
// }

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  return (
    <div>
      Please enter a name
      <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br></br>
      Please enter a surname
      <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br></br>
      {form.name} {form.surname}
    </div>
  );
}

export default InputExample;
