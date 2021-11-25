import { createContext, useContext } from 'react';
import { CategoryHeaderProps } from './CategoryHeader';

export const CategoryContext = createContext<CategoryHeaderProps | null>(null);

export const useCategoryHeader = () => useContext(CategoryContext);
