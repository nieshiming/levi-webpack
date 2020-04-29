import React, {
  FC,
  forwardRef,
  createRef,
  useCallback,
  ForwardRefExoticComponent,
  Ref
} from 'react';
import { Card, Button, message, Row, Col } from 'antd';

const initState = {
  name: 'nsm'
};

type State = Readonly<typeof initState>;

class Levi extends React.Component<{}, State> {
  readonly state = initState;

  showMe = () => {
    message.info('levis info');
  };

  render() {
    const { children } = this.props;
    const { name } = this.state;

    return (
      <div>
        {children}/{name}
      </div>
    );
  }
}

const Btn1: ForwardRefExoticComponent<{ ref: any; children: string }> = forwardRef(
  (props, ref: any) => (
    <Button ref={ref} className="levisBtn">
      {props.children}
    </Button>
  )
);

const Btn2: ForwardRefExoticComponent<{
  ref: Ref<Levi>;
  children: string;
}> = forwardRef((props, ref: Ref<Levi>) => <Levi ref={ref}>{props.children}</Levi>);

const ref = createRef<Levi>();
const ref1 = createRef<any>();

const Baisc: FC = () => {
  const getRefs = useCallback(() => {
    /** 获取转发的refs */
    console.log(ref.current);
    ref.current.showMe();
  }, []);

  return (
    <Card>
      <Row justify="start" gutter={20}>
        <Col>
          <Btn1 ref={ref1}>levis btn</Btn1>
        </Col>
        <Col>
          <Btn2 ref={ref}>levis classs</Btn2>
        </Col>
        <Col>
          <Button onClick={getRefs} type="danger">
            get ref
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
export default Baisc;

/**
 * @description ref转发 是一项将ref自动的通过组件传递到一子组件技巧
 *
 * @description red转发是可选特性 其允许某些组件接受ref,并将向下传递
 * 1、我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量
 * 2、我们通过指定 ref 为 JSX 属性，将其向下传递给 <FancyButton ref={ref}>
 * 3、React 传递 ref 给 forwardRef 内函数 (props, ref) => ...，作为其第二个参数
 * 4、我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性
 * 5、当 ref 挂载完成，ref.current 将指向 <button> DOM 节点
 *
 * @point 第二个参数ref只能使用在React.forwardRef定义组件时存在，常规函数和class组件不接受ref参数，且props中也不存在ref
 *
 * Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中
 * 获取函数式组件ref  === 也可以调取函数式组件中的方法
 *  <Button ref={ref} className="levisBtn">
      {props.children}
    </Button>

   获取class组件ref === 同时可以调用类组件中的方法 
  <Levi ref={ref}>{props.children}</Levi>


  @description 被高阶组件包裹的时候， 可以通过传递参数的方式，将ref传递下去
 * */
