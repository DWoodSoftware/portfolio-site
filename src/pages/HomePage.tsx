import { Hero } from "../components/Hero/Hero";
import { SelectedWork } from "../components/SelectedWork/SelectedWork";
import { Capabilities } from "../components/Capabilities/Capabilities";

export function HomePage() {
    return (
        <>
            <Hero />
            <Capabilities />
            <SelectedWork />
        </>
    )
}