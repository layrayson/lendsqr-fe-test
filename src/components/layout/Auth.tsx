import { ReactNode } from 'react';

interface AuthProps {
  children: ReactNode;
}
const Auth = ({ children }: AuthProps) => {
  return <div>{children}</div>;
};

export default Auth;
