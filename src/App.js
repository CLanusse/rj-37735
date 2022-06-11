import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import AppRouter from './routes/AppRouter';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

