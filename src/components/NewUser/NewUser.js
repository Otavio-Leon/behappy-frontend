import React, {Component} from 'react';

import Label from '../Label/Label';

class NewUser extends Component {
  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label htmlFor="name" text="Quem � voc�?" />
        </form>
      </div>
    );
  }
}

export default NewUser;