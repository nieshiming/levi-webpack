import React, { FC } from 'react'
import { Card, Tabs } from 'antd'

import Levi1 from './1'
import Levi2 from './2'
import Levi3 from './3'
import Levi4 from './4'
import Levi5 from './5'

const tabArr = [
  { tab: <Levi1 />, title: '合并两个有序数组' },
  { tab: <Levi2 />, title: '第一个错误的版本' },
  { tab: <Levi3 />, title: '爬楼梯' },
  { tab: <Levi4 />, title: '买卖股票的最佳时机' },
  { tab: <Levi5 />, title: '最大子序和' },
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
