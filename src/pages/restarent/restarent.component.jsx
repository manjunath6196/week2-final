
import React from 'react';

import RESTARENT_DATA from './restarent.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class RestarentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: RESTARENT_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (<div className="restarent-page">
        {
          collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))
      }
      </div>
    )
  }
}

export default RestarentPage;

