import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons'

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #1890ff;
`

function Loading() {
  return (
    <StyledLoading>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
    </StyledLoading>
  )
}

export default Loading
