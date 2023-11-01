/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState, useRef } from 'react';
import musik from '../audio/wedding-audio.mp3';
import './style.css';

export default function Audios({ isAudioPlaying }) {
  const [audioPlaying, setAudioPlaying] = useState(isAudioPlaying);
  const audioElement = useRef(new Audio(musik));
  const lastPlayedTime = useRef(0);

  useEffect(() => {
    setAudioPlaying(isAudioPlaying);
  }, [isAudioPlaying]);

  useEffect(() => {
    audioElement.current.loop = true;

    if (audioPlaying) {
      audioElement.current.currentTime = lastPlayedTime.current;
      audioElement.current.play();
    } else {
      lastPlayedTime.current = audioElement.current.currentTime;
      audioElement.current.pause();
    }

    return () => {
      audioElement.current.pause();
    };
  }, [audioPlaying]);

  const toggleAudio = () => {
    setAudioPlaying(!audioPlaying);
  };

  return (
    <div>
      <button onClick={toggleAudio} className="audio-icon-wrapper" style={{ display: isAudioPlaying ? 'block' : 'none' }}>
        <i className={`bi ${audioPlaying ? 'bi-pause-circle' : 'bi-disc'}`}></i>
      </button>
    </div>
  );
}
