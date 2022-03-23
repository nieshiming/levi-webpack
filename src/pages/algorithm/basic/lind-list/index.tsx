import React, { FC } from 'react'
import { Card, Tabs } from 'antd'

import Levi1 from './1'

const tabArr = [{ tab: <Levi1 />, title: '删除链表中的节点' }]

const { TabPane } = Tabs

const basic: FC = () => (
  <Card>
    <Tabs defaultActiveKey="6" tabPosition="left">
      {tabArr.map((item, index) => (
        <TabPane tab={item.title} key={`${index + 1}`}>
          {item.tab}
        </TabPane>
      ))}
    </Tabs>
  </Card>
)

export default basic
