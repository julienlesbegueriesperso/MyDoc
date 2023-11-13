import { ReactNode } from "react";

export interface TwoColumnsContentProps {
  value: number;
  index: number;
  col1: ReactNode;
  col2: ReactNode;
}

export function TwoColumnsContent(props: TwoColumnsContentProps) {
  const { value, index } = props;
  return (
    <div hidden={value !== index} className="content">
      <div className="row">
        <div className="column1">{props.col1}</div>
        <div className="column2">{props.col2}</div>
      </div>
    </div>
  );
}

export default TwoColumnsContent;
