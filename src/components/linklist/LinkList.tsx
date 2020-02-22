import React from 'react';
import './LinkList.scss';

interface LinkListProps {
    children: JSX.Element[];
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

interface LinkProps {
    route: string;
    title: string;
    selectIndex: (e: any) => any;
    index: number;
    isSelected: boolean;
}

export const Link: React.FC<LinkProps> = ({
    title,
    route,
    isSelected,
    selectIndex,
    index,
}) => {
    // If this item is selected, keep the underline and bold props. Enforce via dynamic class name.
    let classes = 'link';
    if (isSelected) {
        classes = 'selected-link';
    }

    return (
        <a onClick={() => selectIndex(index)} className={classes} href={'#'}>
            {title}
        </a>
    );
};
