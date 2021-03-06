// const React = require('react');
//
// class Keypad extends React.Componenet {
//
//   constructor() {
//     super();
//     this.pwLog = this.pwLog.bind(this)
//   }
//
//   pwLog() {
//     console.log("Entering password...")
//   }
//
//   render() {
//     return (
//       <div>
//         <input type="password" onKeyUp={this.pwLog}/>
//       </div>
//     )
//   }
// }
//
// module.exports = Keypad
const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.handleInputPassword = this.handleInputPassword.bind(this);
  }

  handleInputPassword() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
    );
  }
}

module.exports = Keypad;
