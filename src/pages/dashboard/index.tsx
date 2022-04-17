import { Card } from 'antd'
import React, { FC } from 'react'
// import { getQueryString } from 'levi-util'

const Basic: FC = () => {
  console.log('dashboard')

  return (
    <Card style={{ width: '100%' }}>
      <h3>早安，levis，祝你开心每一天！</h3>
      <h4>天气预报说今夜到明天上午有点想你, 预计下午转为持续想你</h4>
      <h4> 受低潮情绪影响 夜晚将转为大到爆想, 心情降低五度 预计此类天气 将持续见到你为止</h4>
    </Card>
  )
}

export default Basic
