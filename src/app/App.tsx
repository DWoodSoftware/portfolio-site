import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./AppLayout";
import { HomePage } from "../pages/HomePage";
import { ProjectsPage } from "../pages/ProjectsPage";

export function App() {
    return (
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
            </Routes>
        </AppLayout>
    );
}