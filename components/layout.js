import Footer from './footer';
import Header from './header';
import Meta from "./meta";
import Loading from './loading';

const Layout = ({ children,siteSetting}) => {



    return (
        <>
            <Loading/>
            <Meta title='صفحه اصلی'/>
            <div className='App min-h-screen bg-page flex flex-col justify-between relative w-full'>
                <Header/>
                <div className='flex flex-col justify-between'>
                    <main className={'h-main'}>
                        {children}
                    </main>
                    <Footer siteSetting={siteSetting}/>
                </div>
            </div>
        </>
    )
}
export default Layout;