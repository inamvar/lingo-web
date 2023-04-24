import Footer from './footer';
import Header from './header';
import Meta from "./meta";
const Layout = ({ children }) => {
    return (
        <>
            <Meta title='صفحه اصلی'/>
            <div className='App min-h-screen bg-page flex flex-col justify-between'>
                <Header/>
                <div className='h-main flex flex-col justify-between'>
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout