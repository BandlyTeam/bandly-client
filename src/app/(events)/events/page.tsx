'use client'
import s from './page.module.scss'
import { useRef, useEffect, useState } from 'react';
import Header from '@/components/Header/Header';

const events = [
  {
    date: 'MAY 31, 2025',
    city: 'CHARLOTTE, NORTH CAROLINA, UNITED STATES',
    venue: 'BANK OF AMERICA STADIUM',
    tickets: true,
    enhanced: false,
    travel: true,
    takeover: true,
    info: true,
  },
  {
    date: 'JUNE 3, 2025',
    city: 'ATLANTA, GEORGIA, UNITED STATES',
    venue: 'MERCEDES-BENZ STADIUM',
    tickets: true,
    enhanced: false,
    travel: true,
    takeover: true,
    info: true,
  },
  {
    date: 'JUNE 6, 2025',
    city: 'TAMPA, FLORIDA, UNITED STATES',
    venue: 'RAYMOND JAMES STADIUM',
    tickets: true,
    enhanced: true,
    travel: true,
    takeover: true,
    info: true,
  },
];

export default function EventsPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [titleOffset, setTitleOffset] = useState(0);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    let isDragging = false, startX = 0, scrollLeft = 0;
    const onDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      startX = 'touches' in e ? e.touches[0].pageX : e.pageX;
      startX -= grid.offsetLeft;
      scrollLeft = grid.scrollLeft;
      grid.style.cursor = 'grabbing';
    };
    const onUpLeave = () => {
      isDragging = false;
      grid.style.cursor = '';
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
      const walk = (x - grid.offsetLeft - startX) * 1.2;
      grid.scrollLeft = scrollLeft - walk;
    };
    grid.addEventListener('mousedown', onDown);
    grid.addEventListener('touchstart', onDown);
    grid.addEventListener('mouseup', onUpLeave);
    grid.addEventListener('mouseleave', onUpLeave);
    grid.addEventListener('touchend', onUpLeave);
    grid.addEventListener('mousemove', onMove);
    grid.addEventListener('touchmove', onMove);
    return () => {
      grid.removeEventListener('mousedown', onDown);
      grid.removeEventListener('touchstart', onDown);
      grid.removeEventListener('mouseup', onUpLeave);
      grid.removeEventListener('mouseleave', onUpLeave);
      grid.removeEventListener('touchend', onUpLeave);
      grid.removeEventListener('mousemove', onMove);
      grid.removeEventListener('touchmove', onMove);
    };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (!gridRef.current) return;
    gridRef.current.scrollBy({
      left: dir === 'left' ? -360 : 360,
      behavior: 'smooth',
    });
    handleTitleMove();
  };

  const handleTitleMove = () => {
    if (!gridRef.current) return;
    const maxScroll = gridRef.current.scrollWidth - gridRef.current.clientWidth;
    const offset = maxScroll ? (gridRef.current.scrollLeft / maxScroll) * (window.innerWidth * 0.5) : 0;
    setTitleOffset(offset);
  };

  return (
    <>
      <Header headerHeight={100} white={true} />
      <div className={s.hero}>
        <h1
          className={s.title}
          style={{
            transform: `translateX(${titleOffset}px)`,
            transition: 'transform 0.9s cubic-bezier(0, 1, 0.32, 1)',
          }}
        >
          BRAND NEW TOURS
        </h1>
        <div className={s.listBar}>
          <button className={s.listBarArrow} onClick={() => scroll('left')} aria-label="Scroll left">&#8592;</button>
          <div className={s.Grid} ref={gridRef} onScroll={handleTitleMove}>
            {events.map((event, idx) => (
              <div className={s.card} key={idx}>
                <div className={s.cardDate}>{event.date}</div>
                <div className={s.cardCity}>{event.city}</div>
                <div className={s.cardVenue}>{event.venue}</div>
                <ul className={s.cardActions}>
                  <li className={s.cardActionsAction}><span>BUY TICKETS</span></li>
                  <li className={s.cardActionsAction} style={{textDecoration: event.enhanced ? 'none' : 'line-through', opacity: event.enhanced ? 1 : 0.5}}>BUY AN ENHANCED EXPERIENCE</li>
                  <li className={s.cardActionsAction}><span>MORE INFO</span></li>
                </ul>
              </div>
            ))}
          </div>
          <button className={s.listBarArrow} onClick={() => scroll('right')} aria-label="Scroll right">&#8594;</button>
        </div>
      </div>
    </>
  );
};