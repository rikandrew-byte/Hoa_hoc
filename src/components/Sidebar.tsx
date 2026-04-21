import { motion } from 'framer-motion';
import { Atom, ChevronRight } from 'lucide-react';
import { CURRICULUM } from '../data/curriculum';
import { cn } from '../lib/utils';
import { Lesson } from '../types';

interface SidebarProps {
  activeTab: 'content' | 'lab' | 'ai' | 'practice';
  selectedLesson: Lesson | null;
  onSelectLesson: (lesson: Lesson | null) => void;
  onTabChange: (tab: 'content' | 'lab' | 'ai' | 'practice') => void;
  isDark: boolean;
}

export function Sidebar({ activeTab, selectedLesson, onSelectLesson, onTabChange, isDark }: SidebarProps) {
  return (
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
  );
}