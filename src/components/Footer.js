import React from 'react';

export default class AppBar extends React.Component {
  render() {
    return <footer>
      <div className="mui-col-md-4">
        <p>
          <strong>Other tools</strong>
        </p>
        <p>
          <a href="http://lab.arisebank.com" target="_blank">AriseLabs</a><br />
          <a href="http://stellex.arisebank.com" target="_blank">Stellar Blockchain</a><br />
          <a href="http://stellar.arisebank.net" target="_blank">Arise Stellar Network</a>
        </p>
      </div>
      <div className="clear"></div>
    </footer>
  }
}
