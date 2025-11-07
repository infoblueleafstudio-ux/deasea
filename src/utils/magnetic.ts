type MagneticOptions = {
  strength?: number;
  maxOffset?: number;
  ease?: number;
};

const defaultOptions: Required<MagneticOptions> = {
  strength: 0.25,
  maxOffset: 24,
  ease: 0.18
};

type CleanupFn = () => void;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const createMagneticHandler = (element: HTMLElement, options: Required<MagneticOptions>): CleanupFn => {
  const state = {
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    rafId: 0,
    active: false
  };

  const animate = () => {
    state.currentX += (state.targetX - state.currentX) * options.ease;
    state.currentY += (state.targetY - state.currentY) * options.ease;
    element.style.translate = `${state.currentX}px ${state.currentY}px`;
    if (state.active || Math.abs(state.currentX) > 0.1 || Math.abs(state.currentY) > 0.1) {
      state.rafId = requestAnimationFrame(animate);
    } else {
      state.rafId = 0;
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (event.clientX - centerX) * options.strength;
    const deltaY = (event.clientY - centerY) * options.strength;

    state.targetX = clamp(deltaX, -options.maxOffset, options.maxOffset);
    state.targetY = clamp(deltaY, -options.maxOffset, options.maxOffset);

    if (!state.rafId) {
      state.rafId = requestAnimationFrame(animate);
    }
  };

  const reset = () => {
    state.active = false;
    state.targetX = 0;
    state.targetY = 0;
    if (!state.rafId) {
      state.rafId = requestAnimationFrame(animate);
    }
  };

  const handleMouseEnter = () => {
    state.active = true;
    if (!state.rafId) {
      state.rafId = requestAnimationFrame(animate);
    }
  };

  const handleMouseLeave = () => {
    reset();
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
      state.rafId = 0;
    }
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
    element.style.translate = '0px 0px';
  };
};

export const initMagnetic = (selector = '.magnetic-target', options?: MagneticOptions): CleanupFn => {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const config: Required<MagneticOptions> = {
    strength: options?.strength ?? defaultOptions.strength,
    maxOffset: options?.maxOffset ?? defaultOptions.maxOffset,
    ease: options?.ease ?? defaultOptions.ease
  };

  const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
  const cleanups = elements.map((element) => createMagneticHandler(element, config));

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
};

