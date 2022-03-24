import React, { FC } from 'react'
import { Card, Tabs } from 'antd'

import Levi1 from './1'
import Levi2 from './2'
import Levi3 from './3'

const tabArr = [
  { tab: <Levi1 />, title: '删除链表中的节点' },
  { tab: <Levi2 />, title: '删除链表的倒数第N个节点' },
  { tab: <Levi3 />, title: '反转链表' },
]

const { TabPane } = Tabs

const basic: FC = () => (
  <Card>
    <Tabs defaultActiveKey="1" tabPosition="left">
      {tabArr.map((item, index) => (
        <TabPane tab={item.title} key={`${index + 1}`}>
          {item.tab}
        </TabPane>
      ))}
    </Tabs>
  </Card>
)

export default basic
