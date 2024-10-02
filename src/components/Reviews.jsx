import { div } from "framer-motion/m";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Reviews = () => {
  // Track which review is expanded
  const [expandedReview, setExpandedReview] = useState(null);

  // Array of reviews
  const reviews = [
    {
      company: "Karman Ventures",
      src: "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
      author: "Moris Ghosh",
      btn1: true,
      btn2: true,
      btn3: false,
      btn4: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris eget neque fermentum congue.",
    },
    {
      company: "TechNova",
      src: "https://ochi.design/wp-content/uploads/2022/05/Nina.jpg.png",
      author: "Nina Walloch",
      btn1: true,
      btn2: true,
      btn3: true,
      btn4: true,
      content:
        "Donec vel est id nisi consectetur ultricies vel vel nunc. Donec convallis massa sed enim condimentum.",
    },
    {
      company: "Horizon Group",
      src: "https://ochi.design/wp-content/uploads/2022/05/Tomer.png",
      author: "James Rohes",
      btn1: true,
      btn2: true,
      btn3: true,
      btn4: false,
      content:
        "Nulla facilisi. Sed sagittis, lectus vel condimentum consectetur, nulla velit ultricies neque.",
    },
    {
      company: "Velocity Inc.",
      src: "https://ochi.design/wp-content/uploads/2022/12/image-677-300x298.png",
      author: "Elin Kim",
      btn1: true,
      btn2: false,
      btn3: false,
      btn4: false,
      content:
        "Integer ut justo vel est placerat scelerisque. Nullam vel turpis at justo ultricies bibendum.",
    },
    {
      company: "Stratosphere Corp.",
      src: "https://ochi.design/wp-content/uploads/2022/05/1627398835558-11.png",
      author: "David Smith",
      btn1: true,
      btn2: true,
      btn3: true,
      btn4: false,
      content:
        "Aliquam erat volutpat. Donec vel justo id libero laoreet laoreet sit amet ac nisl.",
    },
    {
      company: "Orderlion.",
      src: "https://ochi.design/wp-content/uploads/2022/05/1627398835558-11.png",
      author: "David Smith",
      btn1: true,
      btn2: true,
      btn3: false,
      btn4: false,
      content:
        "Aliquam erat volutpat. Donec vel justo id libero laoreet laoreet sit amet ac nisl.",
    },
    {
      company: "Black Book.",
      src: "https://ochi.design/wp-content/uploads/2022/05/Stefan-300x300.jpg",
      author: "Stephan Robert",
      btn1: false,
      btn2: true,
      btn3: false,
      btn4: false,
      content:
        "Aliquam erat volutpat. Donec vel justo id libero laoreet laoreet sit amet ac nisl.",
    },
    {
      company: "Officevibe.",
      src: "https://ochi.design/wp-content/uploads/2022/05/Jaci.jpg.png",
      author: "Lily Smith",
      btn1: true,
      btn2: false,
      btn3: false,
      btn4: true,
      content:
        "Aliquam erat volutpat. Donec vel justo id libero laoreet laoreet sit amet ac nisl.",
    },
    {
      company: "Hypercare Systems.",
      src: "https://ochi.design/wp-content/uploads/2023/02/David-Budde-1-300x300.png",
      author: "David Smith",
      btn1: true,
      btn2: false,
      btn3: true,
      btn4: false,
      content:
        "Aliquam erat volutpat. Donec vel justo id libero laoreet laoreet sit amet ac nisl.",
    },
  ];

  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      data-scroll-section
      className="w-full  py-12 bg-[#F1F1F1]">
      <h1 className="md:text-6xl text-4xl mb-12 px-12">Clients’ reviews</h1>
      {/* Render the reviews dynamically */}
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`border-t-[1px] ${
            index === reviews.length - 1 ? "border-b-[1px]" : ""
          } px-12 w-full border-zinc-400`}>
          <div className="flex justify-between  w-full items-center py-6">
            <h1 className="w-[33.3%]">{review.company}</h1>
            <h1 className="w-[33.3%]">{review.author}</h1>
            <Link
              className=""
              onClick={() =>
                setExpandedReview(expandedReview === index ? null : index)
              }>
              {expandedReview === index ? "CLOSE" : "READ"}
            </Link>
          </div>
          {/* Conditionally render the content when a review is expanded */}
          {expandedReview === index && (
            <div className="md:w-[60%] w-[90%]  md:mx-auto flex md:flex-row  gap-5  flex-col justify-between py-8">
              <div className="md:w-[35%] w-[60%]  ">{review.btn1 ? <Button name="INVESTOR DECK" /> : ""}</div>
              <div className="flex flex-col gap-8 md:w-1/2 w-full">
                 <img
                 className="w-28 object-cover rounded-lg h-28"
                 src={review.src}
                 alt=""/>
                 <p className="md:text-base text-sm" >
                 image description They were transparent about the time and the
                 stages of the project. The end product is high quality, and I
                 feel confident about how they were handholding the client
                 through the process. I feel like I can introduce them to
                 someone who needs to put a sales deck together from scratch,
                 and they would be able to handhold the client experience from
                 0 to 100 very effectively from story to design. 5/5
                 </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
