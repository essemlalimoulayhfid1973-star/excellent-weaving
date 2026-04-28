import React, { useState } from 'react';

// ============================================
// 1. المنتجات مع الصور الحقيقية
// ============================================
const productsData = [
  { id: 1, name: 'تحفة الأطلس الكبير', price: 700, image: '/images/products/IMG_20260406_182116.jpg', description: 'زربية تحمل رمز شجرة الحياة، تجسيد لقوة الطبيعة.' },
  { id: 2, name: 'زربية الأطلس الكبير', price: 5500, image: '/images/products/IMG_20260406_182837.jpg', description: 'زربية حمراء بزخرفة أمازيغية تحكي قصة الصمود.' },
  { id: 3, name: 'حقيبة يد جلدية', price: 700, image: '/images/products/IMG_20260406_183329.jpg', description: 'حقيبة يد أنيقة من جلد البقر الطبيعي.' },
  { id: 4, name: 'طاقم حقيبة يد', price: 1200, image: '/images/products/IMG_20260406_183838.jpg', description: 'طاقم حقيبتين يدويتين (صغير + متوسط).' },
  { id: 5, name: 'طبق نباتات مجففة', price: 150, image: '/images/products/IMG_20260406_184810.jpg', description: 'طبق فني مصنوع من النباتات المجففة.' },
  { id: 6, name: 'طبق نباتات جافة', price: 2000, image: '/images/products/IMG_20260427_190104.jpg', description: 'طبق كبير للمطبخ مصنوع من النباتات الجافة الفاخرة.' },
  { id: 7, name: 'زربية شجرة الحياة', price: 500, image: '/images/products/IMG_20260427_194140.jpg', description: 'زربية صغيرة تحمل رمز شجرة الحياة.' },
];

// ============================================
// 2. باقي المكونات
// ============================================
function Header({ setCurrentPage, cartItemsCount }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo} onClick={() => setCurrentPage('home')}>
        <span style={{ fontSize: '28px' }}>🧵</span>
        <div><h1 style={styles.logoText}>تعاونية <span style={{ color: '#D4AF37' }}>النسيج الممتاز</span></h1><p style={styles.logoSub}>أمزميز - الحوز</p></div>
      </div>
      <nav style={styles.nav}>
        <button onClick={() => setCurrentPage('home')} style={styles.navBtn}>الرئيسية</button>
        <button onClick={() => setCurrentPage('products')} style={styles.navBtn}>المنتجات</button>
        <button onClick={() => setCurrentPage('about')} style={styles.navBtn}>من نحن</button>
        <button onClick={() => setCurrentPage('contact')} style={styles.navBtn}>اتصل بنا</button>
      </nav>
      <div style={styles.cartIcon} onClick={() => setCurrentPage('cart')}>🛒 {cartItemsCount > 0 && <span style={styles.cartBadge}>{cartItemsCount}</span>}</div>
    </header>
  );
}

function Hero({ setCurrentPage }) {
  return (
    <div style={styles.hero}>
      <h1 style={styles.heroTitle}>منتجات يدوية من نساء الأطلس</h1>
      <p style={styles.heroSub}>كل قطعة تحكي قصة صمود وأمل</p>
      <button onClick={() => setCurrentPage('products')} style={styles.heroBtn}>🛍️ تسوق الآن</button>
    </div>
  );
}

function Products({ addToCart }) {
  return (
    <div style={styles.productsContainer}>
      <h2 style={styles.sectionTitle}>🛍️ منتجاتنا</h2>
      <div style={styles.productsGrid}>
        {productsData.map(p => (
          <div key={p.id} style={styles.productCard}>
            <img src={p.image} alt={p.name} style={styles.productImage} />
            <h3>{p.name}</h3>
            <p>{p.price.toLocaleString()} د.م.</p>
            <button onClick={() => addToCart(p)} style={styles.addBtn}>➕ أضف للسلة</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={styles.aboutContainer}>
      <h2 style={styles.sectionTitle}>📖 من نحن</h2>
      <p>تعاونية النسيج الممتاز تأسست سنة 2010 في أمزميز، إقليم الحوز. نهدف للحفاظ على التراث الأمازيغي وتوفير فرص عمل لنساء المنطقة. أكثر من 500 امرأة حرفية من 20 قرية.</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={styles.contactContainer}>
      <h2 style={styles.sectionTitle}>📞 اتصل بنا</h2>
      <p>📍 أمزميز، إقليم الحوز، المغرب</p>
      <p>📧 Fatihanasij000@gmail.com</p>
      <p>📞 <a href="https://wa.me/212639674902">+212 639 674902</a></p>
    </div>
  );
}

function Cart({ cart, removeFromCart, updateQuantity, clearCart, totalPrice, setCurrentPage }) {
  const sendOrder = () => {
    if (cart.length === 0) return alert('السلة فارغة!');
    const name = prompt('👤 اسمك:');
    const phone = prompt('📞 هاتفك:');
    if (!name || !phone) return;
    let msg = `🧵 طلب جديد\n👤 ${name}\n📞 ${phone}\n🛒 المنتجات:\n`;
    cart.forEach(i => msg += `${i.name} (${i.quantity}) × ${i.price} = ${i.quantity * i.price} د.م.\n`);
    msg += `💰 الإجمالي: ${totalPrice} د.م.`;
    window.open(`https://wa.me/212639674902?text=${encodeURIComponent(msg)}`, '_blank');
    clearCart();
    setCurrentPage('home');
  };

  return (
    <div style={styles.cartContainer}>
      <h2>🛒 سلة التسوق</h2>
      {cart.length === 0 ? <p>السلة فارغة</p> : cart.map(i => (
        <div key={i.id} style={styles.cartItem}>
          <span>{i.name} - {i.price} د.م.</span>
          <div><button onClick={() => updateQuantity(i.id, Math.max(1, i.quantity - 1))}>-</button> {i.quantity} <button onClick={() => updateQuantity(i.id, i.quantity + 1)}>+</button> <button onClick={() => removeFromCart(i.id)}>🗑️</button></div>
        </div>
      ))}
      {cart.length > 0 && <><div>الإجمالي: {totalPrice} د.م.</div><button onClick={sendOrder} style={styles.checkoutBtn}>📱 إرسال الطلب</button><button onClick={clearCart}>تفريغ السلة</button></>}
      <button onClick={() => setCurrentPage('products')}>← العودة للتسوق</button>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const addToCart = (p) => { setCart(prev => { const e = prev.find(i => i.id === p.id); if (e) return prev.map(i => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i); return [...prev, { ...p, quantity: 1 }]; }); alert(`✅ تمت إضافة ${p.name}`); };
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQuantity = (id, q) => setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: q } : i));
  const clearCart = () => setCart([]);
  const totalPrice = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
  const cartItemsCount = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <div style={styles.app}>
      <Header setCurrentPage={setCurrentPage} cartItemsCount={cartItemsCount} />
      {currentPage === 'home' && <><Hero setCurrentPage={setCurrentPage} /><Products addToCart={addToCart} /></>}
      {currentPage === 'products' && <Products addToCart={addToCart} />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} totalPrice={totalPrice} setCurrentPage={setCurrentPage} />}
      <footer style={styles.footer}>© 2025 تعاونية النسيج الممتاز - أمزميز</footer>
    </div>
  );
}

const styles = {
  app: { fontFamily: 'Cairo', backgroundColor: '#FFFDD0', minHeight: '100vh', direction: 'rtl' },
  header: { backgroundColor: '#1B263B', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' },
  logo: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' },
  logoText: { fontSize: '18px', margin: 0 },
  logoSub: { fontSize: '10px', opacity: 0.7 },
  nav: { display: 'flex', gap: '15px' },
  navBtn: { background: 'transparent', color: 'white', border: 'none', fontSize: '14px', cursor: 'pointer' },
  cartIcon: { position: 'relative', fontSize: '24px', cursor: 'pointer' },
  cartBadge: { position: 'absolute', top: '-8px', right: '-12px', backgroundColor: '#8B0000', borderRadius: '50%', padding: '2px 6px', fontSize: '11px' },
  hero: { background: 'linear-gradient(135deg, #1B263B, #2c3e5c)', color: 'white', textAlign: 'center', padding: '80px 20px' },
  heroTitle: { fontSize: '42px' },
  heroSub: { fontSize: '20px', color: '#D4AF37' },
  heroBtn: { backgroundColor: '#D4AF37', color: '#1B263B', border: 'none', padding: '12px 30px', borderRadius: '40px', cursor: 'pointer' },
  sectionTitle: { textAlign: 'center', fontSize: '32px', color: '#8B0000', margin: '40px 0' },
  productsContainer: { padding: '20px', maxWidth: '1200px', margin: '0 auto' },
  productsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' },
  productCard: { backgroundColor: 'white', borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
  productImage: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' },
  addBtn: { backgroundColor: '#8B0000', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '25px', cursor: 'pointer' },
  cartContainer: { padding: '20px', maxWidth: '500px', margin: '0 auto' },
  cartItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '10px 0' },
  checkoutBtn: { width: '100%', backgroundColor: '#25D366', color: 'white', padding: '10px', borderRadius: '30px', marginTop: '15px', cursor: 'pointer' },
  footer: { backgroundColor: '#1B263B', color: '#F5E6D3', textAlign: 'center', padding: '20px', marginTop: '50px' }
};
