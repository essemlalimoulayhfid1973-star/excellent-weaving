import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';
import Cart from './components/Cart';
import './styles/global.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loading">جاري التحميل...</div>;

  // ✅ هذا السطر يمرر products إلى AdminPanel
  if (view === 'admin' && user) {
    return <AdminPanel setView={setView} products={products} />;
  }

  if (view === 'cart') {
    return <Cart cart={cart} setCart={setCart} setView={setView} />;
  }

  // ✅ هذا السطر يمرر products إلى HomePage
  return (
    <HomePage
      user={user}
      products={products}
      cart={cart}
      setCart={setCart}
      setView={setView}
    />
  );
}

export default App;
