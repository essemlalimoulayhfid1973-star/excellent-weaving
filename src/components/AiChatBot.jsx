// src/components/AiChatBot.jsx
import { useChat } from 'ai/react';
import { useState } from 'react';

export default function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* زر فتح الدردشة */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center w-14 h-14"
          aria-label="فتح المساعد الذكي"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </button>
      )}

      {/* نافذة الدردشة */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* الرأس */}
          <div className="bg-[#075E54] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <span className="font-bold">مساعدة النسيج الذكية</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1 transition">
              ✕
            </button>
          </div>

          {/* منطقة المحادثة */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
                <p className="text-sm">👋 مرحباً بك في تعاونية النسيج الممتاز</p>
                <p className="text-xs mt-2">اسألني عن:</p>
                <ul className="text-xs mt-1 space-y-1">
                  <li>✨ الزرابي والأسعار</li>
                  <li>👜 الحقائب الجلدية</li>
                  <li>🎨 تخصيص المنتجات</li>
                  <li>📦 طلب شراء</li>
                </ul>
              </div>
            )}
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-[#25D366] text-white rounded-br-none'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
            
            {error && (
              <div className="text-center text-red-500 text-xs p-2">
                حدث خطأ. يرجى المحاولة لاحقاً.
              </div>
            )}
          </div>

          {/* خانة الكتابة */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-800">
            <div className="flex gap-2">
              <input
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#25D366]"
                value={input}
                onChange={handleInputChange}
                placeholder="اكتب سؤالك هنا..."
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#075E54] text-white rounded-full px-5 py-2 text-sm hover:bg-[#054a44] transition disabled:opacity-50"
              >
                إرسال
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
          }
                
