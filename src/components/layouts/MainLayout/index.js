import Header from '~/components/Header';
import './MainLayout.module.scss';
function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default MainLayout;
