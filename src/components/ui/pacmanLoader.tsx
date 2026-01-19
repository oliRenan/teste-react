//Achei esse loader na internet e pedi pro gemini traduzi-lo para React com TailwindCSS
export default function PacmanLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="pacman-container">
        <div className="pacman-top"></div>
        <div className="pacman-bottom"></div>
        <div className="feed"></div>
        <div className="feed"></div>
        <div className="feed"></div>
        <div className="feed"></div>
      </div>
      <style>{`
        .pacman-container {
          position: relative;
          width: 100px;
          height: 60px;
        }

        /* As duas metades do Pacman */
        .pacman-top, .pacman-bottom {
          background-color: #155dfc; 
          height: 30px;
          width: 60px;
          position: absolute;
          left: 0;
          border-radius: 60px 60px 0 0;
          animation: spin-top 0.4s infinite linear alternate;
        }

        .pacman-bottom {
          top: 30px;
          border-radius: 0 0 60px 60px;
          animation: spin-bottom 0.4s infinite linear alternate;
        }

        /* As bolinhas de comida */
        .feed {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #155dfc; 
          border-radius: 50%;
          top: 24px;
          right: -20px;
          opacity: 0;
          animation: feed-anim 2s infinite linear;
        }

        .feed:nth-child(3) { animation-delay: 0.5s; }
        .feed:nth-child(4) { animation-delay: 1.0s; }
        .feed:nth-child(5) { animation-delay: 1.5s; }
        .feed:nth-child(6) { animation-delay: 2.0s; }

        @keyframes spin-top {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-35deg); }
        }

        @keyframes spin-bottom {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(35deg); }
        }

        @keyframes feed-anim {
          0% { right: -20px; opacity: 0; }
          5% { opacity: 1; }
          100% { right: 60px; opacity: 0; } 
        }
      `}</style>
    </div>
  );
}
