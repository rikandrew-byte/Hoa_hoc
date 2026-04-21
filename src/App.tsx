import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Use framer-motion directly
import { BookOpen, BrainCircuit, GraduationCap, LayoutGrid } from 'lucide-react'; // Only icons needed for mobile nav
import { cn } from './lib/utils';
import { Lesson } from './types';

// Import new components
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

export default function App() {
  const [activeTab, setActiveTab] = useState<'content' | 'lab' | 'ai' | 'practice'>('content');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<{id: string; title: string; content: string} | null>(null);
  const [selectedLab, setSelectedLab] = useState<{id: string; title: string; description: string} | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Simulate loading for smooth transitions
  const handleTabChange = (tab: typeof activeTab) => {
    setIsLoading(true);
    setIsSidebarOpen(false); // Close sidebar on tab change
    setTimeout(() => {
      setActiveTab(tab);
      setIsLoading(false);
    }, 150);
  };

  const handleToggleTheme = () => {
    setIsDark(prev => !prev);
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

        <Header 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
          isDark={isDark} 
          onToggleTheme={handleToggleTheme} 
        />

        <main className="flex-1 overflow-hidden relative">
          <div className="max-w-7xl mx-auto h-full px-4 flex flex-col lg:flex-row gap-6 lg:gap-8 py-6 lg:py-8 overflow-hidden">
            
            {/* Left Navigation: Chapters & Lessons */}
            <Sidebar
              activeTab={activeTab}
              selectedLesson={selectedLesson}
              onSelectLesson={(lesson) => {
                setSelectedLesson(lesson);
                setIsSidebarOpen(false); // Close drawer after selection
              }}
              onTabChange={handleTabChange}
              isDark={isDark}
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            {/* Main Content Area */}
            <div className={cn(
              "flex-1 flex flex-col overflow-hidden pb-16 md:pb-0", // Add padding for mobile nav
              activeTab === 'ai' && "pb-20" // Extra padding for AI input
            )}>
              <MainContent
                activeTab={activeTab}
                selectedLesson={selectedLesson}
                onSelectLesson={setSelectedLesson}
                onTabChange={handleTabChange}
                selectedConcept={selectedConcept}
                onSelectConcept={setSelectedConcept}
                selectedLab={selectedLab}
                onSelectLab={setSelectedLab}
                onOpenSidebar={() => setIsSidebarOpen(true)}
              />
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
