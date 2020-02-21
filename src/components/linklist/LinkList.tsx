import React from 'react';
import {LinkData} from "../sidebar/Sidebar";
import './LinkList.scss'

interface LinkListProps {
    links: LinkData[];
}

interface LinkProps {
    data: LinkData;
}

export const LinkList: React.FC<LinkListProps> = (props: LinkListProps) => {
    return <ul className="links-unordered-list example">{props.links.map((data, i) => <li key={i}><Link data={data}/></li>)}</ul>;
};

export const Link = (props: LinkProps) => {
    return <a className="link" href={props.data.route}>{props.data.title}</a>
};
