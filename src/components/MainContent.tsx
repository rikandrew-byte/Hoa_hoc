import { motion } from 'framer-motion';
import { BookOpen, AlertCircle, Trophy, GraduationCap, BrainCircuit, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Lesson } from '../types';
import { PeriodicTable } from './PeriodicTable';
import { Exercise } from './Exercise';
import { AIChatbox } from './AIChatbox';

interface MainContentProps {
  activeTab: 'content' | 'lab' | 'ai' | 'practice';
  selectedLesson: Lesson | null;
  onSelectLesson: (lesson: Lesson | null) => void;
  onTabChange: (tab: 'content' | 'lab' | 'ai' | 'practice') => void;
  selectedConcept: {id: string; title: string; content: string} | null;
  onSelectConcept: (concept: {id: string; title: string; content: string} | null) => void;
  selectedLab: {id: string; title: string; description: string} | null;
  onSelectLab: (lab: {id: string; title: string; description: string} | null) => void;
}

export function MainContent({ 
  activeTab, 
  selectedLesson, 
  onSelectLesson, 
  onTabChange,
  selectedConcept,
  onSelectConcept,
  selectedLab,
  onSelectLab,
}: MainContentProps) {
  return (
    <div className={cn(
      "flex-1 overflow-y-auto pr-2 scrollbar-hide pb-20 lg:pb-0",
      activeTab === 'content' && !selectedLesson && "hidden lg:block" // Hide content area on mobile if no lesson picked (show list instead)
    )}>
      <motion.div
        key={activeTab + (selectedLesson?.id || '')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full"
      >
        {activeTab === 'content' && (
          <div className="glass-panel rounded-3xl p-6 md:p-10 min-h-[calc(100vh-160px)] lg:min-h-0 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 mono-label text-[40px] opacity-[0.03] select-none pointer-events-none">DATABASE_ACCESS</div>
            
            {selectedLesson ? (
              <>
                <div className="flex items-center gap-4 mb-10">
                  <button 
                    onClick={() => onSelectLesson(null)}
                    className="lg:hidden flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-[10px] font-mono border border-emerald-500/20"
                  >
                    ← Quay lại danh mục
                  </button>
                  <div className="hidden lg:block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-mono rounded">
                    REF_ID: {selectedLesson.id}
                  </div>
                  <div className="h-px flex-1 bg-[var(--panel-border)]" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black highlight-text mb-8 tracking-tight">{selectedLesson.title}</h2>
                
                <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
                  <div className="max-w-none text-slate-600 dark:text-slate-200 text-base md:text-lg leading-relaxed font-sans mb-12">
                    <p className="mb-4">{selectedLesson.content}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div 
                      onClick={() => selectedLesson.coreConcepts?.[0] && onSelectConcept(selectedLesson.coreConcepts[0])}
                      className="p-6 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/30 group hover:border-emerald-500/50 transition-colors cursor-pointer"
                    >
                      <div className="mono-label mb-4 text-emerald-500">Core Concepts</div>
                      <ul className="space-y-3">
                        {selectedLesson.coreConcepts?.map((item) => (
                          <li 
                            key={item.id} 
                            onClick={(e) => { e.stopPropagation(); onSelectConcept(item); }}
                            className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium hover:text-emerald-500 cursor-pointer"
                          >
                            <div className="w-1 h-1 bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,1)]" />
                            {item.title}
                          </li>
                        )) || ['Chưa có dữ liệu'].map(tag => (
                          <li key={tag} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                            <div className="w-1 h-1 bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,1)]" />
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div 
                      onClick={() => selectedLesson.labRequirements?.[0] && onSelectLab(selectedLesson.labRequirements[0])}
                      className="p-6 rounded-2xl bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/30 group hover:border-blue-500/50 transition-colors cursor-pointer"
                    >
                      <div className="mono-label mb-4 text-blue-500">Lab Requirements</div>
                      <ul className="space-y-3">
                        {selectedLesson.labRequirements?.map((item) => (
                          <li 
                            key={item.id} 
                            onClick={(e) => { e.stopPropagation(); onSelectLab(item); }}
                            className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium hover:text-blue-500 cursor-pointer"
                          >
                            <div className="w-1 h-1 bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,1)]" />
                            {item.title}
                          </li>
                        )) || ['Chưa có dữ liệu'].map(tag => (
                          <li key={tag} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                            <div className="w-1 h-1 bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,1)]" />
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Detail Modals */}
                  {selectedConcept && (
                    <div 
                      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                      onClick={() => onSelectConcept(null)}
                    >
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-panel rounded-3xl p-8 max-w-lg w-full border-2 border-emerald-500/50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-emerald-500">{selectedConcept.title}</h3>
                          <button onClick={() => onSelectConcept(null)} className="p-2 hover:bg-emerald-500/20 rounded-lg transition-colors">
                            <X size={20} className="text-emerald-500" />
                          </button>
                        </div>
                        <p className="text-slate-600 dark:text-slate-200 leading-relaxed">{selectedConcept.content}</p>
                      </motion.div>
                    </div>
                  )}
                  
                  {selectedLab && (
                    <div 
                      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                      onClick={() => onSelectLab(null)}
                    >
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-panel rounded-3xl p-8 max-w-lg w-full border-2 border-blue-500/50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-blue-500">{selectedLab.title}</h3>
                          <button onClick={() => onSelectLab(null)} className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors">
                            <X size={20} className="text-blue-500" />
                          </button>
                        </div>
                        <p className="text-slate-600 dark:text-slate-200 leading-relaxed">{selectedLab.description}</p>
                      </motion.div>
                    </div>
                  )}

                  {selectedLesson.exercises && selectedLesson.exercises.length > 0 && (
                    <div className="p-8 rounded-3xl bg-emerald-500/5 border border-dashed border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                             <GraduationCap size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold highlight-text uppercase text-sm">Sẵn sàng kiểm tra?</h4>
                             <p className="text-xs text-slate-500 font-mono">Đã có {selectedLesson.exercises.length} câu hỏi luyện tập cho bài học này.</p>
                          </div>
                       </div>
                       <button 
                        onClick={() => onTabChange('practice')}
                        className="px-6 py-2.5 rounded-xl bg-emerald-500 text-[#0A0A0C] font-bold uppercase text-[10px] tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:bg-emerald-400 transition-all active:scale-95 whitespace-nowrap"
                       >
                         BẮT ĐẦU LUYỆN TẬP
                       </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-10 animate-pulse" />
                  <div className="w-24 h-24 rounded-full border border-emerald-500/20 flex items-center justify-center relative bg-[var(--bg-main)]">
                    <BookOpen size={48} className="text-emerald-500/20" />
                  </div>
                </div>
                <div className="max-w-xs space-y-3">
                  <h3 className="highlight-text font-bold tracking-wider uppercase text-sm">Laboratory Initializing...</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-mono">Select a module from the command panel to synchronize course data.</p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'lab' && (
          <div className="glass-panel rounded-3xl p-6 md:p-10 min-h-[calc(100vh-160px)] lg:min-h-0 relative">
             <div className="absolute top-0 right-0 p-8 mono-label text-[40px] opacity-[0.03] select-none pointer-events-none">PERIODIC_SCANNER</div>
            <div className="mb-12">
              <h2 className="text-3xl font-black highlight-text mb-2 uppercase tracking-tighter">Bản đồ Nguyên tố</h2>
              <p className="mono-label text-emerald-500">Atomic weight and valence state analyzer</p>
            </div>
            <PeriodicTable />
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="space-y-8">
            <div className="glass-panel rounded-3xl p-6 md:p-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 mono-label text-[40px] opacity-[0.03] select-none pointer-events-none">TRAINING_SIMULATION</div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black highlight-text mb-4 tracking-tighter uppercase">Trung Tâm Luyện Tập</h2>
                  <div className="flex items-center gap-2 mb-6">
                     <Trophy size={16} className="text-emerald-500" />
                     <span className="mono-label text-emerald-500">Practice module initialized for current context</span>
                  </div>
                  
                  {selectedLesson ? (
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-lg font-mono leading-relaxed">
                      Đang tải các câu hỏi mô phỏng cho bài: <span className="text-emerald-500 font-bold">{selectedLesson.title}</span>. 
                      Hãy kiểm duyệt kiến thức phân tử của bạn ngay bây giờ.
                    </p>
                  ) : (
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 max-w-xl">
                       <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                          <AlertCircle size={24} />
                       </div>
                       <div>
                         <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Thiếu dữ liệu mục tiêu</h4>
                         <p className="text-xs font-mono leading-relaxed opacity-80">
                           Hệ thống chưa nhận diện được bài học cần luyện tập. Vui lòng quay lại tab <button onClick={() => onTabChange('content')} className="underline font-bold hover:text-red-400">Dữ liệu</button> và chọn một bài học để bắt đầu.
                         </p>
                       </div>
                    </div>
                  )}
                </div>
            </div>
            
            {selectedLesson && (
               <Exercise 
                questions={selectedLesson.exercises || []} 
                onComplete={() => {
                  onTabChange('content');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
               />
            )}
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="space-y-6 pb-6">
             <div className="glass-panel rounded-3xl p-6 md:p-10 overflow-hidden relative">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,1)]" />
                      <span className="mono-label text-emerald-500">Neural Link Stable</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black highlight-text mb-4 tracking-tighter uppercase">Thầy giáo AI</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm font-mono leading-relaxed">
                      Truy cập trực tiếp vào lõi xử lý Gemini để phân tích cấu trúc, cân bằng phương trình và hướng dẫn thí nghiệm.
                    </p>
                  </div>
                  <div className="hidden md:block">
                     <div className="w-28 h-28 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center relative group">
                        <BrainCircuit size={48} className="text-emerald-500 transition-all group-hover:scale-110" />
                        <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 opacity-[0.02] transform rotate-12 pointer-events-none">
                  <BrainCircuit size={300} />
                </div>
             </div>
             <AIChatbox />
          </div>
        )}
      </motion.div>
    </div>
  );
}