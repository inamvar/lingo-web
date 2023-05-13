import Footer from './footer';
import Header from './header';
import Meta from "./meta";
const Layout = ({ children,siteSetting}) => {
    return (
        <>
            <Meta title='صفحه اصلی'/>
            <div className='App min-h-screen bg-page flex flex-col justify-between'>
                <Header/>
                <div className='flex flex-col justify-between'>
                    <main className={'h-main'}>
                        {children}
                    </main>
                    <Footer  siteSetting={siteSetting}/>
                </div>
            </div>
        </>
    )
}
export default Layout;