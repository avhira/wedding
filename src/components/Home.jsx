import img from '../img/Aether.png';
import img2 from '../img/Eulas.png';

export default function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Acara Pernikahan</h2>
              <h3>Diselenggarakan pada 20 November 2024 di Mondstadt, Teyvat.</h3>
              <p>Oleh karena itu, d engan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan kami. </p>
            </div>
          </div>

          <div className="row couple">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-8 text-end">
                  <h3>Aether</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium aut ipsa perferendis, incidunt soluta?</p>
                  <p>
                    Putra dari Bpk. Lorem <br /> dan <br /> Ibu Ipsum
                  </p>
                </div>
                <div className="col-4">
                  <img src={img} alt="Avhira" className="img-responsive rounded-circle" />
                </div>
              </div>
            </div>

            <span className="heart">
              <i className="bi bi-heart-fill"></i>
            </span>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-4">
                  <img src={img2} alt="Ruican" className="img-responsive rounded-circle" />
                </div>
                <div className="col-8">
                  <h3>Eula</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium aut ipsa perferendis, incidunt soluta?</p>
                  <p>
                    Putra dari Bpk. Ipsum <br /> dan <br /> Ibu Lorem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
