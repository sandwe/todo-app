import { useEffect } from 'react';

const useResizeTextArea = (ref: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (!ref) return;

    ref.style.height = '0px';
    const scrollHeight = ref.scrollHeight;
    ref.style.height = scrollHeight + 'px';
  }, [ref, value]);
};

export default useResizeTextArea;
