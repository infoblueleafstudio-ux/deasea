import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { initMagnetic } from '../utils/magnetic';

const POSITION_SPRING = { stiffness: 360, damping: 40, mass: 0.65 };
const SCALE_SPRING = { stiffness: 260, damping: 24, mass: 0.35 };

type CursorTheme = 'light' | 'dark';

const prefersCoarsePointer = () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

export default function Cursor() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<CursorTheme>('light');

  const hasShownRef = useRef(false);
  const enabled = useMemo(() => typeof window !== 'undefined' && !prefersCoarsePointer(), []);

  const x = useSpring(0, POSITION_SPRING);
  const y = useSpring(0, POSITION_SPRING);
  const scale = useSpring(1, SCALE_SPRING);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const cleanupMagnetic = initMagnetic('.magnetic-target');
    return () => cleanupMagnetic();
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const body = document.body;
    body.classList.add('has-custom-cursor');

    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!hasShownRef.current) {
        setIsVisible(true);
        hasShownRef.current = true;
      }
    };

    const resolveCursorTarget = (event: MouseEvent): HTMLElement | null => {
      const target = event.target as HTMLElement | null;
      if (!target) return null;
      return target.closest('[data-cursor], .cursor-hover');
    };

    const handleMouseEnter = (event: MouseEvent) => {
      const target = resolveCursorTarget(event);
      if (!target) {
        return;
      }

      if (target.classList.contains('cursor-hover')) {
        setIsActive(true);
      }

      const variant = target.getAttribute('data-cursor');
      setTheme(variant === 'dark' ? 'dark' : 'light');
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const target = resolveCursorTarget(event);
      if (!target) {
        return;
      }

      if (target.classList.contains('cursor-hover')) {
        setIsActive(false);
      }

      setTheme('light');
    };

    const handleWindowLeave = () => {
      setIsVisible(false);
      hasShownRef.current = false;
      setIsActive(false);
      setTheme('light');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter, true);
    document.addEventListener('mouseout', handleMouseLeave, true);
    window.addEventListener('blur', handleWindowLeave);
    document.addEventListener('mouseleave', handleWindowLeave);

    return () => {
      body.classList.remove('has-custom-cursor');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter, true);
      document.removeEventListener('mouseout', handleMouseLeave, true);
      window.removeEventListener('blur', handleWindowLeave);
      document.removeEventListener('mouseleave', handleWindowLeave);
    };
  }, [enabled, x, y]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    scale.set(isActive ? 1.35 : 1);
  }, [enabled, isActive, scale]);

  if (!enabled || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className={`custom-cursor custom-cursor--${theme}${isActive ? ' is-active' : ''}`}
      style={{ x, y, scale }}
      aria-hidden
    >
      <span className="custom-cursor__dot" />
    </motion.div>
  );
}

