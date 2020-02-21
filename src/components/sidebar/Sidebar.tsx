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
    const [selectedIndex, setSelectedIndex] = useState<boolean | number>(false);
    return (
        <div>
            <LinkList>
                {TOP_LINKS.map((link: LinkData, i: number) => (
                    <Link
                        isSelected={selectedIndex === i}
                        onSelect={(e: number) => setSelectedIndex(e)}
                        key={i}
                        route={link.route}
                        title={link.title}
                    />
                ))}
            </LinkList>
        </div>
    );
};
