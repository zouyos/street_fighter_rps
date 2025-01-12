// Char.tsx
import React from 'react';
import style from './style.module.css';

type CharProps = {
  isPlayer: boolean;
  playerHP?: number;
  playerFrames: string[][];
  playerFrameIndex: number;
  opponentHP?: number;
  opponentFrames: string[][];
  opponentFrameIndex: number;
  generatePlayerSrc: (frames: string[][], index: number) => string;
  generateOpponentSrc: (frames: string[][], index: number) => string;
};

export default function Char({
  isPlayer,
  playerHP,
  playerFrames,
  playerFrameIndex,
  opponentHP,
  opponentFrames,
  opponentFrameIndex,
  generatePlayerSrc,
  generateOpponentSrc,
}: CharProps) {
  const frames = isPlayer ? playerFrames : opponentFrames;
  const frameIndex = isPlayer ? playerFrameIndex : opponentFrameIndex;
  const hp = isPlayer ? playerHP : opponentHP;
  const generateSrc = isPlayer ? generatePlayerSrc : generateOpponentSrc;

  return (
    <div
      className={
        hp && hp > 0
          ? isPlayer
            ? style.player
            : style.opponent
          : isPlayer
          ? style.defeatedPlayer
          : style.defeatedOpponent
      }
    >
      <img
        src={generateSrc(frames, frameIndex)}
        alt={isPlayer ? 'Player Animation' : 'Opponent Animation'}
      />
    </div>
  );
}
