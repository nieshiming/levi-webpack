import { useState, useEffect, useCallback } from 'react';

const useTitle = () => {
  const [title, setTitle] = useState<string>(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const setDocumentTitle = useCallback(newTitle => {
    setTitle(newTitle);
  }, []);

  return [title, setDocumentTitle];
};

export default useTitle;
