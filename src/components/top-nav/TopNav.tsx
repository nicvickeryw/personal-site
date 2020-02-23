import React from 'react';
import { CommonNavProps } from '../common/common-prop-interfaces';

interface TopNavProps extends CommonNavProps {}

export const TopNav: React.FC<TopNavProps> = ({ children }) => {
    return <nav>{children}</nav>;
};
