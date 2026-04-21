import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Award, Lightbulb, Target, Zap } from 'lucide-react';
import { Question } from '../types';
import { cn } from '../lib/utils';

interface ExerciseProps {
  questions: Question[];
  onComplete?: (score: number) => void;
}

export function Exercise({ questions, onComplete }: ExerciseProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Reset state when questions change
  useEffect(() => {
    setCurrentIdx(0);
    setScore(0);
    setShowResult(false);
    resetQuestionState();
  }, [questions]);

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
  };

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    // Add haptic-like feedback
    const button = document.getElementById(`option-${idx}`);
    if (button) {
      button.classList.add('scale-95');
      setTimeout(() => button.classList.remove('scale-95'), 150);
    }
  };

  const handleCheck = () => {
    if (selectedOption === null) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    
    setIsAnswered(true);
    if (selectedOption === questions[currentIdx].correctOption) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      resetQuestionState();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowResult(true);
      onComplete?.(score + (selectedOption === questions[currentIdx].correctOption ? 1 : 0));
    }
  };

  const handleRetry = () => {
    setCurrentIdx(0);
    setScore(0);
    setShowResult(false);
    resetQuestionState();
  };

  if (questions.length === 0) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center p-12 text-center space-y-4 glass-panel rounded-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div 
          className="w-20 h-20 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
           <Lightbulb size={40} />
        </motion.div>
        <h3 className="text-xl font-bold highlight-text uppercase tracking-tight">Chưa có bài tập</h3>
        <p className="text-[var(--text-muted)] text-sm max-w-sm">Chọn một bài học khác để bắt đầu luyện tập.</p>
      </motion.div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 space-y-8 text-center glass-panel rounded-3xl"
      >
        <div className="relative">
           <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-20 animate-pulse" />
           <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 relative z-10">
              <Award size={48} />
           </div>
        </div>
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">KẾT QUẢ PHÂN TÍCH</h2>
          <p className="mono-label text-emerald-500">Subject performance score synchronized</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 w-full max-w-xs">
          <div className="p-4 rounded-2xl bg-white/5 border border-[var(--panel-border)]">
             <p className="mono-label text-[10px] mb-1">Đúng</p>
             <p className="text-2xl font-black text-emerald-500">{score}/{questions.length}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-[var(--panel-border)]">
             <p className="mono-label text-[10px] mb-1">Tỷ lệ</p>
             <p className="text-2xl font-black text-emerald-500">{percentage}%</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm">
          <button 
            onClick={handleRetry}
            className="flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-slate-800 dark:bg-white/5 border border-[var(--panel-border)] text-slate-400 font-bold uppercase text-xs tracking-widest hover:bg-slate-700 dark:hover:bg-white/10 transition-all"
          >
            <RotateCcw size={16} /> THỬ LẠI
          </button>
          <button 
            onClick={() => {
              if (onComplete) onComplete(score);
              // We'll rely on the parent to handle the redirection if needed, 
              // but we can provide a visually distinct "Finish" button
            }}
            className="flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-emerald-500 text-[#0A0A0C] font-bold uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95"
          >
            HOÀN THÀNH
          </button>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIdx];

  return (
    <div className="space-y-8">
      {/* Progress Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 rounded text-[10px] font-mono">
             CORE_DRILL_{currentIdx + 1}
          </div>
          <div className="h-px w-24 bg-[var(--panel-border)] hidden sm:block" />
        </div>
        <div className="text-right">
           <p className="mono-label !opacity-100 text-emerald-500">Progress: {currentIdx + 1}/{questions.length}</p>
           <div className="w-32 h-1.5 bg-slate-100 dark:bg-white/5 rounded-full mt-2 overflow-hidden">
              <motion.div 
                className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              />
           </div>
        </div>
      </div>

      <div className="glass-panel rounded-3xl p-8 md:p-10 space-y-8">
        <h3 className="text-xl md:text-2xl font-bold question-text leading-tight tracking-tight">
           {currentQuestion.text}
        </h3>

        <div className="grid gap-3">
          {currentQuestion.options.map((opt, i) => {
            const isSelected = selectedOption === i;
            const isCorrect = i === currentQuestion.correctOption;
            const showCorrectStatus = isAnswered && isCorrect;
            const showWrongStatus = isAnswered && isSelected && !isCorrect;

            return (
              <button
                key={i}
                onClick={() => handleOptionSelect(i)}
                disabled={isAnswered}
                className={cn(
                    "exercise-choice flex items-center justify-between p-5 rounded-2xl border text-left transition-all group relative overflow-hidden",
                  isSelected 
                    ? "border-emerald-500/50 bg-emerald-500/5 text-slate-900 dark:text-white" 
                    : "border-[var(--panel-border)] hover:border-emerald-500/30 hover:bg-slate-100 dark:hover:bg-white/5",
                  showCorrectStatus && "border-emerald-500 bg-emerald-500/10 text-emerald-500",
                  showWrongStatus && "border-red-500 bg-red-500/10 text-red-500"
                )}
              >
                <div className="flex items-center gap-4 relative z-10">
                   <div className={cn(
                     "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors",
                     isSelected 
                      ? "bg-emerald-500 text-[#0A0A0C]" 
                      : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-neutral-50"
                   )}>
                      {String.fromCharCode(65 + i)}
                   </div>
                   <span className={cn(
                     "font-medium transition-colors",
                     showCorrectStatus ? "text-emerald-600 dark:text-emerald-400" : 
                     showWrongStatus ? "text-red-600 dark:text-red-400" :
                     isSelected ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-neutral-200"
                   )}>{opt}</span>
                </div>
                
                <div className="relative z-10">
                   {showCorrectStatus && <CheckCircle2 size={24} className="text-emerald-500" />}
                   {showWrongStatus && <XCircle size={24} className="text-red-500" />}
                </div>

                {isSelected && !isAnswered && (
                   <motion.div 
                     layoutId="outline"
                     className="absolute inset-0 border-2 border-emerald-500 rounded-2xl pointer-events-none"
                   />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[var(--panel-border)]">
           <AnimatePresence>
             {isAnswered && (
               <motion.button
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 onClick={() => setShowExplanation(!showExplanation)}
                 className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest hover:underline"
               >
                 <Lightbulb size={14} /> {showExplanation ? "Ẩn giải thích" : "Xem lời giải"}
               </motion.button>
             )}
           </AnimatePresence>

           <div className="flex gap-4 w-full sm:w-auto">
             {!isAnswered ? (
               <button
                 onClick={handleCheck}
                 disabled={selectedOption === null}
                 className="flex-1 sm:flex-none px-10 py-3 rounded-xl bg-emerald-500 text-[#0A0A0C] font-bold uppercase text-xs tracking-widest disabled:opacity-50 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
               >
                 XÁC NHẬN
               </button>
             ) : (
               <button
                 onClick={handleNext}
                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-10 py-3 rounded-xl bg-slate-800 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold uppercase text-xs tracking-widest transition-all hover:bg-emerald-500 hover:text-[#0A0A0C]"
               >
                 {currentIdx < questions.length - 1 ? 'CÂU TIẾP THEO' : 'XEM KẾT QUẢ'} <ChevronRight size={16} />
               </button>
             )}
           </div>
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                 <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className="mono-label !opacity-100 text-emerald-500">Phân tích chuyên sâu:</span>
                 </div>
                 <p className="text-sm text-slate-600 dark:text-neutral-50 leading-relaxed font-sans italic">
                    {currentQuestion.explanation}
                 </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
