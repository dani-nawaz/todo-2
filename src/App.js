import React from 'react'
import { useTodoContext } from './context/todoContext'
import styled from 'styled-components'
import Form from './components/Form'
import ListContainer from './components/ListContainer'
const Wrapper = styled.section``

function App() {
  const { list } = useTodoContext()
  return (
    <Wrapper className='section-center'>
      <Form />
      {list.length > 0 && <ListContainer />}
    </Wrapper>
  )
}

export default App
