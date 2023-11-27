import "../css/Nosotros.css";
export const Nosotros = () => {
  return (
    <div className='nosotros'>
      <div className='bloque-nosotros'>

        <img src="src/assets/img/logo.png" width={100} alt="logo" />
        <h2>Mis Raices</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus esse, ex quo quisquam exercitationem harum autem maiores dolore? Eum asperiores eos cum porro ea quae, odit et odio quidem sunt!</p>
      </div>

      <hr />
      <div className='fundadores'>

        <h2>Fundadores</h2>
        <aside>
          <article>
            <img src="src/assets/img/logo.png" width={100} alt="Default" />
            <div>
              <h3>Depompa Sofia</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque reiciendis dolorum corporis ad, recusandae sunt hic ullam. Reiciendis, delectus illo?</p>
            </div>
          </article>

          <article>
            <img src="src/assets/img/logo.png" width={100} alt="Default" />
            <div>
              <h3>Vega Axel</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque reiciendis dolorum corporis ad, recusandae sunt hic ullam. Reiciendis, delectus illo?</p>
            </div>
          </article>
        </aside>
      </div>
    </div>
  )
}
