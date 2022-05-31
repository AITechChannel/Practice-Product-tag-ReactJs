import Props from './props';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainLayout from './components/layouts/MainLayout';

const sessions = [
    { path: '/Practice-Product-tag-ReactJs', component: Props },
    // { path: '/session2', component: Practice6 },
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

export default App;
