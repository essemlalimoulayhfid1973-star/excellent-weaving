import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/productsData';
import { useCart } from '../contexts/CartContext';

export default function ProductPage() {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState(product?.images?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return <div style={{ padding: '50px', textAlign: 'center' }}>المنتج غير موجود</div>;

  const handleAddToCart = () => { addToCart({ ...product, quantity }); setAdded(true); setTimeout(() => setAdded(false), 2000); };
  const similarProducts = productsData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div dir="rtl" style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <div style={{ marginBottom: '20px' }}><Link to="/">الرئيسية</Link> / <Link to="/gallery">المنتجات</Link> / <span>{product.name}</span></div>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '60px' }}>
        <div style={{ flex: 1 }}><img src={mainImage} alt={product.name} style={{ width: '100%', borderRadius: '20px', marginBottom: '15px' }} />
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>{product.images.map((img, idx) => (<img key={idx} src={img} alt={`${product.name}-${idx}`} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '10px', cursor: 'pointer', border: mainImage === img ? '2px solid #C18E3A' : 'none' }} onClick={() => setMainImage(img)} />))}</div>
        </div>
        <div style={{ flex: 1 }}><h1 style={{ fontSize: '32px' }}>{product.name}</h1><p style={{ fontSize: '28px', color: '#C18E3A', fontWeight: 'bold' }}>{product.price.toLocaleString()} د.م.</p>
          <div style={{ background: '#F5E6D3', padding: '20px', borderRadius: '16px', margin: '20px 0' }}><h3>🌟 قصة المنتج</h3><p>{product.story}</p></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '20px 0' }}>{product.features.map((f, idx) => <span key={idx} style={{ background: '#FFFDD0', padding: '5px 12px', borderRadius: '25px' }}>{f}</span>)}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '20px 0' }}><label>الكمية:</label><button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ddd', cursor: 'pointer' }}>-</button><span style={{ minWidth: '30px', textAlign: 'center' }}>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ddd', cursor: 'pointer' }}>+</button></div>
          <div style={{ background: '#FFFDD0', padding: '12px', borderRadius: '12px', margin: '15px 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}><span style={{ background: '#8B0000', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>🔥 منتج محدود</span><span style={{ background: '#1B263B', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>🚚 توصيل 2-5 أيام</span><span style={{ background: '#C18E3A', color: '#1B263B', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>💰 الدفع عند الاستلام</span></div>
          <div style={{ fontSize: '14px', color: '#28A745', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>✔️ تم بيع أكثر من 100 قطعة من هذا المنتج</div>
          <button onClick={handleAddToCart} style={{ width: '100%', background: added ? '#28A745' : '#8B0000', color: 'white', padding: '16px', borderRadius: '50px', fontSize: '20px', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: '0.3s' }}>{added ? '✓ تمت الإضافة' : '🛒 أضف إلى السلة - اشتر الآن'}</button>
          <Link to="/checkout" style={{ display: 'block', textAlign: 'center', marginTop: '15px', color: '#8B0000' }}>🛍️ إتمام الشراء مباشرة</Link>
        </div>
      </div>
      {similarProducts.length > 0 && (<><h2 style={{ fontSize: '28px', marginBottom: '30px' }}>🎁 منتجات مشابهة</h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>{similarProducts.map(p => (<Link key={p.id} to={`/product/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}><div style={{ border: '1px solid #eee', borderRadius: '16px', padding: '15px', textAlign: 'center' }}><img src={p.thumb} alt={p.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '12px' }} /><h4 style={{ marginTop: '10px' }}>{p.name}</h4><p style={{ color: '#C18E3A', fontWeight: 'bold' }}>{p.price} د.م.</p></div></Link>))}</div></>)}
    </div>
  );
                                                                                                                       }
