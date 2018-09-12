import React from 'react';

export default function Navigation({ items, selectedKey }) {
    return (
        <nav>
            <ul>
                {items.map(item => {
                    return <li key={item.key} className={selectedKey === item.key ? 'selected' : ''}><a href={item.href}>{item.key}</a></li>
                })}
            </ul>
        </nav>
    )
}
