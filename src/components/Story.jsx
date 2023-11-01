import img from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';

export default function Story() {
  const timeLinePhotos = [
    { id: 1, background: img, meet: 'Pertama Bertemu', date: '1 Juni 2000', story: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, similique non soluta nulla asperiores voluptatem.' },
    { id: 2, background: img2, meet: 'Mulai Serius', date: '1 Januari 2005', story: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, similique non soluta nulla asperiores voluptatem.' },
    { id: 3, background: img3, meet: 'Tunangan', date: '7 November 2009', story: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, similique non soluta nulla asperiores voluptatem.' },
  ];

  return (
    <>
      <section id="story" className="story">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center">
              <span>Bagaimana Cinta Kami Bersemi</span>
              <h2>Cerita Kami</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, similique non soluta nulla asperiores voluptatem.</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <ul className="timeline">
                {timeLinePhotos.map((data, i) => (
                  <li key={i} className={`${data.id % 2 === 0 ? 'timeline-inverted' : ''}`}>
                    <div className="timeline-image" style={{ backgroundImage: `url(${data.background})` }}></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3>{data.meet}</h3>
                        <span>{data.date}</span>
                      </div>
                      <div className="timeline-body">
                        <p>{data.story}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
