import { Card, Button } from 'antd'
import React, { FC, useState, useEffect, useCallback } from 'react'

interface IProps {
  age: number
}

const Basic: FC<IProps> = (props: IProps) => {
  const [num, setNum] = useState(1)
  const [info, setInfo] = useState(() => ({ name: 'levi' }))

  console.log('每次渲染过程,函数都会执行一次初始化过程,useState,useEffect除外,会在内存中重新取值')
  const nie = 1

  useEffect(() => {
    console.log('每次重新渲染都会更新')
  })

  useEffect(() => {
    console.log('只会在初始化时候渲染一次')
  }, [])

  /**
   * @description ingo, nie, props.age变化的时候都会重新执行useEffect
   *
   * nie触发无效，每次渲染结束后 nie === 1,
   * */
  useEffect(() => {
    console.log(`info更新的时候渲染:${info}`)

    return () => {
      console.log('销毁的时候执行')
    }
  }, [info, nie, props.age])

  const addNie = useCallback(() => {
    const news = nie + 1
    console.log(news)
  }, [nie])

  console.log('执行渲染')

  return (
    <Card>
      <h4>num:{num}</h4>
      <h4>nie:{nie}</h4>
      <h4>{JSON.stringify(info)}</h4>
      <Button type="ghost" onClick={() => setNum(num + 1)}>
        点击
      </Button>

      <Button type="primary" onClick={() => setInfo({ ...info, name: `levi:${num + 1}` })}>
        更新info
      </Button>

      <Button type="primary" onClick={addNie}>
        更新基本数字
      </Button>
    </Card>
  )
}

const Parent: FC = () => {
  const [age, setAge] = useState(12)

  return (
    <div>
      <Basic age={age} />
      <div>
        <Button type="ghost" onClick={() => setAge(age + 1)}>
          更新props
        </Button>
      </div>
    </div>
  )
}

export default Parent

/**
 * @description useEffect
 * 1、使用useEffect完成副作用操作，赋值给useEffect函数会在组件渲染到屏幕之后执行
 * 2、默认情况下effct将在每轮渲染结束后执行，可以通过第二个参数来决定如何更新
 * 3、useEffect会返回一个函数，用于执行销毁useEffect,在每次销毁的时候执行
 *
 * @points 执行条件
 * 1、不传第二个参数， 每次更新都会执行
 * 2、传入空数组， 初始化时候执行一次
 * 3、传入有参数数组， 参数更新的时候执行
 *
 * 上例子中： 用nie变量更新出发useEffect是无效，因为每次重新渲染的时候，都会重新执行这个函数， nie变量又被重新赋值为1
 * 所以更新上没有变化
 *
 *
 * useEffect执行顺序
 * 1、先执行render渲染
 * 2、执行useEffect内部渲染
 * */
