import Props from './Props';
import States from './States';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainLayout from './components/layouts/MainLayout';

const sessions = [
    { path: '/Practice-Product-tag-ReactJs', tabName: 'Session1', component: Props },
    { path: '/session2', tabName: 'Session2', component: States },
    { path: '/session3', tabName: 'Session3', component: States },
    { path: '/session3', tabName: 'Session3', component: States },
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
