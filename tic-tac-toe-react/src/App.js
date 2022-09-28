import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import DisplayValue from './DisplayValue';
import PlayerWon from './PlayerWon';
import PlayerTurn from './PlayerTurn.js';
import './drawGame.js'

const clearStatus = ["", "", "", "", "", "", "", "", ""];
const win_comb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function App() {
    const [currentPlayer, setcurrentPlayer] = useState('X');
    const [gameStatus, setgameStatus] = useState(true);
    const [boxStatus, setboxStatus] = useState(clearStatus);

    const CellClickedCheck = (cellClickedIndex) => {
        if (boxStatus[cellClickedIndex] !== '' || gameStatus !== true) {
            return null;
        }
        CellCLickedUpdate(cellClickedIndex);
        verifyWin();
    }

    const CellCLickedUpdate = (cellClickedIndex) => {
        setboxStatus(boxStatus[cellClickedIndex] = currentPlayer);
    }
    const PlayerChange = () => {
        setcurrentPlayer(currentPlayer==='X'?'O':'X');
        <PlayerTurn>
        </PlayerTurn >
    }
    const verifyWin = () => {
        let roundWon = false;
        let check_comb;
        for (let i = 0; i <= 7; i++) {
            check_comb = win_comb[i];
            let a = boxStatus[check_comb[0]];
            let b = boxStatus[check_comb[1]];
            let c = boxStatus[check_comb[2]];
            if (a === '' || b === '' || c === '')
                continue;
            else if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            <PlayerWon>
                scratch(check_comb);
                setgameStatus(false);
            </PlayerWon>
            return null;
        }
        let roundDraw = !boxStatus.includes("");
        if (roundDraw) {
            <drawGame>
                setgameStatus(false);
            </drawGame>
            return null;
        }
        PlayerChange();
    }
    const scratch = (check_comb) => {
        //console.log(1);
        if (check_comb === win_comb[0]) {
            document.getElementById('scratch_hor1').style.visibility = "visible";
        }
        else if (check_comb === win_comb[1]) {
            document.getElementById('scratch_hor2').style.visibility = "visible";
        }
        else if (check_comb === win_comb[2]) {
            document.getElementById('scratch_hor3').style.visibility = "visible";
        }
        else if (check_comb === win_comb[3]) {
            document.getElementById('scratch_ver1').style.visibility = "visible";
        }
        else if (check_comb === win_comb[4]) {
            document.getElementById('scratch_ver2').style.visibility = "visible";
        }
        else if (check_comb === win_comb[5]) {
            document.getElementById('scratch_ver3').style.visibility = "visible";
        }
        else if (check_comb === win_comb[6]) {
            document.getElementById('scratch_dig1').style.visibility = "visible";
        }
        else if (check_comb === win_comb[7]) {
            document.getElementById('scratch_dig2').style.visibility = "visible";
        }
        return null;
    }
    const gameRestart = () => {
        gameStatus = true;
        currentPlayer = "X";
        boxStatus = ["", "", "", "", "", "", "", "", ""];
        <PlayerTurn />
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
        document.getElementById('scratch_hor1').style.visibility = "hidden";
        document.getElementById('scratch_hor2').style.visibility = "hidden";
        document.getElementById('scratch_hor3').style.visibility = "hidden";
        document.getElementById('scratch_ver1').style.visibility = "hidden";
        document.getElementById('scratch_ver2').style.visibility = "hidden";
        document.getElementById('scratch_ver3').style.visibility = "hidden";
        document.getElementById('scratch_dig1').style.visibility = "hidden";
        document.getElementById('scratch_dig2').style.visibility = "hidden";
    }
    return (
        <><h1 className="game_title">TIC-TAC-TOE XOXO</h1>
            <div className="grid_container">
                <div DisplayValue data-cell-index="0" className="eachcell cell" onClick={() => CellClickedCheck(0)} state={boxStatus[0]} />
                <div DisplayValue data-cell-index="1" className="eachcell cell" onClick={() => CellClickedCheck(1)} state={boxStatus[1]} />
                <div DisplayValue data-cell-index="2" className="eachcell cell" onClick={() => CellClickedCheck(2)} state={boxStatus[2]} />
                <div DisplayValue data-cell-index="3" className="eachcell cell" onClick={() => CellClickedCheck(3)} state={boxStatus[3]} />
                <div DisplayValue data-cell-index="4" className="eachcell cell" onClick={() => CellClickedCheck(4)} state={boxStatus[4]} />
                <div DisplayValue data-cell-index="5" className="eachcell cell" onClick={() => CellClickedCheck(5)} state={boxStatus[5]} />
                <div DisplayValue data-cell-index="6" className="eachcell cell" onClick={() => CellClickedCheck(6)} state={boxStatus[6]} />
                <div DisplayValue data-cell-index="7" className="eachcell cell" onClick={() => CellClickedCheck(7)} state={boxStatus[7]} />
                <div DisplayValue  data-cell-index="8" className="eachcell cell" onClick={() => CellClickedCheck(8)} state={boxStatus[8]} />
            </div>
            <h2 className="game_status" style={{ visibility: "visible" }}></h2>
            <button className="game_restart" style={{ visibility: "visible" }} onClick={() => gameRestart}>RESTART GAME</button>
            <hr id="scratch_hor1" style={{ visibility: "hidden" }} />
            <hr id="scratch_hor2" style={{ visibility: "hidden" }} />
            <hr id="scratch_hor3" style={{ visibility: "hidden" }} />
            <hr id="scratch_ver1" style={{ visibility: "hidden" }} />
            <hr id="scratch_ver2" style={{ visibility: "hidden" }} />
            <hr id="scratch_ver3" style={{ visibility: "hidden" }} />
            <hr id="scratch_dig1" style={{ visibility: "hidden" }} />
            <hr id="scratch_dig2" style={{ visibility: "hidden" }} /></>

    );
}

export default App;