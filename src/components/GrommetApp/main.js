import React from 'react'
import PropTypes from 'prop-types'

import App from 'grommet/components/App'
import LoginForm from 'grommet/components/LoginForm'

import './style/main.scss'

export default class GrommetLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    requiresLogin: PropTypes.bool,
  }

  static defaultProps = {
    requiresLogin: false,
  }

  render() {
    const { children, requiresLogin } = this.props

    return (
      <App centered={true}>
        {requiresLogin ? (
          <LoginForm
            onSubmit={({ username, password }) =>
              console.log(`${username} tried to login w/ ${password}`)
            }
          />
        ) : (
          children
        )}
      </App>
    )
  }
}
