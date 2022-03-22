import React, { FC } from 'react'
import { Card, Tabs } from 'antd'

import Levi1 from './1'
import Levi2 from './2'
import Levi3 from './3'
import Levi4 from './4'

const tabArr = [
  { tab: <Levi1 />, title: '反转字符串' },
  { tab: <Levi2 />, title: '整数反转' },
  { tab: <Levi3 />, title: '字符串中的第一个唯一字符' },
  { tab: <Levi4 />, title: '有效的字母异位词' },
]

const { TabPane } = Tabs

const basic: FC = () => (
  <Card>
    <Tabs defaultActiveKey="4" tabPosition="left">
      {tabArr.map((item, index) => (
        <TabPane tab={item.title} key={`${index + 1}`}>
          {item.tab}
        </TabPane>
      ))}
    </Tabs>
  </Card>
)

export default basic
