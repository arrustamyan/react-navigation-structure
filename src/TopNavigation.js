import React from 'react';
import Navigation from './Navigation';

export default function TopNavigation({ selectedKey }) {

    let navItems = [
        { key: 'classes', href: '/classes' },
        { key: 'plugins', href: '/plugins' },
        { key: 'courseware', href: '/courseware' },
    ];

    return (
        <Navigation items={navItems} selectedKey={selectedKey} />
    );
}
