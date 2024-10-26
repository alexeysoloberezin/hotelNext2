import { useState, useEffect, useRef } from 'react';

const useIsRender = (
    rootMargin = '50% 0px',
    threshold = 0, // Порог видимости для активации
    delay = 0 // Задержка в миллисекундах
) => {
    const [isRender, setIsRender] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Устанавливаем состояние рендера с задержкой, если оно еще не установлено
                    if (!isRender) {
                        setTimeout(() => {
                            setIsRender(true);
                        }, delay);
                    }
                }
            },
            {
                root: null,
                rootMargin,
                threshold
            }
        );

        const currentElement = ref.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [isRender, rootMargin, threshold, delay]); // Добавляем isRender в зависимости

    return [isRender, ref];
};

export default useIsRender;
