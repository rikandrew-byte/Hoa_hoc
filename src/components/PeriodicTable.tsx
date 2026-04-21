import { PERIODIC_ELEMENTS } from '../data/curriculum';
import { Element } from '../types';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {PERIODIC_ELEMENTS.map((el) => (
          <motion.button
            key={el.symbol}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedElement(el)}
            className={cn(
              "w-14 h-16 flex flex-col items-center justify-center rounded border transition-all relative overflow-hidden",
              el.category === 'metal' ? "bg-red-500/10 border-red-500/40 text-red-600 dark:text-red-400 hover:bg-red-500/20" :
              el.category === 'non-metal' ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20" :
              el.category === 'rare-gas' ? "bg-purple-500/10 border-purple-500/40 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20" :
              "bg-slate-500/10 border-slate-500/40 text-slate-500 dark:text-slate-400"
            )}
          >
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-white to-transparent" />
            <span className="text-[10px] font-mono opacity-80 leading-none mb-1">{el.atomicNumber}</span>
            <span className="text-lg font-black leading-none">{el.symbol}</span>
            <span className="text-[8px] font-mono opacity-40 leading-none mt-1">{el.atomicMass}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedElement && (
          <motion.div
            key={selectedElement.symbol}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-8 rounded-3xl bg-[var(--panel-bg)] border border-[var(--panel-border)] flex flex-col md:flex-row gap-8 items-center shadow-2xl relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-4 mono-label opacity-[0.15] dark:opacity-10 text-[60px] group-hover:opacity-20 transition-opacity">
                {selectedElement.symbol}
             </div>
            
            <div className={cn(
              "w-32 h-32 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl relative",
              selectedElement.category === 'metal' ? "bg-red-500/20 border border-red-500/50" :
              selectedElement.category === 'non-metal' ? "bg-emerald-500/20 border border-emerald-500/50" :
              selectedElement.category === 'rare-gas' ? "bg-purple-500/20 border border-purple-500/50" :
              "bg-slate-500/20 border border-slate-500/50"
            )}>
               <div className={cn(
                 "absolute inset-0 blur-2xl opacity-30",
                 selectedElement.category === 'metal' ? "bg-red-500" :
                 selectedElement.category === 'non-metal' ? "bg-emerald-500" :
                 selectedElement.category === 'rare-gas' ? "bg-purple-500" :
                 "bg-slate-500"
               )} />
              <span className="text-sm font-mono opacity-60 mb-2 relative z-10">{selectedElement.atomicNumber}</span>
              <span className="text-5xl font-black relative z-10">{selectedElement.symbol}</span>
            </div>
            
            <div className="relative z-10 space-y-4">
              <div>
                <h4 className="text-3xl font-black highlight-text uppercase tracking-tight">{selectedElement.name}</h4>
                <p className="mono-label !opacity-100 text-emerald-500 mt-1">Status: Stable Isotope Analyzed</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="mono-label mb-1">Atomic Mass</p>
                  <p className="text-xl font-mono font-bold highlight-text tracking-widest">{selectedElement.atomicMass}</p>
                </div>
                <div>
                  <p className="mono-label mb-1">Classification</p>
                  <p className={cn(
                    "text-xl font-bold uppercase tracking-widest",
                    selectedElement.category === 'metal' ? "text-red-600 dark:text-red-400" :
                    selectedElement.category === 'non-metal' ? "text-emerald-600 dark:text-emerald-400" :
                    selectedElement.category === 'rare-gas' ? "text-purple-600 dark:text-purple-400" :
                    "text-slate-500 dark:text-slate-400"
                  )}>
                    {
                      selectedElement.category === 'metal' ? 'Kim loại' :
                      selectedElement.category === 'non-metal' ? 'Phi kim' :
                      selectedElement.category === 'rare-gas' ? 'Khí hiếm' : 'Khác'
                    }
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
