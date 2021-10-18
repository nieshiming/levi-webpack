import React, { FC } from 'react'
import { Button, Divider } from 'antd'
import { atom, useRecoilState, useSetRecoilState, useRecoilValue, selector } from 'recoil'

const baseInfoState = atom({
  key: 'baseInfoState',
  default: {
    name: 'levis',
    age: 20,
  },
})

const allInfoComputed = selector({
  key: 'allInfoComputed',
  get: async ({ get }) => {
    const info = get(baseInfoState)
    // const res = await Promise.resolve(JSON.stringify({ ...info, area: 'shanghai' }));

    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(JSON.stringify({ ...info, area: 'shanghai' }))
      }, 1000)
    })

    return res
  },
})

const Main: FC = () => {
  const [info, setInfo] = useRecoilState(baseInfoState)

  const addAge = () => {
    setInfo({ ...info, age: info.age + 1 })
  }

  console.log('main page')

  /** 这里会触发react 错误辩解 */
  if (info.age > 22) {
    throw new Error('error happening')
  }

  return (
    <div>
      recoil
      <p>姓名： {info.name}</p>
      <p>年龄： {info.age}</p>
      <Button type="primary" onClick={addAge}>
        update age
      </Button>
    </div>
  )
}

const SubPage: FC = () => {
  console.log('su page')
  const info = useRecoilValue(baseInfoState)
  const setAge = useSetRecoilState(baseInfoState)
  const computedInfo = useRecoilValue(allInfoComputed)

  return (
    <div>
      我是兄弟组件
      <p>selector: {computedInfo}</p>
      {/* <p>这是从Recoil拿到的数据： {JSON.stringify(info)}</p> */}
      <Button type="primary" onClick={() => setAge({ name: 'nsm', age: info.age + 1 })}>
        子组件btn
      </Button>
    </div>
  )
}

const Page: FC = () => {
  console.log('I am Index Page')

  return (
    <>
      <Main />
      <Divider type="horizontal" />
      <SubPage />
    </>
  )
}

export default Page

/**
 * @description useRecoilState
 * 创建一个Recoil对象， 其中key是唯一的， 可被组件订阅以及更新
 *
 * @description useRecoilValue 直接获取value 如果引用该函数在组件内，一旦Recoil更新，组件也会更新
 *
 * @description useSetRecoilState 更新RecoilState的 对象值， 使用该函数，不会导致组件更新
 *
 * @description selector 类型mobx 中的computed 订阅Recoil中的state, 一旦更新将会重新生成新值 ==== selector 是一个纯函数
 * */
