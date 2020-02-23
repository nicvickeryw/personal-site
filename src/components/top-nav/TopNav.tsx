import React from 'react';
import { CommonNavProps as TopNavProps } from '../common/common-prop-interfaces';

export const TopNav: React.FC<TopNavProps> = ({ children }) => {
    return <nav>{children}</nav>;
};
