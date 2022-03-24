import React, { FC } from 'react'
import { Card, Tabs } from 'antd'

import Levi1 from './1'
import Levi2 from './2'
import Levi3 from './3'
import Levi4 from './4'
import Levi5 from './5'

const tabArr = [
  { tab: <Levi1 />, title: '删除链表中的节点' },
  { tab: <Levi2 />, title: '删除链表的倒数第N个节点' },
  { tab: <Levi3 />, title: '反转链表' },
  { tab: <Levi4 />, title: '合并两个有序链表' },
  { tab: <Levi5 />, title: '回文链表' },
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
