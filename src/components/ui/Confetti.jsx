import React, { useEffect } from 'react';

const ConfettiComponent = () => {
  useEffect(() => {
    const confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];
    const confettiAnimations = ['slow', 'medium', 'fast'];

    const container = document.querySelector('.confetti-container');

    const createConfetti = () => {
      const confetti = document.createElement('div');
      const size = `${Math.floor(Math.random() * 3) + 7}px`;
      const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      const left = `${Math.floor(Math.random() * container.offsetWidth)}px`;
      const animation = `confetti--animation-${confettiAnimations[Math.floor(Math.random() * confettiAnimations.length)]}`;

      confetti.className = `absolute rounded-full ${animation}`;
      confetti.style.cssText = `
        left: ${left};
        width: ${size};
        height: ${size};
        background-color: ${color};
      `;

      container.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 3000);
    };

    const interval = setInterval(createConfetti, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white -z-10">
      {/* Confetti Container */}
      <div className="confetti-container absolute inset-0 overflow-hidden"></div>

      {/* Tailwind Keyframes */}
      <style>
        {`
          @keyframes confetti-slow {
            0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
            100% { transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg); }
          }
          @keyframes confetti-medium {
            0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
            100% { transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg); }
          }
          @keyframes confetti-fast {
            0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
            100% { transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg); }
          }
          .confetti--animation-slow { animation: confetti-slow 2.25s linear forwards; }
          .confetti--animation-medium { animation: confetti-medium 1.75s linear forwards; }
          .confetti--animation-fast { animation: confetti-fast 1.25s linear forwards; }
        `}
      </style>
    </div>
  );
};

export default ConfettiComponent;