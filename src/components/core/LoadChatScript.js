import { useEffect } from 'react';

const LoadChatScript = () => {
  useEffect(() => {
    // Функция, которая загружает скрипт
     
    const loadScript = () => {
        setTimeout(() => {
            const script = document.createElement('script');
            script.id = 'chatway';
            script.async = true;
            script.src = 'https://cdn.chatway.app/widget.js?id=qCL2jCKMnOwb';
            document.body.appendChild(script);
        }, 3000)
    };


    window.addEventListener('load', loadScript);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('load', loadScript);
    };
  }, []);

  return null; // Компонент не рендерит ничего на странице
};

export default LoadChatScript;
