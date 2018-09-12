import React from 'react';
import SubNavigation from './SubNavigation';

export default function ClassNavigation({ selectedKey }) {
    let classNavItems = [
        { key: 'classes', href: '/classes' },
        { key: 'plugins', href: '/plugins' },
        { key: 'courseware', href: '/courseware' },
    ];
    return <SubNavigation items={classNavItems} selectedKey={selectedKey} backLink="/classes" />;
}
