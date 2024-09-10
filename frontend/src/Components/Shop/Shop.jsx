import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendRoundedIcon from '@mui/icons-material/SendRounded';


const InputAddExample = () => {
 const [inputValue, setInputValue] = useState('');
 const [data, setData] = useState([]);
 const [likes, setLikes] = useState(500);
 const [showComment, setShowComment] = useState(false);
 const [comment, setComment] = useState('');

 const handleInputChange = (e) => {
   setInputValue(e.target.value);
 };

 const handleAddData = () => {
   if (inputValue.trim()) {
     setData([...data, inputValue.trim()]);
     setInputValue('');
   }
 };

 const handleLikeClick = () => {
   setLikes((prevLikes) => (prevLikes % 2 === 0 ? prevLikes + 1 : prevLikes - 1));
 };

 const handleCommentToggle = () => {
   setShowComment((prevShowComment) => !prevShowComment);
 };

 const handleCommentChange = (e) => {
   setComment(e.target.value);
 };

 const handleCommentSubmit = () => {
   // Handle comment submission logic
   console.log('Submitted comment:', comment);
   setComment('');
 };

 return (
  <div>
   <div className="flex flex-col justify-center items-center border border-slate-500 m-10 h-full w-2/3 rounded-lg shadow-2xl p-9">
     <div className="flex flex-col sm:flex-row justify-start items-center space-y-7 sm:space-y-0 sm:space-x-5">
       <Avatar className="" />
       <textarea
         value={inputValue}
         onChange={handleInputChange}
         placeholder="Enter data ..."
         className="border-gray-300 border-b py-2 px-4 pr-12 focus:outline-none focus:border-b-2 focus:border-b-black"
       />
        <div className="flex justify-end items-end space-x-8">
       <button
         className=" inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
         onClick={handleAddData}
       >
         <SendRoundedIcon />
       </button>
     </div>
     </div>
    
     <ul className="px-5">
       {data.map((item, index) => (
         <li key={index} className="flex gap-3 flex-col border w-96">
           <div>
             <div className="flex gap-5">
               <Avatar/>
                 
               
               <p className="flex justify-center items-center">aniket</p>
             </div>
           </div>
           <div className="flex justify-between">
             <h1 className="px-9 py-5 flex flex-col whitespace-pre">
               {item}
               <span onClick={handleCommentToggle} className="cursor-pointer">
                 replay
               </span>
               <span>
                 {showComment && (
                   <div className="relative">
                     <input
                       type="text"
                       value={comment}
                       onChange={handleCommentChange}
                       className="border border-gray-300 rounded-md py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                       placeholder="Enter text here..."
                     />
                     <button
                       className="absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
                       onClick={handleCommentSubmit}
                     >
                       <SendRoundedIcon />
                     </button>
                   </div>
                 )}
               </span>
             </h1>
             <button className="flex flex-col items-center">
  <a href="#" className="cursor-pointer" onClick={handleLikeClick}>
    <FavoriteBorderIcon />
  </a>
  {likes}
</button>

           </div>
         </li>
       ))}
     </ul>
   </div>
   <div>
    <div className='flex flex-col justify-center items-center w-full border border-red-500'>
      <p className='text-xl'>Business Timeline</p>
      <h1 className='text-3xl font-bold'>From Vision to Success</h1>
    </div>
    <div className='flex  justify-center items-center w-full'>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <p>anikey</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Avatar className="bg-red-500">1</Avatar>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>

    </div>
    
   </div>
   </div>
 );
};

export default InputAddExample;