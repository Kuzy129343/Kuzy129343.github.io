import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef();

    useEffect(() => {
        const cursor = cursorRef.current;

        function handleMouseMove(e) {
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.left = e.clientX - 10 + 'px';
        }

        function handleClick() {
            cursor.classList.add('expand');

            setTimeout(() => {
                cursor.classList.remove('expand');
            }, 500);
        }

        function handleMouseEnter() {
            cursor.classList.add('expand');
        }

        function handleMouseLeave() {
            cursor.classList.remove('expand');
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        const clickableElements = document.querySelectorAll('a, button');
        clickableElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
            clickableElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return <div className="cursor" ref={cursorRef}></div>;
}

export default Cursor;
