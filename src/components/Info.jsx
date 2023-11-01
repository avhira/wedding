export default function Info() {
  const infoAcara = [
    { id: 1, header: 'Akad Nikah', time: '08.00 - 10.00', date: 'Minggu, 20 November 2024', info: 'Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan dan kekhusyuan seluruh prosesi.' },
    { id: 2, header: 'Resepsi', time: '11.00 - selesai', date: 'Minggu, 20 November 2024', info: 'Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan dan kekhusyuan seluruh prosesi.' },
  ];
  return (
    <>
      <section id="info" className="info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center">
              <h2>Informasi Acara</h2>
              <p className="alamat">
                Alamat: Gedung Kologdam, Kodiklat TNI AD. <br /> Jl. Ksatria, Merdeka, Kec. Teyvat, Kota Mondstadt
              </p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.359732941108!2d107.616864!3d-6.9097349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e635c9284fc1%3A0x268bddf9bd0971c0!2sKologdam!5e0!3m2!1sen!2ssg!4v1693486483694!5m2!1sen!2ssg"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <a href="https://goo.gl/maps/R9seweCadg9MNyox5" target="_blank" className="btn btn-light btn-sm my-3" rel="noreferrer">
                Klik untuk membuka peta
              </a>
              <p className="description">Diharapkan untuk tidak salah alamat dan tanggal. Manakala tiba di tujuan namun tidak ada tanda-tanda sedang dilangsungkan pernikahan, boleh jadi Anda salah jadwal, atau salah tempat.</p>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            {infoAcara.map((data, i) => (
              <div key={i} className="col-md-5 col-10">
                <div className="card text-center text-bg-light mb-5">
                  <div className="card-header">{data.header}</div>
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <i className="bi bi-clock d-block"></i>
                        <span>{data.time}</span>
                      </div>
                      <div className="col-md-6">
                        <i className="bi bi-calendar3 d-block"></i>
                        <span>{data.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">{data.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
