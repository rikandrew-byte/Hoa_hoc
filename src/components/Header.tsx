import { motion, AnimatePresence } from 'framer-motion';
import { Beaker, BrainCircuit, BookOpen, LayoutGrid, Sun, Moon, GraduationCap, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  activeTab: 'content' | 'lab' | 'ai' | 'practice';
  onTabChange: (tab: 'content' | 'lab' | 'ai' | 'practice') => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Header({ activeTab, onTabChange, isDark, onToggleTheme }: HeaderProps) {
  return (
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
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id as 'content' | 'lab' | 'ai' | 'practice')}
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
            onClick={onToggleTheme}
            className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--panel-bg)] border border-[var(--panel-border)] text-[var(--text-secondary)] hover:text-emerald-500 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
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
  );
}