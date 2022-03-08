//Next imports
import Head from 'next/head'
import AppFooter from './AppFooter'

import AuthFooter from "./AuthFooter"
import Nav from "./Nav"
import Notification from './notification'
const Layout=({children})=>{
    return(
        <div>
        <Head>
        <title>Anybuy</title>
        <meta name="description" content="Generated by create next app" />
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap');
        </style>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Nav />
        <main className="bg-body-bg min-h-[90vh] relative h-fit lg:min-h-[80vh] md:px-12 lg:px-40 px-4 py-4 z-10 lg:pb-32">
            <Notification />
            {children}
        </main>

        <AppFooter />
        <AuthFooter />
        </div>
    )
}

export default Layout