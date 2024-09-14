import React from "react";

const Title: React.FC = () => {
    return(
        <h1 className="title">
        <span className="tic-word">Tic.</span>{" "}
        <span className="tac-word">Tac.</span>{" "}
        <span className="toe-word">Toe.</span>
      </h1>
    )
}

export default Title;