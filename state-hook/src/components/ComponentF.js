import React from 'react'
import { UserContext, ChannelContext } from '../App'


function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {user => {
            return(
                <ChannelContext>
                    {channel => {
                        return(
                            <div>
                                My name is {user}, and I'm {channel}
                            </div>
                        )
                    }}
                </ChannelContext>
            )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
