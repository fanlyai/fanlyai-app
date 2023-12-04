
import { useRouter } from 'next/router';
import Modal from '../components/Modal';
import Sidebar from '../components/Sidebar';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import '../styles/globals.css'
import type { AppProps } from 'next/app';
import EditModal from '../components/modals/EditModal';
import { Toaster } from 'react-hot-toast';


const App = ({ Component, pageProps }: AppProps) => {
  const userInfo = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  const router = useRouter();
  const isIndexPage = router.pathname === '/';


  return (
    <div className="flex">
      <Toaster></Toaster>
      <EditModal></EditModal>
      {isIndexPage && <> <LoginModal ></LoginModal>
      <RegisterModal></RegisterModal></>}
     
   
      {!isIndexPage && <Sidebar userInfo={userInfo} />}
      <Component {...pageProps} />
    </div>
  );
};

export default App;
