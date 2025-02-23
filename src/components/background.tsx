"use client"
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const RainPattern: React.FC = () => {
  const rainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = rainContainerRef.current;
    if (!container) return;
    const drops: HTMLDivElement[] = [];
    const numDrops = 100;

    for (let i = 0; i < numDrops; i++) {
      const drop = document.createElement('div');
      drop.className = 'rain-drop';
      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;
      drop.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(drop);
      drops.push(drop);
    }

    return () => {
      drops.forEach((drop) => container.removeChild(drop));
    };
  }, []);

  return (
    <StyledWrapper>
      <div className="sky" />
      <div className="rain-container" ref={rainContainerRef} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  .sky {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #A0D6B4, #FFFFFF);
    filter: blur(2px);
  }

  .rain-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .rain-drop {
    position: absolute;
    top: -10px;
    width: 2px;
    height: 20px;
    background: rgba(255, 255, 255, 0.8);
    animation: fall linear infinite, splash 0.3s ease-out;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh);
    }
  }

  @keyframes splash {
    0% {
      opacity: 1;
      transform: scaleX(1);
    }
    100% {
      opacity: 0;
      transform: scaleX(2);
    }
  }
`;

export default RainPattern;
