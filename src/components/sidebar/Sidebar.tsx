import React, { useState } from 'react';
import './Sidebar.scss';
import { Link, LinkList } from '../linklist/LinkList';

export interface LinkData {
    title: string;
    route: string;
}

const TOP_LINKS: LinkData[] = [
    { title: 'About me', route: 'about' },
    { title: "Things I've done", route: 'projects' },
    { title: 'Stuff I enjoy', route: 'fun' },
];

export const Sidebar: React.FC = (props: any) => {
    // Track selected item in the sidebar, pass state to children.
    const [selectedIndex, setSelectedIndex] = useState<boolean | number>(false);

    return (
        <div>
            <div style={{ paddingLeft: '40px', marginTop: '50px' }}>
                <h3 className="sidebar-title-name">Nicholas Vickery-Wilson</h3>
                <p style={{ color: 'grey' }}>
                    <b>Software Engineer</b>
                </p>
            </div>

            <LinkList>
                {TOP_LINKS.map((link: LinkData, i: number) => (
                    <Link
                        isSelected={selectedIndex === i}
                        selectIndex={(e: number) => {
                            setSelectedIndex(e);
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
