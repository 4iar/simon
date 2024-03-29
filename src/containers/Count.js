import React from 'react';
import { connect } from 'react-redux';


const getCount = (state) => {
  return {
    count: state.game.count,
    wrong: state.game.notifyWrong,
    won: state.game.won
  };
};


@connect(getCount, null, null, {withRef: true})
export default class Count extends React.Component {
  formatCount(count) {
    if (this.props.wrong) {
      return '!!';
    }
    
    if (this.props.won) {
      return 'WIN';
    }
    
    if (count === 0) {
      return '--';
    }
    if (count < 10) {
      return '0' + count;
    }
    return count;
  }
  
  render() {
    return (
      <section className="count">
        <div className="count-counter">{this.formatCount(this.props.count)}</div>
        <div className="count-text">COUNT</div>
      </section>
    );
  }
}
