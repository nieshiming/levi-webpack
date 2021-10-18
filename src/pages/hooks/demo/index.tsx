import { Card, Button, Divider } from 'antd'
import React, { FC, useState, useMemo, useRef } from 'react'

/**
 * @description 父组件更新， 子组件函数重新运行
 * 1、子组件useState /useMemo会重缓存中服务数据，进行是否渲染更新， render渲染组件树运用diff算法
 *
 * @、useCallback && useMemo 会缓存上一次数据，本次更新的时候，会拿出来上次数据跟本次数据比较，如果发生变更采用本次数据，并且
 *    销毁上次变量内存，否则继续采用上次数据
 *
 * 参考文章 https://jancat.github.io/post/2019/translation-usememo-and-usecallback/
 *         https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d#heading-6
 *         https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247492219&idx=1&sn=6385bb5b299c2c2e9a6aa042fde7b44f&chksm=f9525738ce25de2ed626af69cd2fef89852c0c42429a03dae3c4f2cdaffb39843439b079dee1&scene=27#wechat_redirect
 * 
 * 
 *
 * @points useMemo
 * 1、useMemo 本身也有开销。useMemo 会「记住」一些值，同时在后续 render 时，将依赖数组中的值取出来和上一次记录的值进行比较，如果不相等才会重新执行回调函数，
 *    否则直接返回「记住」的值。这个过程本身就会消耗一定的内存和计算资源。因此，过度使用 useMemo 可能会影响程序的性能。
 * 
   2、传递给 useMemo 的函数开销大不大？ 有些计算开销很大，我们就需要「记住」它的返回值，避免每次 render 都去重新计算。如果你执行的操作开销不大，
      那么就不需要记住返回值。否则，使用 useMemo 本身的开销就可能超过重新计算这个值的开销。因此，
      对于一些简单的 JS 运算来说，我们不需要使用 useMemo 来「记住」它的返回值

   3、返回的值是原始值吗？ 如果计算出来的是基本类型的值（string、 boolean 、null、undefined 、number、symbol），那么每次比较都是相等的，
      下游组件就不会重新渲染；如果计算出来的是复杂类型的值（object、array），哪怕值不变，但是地址会发生变化，导致下游组件重新渲染。所以我们也需要「记住」这个值

   4、在编写自定义 Hook 时，返回值一定要保持引用的一致性。 因为你无法确定外部要如何使用它的返回值。如果返回值被用做其他 Hook 的依赖，
      并且每次 re-render 时引用不一致（当值相等的情况），就可能会产生 bug。所以如果自定义 Hook 中暴露出来的值是 object、array、函数等，都应该使用 useMemo 。
      以确保当值相同时，引用不发生变化

  @points 用useMemo
  1、 复杂计算 
  2、 对于返回引用数据类型数据，如果要保持引用相等：则用useMemo
  3、 仅仅保持引用相等，不依赖其他数据改变：则可以使用useRef()

  @points 可以不用useMemo
  1、不是复杂计算 && 返回基本数据类型
 * */

const Child: FC<{
  arr: number[]
}> = (props) => {
  const [age, setAge] = useState<number>(() => {
    console.log('child age init')

    return 1
  })
  console.log('child construtor render')

  const method = useMemo(() => {
    console.log('child useMemo refresh')
    return 'nie'
  }, [])

  return (
    <>
      <h4>levi:{age}</h4>
      <Button type="dashed" onClick={() => setAge(age + 1)}>
        add child
      </Button>
      <ul>
        {(props.arr || []).map((item) => (
          <li key={`${item}`}>{item}</li>
        ))}
      </ul>
      <div>{method}</div>
    </>
  )
}

const Parent: FC = () => {
  const [age, setAge] = useState<number>(() => {
    console.log('parent init ')

    return 1
  })
  const { current: arr } = useRef([Math.random(), Math.random(), Math.random()])

  return (
    <Card>
      <div>
        <h4>
          child: {age}
          {}
        </h4>
        <Button type="ghost" onClick={() => setAge(age + 1)}>
          add parent
        </Button>
      </div>
      <Divider />
      <div>
        <Child arr={arr} />
      </div>
    </Card>
  )
}

export default Parent
