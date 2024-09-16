"use client";

    
import { useState } from "react";
   


 export default function Formcard() {

  const [formData, setFormData] = useState({
    friendName: '',
    age: '',
    birthDate: '',
    message: '',
    yourName: ''
  });

      

   const handleChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 }

 const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log('Form Data Submitted:', formData);
  // You can also display the data dynamically here
};


    
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="border-black border-2 rounded-xl h-[500px] w-[500px] mt-[100px] bg-slate-400">
        <div className="ml-[100px] mt-[20px]"> 
          {/* Friend Name */}
          <div className="flex flex-col mt-[20px]">
            <label> Your friend's name:</label>
            <input type="text" 
          name="friendName"
            placeholder="Friend name"
           className="border rounded-md p-1 w-[250px] outline-none border-black"
           value={formData.friendName}
           onChange={handleChange}
            />
          </div>

          {/* Age */}
          <div className="flex flex-col mt-[20px]">
            <label> Age:</label>
            <input type="text"
            name="age"
             placeholder="Enter age" 
             className="border rounded-md p-1 w-[250px] outline-none border-black"
             value={formData.age}
             onChange={handleChange}
              />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col mt-[20px]">
            <label> Date of Birth:</label>
            <input type="text"
            name="birthDate"
             placeholder="Enter birthdate" 
             className="border rounded-md p-1 w-[250px] outline-none border-black"
             value={formData.birthDate}
             onChange={handleChange}
              />
          </div>

          {/* Message */}
          <div className="flex flex-col mt-[20px]">
            <label> Message:</label>
            <input type="text"
            name="mesage"
             placeholder="Enter message"
             className="border rounded-md p-1 w-[250px] outline-none border-black"
             value={formData.message}
             onChange={handleChange}
             />
          </div>

          {/* Your Name */}
          <div className="flex flex-col mt-[20px]">
            <label> Your name:</label>
            <input type="text"
            name="yourName"
             placeholder="Enter your name" 
             className="border rounded-md p-1 w-[250px] outline-none border-black" 
             value={formData.yourName}
             onChange={handleChange}
             />
          </div>
          <div className="ml-[90px] mt-[20px]">
            <button onClick={handleSubmit}
             className="bg-gray-900 rounded-xl p-2 text-white">
              create card
            </button>
          </div>
        </div>
      </div>
</div>
  )
 }
