import React, { FC } from 'react';
import { Card, Tabs } from 'antd';

/** 一维数组 */
import One from './1';
import Two from './2';
import Three from './3';
import Four from './4';
import Five from './6';
import Seven from './7';
import Eight from './8';
import Nine from './9';
import Ten from './10';

const tabArr = [
  { tab: <One />, title: '数组去重' },
  { tab: <Two />, title: '寻找中心索引' },
  { tab: <Three />, title: '至少是其他数字两倍的最大数' },
  { tab: <Four />, title: '加一' },
  { tab: <Five />, title: '买卖股票的最佳时机' },
  { tab: <Seven />, title: '旋转数组' },
  { tab: <Eight />, title: '重复元素' },
  { tab: <Nine />, title: '只出现一次的数字' },
  { tab: <Ten />, title: '打平数组' }
];

const { TabPane } = Tabs;

const basic: FC = () => {
  return (
    <Card>
      <Tabs defaultActiveKey="1">
        {tabArr.map((item, index) => (
          <TabPane tab={item.title} key={`${index + 1}`}>
            {item.tab}
          </TabPane>
        ))}
      </Tabs>
    </Card>
  );
};

export default basic;
