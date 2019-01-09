import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from  '../actions'

class GoogleAuth extends React.Component {
  componentDidMount() {
    const CLIENT_ID = '398542494414-gj1kvutifkp6cpm850sr578ogm99r2ke.apps.googleusercontent.com'
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        // when Auth state is changed, callback is called.
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.props.signIn()
  }

  onSignOutClick = () => {
    this.props.signOut()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="icon google" />
          Sign out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="icon google" />
          Sign In with Google
        </button>
      )
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

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
