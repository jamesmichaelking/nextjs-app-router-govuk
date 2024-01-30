import { ReactNode } from 'react';

type GridColProps = {
  children: ReactNode,
  size: "one-quarter" | "one-half" | "two-thirds" | "one-third"
}

const GridCol = ({ children, size = 'two-thirds' }: GridColProps) => {
  return (
    <div className={`govuk-grid-column-${ size }`}>{ children }</div>
  )
}

export default GridCol