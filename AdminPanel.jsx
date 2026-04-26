import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '' });

  // تحميل المنتجات من LocalStorage
  useEffect(() => {
    const storedProducts = localStorage.getItem('tisaj_products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      // منتجات افتراضية إذا كانت فارغة
      setProducts([
        { id: 1, name: 'زربية بوشرويط', price: 4500, description: 'زربية تقليدية بألوان زاهية', image: '🪢' },
        { id: 2, name: 'زربية الأطلس', price: 6800, description: 'صوف طبيعي فاخر', image: '🏔️' },
        { id: 3, name: 'زربية المرموشة', price: 5200, description: 'نقوش هندسية دقيقة', image: '✨' },
        { id: 4, name: 'منسوجات يدوية', price: 1200, description: 'أغطية ووسائد متنوعة', image: '🧣' },
        { id: 5, name: 'حقيبة جلدية تقليدية', price: 850, description: 'جلد طبيعي بتطريز أمازيغي', image: '👜' }
      ]);
    }
  }, []);

  // حفظ المنتجات في LocalStorage عند كل تغيير
  useEffect(() => {
    localStorage.setItem('tisaj_products', JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert('الاسم والثمن إجباريان');
      return;
    }
    const newId = Date.now();
    setProducts([...products, { ...newProduct, id: newId, image: newProduct.image || '🧵' }]);
    setNewProduct({ name: '', price: '', description: '', image: '' });
    alert('✅ تمت إضافة المنتج بنجاح!');
  };

  const deleteProduct = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      setProducts(products.filter(p => p.id !== id));
      alert('🗑️ تم حذف المنتج');
    }
  };

  const logout = () => {
    localStorage.removeItem('tisaj_admin');
    navigate('/');
    window.location.reload();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }} dir="rtl">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ color: '#8B0000' }}>🧵 لوحة تحكم تعاونية النسيج الممتاز</h1>
          <p style={{ color: '#666' }}>إضافة وتعديل وحذف المنتجات بكل سهولة</p>
        </div>
        <button 
          onClick={logout} 
          style={{ background: '#8B0000', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}
        >
          🚪 تسجيل الخروج
        </button>
      </div>

      {/* ملاحظة */}
      <div style={{ background: '#FFF3CD', padding: '12px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #FFE69C' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#856404' }}>
          ⚠️ ملاحظة: البيانات حالياً محفوظة في متصفحك فقط. قريباً سنقوم بترقيتها لحفظ دائم في قاعدة البيانات.
        </p>
      </div>

      {/* نموذج إضافة منتج */}
      <div style={{ background: '#F5F5F5', padding: '25px', borderRadius: '16px', marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '20px', color: '#333' }}>➕ إضافة منتج جديد</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="🏷️ اسم المنتج *" 
            value={newProduct.name} 
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
          />
          <input 
            type="number" 
            placeholder="💰 السعر (درهم) *" 
            value={newProduct.price} 
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
          />
          <input 
            type="text" 
            placeholder="🖼️ صورة (رمز إيموجي أو رابط)" 
            value={newProduct.image} 
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} 
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
          />
        </div>
        <textarea 
          placeholder="📝 وصف المنتج" 
          value={newProduct.description} 
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} 
          rows="3"
          style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', marginTop: '15px' }}
        />
        <button 
          onClick={addProduct} 
          style={{ marginTop: '15px', background: '#28A745', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          💾 حفظ المنتج
        </button>
      </div>

      {/* قائمة المنتجات الموجودة */}
      <h3 style={{ marginBottom: '20px' }}>📦 المنتجات المتاحة حالياً</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #E0E0E0', borderRadius: '16px', padding: '15px', background: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '48px', textAlign: 'center', marginBottom: '10px' }}>{product.image}</div>
            <h4 style={{ margin: '10px 0', fontSize: '18px', textAlign: 'center' }}>{product.name}</h4>
            <p style={{ color: '#D2691E', fontWeight: 'bold', textAlign: 'center', fontSize: '20px', margin: '5px 0' }}>{product.price} د.م.</p>
            <p style={{ fontSize: '13px', color: '#666', textAlign: 'center' }}>{product.description}</p>
            <button 
              onClick={() => deleteProduct(product.id)} 
              style={{ marginTop: '15px', width: '100%', background: '#DC3545', color: 'white', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer' }}
            >
              🗑️ حذف المنتج
            </button>
          </div>
        ))}
      </div>
    </div>
  );
                                  }
