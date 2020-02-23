import React, { useState } from 'react';
import './Sidebar.scss';
import { LinkList } from '../linklist/LinkList';
import { AnimatedLink } from '../animated-link/AnimatedLink';
import { LinkData } from '../../App';

interface SidebarProps {
    links: LinkData[];
}

export const Sidebar: React.FC<SidebarProps> = ({ links }) => {
    // Track selected item in the sidebar, pass state to children.
    const [selectedIndex, setSelectedIndex] = useState<boolean | number>(false);

    return (
        <div className="sidebar-container">
            <div style={{ paddingLeft: '40px', marginTop: '50px' }}>
                <h2 style={{ color: 'black' }}>Nicholas Vickery-Wilson</h2>
                <h3 className="sidebar-subtitle">
                    <b>Software Engineer</b>
                </h3>
            </div>

            <LinkList>
                {links.map((link: LinkData, i: number) => (
                    <AnimatedLink
                        fontSize={'17px'}
                        isSelected={selectedIndex === i}
                        selectIndex={(index: number) => {
                            setSelectedIndex(index);
                        }}
                        key={i}
                        index={i}
                        route={link.route}
                        title={link.title}
                    />
                ))}
            </LinkList>
        </div>
    );
};
