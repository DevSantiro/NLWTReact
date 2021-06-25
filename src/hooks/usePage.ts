import { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';

export const usePage = () => {
  const value = useContext(PageContext);

  return value;
}