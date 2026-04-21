import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, AlertCircle, X, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { cn } from '../lib/utils';

// Pre-calculate API key safely
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || "";

// Debug: Log env status
console.log('[AIChatbox] ENV checking:', {
  VITE_GOOGLE_API_KEY: GOOGLE_API_KEY ? 'SET (len:' + GOOGLE_API_KEY.length + ')' : 'NOT_SET',
  allEnv: Object.keys(import.meta.env).filter(k => k.startsWith('VITE_'))
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIChatbox() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Chào bạn! Mình là Trợ lý Hóa học AI. Bạn có câu hỏi nào về chương trình Hóa 8 không?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-expand effect
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  const initiateSend = () => {
    if (!input.trim() || isLoading) return;
    setShowConfirm(true);
  };

  const handleSend = async () => {
    setShowConfirm(false);
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    if (!GOOGLE_API_KEY) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lỗi: Chưa cấu hình API Key. Vui lòng kiểm tra biến môi trường VITE_GOOGLE_API_KEY.' }]);
      setIsLoading(false);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        safetySettings: [ // Add safety settings to reduce blocking
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        ]
      });

      const systemInstruction = `Bạn là một giáo viên Hóa học lớp 8 tại Việt Nam.\nHãy giải thích các khái niệm một cách dễ hiểu, thân thiện.\nSử dụng các ví dụ thực tế.\nNếu học sinh hỏi về các công thức, hãy trình bày rõ ràng.\nNếu hỏi về cân bằng phương trình, hãy giải thích từng bước.\nHãy trả lời bằng tiếng Việt.`;

      // Convert message history to Gemini format
      const history = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));
      
      // Remove the initial welcome message from history to not confuse the model
      if (history.length > 0 && history[0].role === 'model') {
        history.shift();
      }

      const chat = model.startChat({
        history: [
          { role: 'user', parts: [{ text: systemInstruction }] },
          { role: 'model', parts: [{ text: 'Đã hiểu. Tôi là giáo viên Hóa học lớp 8, sẵn sàng giải đáp các thắc mắc.' }] },
          ...history
        ],
        generationConfig: {
          maxOutputTokens: 1024,
        },
      });

      const result = await chat.sendMessage(input);
      const response = result.response;
      const text = response.text();

      const assistantMessage: Message = {
        role: 'assistant',
        content: text || 'Xin lỗi, mình không thể trả lời câu hỏi này lúc này.'
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Gemini Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Lỗi không xác định.';
      const displayMessage = errorMessage.includes("503") 
        ? `**Máy chủ AI đang quá tải (Lỗi 503):**\n\nVui lòng đợi một lát và thử lại. Gói miễn phí có thể gặp tình trạng này khi cao điểm.`
        : errorMessage.includes("429")
        ? `**Hết hạn mức hoặc quá nhanh (Lỗi 429):**\n\nVui lòng chậm lại một chút hoặc kiểm tra hạn mức API trong Google AI Studio.`
        : `**Lỗi kết nối AI (Gemini):**\n\n\`\`\`\n${errorMessage}\n\`\`\`\n\nGhi chú: Gói **Pro** đã yêu cầu trả phí từ 04/2026, hãy đảm bảo bạn dùng model **Flash**.`;
      setMessages(prev => [...prev, { role: 'assistant', content: displayMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] md:h-[600px] max-h-[80vh] md:max-h-none glass-panel rounded-3xl border-[var(--panel-border)] overflow-hidden shadow-2xl relative">
      {/* Confirmation Overlay */}
      {showConfirm && (
        <div className="absolute inset-x-0 bottom-24 z-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-[var(--panel-bg)] border border-emerald-500/30 rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4">
             <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
                <AlertCircle className="text-emerald-500" size={18} />
                <span>Gửi câu hỏi này tới AI?</span>
             </div>
             <div className="flex gap-2">
                <button 
                  onClick={() => setShowConfirm(false)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-xs font-bold uppercase transition-colors"
                >
                  <X size={14} /> Hủy
                </button>
                <button 
                  onClick={handleSend}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500 text-[#0A0A0C] text-xs font-bold uppercase shadow-[0_0_10px_rgba(34,197,94,0.3)] hover:bg-emerald-400 transition-colors"
                >
                  <Check size={14} /> Gửi ngay
                </button>
             </div>
          </div>
        </div>
      )}

      <div className="p-5 border-b border-[var(--panel-border)] bg-white/5 dark:bg-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 border border-emerald-500/30">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-bold highlight-text text-sm tracking-tight uppercase">AI LABORATORY ASSISTANT</h3>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="mono-label !opacity-100 text-emerald-500">Live Connection</p>
            </div>
          </div>
        </div>
        <div className="mono-label text-slate-400 dark:text-slate-500">MODEL: GEMINI-2.5-FLASH</div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((m, i) => (
          <div key={i} className={cn(
            "flex gap-4 max-w-[90%]",
            m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto text-left"
          )}>
            <div className={cn(
              "p-4 rounded-2xl text-sm leading-relaxed border transition-colors",
              m.role === 'user' 
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:bg-emerald-500/15 dark:border-emerald-500/40 dark:text-emerald-300" 
                : "bg-slate-100 dark:bg-slate-800/60 border-[var(--panel-border)] text-slate-700 dark:text-slate-200"
            )}>
              <ReactMarkdown 
                 components={{
                    p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                    ul: ({children}) => <ul className="list-disc pl-4 mb-2">{children}</ul>,
                    pre: ({children}) => <pre className="bg-slate-200 dark:bg-black/20 p-3 rounded-md text-xs whitespace-pre-wrap my-2">{children}</pre>,
                    li: ({children}) => <li className="mb-1">{children}</li>,
                    code: ({children}) => <code className="bg-slate-200 dark:bg-white/10 px-1 py-0.5 rounded font-mono text-[11px] text-emerald-600 dark:text-emerald-400">{children}</code>,
                    strong: ({children}) => <strong className="font-bold highlight-text">{children}</strong>
                 }}
              >
                {m.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 mr-auto items-center text-emerald-500/50 p-4">
            <Loader2 className="animate-spin" size={16} />
            <span className="mono-label !opacity-100">AI Logic Processing...</span>
          </div>
        )}
      </div>

      <div className="p-6 bg-slate-50 dark:bg-slate-900/60 border-t border-[var(--panel-border)] flex gap-3 items-end">
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              initiateSend();
            }
          }}
          placeholder="Enter query into molecular core..."
          className="flex-1 bg-white dark:bg-[#0A0A0C] border border-[var(--panel-border)] rounded-xl px-5 py-3 text-sm highlight-text focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono resize-none min-h-[46px]"
        />
        <button
          onClick={initiateSend}
          disabled={isLoading || !input.trim()}
          className="bg-emerald-500 text-[#0A0A0C] p-3 rounded-xl hover:bg-emerald-400 transition-all disabled:opacity-50 shadow-[0_0_15px_rgba(34,197,94,0.3)] active:scale-95 flex-shrink-0"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
