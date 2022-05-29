

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="text-center py-4">
          <a href="https://instagram.com/megablack_sp" className="btn text-white fs-4" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>

          <a href="https://www.youtube.com/c/MegaBlack_SP" className="btn text-white fs-4" target="_blank" rel="noreferrer">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
        <p className="text-uppercase text-center text-white" style={{ fontSize: '12px' }}>Todos os direitos reservados © 2022 - Mega Black</p>
      </div>
    </footer>
  )
}