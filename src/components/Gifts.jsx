import img from '../img/saweria.png';

export default function Gifts() {
  return (
    <>
      <section id="gifts" className="gifts">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center">
              <span>ungkapan tanda kasih</span>
              <h2>Kirim Hadiah</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure perferendis provident ab aliquam nemo.</p>
            </div>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="fw-bold">BCA</div>
                  123456789 - AVHIRA
                </li>
                <li className="list-group-item">
                  <div className="fw-bold">MANDIRI</div>
                  987654321 - RUICAN
                </li>
                <li className="list-group-item">
                  <div className="fw-bold">SAWERIA</div>
                  <img src={img} alt="Saweria QR" className="img-thumbnail" width="150" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
