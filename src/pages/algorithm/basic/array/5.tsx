import React, { FC } from 'react';
import imgSrc from './对角线遍历.png';

const Basic: FC = () => {
  return (
    <>
      <img src={imgSrc} alt="" />
    </>
  );
};

export default Basic;

/**
 * @description 二维数组对角线遍历
  给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
  [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
  ]

  输出:  [1,2,4,7,5,3,6,8,9]
 * */
