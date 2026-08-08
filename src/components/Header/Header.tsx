import "./Header.css";
import { Link } from "react-router-dom";

interface HeaderProps {
    backgroundVariant: "lava" | "tech";
    onBackgroundToggle: () => void;
}

export function Header({
    backgroundVariant,
    onBackgroundToggle,
}: HeaderProps) {
    return (
        <header className="site-header">
            <a className="site-header__brand" href="/" aria-label="David Wood home">DW</a>

            <nav className="site-header__nav" aria-label="Primary navigation">
                <Link to="/projects">Project</Link>
                <Link to="/#contact">Contact</Link>

                <button
                    className="site-header__background-toggle"
                    type="button"
                    onClick={onBackgroundToggle}
                    aria-label={`Switch to ${
                        backgroundVariant === "lava"
                            ? "technical"
                            : "lava"
                    } background`}
                    title="Switch background style"
                >
                    {backgroundVariant === "lava"
                        ? "Tech"
                        : "Lava"
                    }
                </button>
            </nav>
        </header>
    );
}