import React from 'react';
import './Sidebar.scss';
import LinkList from '../linklist/LinkList';
import { CommonNavProps as SidebarProps } from '../common/common-prop-interfaces';
import { FaGithub, FaLinkedin } from 'react-icons/all';
import { useAnimClassState } from '../../common/helpers/use-anim-class-state';

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    let [sidebarTitleClass, hasMountedOnce] = useAnimClassState(
        0,
        'hidden',
        'fade-in-left visible'
    );
    let [linksClass] = useAnimClassState(
        200,
        'hidden link-list-container',
        'fade-in-left visible'
    );

    return (
        <div className="sidebar-container">
            <div
                className={sidebarTitleClass}
                style={{
                    paddingLeft: '40px',
                    marginTop: '50px',
                    height: '20px',
                }}
            >
                <h2>
                    Nic <br /> Vickery-Wilson
                </h2>
                <h3 className="sidebar-subtitle">
                    <b>Software Engineer</b>
                </h3>
            </div>
            <div className={linksClass}>
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
