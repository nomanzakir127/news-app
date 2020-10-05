import React from 'react';
import SpacingGrid from '../Grid/SpacingGrid'

const MoreNews = (props) => {
    
    const {newsList} =  props

    return (
        <>
          <SpacingGrid newsList={newsList}></SpacingGrid>
        </>
    )
}

export default MoreNews
