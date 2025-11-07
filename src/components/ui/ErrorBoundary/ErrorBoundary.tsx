/**
 * ErrorBoundary Component - Catch React errors gracefully
 */

import { Component, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={styles.errorBoundary}>
          <div className={styles.content}>
            <h2 className={styles.title}>Щось пішло не так</h2>
            <p className={styles.message}>
              Виникла помилка при завантаженні цієї частини додатку.
            </p>
            {this.state.error && (
              <details className={styles.details}>
                <summary>Деталі помилки</summary>
                <pre className={styles.errorText}>{this.state.error.message}</pre>
              </details>
            )}
            <button onClick={this.handleReset} className={styles.button}>
              Спробувати знову
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
