import React, { useState } from 'react';
import { db, storage } from '../firebase/config';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

function AdminPanel({ setView, products }) {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: null, description: '' });
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const addProduct = async () => {
    if (!newProduct.name || !newProduct.price) return alert('الاسم والسعر مطلوبان');
    setUploading(true);
    try {
      let imageUrl = null;
      if (newProduct.image) imageUrl = await uploadImage(newProduct.image);
      await addDoc(collection(db, 'products'), {
        name: newProduct.name,
        price: Number(newProduct.price),
        description: newProduct.description,
        image: imageUrl,
        createdAt: new Date()
      });
      setNewProduct({ name: '', price: '', image: null, description: '' });
      alert('✅ تمت إضافة المنتج');
    } catch (error) {
      alert('خطأ: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const deleteProduct = async (id, imageUrl) => {
    if (!window.confirm('تأكيد الحذف؟')) return;
    try {
      if (imageUrl) {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      }
      await deleteDoc(doc(db, 'products', id));
      alert('تم الحذف');
    } catch (error) {
      alert('خطأ: ' + error.message);
    }
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      <button onClick={() => setView('home')} style={{ marginBottom: '20px' }}>← العودة للرئيسية</button>
      <h2>➕ إضافة منتج جديد</h2>
      <input type="text" placeholder="الاسم" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
      <input type="number" placeholder="السعر (درهم)" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
      <textarea placeholder="الوصف" value={newProduct.description} onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} rows="2" style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
      <input type="file" accept="image/*" onChange={(e) => setNewProduct({...newProduct, image: e.target.files[0]})} style={{ display: 'block', margin: '10px 0' }} />
      <button onClick={addProduct} disabled={uploading} style={{ background: '#D4AF37', padding: '10px 20px', marginBottom: '30px' }}>{uploading ? 'جاري الرفع...' : '💾 حفظ المنتج'}</button>

      <h2>📦 المنتجات الحالية</h2>
      {products.map(p => (
        <div key={p.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
          <span>{p.name} - {p.price} د.م.</span>
          <button onClick={() => deleteProduct(p.id, p.image)} style={{ background: '#8B0000', color: 'white', border: 'none', padding: '5px 10px' }}>🗑️ حذف</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
