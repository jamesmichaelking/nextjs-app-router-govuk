import { ReactNode } from 'react';

type LabelProps = {
  text?: string,
  children?: ReactNode,
  inputID: string
}

const Label = ({ text, children, inputID }: LabelProps) => {
  return (
    <label className="govuk-label" htmlFor={ inputID }>
      { text || children }
    </label>
  )
}

export default Label