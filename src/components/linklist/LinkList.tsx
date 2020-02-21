import React from 'react';
import './LinkList.scss';

type LinkListProps = {
    children: JSX.Element[];
};

export const LinkList: React.FC<LinkListProps> = ({ children }) => {
    return (
        <ul className="links-unordered-list example">
            {children?.map((child: any, i: number) => (
                <li style={{ marginBottom: '10px' }} key={i}>
                    {child}
                </li>
            ))}
        </ul>
    );
};

interface LinkProps {
    route: string;
    title: string;
    onSelect: (e: any) => any;
    isSelected: boolean;
}

export const Link: React.FC<LinkProps> = ({
    title,
    route,
    isSelected,
    onSelect,
}) => {
    console.log(isSelected);
    return (
        <a onClick={e => onSelect(e)} className="link" href={'#'}>
            {title}
        </a>
    );
};
