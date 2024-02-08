import React, { ReactNode } from 'react';
interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{ children: ReactNode }> {
  state: IState = { hasError: false };

  getErrorWithComponentStack(
    error: Error,
    errorInfo: { componentStack?: string }
  ): Error {
    if (!errorInfo.componentStack) {
      return error;
    }
    const newError = new Error(error.message);
    newError.name = `React ErrorBoundary ${error.name}`;
    newError.stack = errorInfo.componentStack;

    return newError;
  }

  componentDidCatch(error: Error, errorInfo: { componentStack?: string }) {
    const errorWithComponentStack = this.getErrorWithComponentStack(
      error,
      errorInfo
    );

    try {
      (window as any)?.faro?.api?.pushError?.(errorWithComponentStack);
    } catch (e) {
      console.error(`[FaroPushError] - ${e}`);
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Ошибка.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
