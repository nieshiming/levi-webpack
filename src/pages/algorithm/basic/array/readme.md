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
    let idx = -1;
    if (arr.length < 3) return idx;

    const sum = arr.reduce((pre, cur) => pre + cur, 0);

    arr.forEach((item, index) => {
      const splitArr = arr.slice(0, index);
      const newSum = splitArr.reduce((pre, cur) => pre + cur, 0);

      if ((sum - item) / 2 === newSum && idx === -1) {
        idx = index;
      }
    });

    return idx;
  };

  /**
   * @description 改进版本 70ms
   */
  const fn2 = (arr: number[]) => {
    let idx = -1,
      leftNum = 0;
    if (arr.length < 3) return idx;

    const sum = arr.reduce((pre, cur) => pre + cur, 0);

    for (let i = 0; i < arr.length; i++) {
      if ((sum - arr[i]) / 2 === leftNum) {
        idx = i;
        break;
      } else {
        leftNum += arr[i];
      }
    }

    return idx;
  };

  console.log(fn2([-1, -1, 0, 0, -1, -1]));
  console.log(fn);
```


#### 数组至少是其他数两倍的最大数 leetcode - 747
> 在一个给定的数组nums中，总是存在一个最大元素 。   
> 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。  
> 如果是，则返回最大元素的索引，否则返回-1。  
> 输入: nums = [3, 6, 1, 0] 
> 输出: 1   
> 解释: 6是最大的整数, 对于数组中的其他整数,    
> 6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.     
```javascript
  const Basic: FC = () => {
  /**
   * @description 数组自带方法
   * */
  const fn = (nums: number[]): number => {
    if (nums.length === 0) return -1;

    const max = Math.max.apply(null, nums);
    const idx = nums.findIndex(item => item === max);
    const flag = nums.every((item, index) => {
      return idx === index ? true : max >= 2 * item;
    });
    return flag ? idx : -1;
  };

  /*
   * @description 原生求解
   * */
  const fn2 = (nums: number[]): number => {
    if (nums.length === 0) return -1;
    let max = 0,
      secMax = 0,
      idx = 0;
    for (let i = 0; i < nums.length; i++) {
      /** 交换值 */
      if (nums[i] > max) {
        secMax = max;
        max = nums[i];
        idx = i;
      }

      /** 取第二大的值 max 和 sec 不能同为一个值 */
      if (nums[i] > secMax && max > nums[i]) secMax = nums[i];
    }

    return max >= 2 * secMax ? idx : -1;
  };

  const result = fn2([0, 0, 2, 3]);
  console.log(result);
  console.log(fn);

  return <Card>至少是其他数组两倍的最大树</Card>;
};
```