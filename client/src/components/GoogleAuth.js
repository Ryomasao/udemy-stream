import React from 'react'

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    const CLIENT_ID = '398542494414-gj1kvutifkp6cpm850sr578ogm99r2ke.apps.googleusercontent.com'
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        // when Auth state is changed, callback is called.
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know</div>
    } else if (this.state.isSignedIn) {
      return <div>Signed in</div>
    } else {
      return <div>Not Signed in</div>
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth
