// Home.js
import React, {useState, useEffect} from 'react';
import '../assests/styling/Home.css'
import { motion } from 'framer-motion';

const Home = () => {

  const [isAnimating, setIsAnimating] = useState(false);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const textArray = ['Kartik', 'Patare'];

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div id="home-section" className="image-container">
      <img
        src={process.env.PUBLIC_URL + '/images/fun-3d-cartoon.png'}
        alt="profile-img"
        className="centered-image"
      />
      <div className="image-name" style={{fontFamily: 'cursive'}}>
        Hii! I am
      </div>
      <motion.div
        style={{
          fontFamily: 'Courier, monospace', 
          fontWeight: 'bold', 
          fontSize: '1.9rem', 
          marginTop: '20px' 
        }}
        initial="initial"
        animate={isAnimating ? 'animate' : 'initial'}
        variants={containerVariants}
      >
        {textArray.map((word, index) => (
          <motion.span key={index} variants={textVariants}>
            {word}{' '}
          </motion.span>
        ))}
      </motion.div>

    </div>
  );
};

export default Home;
