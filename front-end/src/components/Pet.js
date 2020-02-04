import React from 'react';

// images
import a from '../img/a.png';
import b from '../img/b.png';
import c from '../img/c.png';
import one from '../img/1.png';
import two from '../img/2.png';
import three from '../img/3.png';

// calling in the Pet Photos
const petLevelUp = [a, b, c];

// setState
export const Pet = ({petLevel}) => {
    return (
        <div>
            <img src={petLevelUp[petLevel]} alt='A photo of the stage your pet is in.' />
        </div>
    )
};

