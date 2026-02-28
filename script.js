// script.js
const startBtn = document.getElementById('start-btn');
const flowerContainer = document.getElementById('flower-container');
const letterModal = document.getElementById('letter-modal');
const continueBtn = document.getElementById('continue-btn');
const floatingContainer = document.getElementById('floating-images');
const centerText = document.getElementById('center-text');

// DANH SÁCH LINK ẢNH CỦA BẠN - HÃY THAY LINK ẢNH THẬT VÀO ĐÂY
const imageLinks = [
    "image/AnhThuH8K14.JPG",
    "image/BaoHanT1K14.jpg",
    "image/ChauGiangE7K14.jpg",
    "image/GiaHanV6K14.jpg",
    "image/HaLinhH8K14.JPG",
    "image/PhuongThaoT1K14.jpg",
    "image/SongThuE7K14.jpg",
    "image/TamAnhE7K14.PNG",
    "image/ThienThuE7K14.jpg",
    "image/ThucNhiT1K13.jpg",
    "image/TuyetLanP2K14.jpg"
];

let imageInterval;

// Xử lý khi bấm nút mở quà
startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    flowerContainer.style.display = 'block';

    // Đợi 2 giây rồi hiện hộp thư
    setTimeout(() => {
        letterModal.style.display = 'block';
    }, 2000);
});

// Xử lý khi bấm nút tiếp tục trong thư
continueBtn.addEventListener('click', () => {
    letterModal.style.display = 'none';
    flowerContainer.style.display = 'none';
    centerText.style.display = 'block';

    // Bắt đầu hiệu ứng ảnh bay lên
    createFloatingImage();
    imageInterval = setInterval(createFloatingImage, 800);
});

// Logic tạo ảnh bay
function createFloatingImage() {
    const img = document.createElement('img');

    // Chọn ngẫu nhiên 1 ảnh
    const randomImage = imageLinks[Math.floor(Math.random() * imageLinks.length)];
    img.src = randomImage;
    img.className = 'floating-img';

    // Vị trí ngang ngẫu nhiên
    const randomLeft = Math.floor(Math.random() * 70) + 10;
    img.style.left = randomLeft + 'vw';

    // Độ nghiêng ngẫu nhiên để trông tự nhiên
    const startRot = Math.floor(Math.random() * 60) - 30;
    const endRot = Math.floor(Math.random() * 180) - 90;

    img.style.setProperty('--start-rot', startRot + 'deg');
    img.style.setProperty('--end-rot', endRot + 'deg');

    floatingContainer.appendChild(img);

    // Dọn dẹp ảnh sau khi bay khỏi màn hình (8s)
    setTimeout(() => {
        img.remove();
    }, 8000);
}