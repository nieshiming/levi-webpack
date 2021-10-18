#### 从排序数组中删除重复项 leetcode-26

> 注意是有序数组

```javascript
  componentDidMount() {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result = this.fn2(nums);
    console.log(nums, result);
  }

  /**
   * @description 删除数组中重复的值
   * splice 方法会改变原数组
   * */
  fn = (nums: number[]) => {
    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) !== i) {
        nums.splice(i, 1);
        i--; // 删除后下降一格
      }
    }

    return nums.length;
  };

  /**
   * @description 核心思想  移动元素  i 只会 >= len
   * 开始预设一个指针，遇到不相等值，拿当前这个值替换调
   * */
  fn2 = (nums: number[]) => {
    if (!nums.length) {
      return 0;
    }

    let len = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[len++] = nums[i];
      }
    }

    return len;
  };
```

#### 寻找中心索引 leetcode-724

> 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

```javascript
/**
 * @description 940ms
 * 主要是 每次函数执行 slice、reduce影响
 * */
const fn = (arr: number[]) => {
  let idx = -1
  if (arr.length < 3) return idx

  const sum = arr.reduce((pre, cur) => pre + cur, 0)

  arr.forEach((item, index) => {
    const splitArr = arr.slice(0, index)
    const newSum = splitArr.reduce((pre, cur) => pre + cur, 0)

    if ((sum - item) / 2 === newSum && idx === -1) {
      idx = index
    }
  })

  return idx
}

/**
 * @description 改进版本 70ms
 */
const fn2 = (arr: number[]) => {
  let idx = -1,
    leftNum = 0
  if (arr.length < 3) return idx

  const sum = arr.reduce((pre, cur) => pre + cur, 0)

  for (let i = 0; i < arr.length; i++) {
    if ((sum - arr[i]) / 2 === leftNum) {
      idx = i
      break
    } else {
      leftNum += arr[i]
    }
  }

  return idx
}

console.log(fn2([-1, -1, 0, 0, -1, -1]))
console.log(fn)
```

#### 数组至少是其他数两倍的最大数 leetcode - 747

> 在一个给定的数组 nums 中，总是存在一个最大元素 。  
> 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。  
> 如果是，则返回最大元素的索引，否则返回-1。  
> 输入: nums = [3, 6, 1, 0]
> 输出: 1  
> 解释: 6 是最大的整数, 对于数组中的其他整数,  
> 6 大于数组中其他元素的两倍。6 的索引是 1, 所以我们返回 1.

```javascript
const Basic: FC = () => {
  /**
   * @description 数组自带方法
   * */
  const fn = (nums: number[]): number => {
    if (nums.length === 0) return -1

    const max = Math.max.apply(null, nums)
    const idx = nums.findIndex((item) => item === max)
    const flag = nums.every((item, index) => {
      return idx === index ? true : max >= 2 * item
    })
    return flag ? idx : -1
  }

  /*
   * @description 原生求解
   * */
  const fn2 = (nums: number[]): number => {
    if (nums.length === 0) return -1
    let max = 0,
      secMax = 0,
      idx = 0
    for (let i = 0; i < nums.length; i++) {
      /** 交换值 */
      if (nums[i] > max) {
        secMax = max
        max = nums[i]
        idx = i
      } else if (nums[i] > secMax) {
        secMax = nums[i]
      }
    }

    return max >= 2 * secMax ? idx : -1
  }

  const result = fn2([0, 0, 2, 2])
  console.log(result)
  console.log(fn)

  return <Card>至少是其他数组两倍的最大树</Card>
}
```

#### 加一 leetcode-66

```javascript
/**
 * @description 加一
 * 
  给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
  你可以假设除了整数 0 之外，这个整数不会以零开头

  输入: [1,2,3]
  输出: [1,2,4]
  解释: 输入数组表示数字 123

  输入: [4,3,2,1]
  输出: [4,3,2,2]
  解释: 输入数组表示数字 4321。


  @points 注意如果转化成数字： js有最大值限制
  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

  6145390195186705543
 * */
```

```javascript
const Basic: FC = () => {
  const fn = (nums: number[]): number[] => {
    let isCarry = false

    for (let i = nums.length - 1; i > -1; i--) {
      if (isCarry || i === nums.length - 1) {
        nums[i] = nums[i] + 1
      }

      if (nums[i] === 10) {
        isCarry = true
        nums[i] = 0
      } else {
        isCarry = false
      }
    }

    if (isCarry) nums.unshift(1)

    return nums
  }

  const result = fn([9])
  console.log(result)

  return <>加一</>
}
```

#### 买卖股票的最佳时机

```javascript
import React, { FC } from 'react'

const Basic: FC = () => {
  // 完成多笔
  const fn = (nums: number[]): number => {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] >= nums[i]) {
        count += nums[i + 1] - nums[i]
      }
    }

    return count
  }

  // 完成一笔
  const singleMethod = (nums: number[]) => {
    let minCount = nums[0]
    let res = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < minCount) {
        minCount = nums[i]
      } else {
        res = Math.max(res, nums[i] - minCount)
      }
    }

    return res
  }

  // 完成一笔 => 动态规划
  const dynamic = (nums: number) => {
    let temp = 0
    let result = 0

    for (let i = 1; i < nums.length; i++) {
      temp += nums[i] - nums[i - 1]

      /**
       * @desc
       *
       *  股票真正含义是累计每天盈利+亏损合计
       *  如果累计到负数，其实没有意义。 temp重置为0，并且保留之前最大数result， 取新的一段 开始计算，
       * */
      if (temp < 0) {
        temp = 0
      }

      if (temp > result) {
        result = temp
      }
    }

    return result
  }

  console.log(fn([7, 1, 5, 3, 6, 4]))
  console.log(singleMethod([7, 2, 5, 1, 4, 3, 6, 4]))
  console.log(dynamic([7, 2, 5, 1, 4, 3, 6, 4]))

  return <>买卖股票的最佳时机</>
}

export default Basic

/**
 * @description 买卖股票的最佳时机
 * 
  给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
  设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

  @description
    输入: [7,1,5,3,6,4]
    输出: 7
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
        随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。


  @description 
    输入: [1,2,3,4,5]
    输出: 4
    解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
        注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
        因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。


  @description 
    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * */
```
