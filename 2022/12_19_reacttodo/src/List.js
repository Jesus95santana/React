import React from 'react';

export class List extends React.Component {
  constructor(props) {
    super(props);

    this.addListItem = this.addListItem.bind(this);
  }

  addListItem(e) {

  }

  render() {
    return (
      <ul>
        <li>{this.props.storeList}</li>
      </ul>
    );
  }
}
