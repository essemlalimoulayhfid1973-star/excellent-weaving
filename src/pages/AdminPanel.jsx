import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '' });
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '123456') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('كلمة السر غلط');
    }
  };

  const logout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    navigate('/');
  };

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') setIsAuthenticated(true);

    const stored = localStorage.getItem('tisaj_products');
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tisaj_products', JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert('الاسم والسعر مطلوبين');
      return;
    }
    setProducts([...products, { ...newProduct, id: Date.now(), image: newProduct.image || '🧵' }]);
    setNewProduct({ name: '', price: '', description: '', image: '' });
    alert('تمت الإضافة');
  };

  const deleteProduct = (id) => {
    if (window.confirm('تأكيد الحذف؟')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>🔐 لوحة التحكم</h2>
        <form onSubmit={handleLogin}>
          <input type="password" placeholder="كلمة السر" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', margin: '10px' }} />
          <button type="submit">دخول</button>
        </form>
        <p>كلمة السر: 123456</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>🧵 لوحة التحكم</h1>
        <button onClick={logout}>تسجيل خروج</button>
      </div>

      <div style={{ border: '1px solid #ddd', padding: '20px', margin: '20px 0' }}>
        <h3>إضافة منتج</h3>
        <input type="text" placeholder="الاسم" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} style={{ width: '100%', margin: '5px 0', padding: '8px' }} />
        <input type="number" placeholder="السعر" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} style={{ width: '100%', margin: '5px 0', padding: '8px' }} />
        <textarea placeholder="الوصف" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} rows="2" style={{ width: '100%', margin: '5px 0', padding: '8px' }} />
        <button onClick={addProduct}>➕ إضافة</button>
      </div>

      {products.map(p => (
        <div key={p.id} style={{ borderBottom: '1px solid #ddd', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <div>{p.name} - {p.price} د.م.</div>
          <button onClick={() => deleteProduct(p.id)}>🗑️ حذف</button>
        </div>
      ))}
    </div>
  );
                  }
