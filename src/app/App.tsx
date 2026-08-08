import { Route, Routes } from "react-router-dom";

import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { AppLayout } from "./AppLayout";
import { HomePage } from "../pages/HomePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ContactPage } from "../pages/ContactPage";

export function App() {
    return (
        <>
            <ScrollToTop />
            
            <AppLayout>
                <Routes>
                    <Route 
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/projects"
                        element={<ProjectsPage />}
                    />

                    <Route
                        path="/contact"
                        element={<ContactPage />}                
                    />
                </Routes>
            </AppLayout>
        </>
    );
}