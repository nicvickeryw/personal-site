import React from 'react';
import './Sidebar.scss';
import LinkList from '../linklist/LinkList';
import { CommonNavProps as SidebarProps } from '../common/common-prop-interfaces';
import { FaGithub, FaLinkedin } from 'react-icons/all';

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className="sidebar-container">
            <div style={{ paddingLeft: '40px', marginTop: '50px' }}>
                <h2 style={{ color: 'black' }}>
                    Nic <br /> Vickery-Wilson
                </h2>
                <h3 className="sidebar-subtitle">
                    <b>Software Engineer</b>
                </h3>
            </div>

            <LinkList>{children}</LinkList>
            <div style={{ paddingLeft: '40px', marginTop: '50px' }}>
                <FaGithub style={{ fontSize: '30px' }} />
                <FaLinkedin style={{ fontSize: '30px' }} />
                icon3
            </div>
        </div>
    );
};
