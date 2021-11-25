import { Card, CardContent } from '@mui/material';
import { ReactNode } from 'react';
import { CategoryContext } from './CategoryContext';
import { CategoryHeaderProps } from './CategoryHeader';

export type CategoryProps = {
  children?: ReactNode;
} & CategoryHeaderProps;

export const Category = ({ children, header, icon }: CategoryProps) => {
  return (
    <CategoryContext.Provider value={{ header, icon }}>
      <Card sx={{ '@media print': { m: 0, boxShadow: 0 } }}>
        <CardContent>{children}</CardContent>
      </Card>
    </CategoryContext.Provider>
  );
};
