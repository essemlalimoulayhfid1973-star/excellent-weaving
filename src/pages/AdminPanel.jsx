import React, { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // التحقق من كلمة السر
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '123456') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('كلمة السر غير صحيحة');
    }
  };

  // تحميل المنتجات
  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') setIsAuthenticated(true);
    
    const stored = localStorage.getItem('tisaj_products');
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  // حفظ المنتجات
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('tisaj_products', JSON.stringify(products));
    }
  }, [products]);

  // إضافة منتج
  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert('الاسم والسعر مطلوبين');
      return;
    }
    setProducts([...products, { ...newProduct, id: Date.now(), image: newProduct.image || '🧵' }]);
    setNewProduct({ name: '', price: '', description: '', image: '' });
    alert('تمت الإضافة');
  };

  // حذف منتج
  const deleteProduct = (id) => {
    if (confirm('تأكيد الحذف؟')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // تسجيل الخروج
  const logout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
  };

  // واجهة تسجيل الدخول
  if (!isAuthenticated) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>🔐 لوحة التحكم</h2>
        <form onSubmit={handleLogin}>
          <input type="password" placeholder="كلمة السر" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', margin: '10px' }} />
          <button type="submit" style={{ padding: '10px 20px', background: '#8B0000', color: 'white', border: 'none', borderRadius: '8px' }}>دخول</button>
        </form>
        <p style={{ marginTop: '20px', fontSize: '12px' }}>كلمة السر: 123456</p>
      </div>
    );
  }

  // لوحة التحكم الرئيسية
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>🧵 لوحة التحكم</h1>
        <button onClick={logout} style={{ background: '#333', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px' }}>تسجيل خروج</button>
      </div>
      
      <div style={{ border: '1px solid #ddd', padding: '20px', margin: '20px 0', borderRadius: '12px' }}>
        <h3>إضافة منتج جديد</h3>
        <input type="text" placeholder="الاسم" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} style={{ width: '100%', padding: '8px', margin: '5px 0' }} />
        <input type="number" placeholder="السعر" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} style={{ width: '100%', padding: '8px', margin: '5px 0' }} />
        <input type="text" placeholder="الصورة (رمز)" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} style={{ width: '100%', padding: '8px', margin: '5px 0' }} />
        <textarea placeholder="الوصف" value={newProduct.description} onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} style={{ width: '100%', padding: '8px', margin: '5px 0' }} rows="2" />
        <button onClick={addProduct} style={{ background: 'green', color: 'white', padding: '8px 20px', border: 'none', borderRadius: '8px' }}>➕ إضافة</button>
      </div>
      
      <h3>المنتجات الحالية</h3>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #eee', padding: '10px', margin: '10px 0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '24px' }}>{p.image || '🧵'}</span>
            <strong style={{ margin: '0 10px' }}>{p.name}</strong>
            <span style={{ color: '#D2691E' }}>{p.price} د.م.</span>
          </div>
          <button onClick={() => deleteProduct(p.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '4px 12px', borderRadius: '6px' }}>حذف</button>
        </div>
      ))}
    </div>
  );
    }
