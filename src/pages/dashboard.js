import React from 'react'

import { Anchor, Box, Header, Menu, Sidebar, Split, Title } from 'grommet'
import { BrowserRouter, Route } from 'react-router-dom'

import { GrommetApp } from '../components'

const testComp = (str = 'test component') => () => <div>{str}</div>

export default class extends React.Component {
  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <BrowserRouter>
        <GrommetApp>
          <Split flex="right">
            <Box>
              <Sidebar colorIndex="neutral-1">
                <Header pad="medium" justify="between">
                  <Title>Dashboard</Title>
                </Header>
                <Box flex="grow" justify="start">
                  <Menu primary={true}>
                    <Anchor path={{ path: '/dashboard', index: true }}>A-Thing</Anchor>
                    <Anchor path="/dashboard/another-thing">Another Thing</Anchor>
                    <Anchor path="/dashboard/yet-another-thing">Yet Another Thing</Anchor>
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
              <Route exact path="/dashboard" component={testComp('This be a thing')} />
              <Route path="/dashboard/another-thing" component={testComp('This be another thing')} />
              <Route path="/dashboard/yet-another-thing" component={testComp('This be YET another thing')} />
            </Box>
          </Split>
        </GrommetApp>
      </BrowserRouter>
    )
  }
}
