import axios from "axios"

export const sendMoveToServer = async (newBoard: string[]) => {
    const response = axios.post('http://localhost:5000/move', {
        board: newBoard,
    })
    console.log((await response).data.board)
    return (await response).data.board;
}