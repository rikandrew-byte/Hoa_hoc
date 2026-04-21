/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Beaker, BrainCircuit, Atom, ChevronRight, LayoutGrid, Sun, Moon, Trophy, GraduationCap, AlertCircle, Sparkles } from 'lucide-react';
import { CURRICULUM } from './data/curriculum';
import { AIChatbox } from './components/AIChatbox';
import { PeriodicTable } from './components/PeriodicTable';
import { Exercise } from './components/Exercise';
import { cn } from './lib/utils';
import { Lesson } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'content' | 'lab' | 'ai' | 'practice'>('content');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading for smooth transitions
  const handleTabChange = (tab: typeof activeTab) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsLoading(false);
    }, 150);
  };

  return (
    <div className={cn(
      "min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-300 transition-colors duration-500",
      isDark ? "dark" : ""
    )}>
      <div className="h-screen flex flex-col bg-gradient-to-br from-[var(--bg-main)] via-[var(--bg-main)] to-[var(--bg-secondary)] text-[var(--text-main)] overflow-hidden relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Header */}
        <header className="h-16 flex-shrink-0 z-50 bg-[var(--bg-main)]/80 backdrop-blur-2xl border-b border-[var(--panel-border)] relative">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between w-full">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group flex-shrink-0 hover:shadow-emerald-500/40 transition-shadow">
                <Beaker className="text-white transition-transform group-hover:scale-110 group-hover:rotate-12" size={24} />
              </div>
              <div className="hidden xs:block">
                <h1 className="text-base font-bold tracking-wide highlight-text">Lab Hóa Học 8</h1>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <p className="mono-label !opacity-70">System Active</p>
                </div>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center gap-1 p-1.5 bg-[var(--panel-bg)]/50 dark:bg-white/[0.02] rounded-2xl border border-[var(--panel-border)] backdrop-blur-sm">
              {[
                { id: 'content', label: 'Lý thuyết', icon: BookOpen },
                 { id: 'lab', label: 'Bảng tuần hoàn', icon: LayoutGrid },
                 { id: 'practice', label: 'Bài tập', icon: GraduationCap },
                 { id: 'ai', label: 'Thầy giáo AI', icon: BrainCircuit }
              ].map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as typeof activeTab)}
                  className={cn(
                    "relative flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300",
                    activeTab === tab.id 
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25" 
                      : "text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--bg-secondary)]"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon size={15} />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-transparent rounded-xl -z-10"
                      layoutId="activeTabBg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setIsDark(!isDark)}
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--panel-bg)] border border-[var(--panel-border)] text-[var(--text-secondary)] hover:text-emerald-500 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <motion.div
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </button>
              
              <div className="hidden lg:block text-right flex-shrink-0">
                <p className="mono-label !opacity-60">Author: Andrew Tseng</p>
                <p className="text-[10px] font-mono text-emerald-500 flex items-center justify-end gap-1">
                  <Sparkles size={10} />
                  Authenticated Access
                </p>
              </div>
            </motion.div>
          </div>
        </header>

        <main className="flex-1 overflow-hidden relative">
          <div className="max-w-7xl mx-auto h-full px-4 flex flex-col lg:flex-row gap-6 lg:gap-8 py-6 lg:py-8 overflow-hidden">
            
            {/* Left Navigation: Chapters & Lessons */}
            <aside className={cn(
              "lg:w-[360px] flex-shrink-0 overflow-y-auto pr-2 scrollbar-hide transition-all duration-300",
              activeTab !== 'content' && "hidden lg:block",
              selectedLesson && "hidden lg:block"
            )}>
              <motion.section 
                className="glass-panel rounded-2xl p-6 h-fit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--panel-border)]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Atom className="text-emerald-500" size={16} />
                    </div>
                    <h2 className="mono-label !opacity-80">Module đào tạo</h2>
                  </div>
                  <div className="badge badge-success">V.08.26</div>
                </div>
                
                <div className="space-y-5">
                  {CURRICULUM.map((chapter, chapterIndex) => (
                    <motion.div 
                      key={chapter.id} 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: chapterIndex * 0.05 }}
                    >
                      <div className={cn(
                        "flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] border-l-2 pl-3",
                        isDark ? `chapter-title chapter-title-${(chapterIndex % 4) + 1}` : "text-emerald-600"
                      )}>
                        {chapter.title}
                      </div>
                      <div className="grid gap-1.5">
                        {chapter.lessons.map((lesson, lessonIndex) => (
                          <motion.button
                            key={lesson.id}
                            onClick={() => {
                              setSelectedLesson(lesson);
                              handleTabChange('content');
                            }}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm transition-all duration-300 group relative overflow-hidden",
                              selectedLesson?.id === lesson.id 
                                ? "bg-gradient-to-r from-emerald-500/15 to-emerald-500/5 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-medium shadow-sm" 
                                : "border border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)] hover:border-[var(--panel-border)]"
                            )}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="flex-1 truncate pr-2">{lesson.title}</span>
                            <ChevronRight className={cn(
                              "opacity-0 -translate-x-2 text-emerald-500",
                              "group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            )} size={14} />
                            {/* Active indicator */}
                            {selectedLesson?.id === lesson.id && (
                              <motion.div 
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-500 rounded-r-full"
                                layoutId="activeLessonIndicator"
                              />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </aside>

            {/* Main Content Area */}
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
                            onClick={() => setSelectedLesson(null)}
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
                            <div className="p-6 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/30 group hover:border-emerald-500/50 transition-colors">
                              <div className="mono-label mb-4 text-emerald-500">Core Concepts</div>
                              <ul className="space-y-3">
                                {['Công thức hóa học', 'Hóa trị nguyên tố'].map(tag => (
                                  <li key={tag} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                                    <div className="w-1 h-1 bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,1)]" />
                                    {tag}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/30 group hover:border-blue-500/50 transition-colors">
                              <div className="mono-label mb-4 text-blue-500">Lab Requirements</div>
                              <ul className="space-y-3">
                                {['Cân bằng phản ứng', 'Tính theo mol'].map(tag => (
                                  <li key={tag} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                                    <div className="w-1 h-1 bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,1)]" />
                                    {tag}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

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
                                onClick={() => setActiveTab('practice')}
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
                          <p className="text-xs text-slate-500 leading-relaxed font-mono">Select a module from the command panel to synchronize course data.</p>
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
                                   Hệ thống chưa nhận diện được bài học cần luyện tập. Vui lòng quay lại tab <button onClick={() => setActiveTab('content')} className="underline font-bold hover:text-red-400">Dữ liệu</button> và chọn một bài học để bắt đầu.
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
                          setActiveTab('content');
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
          </div>
        </main>

        {/* Enhanced Floating Actions for mobile */}
        <motion.div 
          className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 glass-panel shadow-2xl rounded-2xl px-5 py-3 flex items-center gap-2 z-50 border border-[var(--panel-border)]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
        >
          {[
            { id: 'content', icon: BookOpen, label: 'Lý thuyết' },
             { id: 'lab', icon: LayoutGrid, label: 'Bảng tuần hoàn' },
             { id: 'practice', icon: GraduationCap, label: 'Bài tập' },
             { id: 'ai', icon: BrainCircuit, label: 'Thầy giáo AI' }
          ].map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as typeof activeTab)}
              className={cn(
                "relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300",
                activeTab === tab.id 
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30" 
                  : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
              )}
              whileTap={{ scale: 0.9 }}
              aria-label={tab.label}
            >
              <tab.icon size={22} />
              {activeTab === tab.id && (
                <motion.div 
                  className="absolute -top-1 w-1 h-1 rounded-full bg-emerald-500"
                  layoutId="mobileTabIndicator"
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
