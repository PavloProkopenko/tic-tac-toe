import React from "react";
// Making interface for props
interface CellProps {
  value: string;
  onClick: () => void;
}

// Describing component
const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <button className="cell" onClick={onClick}>
      {value}
    </button>
  );
};

export default Cell;
