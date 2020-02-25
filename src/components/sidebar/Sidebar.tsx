import React from 'react';
import './Sidebar.scss';
import LinkList from '../linklist/LinkList';
import { CommonNavProps as SidebarProps } from '../common/common-prop-interfaces';
import { FaGithub, FaLinkedin } from 'react-icons/all';

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className="sidebar-container">
            <div
                style={{
                    paddingLeft: '40px',
                    marginTop: '50px',
                    height: '20px',
                }}
            >
                <h2 style={{ color: 'black' }}>
                    Nic <br /> Vickery-Wilson
                </h2>
                <h3 className="sidebar-subtitle">
                    <b>Software Engineer</b>
                </h3>
            </div>
            <div className="link-list-container">
                <LinkList>{children}</LinkList>
            </div>
            <div className="icon-links-container">
                <span
                    className="icon-link"
                    onClick={() =>
                        window.open('https://github.com/nicvickeryw')
                    }
                >
                    <FaGithub />
                </span>
                <span
                    className="icon-link"
                    onClick={() =>
                        window.open('https://www.linkedin.com/in/nicvickeryw/')
                    }
                >
                    <FaLinkedin />
                </span>
            </div>
        </div>
    );
};
