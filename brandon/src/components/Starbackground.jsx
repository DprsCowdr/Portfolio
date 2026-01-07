import React, { useEffect, useState } from 'react';

export const Starbackground = () => {
     const [stars, setStars] = useState([]);
     const [meteors, setMeteors] = useState([]);


     useEffect(() => {
        generateStars();
        generateMeteors();
        const handleResize = () => {
            generateStars();
            generateMeteors();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
     }, []);

     const generateStars = () => {
        const numberOfStars = Math.floor(
            window.innerWidth * window.innerHeight / 10000
        );
        
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
     };
          const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 80 + 10,  // Spread across 10-90% of width (centered)
                y: Math.random() * 50,       // Spread across top 50% of screen
                delay: -(Math.random() * 5),  // Negative delay starts animation mid-way
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
     };

  return (
    <div className="starbackground-container">
      {stars.map((star) => (
        <div 
          key={star.id} 
          className="star animate-pulse-subtle" 
          style={{
            position: 'absolute',
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
    
          }}
        />
      ))}
         {meteors.map((meteor) => (
        <div 
          key={meteor.id} 
          className="meteor" 
          style={{
            width: meteor.size * 50 +  "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};