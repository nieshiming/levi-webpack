import React, { FC, PureComponent } from 'react';
import PropTypes from 'prop-types';

interface IProps {
  name: string;
}

const Basic: FC<IProps> = () => {
  return <div>欢迎来到商品中心- 品牌管理</div>;
};

class ContextParent extends PureComponent<{}, {}> {
  static childContextTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    method: PropTypes.func // 传递方法
  };

  getChildContext = () => {
    return {
      name: 'levis',
      age: 20,
      method: console.log
    };
  };

  render() {
    return <ContextChild />;
  }
}

class ContextChild extends PureComponent<{}, {}> {
  /** 声明需要使用的context属性 */
  static contextTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    method: PropTypes.func
  };

  render() {
    const { name, age, method } = this.context;

    return (
      <div onClick={() => method(name, age)}>
        {name}/{age}
        <Basic name="levis" />
      </div>
    );
  }
}

export default ContextParent;
