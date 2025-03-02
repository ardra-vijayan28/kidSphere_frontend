// import { useRef,useState } from "react";
// import { useNavigate } from "react-router";

// const Create_Playarea=()=>{

//   const nameRef = useRef();

//     function handleSubmit(){
//       const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");
      
//       const raw = JSON.stringify({
//         "name": "Kiddoplay",
//         "type": "outdoor",
//         "status": "Open",
//         "place": "Pipeline",
//         "contact": "9090909090",
//         "address": "Vennala Road Pipline"
//       });
      
//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//       };
      
//       fetch("http://localhost:4000/users/create", requestOptions)
//         .then((response) => response.json())
//         .then((result) => console.log(result))
//         .catch((error) => console.error(error));
//     }

//   return (
//     <>
//      <h2 className="text-center text-black text-3xl font-bold p-20">
//         Create New Play Area
//     </h2>
//     <form method="Post" onSubmit={handleSubmit}></form>
//     <div className="font-[sans-serif] max-w-md mx-auto border-black">
//       <input 
//         type="text" 
//         placeholder="Enter name"
//         className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]" 
//       ref={nameRef}
//       />
//       <br/><br/>
//       <input 
//         type="text" 
//         placeholder="Type"
//         className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]" 
//       />
//       <br/><br/>
//       <input 
//         type="text" 
//         placeholder="Status"
//         className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]" 
//       />
//       <br/><br/>
//       <input 
//         type="text" 
//         placeholder="Place"
//         className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]" 
//       />
//       <br/><br/>
//       <input 
//         type="text" 
//         placeholder="Contact"
//         className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]" 
//       />
//       <br/><br/>
//       <input 
//         type="description" 
//         placeholder="Address"
//         className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]" 
//       />
//       <br/><br/>
//       <button className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-blue-400 border border-blue-500 w-full outline-[#007bff]" onClick={create}>
//         Create
//       </button>
//     </div>
   
//     </>
//   );
// };
// export default Create_Playarea;
import { useRef } from "react";

const Create_Playarea = () => {
  const nameRef = useRef();
  const typeRef = useRef();
  const statusRef = useRef();
  const placeRef = useRef();
  const contactRef = useRef();
  const addressRef = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: nameRef.current.value,
      type: typeRef.current.value,
      status: statusRef.current.value,
      place: placeRef.current.value,
      contact: contactRef.current.value,
      address: addressRef.current.value,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4000/users/create", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h2 className="text-center text-black text-3xl font-bold p-20">
        Create New Play Area
      </h2>
      <form onSubmit={handleSubmit} className="font-[sans-serif] max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter name"
          className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]"
          ref={nameRef}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Type"
          className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]"
          ref={typeRef}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Status"
          className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]"
          ref={statusRef}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Place"
          className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]"
          ref={placeRef}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Contact"
          className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]"
          ref={contactRef}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Address"
          className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-blue-500 w-full outline-[#007bff]"
          ref={addressRef}
        />
        <br /><br />
        <button
          type="submit"
          className="pr-4 px-5 py-2.5 text-sm text-white rounded-full bg-blue-400 border border-blue-500 w-full outline-[#007bff]"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default Create_Playarea;
