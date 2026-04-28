import React, { useState, useEffect } from 'react';

// ------------------------------
// 1. بيانات احتياطية (Fallback) في حالة فشل Firebase
// ------------------------------
const FALLBACK_PRODUCTS = [
  { id: 1, name: 'تحفة الأطلس الكبير', price: 700, image: '/images/products/IMG_20260406_182116.jpg', description: 'زربية تحمل رمز شجرة الحياة، تجسيد لقوة الطبيعة.' },
  { id: 2, name: 'زربية الأطلس الكبير', price: 5500, image: '/images/products/IMG_20260406_182837.jpg', description: 'زربية حمراء بزخرفة أمازيغية تحكي قصة الصمود.' },
  { id: 3, name: 'حقيبة يد جلدية', price: 700, image: '/images/products/IMG_20260406_183329.jpg', description: 'حقيبة يد أنيقة من جلد البقر الطبيعي.' },
  { id: 4, name: 'طاقم حقيبة يد', price: 1200, image: '/images/products/IMG_20260406_183838.jpg', description: 'طاقم حقيبتين (صغير + متوسط).' },
  { id: 5, name: 'طبق نباتات مجففة', price: 150, image: '/images/products/IMG_20260406_184810.jpg', description: 'طبق فني من النباتات المجففة.' },
  { id: 6, name: 'طبق نباتات جافة', price: 2000, image: '/images/products/IMG_20260427_190104.jpg', description: 'طبق كبير من النباتات الجافة.' },
  { id: 7, name: 'زربية شجرة الحياة', price: 500, image: '/images/products/IMG_20260427_194140.jpg', description: 'زربية صغيرة برمز شجرة الحياة.' },
];

// ------------------------------
// 2. التطبيق الرئيسي (All-in-One)
// ------------------------------
export default function App() {
  // --- حالة التطبيق (State) ---
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '', description: '' });

  // --- دوال السلة (Cart Logic) ---
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

  // --- دوال لوحة التحكم (Admin Logic) ---
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === '123456') {
      setIsAdmin(true);
      alert('تم الدخول إلى لوحة التحكم');
    } else {
      alert('كلمة السر خطأ');
    }
  };
  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert('الاسم والسعر مطلوبان');
      return;
    }
    const newId = Date.now();
    setProducts([...products, { ...newProduct, id: newId, image: newProduct.image || '/images/products/placeholder.jpg' }]);
    setNewProduct({ name: '', price: '', image: '', description: '' });
    alert('✅ تمت إضافة المنتج بنجاح');
  };
  const deleteProduct = (id) => {
    if (window.confirm('تأكيد حذف هذا المنتج؟')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // --- مكون الصفحة الرئيسية (Home) ---
  const HomeView = () => (
    <>
      <HeroSection setCurrentView={setCurrentView} />
      <QualityBadges />
      <ProductsSection products={products} addToCart={addToCart} />
      <StorySection />
      <GallerySection />
    </>
  );

  // --- مكون سلة التسوق (CartView) ---
  const CartView = () => {
    const sendOrder = () => {
      if (cart.length === 0) return alert('السلة فارغة!');
      const name = prompt('👤 أدخل اسمك الكريم:');
      const phone = prompt('📞 أدخل رقم هاتفك:');
      if (!name || !phone) return;
      let msg = `🧵 طلب جديد من تعاونية النسيج الممتاز\n👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n━━━━━━━━━━━━━━━━━━━━━\n🛒 المنتجات:\n`;
      cart.forEach(i => msg += `• ${i.name} (${i.quantity}) × ${i.price} = ${i.quantity * i.price} د.م.\n`);
      msg += `━━━━━━━━━━━━━━━━━━━━━\n💰 الإجمالي: ${totalPrice} د.م.\n✨ نشكرك على ثقتك!`;
      window.open(`https://wa.me/212639674902?text=${encodeURIComponent(msg)}`, '_blank');
      clearCart();
      setCurrentView('home');
    };

    return (
      <div style={styles.cartContainer}>
        <h2 style={styles.sectionTitle}>🛒 سلة التسوق</h2>
        {cart.length === 0 ? <p style={styles.emptyCart}>السلة فارغة</p> : (
          <>
            {cart.map(item => (
              <div key={item.id} style={styles.cartItem}>
                <div><strong>{item.name}</strong><br />{item.price} د.م.</div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} style={styles.qtyBtn}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={styles.qtyBtn}>+</button>
                  <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>🗑️</button>
                </div>
              </div>
            ))}
            <div style={styles.cartTotal}>💰 الإجمالي: {totalPrice} د.م.</div>
            <button onClick={sendOrder} style={styles.checkoutBtn}>📱 إرسال الطلب عبر واتساب</button>
            <button onClick={clearCart} style={styles.clearCartBtn}>🗑️ تفريغ السلة</button>
          </>
        )}
        <button onClick={() => setCurrentView('home')} style={styles.backBtn}>← العودة للتسوق</button>
      </div>
    );
  };

  // --- مكون لوحة التحكم (AdminView) ---
  const AdminView = () => (
    <div style={styles.adminContainer}>
      <h2 style={styles.sectionTitle}>🧵 لوحة التحكم</h2>
      <div style={styles.addProductForm}>
        <h3>➕ إضافة منتج جديد</h3>
        <input type="text" placeholder="اسم المنتج" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} style={styles.adminInput} />
        <input type="number" placeholder="السعر (درهم)" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} style={styles.adminInput} />
        <input type="text" placeholder="رابط الصورة" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} style={styles.adminInput} />
        <textarea placeholder="وصف المنتج" value={newProduct.description} onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} rows="2" style={styles.adminInput} />
        <button onClick={addProduct} style={styles.adminBtn}>💾 إضافة المنتج</button>
      </div>
      <h3>المنتجات الحالية ({products.length})</h3>
      {products.map(p => (
        <div key={p.id} style={styles.adminProductItem}>
          <span><strong>{p.name}</strong> - {p.price} د.م.</span>
          <button onClick={() => deleteProduct(p.id)} style={styles.deleteBtn}>🗑️ حذف</button>
        </div>
      ))}
      <button onClick={() => setIsAdmin(false)} style={styles.logoutBtn}>🚪 تسجيل الخروج</button>
    </div>
  );

  // --- واجهة تسجيل الدخول (AdminLogin) ---
  if (currentView === 'admin') {
    if (!isAdmin) {
      return (
        <div style={styles.adminLoginContainer}>
          <div style={styles.adminLoginBox}>
            <h2>🔐 لوحة التحكم</h2>
            <form onSubmit={handleAdminLogin}>
              <input type="password" placeholder="كلمة السر" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} style={styles.adminInput} />
              <button type="submit" style={styles.adminBtn}>دخول</button>
            </form>
            <p style={{ fontSize: '12px', marginTop: '10px' }}>كلمة السر: 123456</p>
            <button onClick={() => setCurrentView('home')} style={styles.backBtn}>← العودة للمتجر</button>
          </div>
        </div>
      );
    }
    return <AdminView />;
  }

  if (currentView === 'cart') return <CartView />;

  // --- العرض الرئيسي (Home + جميع المكونات) ---
  return (
    <div style={styles.app}>
      <Header setCurrentView={setCurrentView} cartItemsCount={cartItemsCount} />
      <HomeView />
      <Footer />
    </div>
  );
}

// ------------------------------
// 3. مكونات الصفحة (ضمن نفس الملف)
// ------------------------------
function Header({ setCurrentView, cartItemsCount }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo} onClick={() => setCurrentView('home')}>
        <span style={{ fontSize: '28px' }}>🧵</span>
        <div><h1 style={styles.logoText}>تعاونية <span style={{ color: '#D4AF37' }}>النسيج الممتاز</span></h1><p style={styles.logoSub}>أمزميز - الحوز</p></div>
      </div>
      <nav style={styles.nav}>
        <button onClick={() => setCurrentView('home')} style={styles.navBtn}>الرئيسية</button>
        <button onClick={() => setCurrentView('home')} style={styles.navBtn}>المنتجات</button>
        <button onClick={() => setCurrentView('home')} style={styles.navBtn}>قصتنا</button>
        <button onClick={() => setCurrentView('admin')} style={styles.navBtnAdmin}>🔐 إدارة</button>
      </nav>
      <div style={styles.cartIcon} onClick={() => setCurrentView('cart')}>
        🛒 {cartItemsCount > 0 && <span style={styles.cartBadge}>{cartItemsCount}</span>}
      </div>
    </header>
  );
}

function HeroSection({ setCurrentView }) {
  return (
    <div style={styles.hero}>
      <h1 style={styles.heroTitle}>منتجات يدوية من نساء الأطلس</h1>
      <p style={styles.heroSub}>كل قطعة تحكي قصة صمود وأمل</p>
      <button onClick={() => setCurrentView('home')} style={styles.heroBtn}>🛍️ تسوق الآن</button>
    </div>
  );
}

function QualityBadges() {
  return (
    <div style={styles.badgesContainer}>
      <div style={styles.badge}>✅ 100% Handmade</div>
      <div style={styles.badge}>🏔️ Atlas Origin</div>
      <div style={styles.badge}>🚚 توصيل سريع</div>
      <div style={styles.badge}>💰 الدفع عند الاستلام</div>
    </div>
  );
}

function ProductsSection({ products, addToCart }) {
  return (
    <div style={styles.productsContainer}>
      <h2 style={styles.sectionTitle}>🛍️ منتجاتنا</h2>
      <div style={styles.productsGrid}>
        {products.map(p => (
          <div key={p.id} style={styles.productCard}>
            <img src={p.image} alt={p.name} style={styles.productImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found'; }} />
            <h3>{p.name}</h3>
            <p style={styles.productPrice}>{p.price.toLocaleString()} د.م.</p>
            <button onClick={() => addToCart(p)} style={styles.addBtn}>➕ أضف للسلة</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <div style={styles.storyContainer}>
      <h2 style={styles.sectionTitle}>🏔️ نبض أمزميز</h2>
      <p style={styles.storyText}>
        من قلب جبال الأطلس، وبعد زلزال 2023، وقفت نساء الحوز ثائرات من جديد. أكثر من 500 امرأة حرفية 
        من 20 قرية يعملن يومياً للحفاظ على التراث الأمازيغي الأصيل. تعاونية النسيج الممتاز هي قصة 
        نضال وأمل. عندما تشتري منا، فأنت لست زبوناً، بل شريك في رحلة انبعاث نساء الأطلس.
      </p>
    </div>
  );
}

function GallerySection() {
  const galleryItems = [
    { id: 1, icon: '🧵', title: 'ورشة النسج', desc: 'نساء أمزميز ينسجن التراث' },
    { id: 2, icon: '🐑', title: 'الصوف الطبيعي', desc: 'أجود أنواع الصوف من جبال الأطلس' },
    { id: 3, icon: '🎨', title: 'الأصباغ الطبيعية', desc: 'ألوان مستخلصة من الطبيعة' },
    { id: 4, icon: '🏛️', title: 'المعارض', desc: 'مشاركات في المعارض الدولية' },
  ];

  return (
    <div style={styles.galleryContainer}>
      <h2 style={styles.sectionTitle}>📸 معرض الصور والفيديوهات</h2>
      <div style={styles.galleryGrid}>
        {galleryItems.map(item => (
          <div key={item.id} style={styles.galleryCard}>
            <div style={styles.galleryIcon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>📍 أمزميز، إقليم الحوز - المغرب</p>
      <p>📞 واتساب: <a href="https://wa.me/212639674902" style={{ color: '#D4AF37' }}>+212 639 674902</a></p>
      <p>📧 <a href="mailto:Fatihanasij000@gmail.com" style={{ color: '#D4AF37' }}>Fatihanasij000@gmail.com</a></p>
      <p style={{ fontSize: '12px', marginTop: '10px' }}>© 2025 تعاونية النسيج الممتاز - جميع الحقوق محفوظة</p>
    </footer>
  );
}

// ------------------------------
// 4. التصميم الثابت (Styles)
// ------------------------------
const styles = {
  app: { fontFamily: 'Cairo, sans-serif', backgroundColor: '#FFF8E7', minHeight: '100vh', direction: 'rtl' },
  header: { backgroundColor: '#1B263B', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' },
  logo: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' },
  logoText: { fontSize: '18px', margin: 0 },
  logoSub: { fontSize: '10px', opacity: 0.7, margin: 0 },
  nav: { display: 'flex', gap: '20px' },
  navBtn: { background: 'transparent', color: 'white', border: 'none', fontSize: '16px', cursor: 'pointer', padding: '5px 10px' },
  navBtnAdmin: { background: 'transparent', color: '#D4AF37', border: 'none', fontSize: '16px', cursor: 'pointer', padding: '5px 10px' },
  cartIcon: { position: 'relative', fontSize: '24px', cursor: 'pointer' },
  cartBadge: { position: 'absolute', top: '-8px', right: '-12px', backgroundColor: '#8B0000', borderRadius: '50%', padding: '2px 6px', fontSize: '11px' },
  hero: { background: 'linear-gradient(135deg, #1B263B, #2c3e5c)', color: 'white', textAlign: 'center', padding: '80px 20px' },
  heroTitle: { fontSize: '42px', marginBottom: '15px' },
  heroSub: { fontSize: '20px', marginBottom: '25px', color: '#D4AF37' },
  heroBtn: { backgroundColor: '#D4AF37', color: '#1B263B', border: 'none', padding: '12px 30px', borderRadius: '40px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  badgesContainer: { display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', backgroundColor: '#F5E6D3', flexWrap: 'wrap' },
  badge: { padding: '8px 16px', backgroundColor: 'white', borderRadius: '30px', fontSize: '14px', fontWeight: 'bold', color: '#1B263B', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
  sectionTitle: { textAlign: 'center', fontSize: '32px', color: '#8B0000', margin: '40px 0 30px' },
  productsContainer: { padding: '20px', maxWidth: '1200px', margin: '0 auto' },
  productsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' },
  productCard: { backgroundColor: 'white', borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' },
  productImage: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' },
  productPrice: { color: '#D4AF37', fontWeight: 'bold', fontSize: '20px', marginBottom: '15px' },
  addBtn: { backgroundColor: '#8B0000', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' },
  storyContainer: { backgroundColor: '#F5E6D3', padding: '50px 20px', margin: '40px 0', textAlign: 'center' },
  storyText: { maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '16px', color: '#333' },
  galleryContainer: { padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' },
  galleryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px', marginTop: '30px' },
  galleryCard: { backgroundColor: 'white', borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
  galleryIcon: { fontSize: '50px', marginBottom: '10px' },
  cartContainer: { padding: '20px', maxWidth: '600px', margin: '0 auto' },
  cartItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '15px 0' },
  qtyBtn: { width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ddd', backgroundColor: '#f5f5f5', cursor: 'pointer' },
  removeBtn: { backgroundColor: '#8B0000', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '8px', cursor: 'pointer' },
  cartTotal: { fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '20px 0', color: '#8B0000' },
  checkoutBtn: { width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' },
  clearCartBtn: { width: '100%', backgroundColor: '#8B0000', color: 'white', border: 'none', padding: '10px', borderRadius: '30px', cursor: 'pointer' },
  backBtn: { display: 'block', margin: '20px auto', backgroundColor: 'transparent', border: 'none', color: '#8B0000', cursor: 'pointer', fontSize: '16px' },
  emptyCart: { textAlign: 'center', padding: '40px', fontSize: '18px', color: '#666' },
  footer: { backgroundColor: '#1B263B', color: '#F5E6D3', textAlign: 'center', padding: '30px', marginTop: '50px' },
  adminContainer: { padding: '40px 20px', maxWidth: '600px', margin: '0 auto' },
  adminLoginContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#FFF8E7' },
  adminLoginBox: { backgroundColor: 'white', padding: '40px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', width: '350px' },
  adminInput: { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' },
  adminBtn: { backgroundColor: '#8B0000', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', width: '100%' },
  addProductForm: { backgroundColor: '#F5E6D3', padding: '20px', borderRadius: '16px', marginBottom: '30px' },
  adminProductItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' },
  deleteBtn: { backgroundColor: '#8B0000', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' },
  logoutBtn: { backgroundColor: '#1B263B', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', marginTop: '20px', width: '100%' }
};
