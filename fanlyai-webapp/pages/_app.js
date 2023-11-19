import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const userInfo = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  return(
    <div className="flex">
        <Sidebar userInfo={userInfo} />
     <Component {...pageProps} />
    </div>

  )
}
