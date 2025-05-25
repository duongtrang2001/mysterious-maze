const boxes = document.querySelectorAll('.cell');
const dialog = document.getElementById('dialog-instruct');
const btnStart = document.getElementById('start-btn');

let isReadyGame = false;
let isStart = false;
let startTime = null;

function readyGame() {
    setTimeout(() => {
        dialog.showModal();
    }, 300);
}

function resetGame() {
    (startTime = null), (isStart = false);
    return;
}

btnStart.addEventListener('click', () => {
    dialog.close();
    setTimeout(() => {
        isReadyGame = true;
    }, 3000);
});

boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        if (!isReadyGame) {
            return;
        }

        if (box.classList.contains('start')) {
            isStart = true;
            startTime = Date.now();
        }
        if (!isStart) {
            alert('Bạn hãy xuất phát từ vị trí Start');
            return;
        }

        if (box.classList.contains('wall')) {
            resetGame();
            alert('Thất bại! Bạn đã chạm phải tường');
        }

        if (box.classList.contains('trap')) {
            resetGame();
            alert('Thất bại! Bạn đã chạm phải vật cản');
        }
        if (box.classList.contains('finish')) {
            const endTime = Date.now();
            const totalTime = ((endTime - startTime) / 1000).toFixed(2);

            if (totalTime > 1) {
                alert('Chúc mừng bạn đã hoàn thành trò chơi');
            } else {
                alert('Tốc độ vượt giới hạn! Không hợp lệ');
            }

            resetGame();
        }
    });
});

readyGame();
