import React from 'react'

import { Anchor, Box, Header, Menu, Sidebar, Split, Title } from 'grommet'
import { Switch, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

import { GrommetApp } from '../components'

const testComp = (str = 'test component') => () => <div>{str}</div>

export default class extends React.Component {
  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <HashRouter>
        <GrommetApp>
          <Split flex="right">
            <Box>
              <Sidebar colorIndex="neutral-1">
                <Header pad="medium" justify="between">
                  <Title>Dashboard</Title>
                </Header>
                <Box flex="grow" justify="start">
                  <Menu primary={true}>
                    <Anchor path={{ path: '/', index: true }}>A-Thing</Anchor>
                    <Anchor path="/another-thing">Another Thing</Anchor>
                    <Anchor path="/yet-another-thing">Yet Another Thing</Anchor>
                  </Menu>
                </Box>
              </Sidebar>
            </Box>
            <Box
              align="center"
              colorIndex="neutral-4"
              full={true}
              justify="center"
            >
              <Switch>
                <Route exact path="/" component={testComp('This be a thing')} />
                <Route path="/another-thing" component={testComp('This be another thing')} />
                <Route path="/yet-another-thing" component={testComp('This be YET another thing')} />
              </Switch>
            </Box>
          </Split>
        </GrommetApp>
      </HashRouter>
    )
  }
}
