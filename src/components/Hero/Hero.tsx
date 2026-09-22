import "./Hero.css"

export function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title" className="hero__title">
                David Wood 
                <span>DWoodSoftware</span>
            </h1>
            <div className="hero__intro">
                <p>
                    Software engineer, systems builder and compulsive problem solver.
                    I build developer tools, distributed systems, automation and whatever else
                    the problem requires.
                </p>

                <a className="hero__cta" href="#work">
                    Explore selected work
                </a>
            </div>
        </section>
    );
}