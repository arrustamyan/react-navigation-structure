import React from 'react';

export default function SubNavigation({ items, selectedKey, backLink }) {
    return (
        <nav>
            <a href={backLink}>&lt; back</a>
            <ul style={{ listStyleType: 'armenian' }}>
                {items.map(item => {
                    return <li key={item.key} className={selectedKey === item.key ? 'selected' : ''}><a href={item.href}>{item.key}</a></li>
                })}
            </ul>
        </nav>
    )
}
