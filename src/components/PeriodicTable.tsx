import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERIODIC_ELEMENTS } from '../data/curriculum';
import { cn } from '../lib/utils';
import { Element } from '../types';
import { X } from 'lucide-react';

const categoryColors: Record<string, { bg: string; border: string; text: string; shadow: string; label: string; }> = {
  'alkali': { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', shadow: 'hover:shadow-red-500/20', label: 'Kim loại kiềm' },
  'alkaline-earth': { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', shadow: 'hover:shadow-orange-500/20', label: 'Kim loại kiềm thổ' },
  'transition-metal': { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', shadow: 'hover:shadow-amber-500/20', label: 'Kim loại chuyển tiếp' },
  'post-transition-metal': { bg: 'bg-sky-500/10', border: 'border-sky-500/30', text: 'text-sky-400', shadow: 'hover:shadow-sky-500/20', label: 'Kim loại sau chuyển tiếp' },
  'metalloid': { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400', shadow: 'hover:shadow-teal-500/20', label: 'Á kim' },
  'non-metal': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', shadow: 'hover:shadow-emerald-500/20', label: 'Phi kim đa nguyên tử' },
  'halogen': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', shadow: 'hover:shadow-blue-500/20', label: 'Halogen' },
  'noble-gas': { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', shadow: 'hover:shadow-purple-500/20', label: 'Khí hiếm' },
  'lanthanide': { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', shadow: 'hover:shadow-pink-500/20', label: 'Họ Lanthan' },
  'actinide': { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', shadow: 'hover:shadow-rose-500/20', label: 'Họ Actin' },
  'default': { bg: 'bg-slate-800/20', border: 'border-slate-700/50', text: 'text-slate-400', shadow: 'hover:shadow-slate-500/20', label: 'Chưa xác định' },
};

function ElementCell({ element, onSelect }: { element: Element; onSelect: (el: Element) => void; }) {
  const color = categoryColors[element.category] || categoryColors.default;

  return (
    <motion.div
      style={{ gridRowStart: element.row, gridColumnStart: element.col }}
      className={cn(
        'p-0.5 md:p-1 rounded-sm md:rounded-md flex flex-col justify-center items-center cursor-pointer transition-all duration-200 aspect-square',
        color.bg, color.border, color.text, color.shadow
      )}
      onClick={() => onSelect(element)}
      whileHover={{ scale: 1.1, zIndex: 10, transformOrigin: 'center' }}
      layoutId={`element-${element.symbol}`}
      title={element.name}
    >
      <div className="text-[6px] md:text-xs font-light opacity-70 -mb-0.5 md:-mb-1">{element.atomicNumber}</div>
      <div className="text-[10px] md:text-xl font-bold leading-none">{element.symbol}</div>
      <div className="text-[5px] md:text-[9px] font-mono truncate w-full text-center opacity-80">{element.name}</div>
    </motion.div>
  );
}

export function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  return (
    <div className="relative">
      <div className="lg:hidden absolute -top-8 right-0 flex items-center gap-1 text-[10px] font-mono text-slate-500 animate-pulse-soft">
        <span>Vuốt để xem</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>

      <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0">
        <div 
          className="grid gap-0.5 md:gap-1 min-w-[500px] lg:min-w-full"
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
              <p className="mono-label mt-4">Nguyên tử khối: {selectedElement.atomicMass}</p>
              <p className={cn("mt-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", (categoryColors[selectedElement.category] || categoryColors.default).bg, (categoryColors[selectedElement.category] || categoryColors.default).text)}>
                {(categoryColors[selectedElement.category] || categoryColors.default).label}
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