import LightboxImage from '../lightboxImage';

export default function Gallery() {
  const allImage = [
    { id: 1, image: 'https://picsum.photos/id/307/300/400', bigImg: 'https://picsum.photos/id/307/1200/761', alt: 'avhira & Ruican 1' },
    { id: 2, image: 'https://picsum.photos/id/301/300/400', bigImg: 'https://picsum.photos/id/301/1200/768', alt: 'avhira & Ruican 2' },
    { id: 3, image: 'https://picsum.photos/id/302/300/400', bigImg: 'https://picsum.photos/id/302/1200/769', alt: 'avhira & Ruican 3' },
    { id: 4, image: 'https://picsum.photos/id/306/300/400', bigImg: 'https://picsum.photos/id/306/1200/767', alt: 'avhira & Ruican 4' },
    { id: 5, image: 'https://picsum.photos/id/304/300/400', bigImg: 'https://picsum.photos/id/304/1200/766', alt: 'avhira & Ruican 5' },
    { id: 6, image: 'https://picsum.photos/id/305/300/400', bigImg: 'https://picsum.photos/id/305/1200/765', alt: 'avhira & Ruican 6' },
  ];

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center">
              <span>Memori Kisah Kami</span>
              <h2>Galeri Foto</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, itaque?</p>
            </div>
          </div>

          <LightboxImage images={allImage} />
        </div>
      </section>
    </>
  );
}
