import { useState } from 'react';
import Timer from '../timer';
import ContentLoad from '../ContentLoad';
import Audios from '../audioCustom';

export default function Hero() {
  const [showContent, setShowContent] = useState(false);

  const handleContent = () => {
    setShowContent(true);
  };

  return (
    <>
      <section id="hero" className="hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white">
        <main>
          <h4>
            Kepada <span>Bapak/Ibu/Saudara/i,</span>
          </h4>
          <h1>Aether & Eula</h1>
          <p>Akan melangsungkan resepsi pernikahan dalam:</p>
          <Timer />
          <br />
          <a href="#home" className="btn btn-lg mt-4" onClick={handleContent}>
            Lihat Undangan
          </a>
        </main>
      </section>
      <Audios isAudioPlaying={showContent} />
      {showContent && <ContentLoad />}
    </>
  );
}
