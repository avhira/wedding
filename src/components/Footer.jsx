export default function Footer() {
  const socialMedia = [
    { id: 1, link: '#', icon: 'bi bi-instagram' },
    { id: 2, link: '#', icon: 'bi bi-youtube' },
    { id: 3, link: '#', icon: 'bi bi-twitter' },
    { id: 4, link: '#', icon: 'bi bi-facebook' },
    { id: 5, link: '#', icon: 'bi bi-tiktok' },
  ];
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <small className="block">&copy; Wedding. All Rights Reserved. 2023</small>
              <ul className="mt-3">
                {socialMedia.map((data, i) => (
                  <li key={i}>
                    <a href={data.link}>
                      <i className={data.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
