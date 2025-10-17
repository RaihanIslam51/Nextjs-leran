import React from 'react';

const layout = ({children}) => {
    return (
        <div>
           <nav>
            <li>Add product</li>
            </nav> 
            {children}
        </div>
    );
};

export default layout;