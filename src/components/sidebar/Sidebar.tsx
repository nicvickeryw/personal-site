import React from 'react';
import './Sidebar.scss'
import {LinkList} from "../linklist/LinkList";

export interface LinkData {
    title: string;
    route: string;
}

const TOP_LINKS: LinkData[] = [
    { title: 'About me', route: 'about' },
    { title: 'Things I\'ve done', route: 'projects' },
    { title: 'Stuff I enjoy', route: 'fun' },
];

export const Sidebar: React.FC = (props: any) => {
    return <LinkList links={TOP_LINKS}/>;
};
