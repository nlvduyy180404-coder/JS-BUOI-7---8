let arr = [];
let floatArr = [];

function displayArray() {
    document.getElementById('arrayDisplay').innerText = `Mảng hiện tại: [ ${arr.join(', ')} ]`;
}

function displayFloatArray() {
    document.getElementById('floatArrayDisplay').innerText = `Mảng số thực: [ ${floatArr.join(', ')} ]`;
}

function addNumber() {
    const input = document.getElementById('inputNum').value;
    if (input === '') {
        alert('Vui lòng nhập một số!');
        return;
    }
    arr.push(Number(input));
    displayArray();
    document.getElementById('inputNum').value = '';
}

// 1. Tổng số dương
function sumPositive() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
    }
    document.getElementById('res1').innerText = `Tổng: ${sum}`;
}

// 2. Đếm số dương
function countPositive() {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) count++;
    }
    document.getElementById('res2').innerText = `Số lượng số dương: ${count}`;
}

// 3. Tìm số nhỏ nhất
function findMin() {
    if (arr.length === 0) {
        document.getElementById('res3').innerText = 'Mảng rỗng';
        return;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    document.getElementById('res3').innerText = `Số nhỏ nhất: ${min}`;
}

// 4. Tìm số dương nhỏ nhất
function findMinPositive() {
    let minPos = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (minPos === -1 || arr[i] < minPos) {
                minPos = arr[i];
            }
        }
    }
    if (minPos === -1) {
        document.getElementById('res4').innerText = 'Không có số dương trong mảng';
    } else {
        document.getElementById('res4').innerText = `Số dương nhỏ nhất: ${minPos}`;
    }
}

// 5. Tìm số chẵn cuối cùng
function findLastEven() {
    let lastEven = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            lastEven = arr[i];
            break;
        }
    }
    document.getElementById('res5').innerText = `Số chẵn cuối cùng: ${lastEven}`;
}

// 6. Đổi chỗ 2 giá trị
function swapElements() {
    const p1 = parseInt(document.getElementById('pos1').value);
    const p2 = parseInt(document.getElementById('pos2').value);
    
    if (isNaN(p1) || isNaN(p2)) {
        alert('Vui lòng nhập vị trí hợp lệ');
        return;
    }
    
    if (p1 >= 0 && p1 < arr.length && p2 >= 0 && p2 < arr.length) {
        // Swap
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
        
        displayArray();
        document.getElementById('res6').innerText = `Đã đổi chỗ vị trí ${p1} và ${p2}`;
    } else {
        alert('Vị trí nằm ngoài phạm vi mảng');
    }
}

// 7. Sắp xếp mảng tăng dần
function sortAscending() {
    if (arr.length === 0) return;
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    displayArray();
    document.getElementById('res7').innerText = `Mảng sau khi xếp: [ ${arr.join(', ')} ]`;
}

// 8. Tìm số nguyên tố đầu tiên
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function findFirstPrime() {
    let firstPrime = -1;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            firstPrime = arr[i];
            break;
        }
    }
    document.getElementById('res8').innerText = `Số nguyên tố đầu tiên: ${firstPrime}`;
}

// 9. Nhập thêm mảng số thực và đếm số nguyên
function addFloat() {
    const input = document.getElementById('inputFloat').value;
    if (input === '') {
        alert('Vui lòng nhập một số!');
        return;
    }
    floatArr.push(Number(input));
    displayFloatArray();
    document.getElementById('inputFloat').value = '';
}

function countIntegersInFloatArray() {
    let count = 0;
    for (let i = 0; i < floatArr.length; i++) {
        if (Number.isInteger(floatArr[i])) {
            count++;
        }
    }
    document.getElementById('res9').innerText = `Số lượng số nguyên: ${count}`;
}

// 10. So sánh số dương và số âm
function comparePosNeg() {
    let posCount = 0;
    let negCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) posCount++;
        else if (arr[i] < 0) negCount++;
    }
    
    let result = '';
    if (posCount > negCount) {
        result = `Số dương (${posCount}) > Số âm (${negCount})`;
    } else if (posCount < negCount) {
        result = `Số âm (${negCount}) > Số dương (${posCount})`;
    } else {
        result = `Số dương (${posCount}) = Số âm (${negCount})`;
    }
    
    document.getElementById('res10').innerText = result;
}
