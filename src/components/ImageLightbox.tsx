'use client';
import { useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ImageLightboxProps {
  images: string[];
  alts: string[];
  activeIndex: number;
  onClose: () => void;
  onNavigate?: (index: number) => void;
}

export default function ImageLightbox({ images, alts, activeIndex, onClose, onNavigate }: ImageLightboxProps) {
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < images.length - 1;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev && onNavigate) onNavigate(activeIndex - 1);
    if (e.key === 'ArrowRight' && hasNext && onNavigate) onNavigate(activeIndex + 1);
  }, [onClose, onNavigate, activeIndex, hasPrev, hasNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors rounded-sm z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </button>

      {/* Prev */}
      {hasPrev && onNavigate && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors rounded-sm z-10"
          onClick={e => { e.stopPropagation(); onNavigate(activeIndex - 1); }}
          aria-label="Previous image"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={images[activeIndex]}
          alt={alts[activeIndex] ?? ''}
          className="max-w-full max-h-[90vh] object-contain shadow-2xl"
        />
      </div>

      {/* Next */}
      {hasNext && onNavigate && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors rounded-sm z-10"
          onClick={e => { e.stopPropagation(); onNavigate(activeIndex + 1); }}
          aria-label="Next image"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-widest">
          {activeIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
