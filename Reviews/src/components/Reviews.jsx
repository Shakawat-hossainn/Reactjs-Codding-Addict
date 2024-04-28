import React from 'react';
import data from '../data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const dataLength = data.length;
    const person = data[index] || {}; // Default to an empty object if data[index] is undefined
    const {id, name, job, image, text} = person;

    const prevBtn = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? dataLength - 1 : prevIndex - 1));
    };

    const nextBtn = () => {
        setIndex((prevIndex) => (prevIndex === dataLength - 1 ? 0 : prevIndex + 1));
    };
    const randomPerson = () => {
      setIndex((currentIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * dataLength);
        } while (newIndex === currentIndex); // Ensure newIndex is different from currentIndex
    
        return newIndex;
      });
    };
    

    return (
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevBtn}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextBtn}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    );
  };
  
  export default Reviews;