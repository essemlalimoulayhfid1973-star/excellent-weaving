import React, { useState, useEffect } from 'react';
import { db, storage } from './firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: null });
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');

  // --- جلب المنتجات من Firebase ---
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    };
    fetchProducts();
  }, []);

  // --- رفع صورة إلى Firebase Storage ---
  const uploadImage = async (file) => {
    const storageRef = ref(storage, `products/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  // --- إضافة منتج جديد ---
  const addProduct = async () => {
    if (!newProduct.name || !newProduct.price) return alert('الاسم والسعر مطلوبان');
    let imageUrl = '';
    if (newProduct.image) {
      imageUrl = await uploadImage(newProduct.image);
    }
    await addDoc(collection(db, 'products'), {
      name: newProduct.name,
      price: Number(newProduct.price),
      imageUrl,
      createdAt: new Date()
    });
    alert('✅ تمت إضافة المنتج');
    window.location.reload();
  };

  // --- حذف منتج ---
  const deleteProduct = async (id) => {
    if (window.confirm('تأكيد الحذف؟')) {
      await deleteDoc(doc(db, 'products', id));
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // --- واجهة بسيطة للمستخدم ---
  return (
    <div style={{ fontFamily: 'Cairo, sans-serif', backgroundColor: '#FFF8E7', minHeight: '100vh' }}>
      {/* الهيدر */}
      <header style={{ backgroundColor: '#1B263B', color: 'white', padding: '15px', textAlign: 'center' }}>
        <h1>🧵 تعاونية النسيج الممتاز - أمزميز</h1>
        <button onClick={() => setIsAdmin(!isAdmin)} style={{ marginTop: '10px', background: '#D4AF37', border: 'none', padding: '5px 15px', borderRadius: '20px' }}>
          {isAdmin ? 'إغلاق لوحة التحكم' : '🔐 إدارة'}
        </button>
      </header>

      {/* لوحة التحكم (تظهر فقط عند الضغط على إدارة) */}
      {isAdmin && (
        <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#F5E6D3', borderRadius: '16px', marginTop: '20px' }}>
          <h2>إضافة منتج جديد</h2>
          <input type="text" placeholder="اسم المنتج" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} style={{ width: '100%', padding: '8px', margin: '10px 0' }} />
          <input type="number" placeholder="السعر" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} style={{ width: '100%', padding: '8px', margin: '10px 0' }} />
          <input type="file" onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })} style={{ margin: '10px 0' }} />
          <button onClick={addProduct} style={{ background: '#8B0000', color: 'white', padding: '10px', borderRadius: '8px', width: '100%' }}>➕ إضافة المنتج</button>
        </div>
      )}

      {/* عرض المنتجات */}
      <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', color: '#8B0000' }}>🛍️ منتجاتنا</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {products.map(p => (
            <div key={p.id} style={{ background: 'white', borderRadius: '12px', padding: '15px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              {p.imageUrl && <img src={p.imageUrl} alt={p.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />}
              <h3>{p.name}</h3>
              <p style={{ color: '#D4AF37', fontWeight: 'bold' }}>{p.price} د.م.</p>
              {isAdmin && <button onClick={() => deleteProduct(p.id)} style={{ background: '#8B0000', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>🗑️ حذف</button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
      }
