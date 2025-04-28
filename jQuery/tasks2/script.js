$(document).ready(function() {
    $('form.exchange-rates-form').submit(function(e) {
        e.preventDefault();

        // заявка без избрана трудност
        $.ajax({
            url: 'https://sudoku-api.vercel.app/api/dosuku',
            method: 'GET',
            success: function(response) {
                var board = response.newboard.grids[0].value;
                
                if (isInvalidResponse(board)) {
                    $('.error-message').text("Error: Empty Sudoku board received. Please try again.").show();
                    $('.game-container').hide();
                } else {
                    $('.error-message').hide();
                    $('.game-container').show();
                    renderSudokuGame(board);
                }
            },
            error: function() {
                $('.error-message').text("Error: Could not fetch Sudoku game.").show();
                $('.game-container').hide();
            }
        });
    });

    function isInvalidResponse(board) {
        return board.every(row => row.every(cell => cell === 0 || cell === null));
    }

    function renderSudokuGame(board) {
        var gameHtml = '<table class="sudoku-board">';
        for (var i = 0; i < 9; i++) {
            gameHtml += '<tr>';
            for (var j = 0; j < 9; j++) {
                var cellValue = (board[i][j] === 0 || board[i][j] === null) ? '' : board[i][j];
                gameHtml += `<td class="sudoku-cell"><input type="text" value="${cellValue}" maxlength="1"></td>`;
            }
            gameHtml += '</tr>';
        }
        gameHtml += '</table>';
        $('.game-container').html(gameHtml);
    }
});
