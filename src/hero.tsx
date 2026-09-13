import bannerImg from './assets/banner-stack.png';
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1>
            Build Your Ideal
            <br />
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">
              Explore Technologies
            </button>

            <button className="learn-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={bannerImg} alt="Development Stack" />
        </div>

      </div>
    </section>
  );
}

export default Hero;