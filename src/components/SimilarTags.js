import React from 'react'
import Tags from './Tags'
import { useState, useEffect } from 'react';

const SimilarTags = ({ tagsArray }) => {


    return (
        <div className='py-8'>
            
            <Tags tagsArray={tagsArray} numberTags={7} />
        </div>
    )
}

export default SimilarTags;
