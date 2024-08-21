import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState('');

    return (
        <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
            {children}
        </ImageContext.Provider>
    );
};
