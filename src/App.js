import Props from './pages/Props';
import States from './pages/States';
import LifeCycle from './pages/LifeCycle';
import Formik from './pages/Formik';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';

const sessions = [
    { path: '/', tabName: 'Session1', component: Props },
    { path: '/session2', tabName: 'Session2', component: States },
    { path: '/session3', tabName: 'Session3', component: LifeCycle },
    { path: '/session4', tabName: 'Session4', component: Formik },
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {sessions.map((e, i) => {
                    const Page = e.component;
                    return (
                        <Route
                            key={i}
                            path={e.path}
                            element={
                                <MainLayout>
                                    <Page />
                                </MainLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export { sessions };
export default App;
