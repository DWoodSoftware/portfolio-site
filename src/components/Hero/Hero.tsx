import "./Hero.css"

export function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title" className="hero__title">
                Fideron 
                <span>Studio</span>
            </h1>
            <div className="hero__intro">
                <p>
                    We engineer production software, enterprise interfaces, and cloud-native infrastructure with a focus on absolute clarity, performance, and operational resilience.
                </p>

                <a className="hero__cta" href="#work">
                    Explore selected work
                </a>
            </div>
        </section>
    );
}