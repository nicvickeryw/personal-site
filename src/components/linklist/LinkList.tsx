import React from 'react';
import './LinkList.scss';

interface LinkListProps {
    children?: any;
}

export const LinkList: React.FC<LinkListProps> = ({ children }) => {
    return (
        <ul className="links-unordered-list example">
            {children?.map((child: JSX.Element, i: number) => (
                <li style={{ marginBottom: '10px' }} key={i}>
                    {child}
                </li>
            ))}
        </ul>
    );
};
