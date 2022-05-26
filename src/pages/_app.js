import '../../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import AdminLayout from '../layouts/AdminLayout';

function MyApp({ Component, pageProps }) {
  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  );
}

export default MyApp;
