import React, { FC } from 'react'
import { Card, Tabs } from 'antd'

import Levi1 from './1'
import Levi2 from './2'
import Levi3 from './3'
import Levi4 from './4'
import Levi5 from './5'
import Levi6 from './6'
import Levi7 from './7'

const tabArr = [
  { tab: <Levi1 />, title: '反转字符串' },
  { tab: <Levi2 />, title: '整数反转' },
  { tab: <Levi3 />, title: '字符串中的第一个唯一字符' },
  { tab: <Levi4 />, title: '有效的字母异位词' },
  { tab: <Levi5 />, title: '验证回文串' },
  { tab: <Levi6 />, title: '实现 strStr()' },
  { tab: <Levi7 />, title: '字符串转换整数 (atoi)' },
]

const { TabPane } = Tabs

const basic: FC = () => (
  <Card>
    <Tabs defaultActiveKey="7" tabPosition="left">
      {tabArr.map((item, index) => (
        <TabPane tab={item.title} key={`${index + 1}`}>
          {item.tab}
        </TabPane>
      ))}
    </Tabs>
  </Card>
)

export default basic
