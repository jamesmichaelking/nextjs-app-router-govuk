import { ReactNode } from 'react';

type ErrorMessage = {
  text?: string
  children?: ReactNode
}

const ErrorMessage = ({ text, children }: ErrorMessage) => {
  return <p className={`govuk-error-message`}>{ text || children }</p>
}

export default ErrorMessage