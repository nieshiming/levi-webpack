/**
 * @description 拦截全局错误
 * */
import React from 'react';

const initState = {
  hasError: false,
  error: ''
};

type State = Readonly<typeof initState>;

export default class ErrorBoundary extends React.PureComponent<{}, State> {
  readonly state = initState;

  static getDerivedStateFromError(error: React.ErrorInfo) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { hasError } = this.state;

    if (!hasError) {
      console.error(error, errorInfo);
    }
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h3>{String(error)}</h3>;
    }

    return children;
  }
}
