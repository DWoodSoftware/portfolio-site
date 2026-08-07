import "./Hero.css"

export function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title" className="hero__title">
                David 
                <span>Wood</span>
            </h1>
            <div className="hero__intro">
                <p>
                    I build production systems, interfaces and infrastructure with a
                    focus on clarity, performance and resilience.
                </p>

                <a className="hero__cta" href="#work">
                    Explore selected work
                </a>
            </div>
        </section>
    );
}