import React, { FC } from 'react'
import { Card, Tabs } from 'antd'

/** 一维数组 */
import One from './1'
import Two from './2'
import Three from './3'
import Four from './4'
import Six from './6'
import Seven from './7'
import Eight from './8'
import Nine from './9'
import Ten from './10'
import Levi11 from './11'
import Levi12 from './12'
import Levi13 from './13'

const tabArr = [
  { tab: <One />, title: '从排序数组中删除重复项' },
  { tab: <Six />, title: '买卖股票的最佳时机 II' },
  { tab: <Seven />, title: '旋转数组' },
  { tab: <Eight />, title: '重复元素' },
  { tab: <Nine />, title: '只出现一次的数字' },
  { tab: <Four />, title: '加一' },
  { tab: <Two />, title: '寻找中心索引' },
  { tab: <Three />, title: '至少是其他数字两倍的最大数' },
  { tab: <Ten />, title: '打平数组' },
  { tab: <Levi11 />, title: '两个数组的交集 II' },
  { tab: <Levi12 />, title: '两数之和' },
  { tab: <Levi13 />, title: '移动零' },
]

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
