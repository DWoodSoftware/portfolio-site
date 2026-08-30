import "./Capabilities.css"

const capabilities = [
  {
    index: "01",
    title: "Engineering",
    body:
      "I build production software across frontend, backend and cloud systems, with an emphasis on reliability and maintainability.",
  },
  {
    index: "02",
    title: "Architecture",
    body:
      "I like turning messy requirements into clear systems with deliberate boundaries, understandable data flow and room to evolve.",
  },
  {
    index: "03",
    title: "Delivery",
    body:
      "I care about getting useful software into people's hands — tested, deployable and observable rather than permanently stuck in prototype mode.",
  },
] as const;

export function Capabilities() {
    return(
        <section
            className="capabilities"
            aria-labelledby="capabilities-title"
        >
            <div className="capabilities__intro">

                <h2
                    id="capabilities-title"
                    className="capabilities__title"
                >
                    We specialize in rescuing complex systems, engineering clear architectures, and actually shipping the product.
                </h2>
            </div>

            <div className="capabilities__list">
                {capabilities.map((capability) => (
                    <article
                        key={capability.index}
                        className="capabilities__item"
                    >
                        <span className="capabilities__index">
                            {capability.index}
                        </span>

                        <h3>{capability.title}</h3>

                        <p>{capability.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}