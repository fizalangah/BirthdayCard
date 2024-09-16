"use client"
 
import Confetti from 'react-confetti'
import { GiBalloons } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { useState } from 'react';


export default function Birthdaycard() {

 const [hideCard,setHidCard]  = useState(false)
 const [hideform,setHideform] = useState(true)

function handelhidepart() {
  setHidCard(true)
  setHideform(false)
}

///form//
const [formData, setFormData] = useState({
  friendName: '',
  age: '',
  birthDate: '',
  message: '',
  yourName: ''
});

     ///form

 const handleChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
  const { name, value } = e.target;
 setFormData({ ...formData, [name]: value });
}

const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {

e.preventDefault();
console.log('Form Data Submitted:', formData);
// You can also display the data dynamically here
};



const [showConfetti, setShowConfetti] = useState(false);
const [firedCandles, setFiredCandles] = useState<number[]>([]); // Track fired candles
const candleColors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500']; // Different candle colors
const[baloomBalons,setbaloomBalloons] = useState<number[]>([])
const blooncolors = ['text-white', 'text-white', 'text-white', 'text-white']; // Different candle colors
const nwebaloonColors = ["text-red-500","text-green-500","text-blue-500","text-yellow-500"]
     

 const baloonHandel =()=> {
   blooncolors.forEach((_,index) => {
    setTimeout(()=>{
      setbaloomBalloons((prev) => [...prev, index]);
      if (index === blooncolors.length - 1) {
        setTimeout(() => {
          setShowConfetti(true); // Trigger confetti when the last balloon pops
          setTimeout(() => setShowConfetti(false), 5000); // Confetti stops after 5 seconds
        }, 1000); // Slight delay after last balloon pops
      }
    } ,index * 1000)
   });
 }

    // Handler to toggle confetti
  const handleCelebrate = () => {
    fireCandles()
    setShowConfetti(true);
    // Optionally stop confetti after some time
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Confetti stops after 5 seconds
  };

  const fireCandles = () => {
 candleColors.forEach((_,index)=>{
  setTimeout(()=>{
    setFiredCandles((prev)=>[...prev, index])
  },index * 1000 )
 })
 
    
  };

  return (
 <div>
  <div>{hideform &&
    
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
            name="message"
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
            <button onClick={handelhidepart}
             className="bg-gray-900 rounded-xl p-2 text-white">
              create card
            </button>
          </div>
        </div>
      </div>
</div>}
</div>



    {/* displaysection */}
{hideCard &&
    <div className="flex justify-center items-center">
<div className=" border-black border-2 h-[500px] w-[450px] mt-[100px] rounded-xl">
    <h1 className="flex justify-center items-center text-3xl font-bold mt-[20px]">{formData.message}</h1>
    <p className="flex justify-center items-center mt-[10px] text-gray-500 text-xl font-semibold">{formData.friendName}</p>
    <p className="flex justify-center items-center mt-[10px] text-gray-500 font-medium">{formData.birthDate}</p>
    <p className="flex justify-center items-center mt-[10px] text-gray-500 font-medium">{formData.age}</p>
    <p className="flex justify-center items-center mt-[10px] text-gray-500 font-medium">{formData.yourName}</p>
    <p className="flex justify-center items-center mt-[20px] text-gray-900 font-semibold text-xl">Light the Candels</p>
    <div className=" flex justify-center items-center flex-row mt-[10px]" >
    <p className="flex justify-center items-center text-2xl space-x-2">
    {candleColors.map((color, index) => (
              <span key={index} className={`${firedCandles.includes(index) ? color : 'text-gray-500'}`}>
                <FaBirthdayCake  onClick={fireCandles} />
              </span>
            ))}
            </p>
    </div>
    <p className="flex justify-center items-center mt-[20px] text-gray-900 font-semibold text-xl">Pop the balloons</p>
    <div className=" flex justify-center items-center flex-row mt-[10px]">
    <p className="flex justify-center items-center text-2xl space-x-2">
   {blooncolors.map((color,index) =>(
    <span key={index} className={`${baloomBalons.includes(index) ? color : "text-pink-700"}`}>
      <GiBalloons onClick={baloonHandel}/>
    </span>
   )

   )
   }
   </p>
    </div>
   
    <div className="flex justify-center items-center mt-[20px] flex-row">
  <button  onClick={handleCelebrate} className="border-2 bg-gray-900 text-white rounded-xl p-3 w-[150px] flex items-center justify-center gap-2  hover:bg-gray-500">
    <FaGift />
    Celebrate!
    
  </button>
  {showConfetti && <Confetti />}
</div>
</div>
</div>}
    </div>
  )
}
