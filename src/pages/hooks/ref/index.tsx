import { Card, Button, message } from 'antd'
import React, { useCallback, FC, useEffect } from 'react'

const initState = {
  name: 'levi',
}

type State = Readonly<typeof initState>

const Nie = () => {
  useEffect(() => {
    message.success('msg from nie')
  }, [])

  return <div>nie</div>
}

const FCC: FC = () => {
  const myRef = React.createRef<any>()
  const myRef1 = React.createRef<any>()

  const getRef = useCallback(() => {
    console.log(myRef1)
  }, [myRef1])

  return (
    <Card>
      <h4 ref={myRef}>test myRef</h4>
      {/* ref只能作用在类组件上 */}
      <Nie ref={myRef1} />
      <Button type="primary" onClick={getRef}>
        get refs from fcc
      </Button>
    </Card>
  )
}

class Basic extends React.Component<{}, State> {
  myRef = React.createRef<any>()

  myRef1 = React.createRef<any>()

  getRef = () => {
    console.log(this.myRef1)
    this.myRef1.current.showMsg()
  }

  render() {
    return (
      <Card>
        <h4 ref={this.myRef}>test myRef</h4>
        {/* ref只能作用在类组件上 */}
        <Nie ref={this.myRef1} />
        <Button type="primary" onClick={this.getRef}>
          get refs
        </Button>
      </Card>
    )
  }
}
console.log(Basic)

export default FCC

/**
 * @description class组件 创建 ref
 * 1、运用const myRef = React.createRef<T>()
 * 2、获取当前挂载DOM或者组件 myRef.current
 * 3、不能再函数式组件用createRef
 * */
