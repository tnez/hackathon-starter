import React from 'react'

import { Anchor, Box, Header, Menu, Sidebar, Split, Title } from 'grommet'

import { GrommetApp } from '..'

export default class Dashboard extends React.Component {
  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <GrommetApp>
        <Split flex="right">
          <Box>
            <Sidebar colorIndex="neutral-1">
              <Header pad="medium" justify="between">
                <Title>Dashboard</Title>
              </Header>
              <Box flex="grow" justify="start">
                <Menu primary={true}>
                  <Anchor href="#" className="active">
                    First
                  </Anchor>
                  <Anchor href="#">Second</Anchor>
                  <Anchor href="#">Third</Anchor>
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
            <div>This be teh stuff</div>
          </Box>
        </Split>
      </GrommetApp>
    )
  }
}
