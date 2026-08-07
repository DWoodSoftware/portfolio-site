import { useState, type ReactNode } from "react";

import { BackgroundAuraTech } from "../components/BackgroundAura/BackgroundAura-tech";
import { BackgroundAuraLava } from "../components/BackgroundAura/BackgroundAura-lava";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

type BackgroundVariant = "lava" | "tech"

interface AppLayoutProps {
    children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
    const [backgroundVariant, setBackgroundVariant] =
        useState<BackgroundVariant>("lava");

    function toggleBackground() {
        setBackgroundVariant((current) =>
            current === "lava"
                ? "tech"
                : "lava",
        );
    }

    return (
        <>
            {backgroundVariant === "lava"
                ? <BackgroundAuraLava />
                : <BackgroundAuraTech />
            }

            <div className="app-shell">
                <Header 
                    backgroundVariant={backgroundVariant}
                    onBackgroundToggle={toggleBackground}
                />
                <main>
                    {children}
                </main>

                <Footer />
            </div>
        </>
    );
}