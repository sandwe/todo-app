import { useState, useEffect, PropsWithChildren } from 'react';

const DefferedComponent = ({ children }: PropsWithChildren<{}>) => {
  const [isDeffered, setIsDeffered] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDeffered(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeffered) return null;
  return <>{children}</>;
};

export default DefferedComponent;
