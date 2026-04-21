import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERIODIC_ELEMENTS } from '../data/curriculum';
import { cn } from '../lib/utils';
import { Element } from '../types';
import { X } from 'lucide-react';

const categoryColors: Record<string, { bg: string; border: string; text: string; shadow: string; }> = {
  'non-metal': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', shadow: 'hover:shadow-emerald-500/20' },
  'rare-gas': { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', shadow: 'hover:shadow-purple-500/20' },
  'metal': { bg: 'bg-sky-500/10', border: 'border-sky-500/30', text: 'text-sky-400', shadow: 'hover:shadow-sky-500/20' },
  'default': { bg: 'bg-slate-800/20', border: 'border-slate-700/50', text: 'text-slate-400', shadow: 'hover:shadow-slate-500/20' },
};

function ElementCell({ element, onSelect }: { element: Element; onSelect: (el: Element) => void; }) {
  const color = categoryColors[element.category] || categoryColors.default;

  return (
    <motion.div
      style={{ gridRowStart: element.row, gridColumnStart: element.col }}
      className={cn(
        'p-1 rounded-md flex flex-col justify-center items-center cursor-pointer transition-all duration-200 aspect-square',
        color.bg, color.border, color.text, color.shadow
      )}
      onClick={() => onSelect(element)}
      whileHover={{ scale: 1.1, zIndex: 10, transformOrigin: 'center' }}
      layoutId={`element-${element.symbol}`}
      title={element.name}
    >
      <div className="text-[10px] sm:text-xs font-light opacity-70 -mb-1">{element.atomicNumber}</div>
      <div className="text-base sm:text-xl font-bold">{element.symbol}</div>
      <div className="text-[7px] sm:text-[9px] font-mono truncate w-full text-center opacity-80">{element.name}</div>
    </motion.div>
  );
}

export function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  return (
    <div className="relative">
      <div className="md:hidden absolute -top-8 right-0 flex items-center gap-1 text-xs font-mono text-slate-500 animate-pulse-soft">
        <span>Trượt để xem</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>

      <div className="overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 md:mx-0 md:px-0">
        <div 
          className="grid gap-1 min-w-[700px] md:min-w-full"
          style={{
            gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
            gridAutoRows: '1fr',
          }}
        >
          {PERIODIC_ELEMENTS.map(element => (
            <ElementCell key={element.symbol} element={element} onSelect={setSelectedElement} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedElement && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedElement(null)}
          >
            <motion.div
              layoutId={`element-${selectedElement.symbol}`}
              className={cn(
                "relative w-full max-w-xs p-6 rounded-2xl flex flex-col items-center",
                (categoryColors[selectedElement.category] || categoryColors.default).bg,
                (categoryColors[selectedElement.category] || categoryColors.default).border,
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={cn("absolute -top-4 -left-4 px-3 py-1 text-4xl font-black opacity-20", (categoryColors[selectedElement.category] || categoryColors.default).text)}>
                {selectedElement.atomicNumber}
              </div>
              <h2 className={cn("text-6xl font-bold", (categoryColors[selectedElement.category] || categoryColors.default).text)}>{selectedElement.symbol}</h2>
              <h3 className="text-2xl font-semibold text-white mt-1">{selectedElement.name}</h3>
              <p className="mono-label mt-4">Khối lượng nguyên tử: {selectedElement.atomicMass}</p>
              <p className={cn("mt-2 px-3 py-1 rounded-full text-xs font-bold", (categoryColors[selectedElement.category] || categoryColors.default).bg, (categoryColors[selectedElement.category] || categoryColors.default).text)}>
                {selectedElement.category}
              </p>
              <button 
                onClick={() => setSelectedElement(null)} 
                className="absolute top-2 right-2 p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={20} className="text-white/70" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}