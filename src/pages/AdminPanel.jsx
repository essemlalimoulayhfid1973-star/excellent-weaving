import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '' });
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => { e.preventDefault(); if (password === '123456') { setIsAuthenticated(true); localStorage.setItem('adminAuth', 'true'); } else { alert('كلمة السر خطأ'); } };
  const logout = () => { localStorage.removeItem('adminAuth'); setIsAuthenticated(false); navigate('/'); };

  useEffect(() => { const auth = localStorage.getItem('adminAuth'); if (auth === 'true') setIsAuthenticated(true); const stored = localStorage.getItem('tisaj_products'); if (stored) setProducts(JSON.parse(stored)); else setProducts(JSON.parse(localStorage.getItem('tisaj_products') || '[]')); }, []);

  useEffect(() => { if (products.length > 0) localStorage.setItem('tisaj_products', JSON.stringify(products)); }, [products]);

  const handleImageUpload = (e) => { const file = e.target.files[0]; if (file) { const reader = new FileReader(); reader.onloadend = () => setNewProduct({ ...newProduct, image: reader.result }); reader.readAsDataURL(file); } };
  const addProduct = () => { if (!newProduct.name || !newProduct.price) { alert('الاسم والسعر مطلوبين'); return; } setProducts([...products, { ...newProduct, id: Date.now(), image: newProduct.image || '🧵' }]); setNewProduct({ name: '', price: '', description: '', image: '' }); alert('✅ تمت الإضافة'); };
  const deleteProduct = (id) => { if (window.confirm('تأكيد الحذف؟')) { setProducts(products.filter(p => p.id !== id)); alert('🗑️ تم الحذف'); } };

  if (!isAuthenticated) return (<div style={{ padding: '50px', textAlign: 'center' }}><h2>🔐 لوحة التحكم</h2><form onSubmit={handleLogin}><input type="password" placeholder="كلمة السر" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', margin: '10px' }} /><button type="submit">دخول</button></form><p>كلمة السر: 123456</p></div>);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}><h1>🧵 لوحة التحكم</h1><button onClick={logout} style={{ background: '#8B0000', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>تسجيل خروج</button></div>
      <div style={{ border: '1px solid #ddd', padding: '20px', margin: '20px 0', borderRadius: '12px' }}><h3>إضافة منتج</h3><input type="text" placeholder="الاسم" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} style={{ width: '100%', padding: '8px', margin: '5px 0' }} /><input type="number" placeholder="السعر" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} style={{ width: '100%', padding: '8px', margin: '5px 0' }} /><textarea placeholder="الوصف" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} rows="2" style={{ width: '100%', padding: '8px', margin: '5px 0' }} /><input type="file" accept="image/*" onChange={handleImageUpload} style={{ margin: '10px 0' }} /><button onClick={addProduct} style={{ background: '#28A745', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>💾 حفظ</button></div>
      <h3>المنتجات ({products.length})</h3>
      {products.map(p => (<div key={p.id} style={{ borderBottom: '1px solid #ddd', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div>{p.name} - {p.price} د.م.</div><button onClick={() => deleteProduct(p.id)} style={{ background: '#DC3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>🗑️ حذف</button></div>))}
    </div>
  );
                  }
