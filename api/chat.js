// api/chat.js
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// منتجاتك الحقيقية التي سيتحدث عنها البوت
const products = [
  { nameAr: 'زربية أمزميز الحمراء', price: 890 },
  { nameAr: 'زربية أمازيغية فاخرة', price: 1250 },
  { nameAr: 'وسادة زينة أمازيغية', price: 280 },
  { nameAr: 'حقيبة جلدية يدوية', price: 450 }
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    const productNames = products.map(p => `${p.nameAr} (${p.price} درهم)`).join(', ');

    const systemPrompt = `أنت مساعد مبيعات محترف في "تعاونية النسيج الممتاز - أمزميز الحوز".
    
منتجاتنا المتاحة حالياً: ${productNames}.

قواعدك الذهبية:
- تحدث بالعامية المغربية البسيطة أو العربية الفصحى الودودة.
- كن فخوراً بمنتجات أمزميز وجودتها اليدوية.
- إذا سألك العميل عن سعر، أعطه السعر المذكور وشجعه على الطلب.
- في نهاية كل رد، قل له: "يمكنك الطلب مباشرة عبر الواتساب للترتيب للشحن".
- لا تخرج عن موضوع المنسوجات والتعاونية.`;

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      system: systemPrompt,
      messages: messages,
    });

    return result.toDataStreamResponse(res);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

