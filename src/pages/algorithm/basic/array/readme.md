#### 数组去重
```javascript
    componentDidMount() {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const result = this.fn2(nums);
        console.log(nums, result);
    }

    // 删除数组中重复的值
    fn = (nums: number[]) => {
        for (let i = 0; i < nums.length; i++) {
            if (nums.indexOf(nums[i]) !== i) {
            nums.splice(i, 1);
            i--;
            }
        }

        return nums.length;
    };

    /**
     * @description 核心思想  移动元素  i 只会 >= len
     * 开始预设一个指针，遇到不相等值，拿当天这个值替换调
     * */
    fn2 = (nums: number[]) => {
        let len = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
            nums[len++] = nums[i];
            }
        }

        return len;
    };
```