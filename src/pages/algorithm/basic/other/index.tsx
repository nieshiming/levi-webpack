import React, { FC } from 'react'
import { Card, Tabs } from 'antd'

import Levi1 from './1'
import Levi2 from './2'

const tabArr = [
  { tab: <Levi1 />, title: '合并两个有序数组' },
  { tab: <Levi2 />, title: '第一个错误的版本' },
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
