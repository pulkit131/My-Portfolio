import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <aside>
          <h1>Hi, I'm Pulkit</h1>
          <h3>Web Developer</h3>
          <p>Hi, I'm Pulkit, a passionate individual with a deep love for coding and a keen interest in design. I find joy
            in crafting elegant and functional solutions through programming. I believe in the power of technology to
            bring
            ideas to life, and I'm enthusiastic about creating innovative projects that not only perform well but also
            leave
            a lasting impact.</p>
          <div className="btn-box">
            <a href="">Hire Me</a>
            <a href="#">Let's Talk</a>
          </div>
        </aside>
      </div>

      <div className="home-sci">
        <a href="#"><i className='bx bxs-envelope'></i></a>
        <a href="#"><i className='bx bxl-github'></i></a>
        <a href="#"><i className='bx bxl-linkedin'></i></a>
      </div>

      <div className="wrapper">
        <div className="container">
          <input type="radio" name="slide" id="c1" />
          <label htmlFor="c1" className="card">
            <div className="row">
              <div className="icon">1</div>
              <div className="description">
                <h4>Project 1</h4>
                <p>YOUTUBE CLONE</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            <div className="row">
              <div className="icon">2</div>
              <div className="description">
                <h4>Project 2</h4>
                <p>TO-DO-LIST</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            <div className="row">
              <div className="icon">3</div>
              <div className="description">
                <h4>Project 3</h4>
                <p>Game (Rock - Paper - Scissors)</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
            <div className="row">
              <div className="icon">4</div>
              <div className="description">
                <h4>Project 4</h4>
                <p>TradingHarbor</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Home;
