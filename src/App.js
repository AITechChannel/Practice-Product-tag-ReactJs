import Props from './Props';
import States from './States';
import LifeCycle from './LifeCycle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainLayout from './components/layouts/MainLayout';

const sessions = [
    { path: '/Practice-ReactJS/session1', tabName: 'Session1', component: Props },
    { path: '/Practice-ReactJS/', tabName: 'Session2', component: States },
    { path: '/Practice-ReactJS/session3', tabName: 'Session3', component: LifeCycle },
    { path: '/Practice-ReactJS/session4', tabName: 'Session4', component: States },
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
