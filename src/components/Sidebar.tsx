import { motion } from 'framer-motion';
import { Atom, ChevronRight, X } from 'lucide-react';
import { CURRICULUM } from '../data/curriculum';
import { cn } from '../lib/utils';
import { Lesson } from '../types';

interface SidebarProps {
  activeTab: 'content' | 'lab' | 'ai' | 'practice';
  selectedLesson: Lesson | null;
  onSelectLesson: (lesson: Lesson | null) => void;
  onTabChange: (tab: 'content' | 'lab' | 'ai' | 'practice') => void;
  isDark: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ activeTab, selectedLesson, onSelectLesson, onTabChange, isDark, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "lg:w-[360px] flex-shrink-0 flex flex-col transition-all duration-500 z-[70]",
        // Mobile behavior: Drawer
        "fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[var(--bg-main)] lg:relative lg:translate-x-0 lg:bg-transparent",
        isOpen ? "translate-x-0" : "-translate-x-full",
        activeTab !== 'content' && "lg:hidden"
      )}>
        <motion.section 
          className="glass-panel rounded-r-2xl lg:rounded-2xl p-6 h-full flex flex-col border-y-0 border-l-0 lg:border-y lg:border-l"
          initial={false}
          animate={{ x: 0 }}
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--panel-border)]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Atom className="text-emerald-500" size={16} />
              </div>
              <h2 className="mono-label !opacity-80">Danh mục</h2>
            </div>
            
            <div className="flex items-center gap-2">
               <div className="badge badge-success">V.08.26</div>
               <button 
                onClick={onClose}
                className="lg:hidden p-2 rounded-xl hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
               >
                 <X size={18} />
               </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-1 space-y-6 scrollbar-hide pb-20 lg:pb-0">
            {CURRICULUM.map((chapter, chapterIndex) => (
              <div key={chapter.id} className="space-y-3">
                <div className={cn(
                  "flex items-center gap-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] border-l-2 pl-3",
                  isDark ? `chapter-title chapter-title-${(chapterIndex % 4) + 1}` : "text-emerald-600"
                )}>
                  {chapter.title}
                </div>
                <div className="grid gap-1">
                  {chapter.lessons.map((lesson) => (
                    <motion.button
                      key={lesson.id}
                      onClick={() => {
                        onSelectLesson(lesson);
                        onTabChange('content');
                      }}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm transition-all duration-300 group relative overflow-hidden",
                        selectedLesson?.id === lesson.id 
                          ? "bg-gradient-to-r from-emerald-500/15 to-emerald-500/5 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-medium shadow-sm" 
                          : "border border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)] hover:border-[var(--panel-border)]"
                      )}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex-1 truncate pr-2">{lesson.title}</span>
                      <ChevronRight className={cn(
                        "opacity-30 group-hover:opacity-100 transition-all",
                        selectedLesson?.id === lesson.id && "opacity-100 text-emerald-500"
                      )} size={14} />
                      {selectedLesson?.id === lesson.id && (
                        <motion.div 
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-500 rounded-r-full"
                          layoutId="activeLessonIndicator"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </aside>
    </>
  );
}