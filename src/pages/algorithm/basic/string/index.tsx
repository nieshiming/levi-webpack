import React, { FC } from 'react'
import { Card, Tabs } from 'antd'

import One from './1'

const tabArr = [{ tab: <One />, title: '反转字符串' }]

const { TabPane } = Tabs

const basic: FC = () => (
  <Card>
    <Tabs defaultActiveKey="10" tabPosition="left">
      {tabArr.map((item, index) => (
        <TabPane tab={item.title} key={`${index + 1}`}>
          {item.tab}
        </TabPane>
      ))}
    </Tabs>
  </Card>
)

export default basic
