import '../../styles/footer.css'

export function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="info">
          <span className="address">
            {' '}
            <img src="./location.svg" alt="Location" />
            Rua Helena Sapori Faluba, 553 - Veneza, Ribeirão das Neves - MG,
            33820170
          </span>
          <span className="e-mail">
            {' '}
            <img src="./mail.svg" alt="Mail" />
            nove.veneza@gmail.com
          </span>
          <span className="phone">
            {' '}
            <img src="./phone.svg" alt="Phone" />
            (31)8681-3230
          </span>
        </div>
        <img src="./logo.png" alt="Núcleo Odontológico Veneza" id="logo" />
      </div>
    </footer>
  )
}
