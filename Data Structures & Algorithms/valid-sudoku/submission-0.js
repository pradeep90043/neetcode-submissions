class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //all row check
        let count = {}
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[i].length;j++){
                if (board[i][j] === ".") continue;
                if(count[board[i][j]]==1) return false
                else{
                    count[board[i][j]]=1
                }
            }
            count={}
        }

        //all column check
             let countCol = {}
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[i].length;j++){
                if (board[j][i] === ".") continue;
                if(countCol[board[j][i]]==1) return false
                else{
                    countCol[board[j][i]]=1
                }
            }
            countCol={}
        }

        //all subbox check
                let countBox = {}
    for(let boxRow=0;boxRow<9;boxRow+=3){
        for(let boxCol=0;boxCol<9;boxCol+=3){
               for(let i=boxRow;i<3+boxRow;i++){
            for(let j=boxCol;j<3+boxCol;j++){
                if (board[i][j] === ".") continue;
                if(countBox[board[i][j]]==1) return false
                else{
                    countBox[board[i][j]]=1
                }
            }
            }
        countBox={}
        }
    }
    return true
}
}
