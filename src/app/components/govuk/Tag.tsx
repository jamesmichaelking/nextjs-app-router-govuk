import { ReactNode } from 'react';

type TagProps = {
  text?: string
  children?: ReactNode,
  additionalClasses?: string
}

const Tag = ({ text, children, additionalClasses }: TagProps) => {
  return (
    <strong className={`govuk-tag ${additionalClasses}`}>
      { text || children }
    </strong>
  )
}

export default Tag