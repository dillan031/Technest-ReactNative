import React from "react";
import { Helmet } from "react-helmet";
class Home extends React.Component{
  componentDidMount() {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('Error al conectar con el backend:', err));
  }
    render(){
        return  (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TECHNEST - Electrónica Inteligente</title>
        <link rel="icon" href="logo.ico" />
        <link rel="stylesheet" href="styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <header>
        <div className="header-container">
          <a href="/" className="logo">
            <a href=""><img src="logo192.png" alt=""/></a>
          </a>
          <nav>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#ofertas">Ofertas</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="Login">Iniciar sesión</a></li>
              <li>
                <a href="Carrito">
                  🛒 <span id="cart-count">(0)</span>
                </a>
              </li>
            </ul>
          </nav>
          <button id="modoOscuro">🌙</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Descubre la nueva era de la tecnología</h1>
          <p>Encuentra los gadgets más innovadores al mejor precio.</p>
          <button className="cta-button">Explorar</button>
        </div>
      </section>

      <section id="productos" className="productos">
        <h2>🛍️ Productos Destacados</h2>
        <div className="productos-container" id="productos-lista">
          <div className="producto" data-nombre="Laptop Gamer" data-precio="1200">
            <img
              src="https://imgmedia.libero.pe/652x365/libero/original/2022/07/22/62db00b21d7a595f2e2bc631.webp"
              alt="Laptop Gamer"
            />
            <h3>Laptop Gamer</h3>
            <span className="precio"> $1,200.00 </span>
            <button className="agregar-carrito">Agregar al carrito</button>
          </div>
        </div>
        <div className="ver-mas-container">
          <a href="Productos" className="ver-mas-btn">
            Ver más
          </a>
        </div>
      </section>

    <section id="contacto" className="contacto">
  <h2>📞 Contacto</h2>
  <form id="contact-form">
    <label htmlFor="nombre">Nombre:</label>
    <input type="text" id="nombre" required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" required />

    <label htmlFor="mensaje">Mensaje:</label>
    <textarea id="mensaje" required></textarea>

    <button type="submit">Enviar</button>
  </form>
</section>

      <section id="ofertas" className="ofertas">
        <h2>🔥 Ofertas Especiales</h2>
        <div className="ofertas-container">
          <div className="producto" data-nombre="Auriculares Inalámbricos" data-precio="50">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBIVFhUVFxUVFRcVFhcVFxUVFRYXFhUWFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFQ4PFysiFhktNC0rKy0tMS0tKys3Ny03NzcrKystKy0tNy0rLDgtKzgtLSsrLSsrKy4tKystNy0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBwECBgj/xABGEAABAwIDAwgGCAUDAgcAAAABAAIDBBESITEFQVEGEyJhcYGRoQcyUmKS0RQWI0JTVLHBFXKC4fBDosJzkxckM2Oyw/H/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHhEBAQABAwUAAAAAAAAAAAAAAAESAxExAhMhQVH/2gAMAwEAAhEDEQA/ALxQhCAQhCAQsErn9r8tKGnuJJ2lwyws6RvwJGQPaUHQoVZ13pajvaCG/W8/sPmo13pDrJM2mOMdTb+ZQW8hU2/lhVnWod3YR+gWv1qqfzMnxf2QXMhUz9aqn8zL8SPrVU/mJfiQXMhU0OVVR+Zk+JZ+tVR+Yl+JBciFTn1qqPzEvxI+tNR+Yl+JBcaFTv1pqPzEvxI+tNR+Yl+L+yC4kKn28qZ/zEvxJzFyqqBpO49uE/qEFroVXt5d1LNS1462j/jZSFF6TIybTREdbT/xPzQWAhQ2y+VNJPYRzNDj91/Rd3XyPddTKAQhCAQhCAQhCAQhCAXMcseW1Ns9v2hxykdGJp6R4Fx+6OtJcvOVX0OPDHYyuGXuD2iOPALz5XVD6iVznOJJJLnOPiSSgmuUnLuurnFpeWRnSKMkNt7x1d3qEj2bKc0tDtilpxZoMz/d6LL/AM517gVH1/K6of6mCJvBjQT8Tr+QCBcUz2uzupVtWxo6T2jtcAuFqKh7zd73O7SSkgAg7w7Wh/GZ8Sx/FYSWhszLkgXvoDqSuFsslBdcVHs6wxVsRNhc4na9xstjRbN/ORfE75qmKd8Y9ZvldYdhJyA8EFz/AELZ35yL4nfNZ+hbN/OR/E75qlwwcAlWsHAILi+g7N/OR/Efmj6Ds787H8R+ap/mxwC1MI9kILi+g7N/Ox/EfmmO2oaKOF74KuN8gF2txa56aqqDCN4CzK1thZovnfJB20m1IGkgTxnrBSsO2ofxmfEB+qr3Lgiw4ILRbXxvGT2nscD+6ZSPzVcFoS0NXIz1HuHebeCCxY5F0mxOWNTS2DX44x/pvzFvdOre7LqVUUvKKVvrBrx4HxGXkpql2/E/I3Yfe08Rkg9G8muVVPWj7M4ZALujd6w6x7Q6wp5eZqOtdG9r43FrmkFpGRB4hXhyK5UirYGyWEoGdsg8cQNx4hB1KEIQCEIQCSqpxGxz3aNBJ7kquW9I20xBRuO95DR170FNcv8Abpkkc5xuXE5fp3Kv5ZHO1OXDcpLbNRiebm5vn1HI28wot5QIuSLilnBJOagTusLay1QbhYJWoKEGbrdpSa3CBdhThpTVpSrXIHF0EpHGsGRAo8pvIVsXpNxQJkoJWpWLoAlF1iyyAg2CUYtA1KNCB9RVz49DceydO7grC5EbdtI17DYtIJB3f2VaNUnsacskBabEefUUHrmiqRIxr26OAPzCXXI+jXagnpcvunThxHj+q65AIQhAKo/TTXnnoYb9GON0pG4lxIHkw+KtxUz6aaQipa/dJT4R2sc+/wD82+KCkzKTm7V3SPadf2WMSRedAsByBUrUhYxLIKDQhL0+zZZM2RuIOh0B7CbAroNj7KaHWeLvaAXkgFsROYYAcnScSbhvAldjRw725derj2uOZQVz9Wqq1+a/3M+aZ1GzZWC7oyB7Q6TR2ubcBXDDT8SUVuzWPHSuHWye3J47Hbx1G4O8IKSK2BXSbc2MC6QNDRLGMZDBZksX4jW/ccPvNGW8LmCgVDlnGkLougXxrONN7ougXxrF7oo6Z0r2sYLucbD+/Uuz5PbPYD9lmB0TIMnSuGTsJ1jjB4Zm2qDmodi1DtIj2OLWHwcQUrJybqmi5jHxs+as6lpw0WGQ4DId9lIxxAaFBSU9I+M2kY5t9MQIv2Hf3JMBXBtjZrJGuGFocc82gscf/cZo7T1snDcVW21tmhl5IwQ0OwSMJuYn7hi+8x253cgiwFuAtUYkCgWzZCMxqLW7Rn+3mkMXBZvbJBefoW2j/wCYdH92WLGBwc0t/Zx8Fcioj0NRE1kNvuwvcewtDf1cFe6AQhCAXJ+kjYBq6W8YvLCTIwb3C3TYO0AHtaF1iEHjPblEY3kgdF2be3Ut7kwjXof0l+jsTB89My+LpSxN1v8AiR9e8t37uBoWu2c+F1naHR249R4HqQNeaJ9XPq3+G9SexYC287m3wnBE0/fmOnc3U9iZ0tK6V7WM1cfDie5dNs5rXPBabsjBZF73tynrJ06gglNk0WEBt7nNz3e085uJ71PNcAExicGBauqEEkKiy0mrDY3OSZRyXSVQceK5tHGwySu4Nbu7SbAdqCAM+OtY4aNjlL/5MLhn3kLldpwWIcNHfr/dTFVUGOMu0kqDjPFkQ9RvVe1/BM5m44MXf3tOfkfNBCoSnNu4HwKOad7J8CgTQlOYd7LvAraKncSBhOZA0O9BO8nKci5b67o5cPwEN8z5hSvJt7o4o336Lsuwj5/NRD64wSxubusbcW6W7xfyXRUDWmoMDbc1UtD4CBYB4bp27/6utBOQVnFSNNVLmYXEdF2rSQe5PIaiyDopekFyW3KcMfzjh9nIOZqB7pPQk7Wu8ip6nq0jtCNrmm4u1wIcOo6oKt2lTOhkdG7VpyPEHQjuSDYyc9BxK6raFKXRkWDpaewuRcvgPqO6yNPFQUjN7iSf804IGbrDRLbOpjLI1o0Op4Def83kIhpnSOwsFzw4DiTuCt30Zejsy2lmaRDkSTkZiNGtG6Mcd/mA7L0RbBMUTqp4sZQGxjhE3O/9R8mhWGtY2BoAAAAFgBkABoAFsgEIQgEIQgFyXKzkHTVt3ACOU6va0EP/AOozR3bkV1qCg861/JMUEjoXYTI8nEWuuBHhNg24uLlwJHutUO2g5vDI0WaS9ltwLXEDyAU7y72ofpr5DmA9wI4t0t4KJqKtwY/mbSxSZuZ95rratGoPEd44oFAUo2Jx0BTXkftWnMmGpkYwD8Q4e4krsOUvK3Z1IwcyIqlx0EUrCB/Mc7eCDnC/AOkDwFhcknQAbytdu4Y4xSOIv0aitIIyzvBTnzJHEqLZylq6iQzMiZG1vqOI6EZOWK59d3C3goTa9TZuBrnOxOL5HuzdK/2nX/RAx2lVmR5cdXHw4DwU2+HmKUWNpDcttqDY3twUbyeocbjI/wBVmZJW89Zz0xcb4G3a0IGP8Tqvxpfjd81n+L1f483/AHH/ADT+7OHki7OHkgj/AOLVf48//cf80pBtWpxDHNMW36QL3EEb7gnNPLs4eSOhw8kC/KilBDJWZtIHhbJabGkdLEYWkiWE89TkagtNy0d5v/V1JTY8we19M/rLFDse+nmBHrMd49R6iMu9BYFXKJo461gs2UYZQPuTtycDwvqO1JsYToFHyGzXmkcLTdKSEn73FoOjusZHyGeSvKttM/m6uLE29ib4HN7WuGfigk2Fw3FLyVYDTiXTu23shzA81ELL7sQLh/SLri+UO1aeZxbQNfNbWRzTHE3rJdZAbOc045bZsGEHiDclvZfCkzyInqKgtpo3GN9ntwi9gdQXnossbjjYBR8c2Bgha7Fnikdpid1e6LeSuf0RVRMUkZOmFw/Q/sgT5H+iyGnAfUhr3a8231AffJzkPbl2qxmNAFgLAZADKwWQsoBCEIBCEIBCEIBIVlWyJjpJXtYxgLnOcQ1rQNSSdEjtjasVLC+ed4axguT+gA3uJyAXm7l9y4n2lJZ146dp+zhByy0fJ7T/ACG7iQd8sWh0zyMwSSDuIOYI7rLkyCF00DufpIng9KMcy/eQWCzCe1mHwKhqiDNBpFXuHrhkg4SNDvPXzSrtqb2QU7DxbECe7GXJqYisCMoFJql8mb3F3C+g7BoFH7UHRHbkpFkS1q6RrgC82a3M9iBGvk5qFkLNXDE49RTGFthZYmqC8ufbK4t2DQLEcgKBUFF1qhBtdF1rdCDWQlpD26tKdbbLX83MPvgA9oTZ7gBmlabDIOZOWeJnbvCBUBP6faUjQAcL2j7sjQ8eeY7itHQWySZiKB1JtIHMU9M08RFc/wC4lJS1j5MnuJG4CwA7GjJJCIpRkSDeljzVj8kOVMOzWiSoDsErhFdguWZFxeW6kCwGWee9cNQwXIAWnLOps6Onaf8A0mkv/wCpJYkdzQ3xKD0/s6vinjbLDI2SN4u1zTcEJyvLPIjlnUbNlxRnFC4/awk9F3vN9l/Xv0N93pXYG2oayBlRTvxMeOwtI9ZrhucDkQgkUIQgEIQgFglZXGelbbRp6IsYbPqDzQtqGWvIfh6P9QQVZ6VOV5rJcEbvsIyRGN0jtHSn9B1dpVeEpxXS4nHgMgm4CCc5IzFkkhN8HNEvHtWcAzwLj5rO06sZFkZIPE2PcDqE2p3mBr2lpdzjQHFueAg303jPO3BbVe0xKxjBlhGeevduQNf4pGPWD2nrCdQTsf6rgU2WjIGXuWjtHRPiEEsyAqM2xK15DGG7Rrb7x+QSlW7FzUWItD3YTicSAMruN+CeVPJ0U7Wvc+Rokbk6Vgax+p+yLXHE3CWm/Xbtlo5csczrH+ahayaXG/Mdo1C6fZWywXAyYSHND2gOa67SSMw03actDY5hQW16cRTPjHqg3HUCLqh3UbLkjY15Iwm2d9L6XS1NswOF3VELe9zv+KbPrjJDGx3+mC3zu3ysO5IBBJv2OPu1MB7XOb/xTGSkIJBc023sNx42SaRlfhB68kCLLZk6a/ILaEOccXDTq7EnC3EQ3iVOU9AXOLWloDWl5LnNaA1uubjYnq1KB/RvEjR7Y1HHrWXRWSM+xxzb5YHukdEznHiMYg0XtieQQWjXMXtvSNRMHMbe7gWg3LjY3GpAQazbQibq7wzWGbRxepG4jibNHmk42NHqtA7AB5rcFB02wKtlwCLOOWRvhJyBzGea4uQuucZJdc4idcV+lfrvdSVHtBjHh2biDo3M9l9Aka2AnFNl0nOc5ozwFxJt1jOyBku69FXKx1DUBr3fYSkNlG5p0bKOsb+I7AuGsl6J9njryQewmm6yuO9Fm2jUUTWvN3wHmnX1LQLxn4SB/SV2KAQhCAVKem2uJq4490UOL+qRxJ8mNV1qgfTKCNoS33xRkdmEj9QUFap5s1nSL/ZGX8xyH7nuTWyfUGUb/wCZv6OQSETbNTd1PG93SaD16HxGaT+k5WWkVRYoN6nZzQLskc3qJxDzz81Gule3e13aCP3T2sqbqPcboB87nOD3ADCLAC/Xf9fJEk7nANcXENGFoLnHC3g0E9EdQWhGRWrUEtXbfklEXONjbzWhiZzbnmwbjlcD0nWaBw6lF7RfjJlcbud+gyCSlzNu9JsCmytoWpytYmJQNVGAEjVMuE5DVq9qIZwMyxg5tOnUprY+2XU+MxsjeZG4XiZnOtNjdrgLizgdD1qEkZa4/wAKUgdY4T3IHEczm3s5wxDCSCW4mnVpwkXB4HJLUzpCAwBlhoTfThkmzhondJJZQKton3zkAHut/cp7/DIgLuu7+Y5eAsE2+kZpSWpyVDafCDZoAHVklaGUYsLtHZHsKYvfcpWk9YKhGRmElp3EjwNlqE62kPtX9vnbNNlBc3oRqyJ5o9z4mv72OA/+xXEqT9CrT9MceFO6/e+L5K7EAhCEAqb9OGzrTwzWykjdGT1xuuB3iQ/CrkXLeknY/wBKoXtaLvYRJH/M3Ud7S4d6DzJYjI6p5s0glzD98ZfzDMDwutK6OxvxyPU4f/nkkGmxuNRog2nBGSb4ypFkzZ7jISDVvtdbfkm8lIRuKBoStmNS7aZKmMMbiebBA1kj0HFJzMLfWBHaLJA7RcH42ZW0yvZLz7RknLRI64GdrADTqQNmNJ70syK2tkqxpJDWjMkNAG8k2A8ViWMtc5rhZzSWuHAtNiPEFFZatsYUxVbEibFQPbIcVUS2UEt+ztK1uJp3ZO372qa2js/ZsNf9BFNI+0sUXO/SnAXkwdItDbZY8xfcdN2sXLuz444SLBkuuspeTlL/ABCtge5zoaWOWRg5wNLyzB0S8fzO04BZ2XRbOq6escynfA+mp3Tsc6qdJjcAcLMLmgZkC+uu7VMfazUluzjJo76W/wA0Td4LTnkQpSg2dLNfmYy/Da9i0WxYsIzIuThdkM8imosRnmCstsggjJKNCYtnLLgHQ5ZXTigrAThfYX0OgCDclYLinstMdRmEj9HKoQUls2EXu7QZnsGZWlNRE6jLeToElV14J5mE9EZvcNHW0A92+/egSlficXHeSfE3RDHicBxNu7f5XWLKS2LSOe4YRcuOFg433qC4/Qns6zZ6gjJxbE3sb0n+bm+CtBQnI3ZgpqSKIbhcni5xuT3lTaAQhCASVTFiY5vEEeISqEHnjltsLBI+RoyJPON697h/mq4aWMtNjpuPH+6vfl7Q4ZS4DJ3S8df3VV7V2aDfCMjq35IOOrqUnpN1GvX2daTi2pM3LGT1OAd+ualpYHN0zH+4fNM5IWP1Gfge9AkdtS+4OsN/umU8znm73EnrTt2zxucVltAN7igjwOCkqSnw5u1PklYoGt0HzSiBNjyxzXN1a5rmnXNpDgc+sLeuq3SvMjwwONycDQwEkklxA1JJ1WSFrzYQSku1IT9Dbg6MGEy9EdPptc8W+96p11upyafZ0tcK11YGN56KYw/RJXAiMsuzEMs8PDeVyHNBHNBbvVby5zSk4dXS7cozXV8z24YalkzISY782ZC3pFjbkZB2nFa7JqaClgrB9JNRJUU7oY2/RnswPN7OxPyGds8tFy3MhBiUyMPNu/JWh2jLCHCJ5aH2DxYEOADhZwINxZ7xbQ37E1jalmxhb2Cjojq2nPrN7x+6YgqeSE1K12oz6skDKmr5I8muy4HMeacv21LuwDsb81qdnjc4obQDeSfJA1mqpJMnOc7q3eAyT2jp8IudTr8lvExrcmjM7hmSntPRFx6Xwjf/ADH9gg0pYMZ93eePUPmrG5F7Hs9rnDpGwaPZB/dQOzKMNIJzO7gFZvIOixStcRk3Pw/ugsWBmFoaNwA8EohCgEIQgEIQg57lnQ85Ditm39Cqe2nBYlX/ADxBzS12hFj3qoOVWyzHI5pHWDxG4oOBqIgVG1FE06jPiMj4hTtXHZR8jUEO+jcPVdfqcP3CSLHjVnwkH9bKVcEm4IIsk+y7wRznU74SpAxhauhG7VAxx9TvhKyHdTvhKX5qT3VnBJ1IEMfuu+Eoxe674Sl8EnUjBJ1KhHEfZd8J+SMfuu+EpbDJxCMMnUoEC/3XfCVjnOp3wlOCyTqQI377KhvzvU74SsYzua491v1T/mQthGEDFsbzo0DtP7BLsoifWcexvR89U5ASrUGtPTNbkBb9+0qQgYBokI2qQpY8wgk9mQ3Kt/kXQ4Ii/wBrIdg/uq+5L7MdLI1rdT5DeVcFNCGNDW6AAIFUIQoBCEIBCEIBQ/KXYbaqO2j2+of2PUphCDz/ALa2e+J7mSNIcNQVBTRr0Pt/YENW3DILOHqvHrN+Y6lUvKXkZUUxLsOOMaPaL5e8NyDiJGJBzU/kjTdzEDSyLJctWMCBJFkphRhQJ2WLJXCs4VQjZFkrhRhUCVkWSuFZwqhKyLJTCshiDRrUuxiGsS8TEG8Uandi7PfK9rI2lznHID/MgpDkzyKqKmzsPNx73uGo90b1bewNgQ0jMMQ6R9Z59Z3yHUg05M7CbSx2yL3es7/iOpTKEKAQhCAQhCAQhCAQhCAWC1ZQg5vbHImjqLkx4HH7zOj5aLjtpeid2ZgmB4B4sfEXVqoQUXVejOub6rA7scE0d6P68f6DvL5q/wBCDz99QK/8Byz9QK/8B3kr/QgoAej+v/Ad5I+oFf8AgO8lf6EFAfUCv/Ad5I+oFf8AgOV/oQUB/wCH9f8AgOR9QK/8Byv9CCgB6P6/8A+SeU3o0rnasa3tcPmrzQgqvZ3omORnnA4hgJ8zZdlsbkVR0+bY8Tvaf0vLRdEgIANWUIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQf/9k=" 
              alt="Auriculares Inalámbricos"
            />
            <h3>Auriculares Inalámbricos</h3>
            <span className="precio"> $50.00 </span>
            <button className="agregar-carrito">Agregar al carrito</button>
          </div>
        </div>
      </section>
      <footer>
      <div className="footer-content">
        <p>© 2025 TECHNEST. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#">Términos y condiciones</a> | <a href="#">Política de privacidad</a>
        </div>
      </div>
    </footer>

    <script src="script.js"></script>
    </>
  );
}
  }


export default Home;