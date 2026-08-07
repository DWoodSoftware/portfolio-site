import "./Footer.css"

export function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="site-footer">
            <div className="site-footer__heading">
                <p>Have something interesting?</p>

                <a href="mailto:davidwoodcontact@gmail.com">
                    Let's talk.
                </a>
            </div>

            <div className="site-footer__meta">
                <p>© {currentYear} David Wood</p>

                <nav aria-label="External links">
                    <a 
                        href="https://github.com/DWoodSoftware"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>

                    <a
                        href="https://www.linkedin.com/in/david-wood-software/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </nav>
            </div>
        </footer>
    )
}