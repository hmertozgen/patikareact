import "./App.css";
import { Formik, Field, Form, useFormik } from "formik";

// function App() {
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//         }}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         <Form>
//           <label htmlFor="firstName">First Name</label>
//           <Field id="firstName" name="firstName" placeholder="Jane" />

//           <br />
//           <br />

//           <label htmlFor="lastName">Last Name</label>
//           <Field id="lastName" name="lastName" placeholder="Doe" />

//           <br />
//           <br />

//           <label htmlFor="email">Email</label>
//           <Field
//             id="email"
//             name="email"
//             placeholder="jane@acme.com"
//             type="email"
//           />
//           <br />
//           <br />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default App;

// iki türlü de olur, bazı özelleştirmeler gerektiğinde aşağıdaki kullanılır
/* ----------------------------------------------------------*/

// function App() {
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           gender: "male",
//           hobies: [],
//           country: "Türkiye",
//         }}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {({ handleSubmit, handleChange, values }) => (
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="firstName">First Name</label>
//             <input
//               id="firstName"
//               name="firstName"
//               placeholder="Jane"
//               value={values.firstName}
//               onChange={handleChange}
//             />
//             <br />
//             <br />
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               id="lastName"
//               name="lastName"
//               placeholder="Doe"
//               value={values.lastName}
//               onChange={handleChange}
//             />
//             <br />
//             <br />
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               name="email"
//               placeholder="jane@acme.com"
//               type="email"
//               value={values.email}
//               onChange={handleChange}
//             />

//             <br />
//             <br />
//             {/* <label htmlFor="gender">Gender</label> */}
//             <span>Male</span>
//             <input
//               type="radio"
//               id="gender"
//               name="gender"
//               value="male"
//               checked={values.gender === "male"}
//               onChange={handleChange}
//             />
//             <span>Female</span>

//             <input
//               type="radio"
//               id="gender"
//               name="gender"
//               value="female"
//               checked={values.gender === "female"}
//               onChange={handleChange}
//             />
//             <br />
//             <br />
//             <div>
//               Football
//               <input
//                 type="checkbox"
//                 name="hobies"
//                 value="Football"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               Cinema
//               <input
//                 type="checkbox"
//                 name="hobies"
//                 value="Cinema"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               Photography
//               <input
//                 type="checkbox"
//                 name="hobies"
//                 value="Photography"
//                 onChange={handleChange}
//               />
//             </div>
//             <br />
//             <br />
//             <select
//               name="country"
//               id=""
//               onChange={handleChange}
//               value={values.country}
//             >
//               <option value="Türkiye">Türkiye</option>
//               <option value="England">England</option>
//               <option value="USA">USA</option>
//             </select>
//             <br />
//             <br />
//             <button type="submit">Submit</button>
//             <br />
//             <br />

//             <code>{JSON.stringify(values)}</code>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default App;

/*- --------------------------------------------------*/
//useFormik kullanarak biraz daha sadeleşti

// function App() {
//   const { handleChange, handleSubmit, values } = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       gender: "male",
//       hobies: [],
//       country: "Türkiye",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           id="firstName"
//           name="firstName"
//           placeholder="Jane"
//           value={values.firstName}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           id="lastName"
//           name="lastName"
//           placeholder="Doe"
//           value={values.lastName}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           name="email"
//           placeholder="jane@acme.com"
//           type="email"
//           value={values.email}
//           onChange={handleChange}
//         />

//         <br />
//         <br />
//         {/* <label htmlFor="gender">Gender</label> */}
//         <span>Male</span>
//         <input
//           type="radio"
//           id="gender"
//           name="gender"
//           value="male"
//           checked={values.gender === "male"}
//           onChange={handleChange}
//         />
//         <span>Female</span>

//         <input
//           type="radio"
//           id="gender"
//           name="gender"
//           value="female"
//           checked={values.gender === "female"}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <div>
//           Football
//           <input
//             type="checkbox"
//             name="hobies"
//             value="Football"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           Cinema
//           <input
//             type="checkbox"
//             name="hobies"
//             value="Cinema"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           Photography
//           <input
//             type="checkbox"
//             name="hobies"
//             value="Photography"
//             onChange={handleChange}
//           />
//         </div>
//         <br />
//         <br />
//         <select
//           name="country"
//           id=""
//           onChange={handleChange}
//           value={values.country}
//         >
//           <option value="Türkiye">Türkiye</option>
//           <option value="England">England</option>
//           <option value="USA">USA</option>
//         </select>
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//         <br />
//         <br />

//         <code>{JSON.stringify(values)}</code>
//       </form>
//     </div>
//   );
// }

// export default App;

/*------------------------------------------*/

//Form Validation
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
