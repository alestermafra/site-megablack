import Head from 'next/head'
import Image from 'next/image'
import megaBlackLogo from '../public/images/mega-black-logo-branco-fundo-transparente.png'
import UpcomingEvents from '../components/upcoming-events'
import Footer from '../components/footer'
import events from '../data/events.json'

export default function Home() {
  return (
    <div style={{backgroundColor: '#000', color: "#fff"}}>
      <Head>
        <title>Mega Black</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="vh-100">
        <div className="position-absolute w-100 py-3 text-center bg-black bg-opacity-50">
          <Image src={megaBlackLogo} alt="Logo Mega Black" />
        </div>

        <div className="container h-100 d-flex align-items-center justify-content-between">
          <div className="font-family-bebas-neue" style={{fontSize: '4rem'}}>DJ Leo</div>
          <div className="font-family-bebas-neue" style={{fontSize: '4rem'}}>DJ Dim</div>
        </div>
      </header>

      <div className="container">
        <UpcomingEvents events={events || []} />
      </div>

      <Footer />
    </div>
  )
}