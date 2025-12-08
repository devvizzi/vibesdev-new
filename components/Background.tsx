import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none bg-black">
      {/* Inline Keyframes for custom floating animation */}
      <style>
        {`
          @keyframes float-slow { 
            0%, 100% { transform: translate(0, 0) scale(1); } 
            33% { transform: translate(30px, -50px) scale(1.1); } 
            66% { transform: translate(-20px, 20px) scale(0.9); } 
          }
          @keyframes float-medium { 
            0%, 100% { transform: translate(0, 0) scale(1); } 
            33% { transform: translate(-30px, 50px) scale(1.1); } 
            66% { transform: translate(20px, -20px) scale(0.95); } 
          }
          @keyframes float-fast { 
            0%, 100% { transform: translate(0, 0) scale(0.9); } 
            50% { transform: translate(40px, 20px) scale(1.1); } 
          }
        `}
      </style>

      {/* Blob 1: Vibrant Violet - Top Left */}
      <div 
        className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full opacity-40 blur-[120px] mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(0,0,0,0) 70%)',
          animation: 'float-slow 20s ease-in-out infinite'
        }}
      />

      {/* Blob 2: Bright Cyan - Bottom Right */}
      <div 
        className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full opacity-30 blur-[120px] mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(0,0,0,0) 70%)',
          animation: 'float-medium 25s ease-in-out infinite'
        }}
      />

      {/* Blob 3: Hot Pink - Center/Top offset */}
      <div 
        className="absolute top-[10%] left-[30%] w-[60%] h-[60%] rounded-full opacity-30 blur-[100px] mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(244,63,94,0.6) 0%, rgba(0,0,0,0) 70%)',
          animation: 'float-fast 22s ease-in-out infinite'
        }}
      />

      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
    </div>
  );
};

export default Background;