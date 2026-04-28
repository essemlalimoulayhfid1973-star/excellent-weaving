import React, { useState } from 'react';

// ============================================
// 1. البيانات المدمجة (بدون استيراد خارجي)
// ============================================
const productsData = [
  { id: 1, name: 'تحفة الأطلس الكبير', price: 700, category: 'carpet', icon: '🪢', description: 'زربية تحمل رمز شجرة الحياة، تجسيد لقوة الطبيعة.' },
  { id: 2, name: 'زربية الأطلس الكبير', price: 5500, category: 'carpet', icon: '🔴', description: 'زربية حمراء بزخرفة أمازيغية تحكي قصة الصمود.' },
  { id: 3, name: 'حقيبة يد جلدية', price: 700, category: 'bag', icon: '👜', description: 'حقيبة يد أنيقة من جلد البقر الطبيعي.' },
  { id: 4, name: 'طاقم حقيبة يد', price: 1200, category: 'bag', icon: '💼', description: 'طاقم حقيبتين يدويتين (صغير + متوسط).' },
  { id: 5, name: 'طبق نباتات مجففة', price: 150, category: 'plate', icon: '🍽️', description: 'طبق فني مصنوع من النباتات المجففة.' },
  { id: 6, name: 'طبق نباتات جافة', price: 2000, category: 'plate', icon: '🏺', description: 'طبق كبير للمطبخ مصنوع من النباتات الجافة الفاخرة.' },
  { id: 7, name: 'زربية شجرة الحياة', price: 500, category: 'carpet', icon: '🌿', description: 'زربية صغيرة تحمل رمز شجرة الحياة.' },
];

// ============================================
// 2. مكونات الموقع (دمج الكل في ملف واحد)
// ============================================

// --- مكون رأس الصفحة (Header) ---
function Header({ cartItemsCount, setCurrentPage }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo} onClick={() => setCurrentPage('home')}>
        <span style={{ fontSize: '28px' }}>🧵</span>
        <div>
          <h1 style={styles.logoText}>تعاونية <span style={{ color: '#D4AF37' }}>النسيج الممتاز</span></h1>
          <p style={styles.logoSub}>أمزميز - الحوز</p>
        </div>
      </div>
      <nav style={styles.nav}>
        <button onClick={() => setCurrentPage('home')} style={styles.navBtn}>الرئيسية</button>
        <button onClick={() => setCurrentPage('gallery')} style={styles.navBtn}>المنتجات</button>
      </nav>
      <div style={styles.cartIcon} onClick={() => setCurrentPage('cart')}>
        🛒 {cartItemsCount > 0 && <span style={styles.cartBadge}>{cartItemsCount}</span>}
      </div>
    </header>
  );
}

// --- مقطع البطل (Hero) ---
function Hero({ setCurrentPage }) {
  return (
    <div style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>منتجات يدوية من نساء الأطلس</h1>
        <p style={styles.heroSub}>كل قطعة تحكي قصة صمود وأمل</p>
        <button onClick={() => setCurrentPage('gallery')} style={styles.heroBtn}>🛍️ تسوق الآن</button>
      </div>
    </div>
  );
}

// --- قائمة المنتجات (Gallery) ---
function Gallery({ addToCart }) {
  return (
    <div style={styles.galleryContainer}>
      <h2 style={styles.sectionTitle}>🛍️ منتجاتنا</h2>
      <div style={styles.productsGrid}>
        {productsData.map(product => (
          <div key={product.id} style={styles.productCard}>
            <div style={styles.productIcon}>{product.icon}</div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>{product.price.toLocaleString()} د.م.</p>
            <button onClick={() => addToCart(product)} style={styles.addBtn}>➕ أضف للسلة</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- سلة التسوق (Cart) ---
function Cart({ cart, removeFromCart, updateQuantity, clearCart, totalPrice, setCurrentPage }) {
  const sendOrder = () => {
    if (cart.length === 0) return alert('السلة فارغة!');
    const name = prompt('👤 أدخل اسمك الكريم:');
    const phone = prompt('📞 أدخل رقم هاتفك:');
    if (!name || !phone) return alert('الاسم والهاتف مطلوبان!');

    let message = `🧵 طلب جديد من تعاونية النسيج الممتاز\n━━━━━━━━━━━━━━━━━━━━━\n👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n━━━━━━━━━━━━━━━━━━━━━\n🛒 المنتجات:\n`;
    cart.forEach(item => message += `\n• ${item.name} (${item.quantity}) × ${item.price} = ${(item.quantity * item.price).toLocaleString()} د.م.`);
    message += `\n━━━━━━━━━━━━━━━━━━━━━\n💰 الإجمالي: ${totalPrice.toLocaleString()} د.م.\n━━━━━━━━━━━━━━━━━━━━━\n✨ نشكرك على ثقتك!`;
    window.open(`https://wa.me/212639674902?text=${encodeURIComponent(message)}`, '_blank');
    clearCart();
    alert('✅ تم إرسال طلبك بنجاح!');
    setCurrentPage('home');
  };

  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.sectionTitle}>🛒 سلة التسوق</h2>
      {cart.length === 0 ? (
        <p style={styles.emptyCart}>السلة فارغة</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={styles.cartItem}>
              <div><strong>{item.name}</strong><br />{item.price} د.م.</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} style={styles.qtyBtn}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={styles.qtyBtn}>+</button>
                <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>🗑️</button>
              </div>
            </div>
          ))}
          <div style={styles.cartTotal}>💵 الإجمالي: {totalPrice.toLocaleString()} د.م.</div>
          <button onClick={sendOrder} style={styles.checkoutBtn}>📱 تأكيد الطلب عبر واتساب</button>
          <button onClick={clearCart} style={styles.clearCartBtn}>🗑️ تفريغ السلة</button>
        </>
      )}
      <button onClick={() => setCurrentPage('gallery')} style={styles.backBtn}>← العودة للتسوق</button>
    </div>
  );
}

// --- قسم القصة (Story) ---
function Story() {
  return (
    <div style={styles.storyContainer}>
      <h2 style={styles.sectionTitle}>🏔️ نبض أمزميز</h2>
      <p style={styles.storyText}>
        من قلب جبال الأطلس، وبعد زلزال 2023، وقفت نساء الحوز ثائرات من جديد. أكثر من 500 امرأة حرفية 
        من 20 قرية يعملن يومياً للحفاظ على التراث الأمازيغي الأصيل. عندما تشتري من تعاونيتنا، فأنت 
        لست زبوناً، بل شريك في رحلة انبعاث نساء الأطلس.
      </p>
    </div>
  );
}

// ============================================
// 3. التطبيق الرئيسي (App)
// ============================================
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`✅ تمت إضافة ${product.name} إلى السلة`);
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  const updateQuantity = (id, quantity) => setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  const clearCart = () => setCart([]);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={styles.app}>
      <Header cartItemsCount={cartItemsCount} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <Story />
          <Gallery addToCart={addToCart} />
        </>
      )}
      {currentPage === 'gallery' && <Gallery addToCart={addToCart} />}
      {currentPage === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} totalPrice={totalPrice} setCurrentPage={setCurrentPage} />}
      <footer style={styles.footer}>
        <p>📍 أمزميز، إقليم الحوز - المغرب</p>
        <p>📞 واتساب: <a href="https://wa.me/212639674902" style={{ color: '#D4AF37' }}>+212 639 674902</a></p>
        <p style={{ fontSize: '12px', marginTop: '10px' }}>© 2025 تعاونية النسيج الممتاز</p>
      </footer>
    </div>
  );
}

// ============================================
// 4. التصميم (Styles) - دفعة واحدة
// ============================================
const styles = {
  app: { fontFamily: 'Cairo, sans-serif', backgroundColor: '#FFFDD0', minHeight: '100vh', direction: 'rtl' },
  header: { backgroundColor: '#1B263B', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' },
  logo: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' },
  logoText: { fontSize: '18px', margin: 0 },
  logoSub: { fontSize: '10px', opacity: 0.7, margin: 0 },
  nav: { display: 'flex', gap: '20px' },
  navBtn: { background: 'transparent', color: 'white', border: 'none', fontSize: '16px', cursor: 'pointer', padding: '5px 10px' },
  cartIcon: { position: 'relative', fontSize: '24px', cursor: 'pointer' },
  cartBadge: { position: 'absolute', top: '-8px', right: '-12px', backgroundColor: '#8B0000', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '11px' },
  hero: { background: 'linear-gradient(135deg, #1B263B, #2c3e5c)', color: 'white', textAlign: 'center', padding: '80px 20px' },
  heroContent: { maxWidth: '600px', margin: '0 auto' },
  heroTitle: { fontSize: '42px', marginBottom: '15px' },
  heroSub: { fontSize: '20px', marginBottom: '25px', color: '#D4AF37' },
  heroBtn: { backgroundColor: '#D4AF37', color: '#1B263B', border: 'none', padding: '12px 30px', borderRadius: '40px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  sectionTitle: { textAlign: 'center', fontSize: '32px', color: '#8B0000', margin: '40px 0 30px' },
  galleryContainer: { padding: '20px', maxWidth: '1200px', margin: '0 auto' },
  productsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' },
  productCard: { backgroundColor: 'white', borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' },
  productIcon: { fontSize: '60px', marginBottom: '10px' },
  productName: { fontSize: '18px', marginBottom: '5px' },
  productPrice: { color: '#D4AF37', fontWeight: 'bold', fontSize: '20px', marginBottom: '15px' },
  addBtn: { backgroundColor: '#8B0000', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' },
  cartContainer: { padding: '20px', maxWidth: '600px', margin: '0 auto' },
  cartItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '15px 0' },
  qtyBtn: { width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ddd', backgroundColor: '#f5f5f5', cursor: 'pointer' },
  removeBtn: { backgroundColor: '#8B0000', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '8px', cursor: 'pointer' },
  cartTotal: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '20px 0', color: '#8B0000' },
  checkoutBtn: { width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' },
  clearCartBtn: { width: '100%', backgroundColor: '#8B0000', color: 'white', border: 'none', padding: '10px', borderRadius: '30px', cursor: 'pointer' },
  backBtn: { display: 'block', margin: '20px auto', backgroundColor: 'transparent', border: 'none', color: '#8B0000', cursor: 'pointer', fontSize: '16px' },
  storyContainer: { backgroundColor: '#F5E6D3', padding: '50px 20px', margin: '40px 0', textAlign: 'center' },
  storyText: { maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '16px', color: '#333' },
  emptyCart: { textAlign: 'center', padding: '40px', fontSize: '18px', color: '#666' },
  footer: { backgroundColor: '#1B263B', color: '#F5E6D3', textAlign: 'center', padding: '30px', marginTop: '50px' }
};
