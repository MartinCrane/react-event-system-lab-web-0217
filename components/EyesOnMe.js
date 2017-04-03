const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
     super();
     this.focusEvent = this.focusEvent.bind(this);
     this.blurEvent = this.blurEvent.bind(this);
   }

  focusEvent() {
    console.log("Hey! Eyes on me!");
  }

  blurEvent() {
    console.log("Good!");
  }

  render() {
    return (
      <div>
      <button onFocus={this.blurEvent} onBlur={this.focusEvent} ></button>
      </div>
    )
  }

}

module.exports = EyesOnMe
