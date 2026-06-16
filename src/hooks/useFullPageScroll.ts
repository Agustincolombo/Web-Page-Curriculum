import { useEffect, useRef } from "react";

export function useFullPageScroll(sectionIds: string[]) {
  const isScrolling = useRef(false);
  const targetIndex = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const clamp = (n: number) =>
      Math.max(0, Math.min(n, sectionIds.length - 1));

    const DURATION = 400;
    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const scrollTo = (index: number) => {
      const el = document.getElementById(sectionIds[index]);
      if (!el) return;

      isScrolling.current = true;
      const from = window.scrollY;
      const to = window.scrollY + el.getBoundingClientRect().top;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION, 1);
        window.scrollTo(0, from + (to - from) * ease(progress));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          isScrolling.current = false;
        }
      };

      requestAnimationFrame(tick);
    };

    const navigate = (direction: number) => {
      if (isScrolling.current) return;
      const next = clamp(targetIndex.current + direction);
      targetIndex.current = next;
      scrollTo(next);
    };

    const getCurrentIndex = () => {
      const midpoint = window.innerHeight / 2;
      let current = 0;
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= midpoint) current = i;
      }
      return current;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;
      targetIndex.current = getCurrentIndex();
      navigate(e.deltaY > 0 ? 1 : -1);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        navigate(1);
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        navigate(-1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      if (isScrolling.current) return;
      targetIndex.current = getCurrentIndex();
      navigate(diff > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [sectionIds]);
}
