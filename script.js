// ฟังก์ชันในการจัดการข้อมูลเมื่อส่งฟอร์ม
function submitForm(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเพจ

    // ดึงค่าจากฟอร์ม
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const rating = document.getElementById("rating").value;

    // ตรวจสอบข้อมูลก่อนการส่ง
    if (!name || !message || !rating) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
    }

    // สร้างรายการใหม่ในสมุดเยี่ยม
    const guestBookList = document.getElementById("guestBookList");
    const listItem = document.createElement("li");

    listItem.innerHTML = `<strong>${name}</strong> (Rating: ${rating})<br>${message}`;
    guestBookList.appendChild(listItem);

    // รีเซ็ตฟอร์ม
    document.getElementById("guestBookForm").reset();

    return false; // ป้องกันการส่งข้อมูลและการรีเฟรชหน้า
}
document.getElementById('guestForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // ดึงค่าจากฟอร์ม
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const suggestions = document.getElementById('suggestions').value;

    // สร้างรายการใหม่
    const newEntry = `
        <li>
            <strong>ชื่อ:</strong> ${name}<br>
            <strong>อีเมล:</strong> ${email}<br>
            <strong>ความพึงพอใจ:</strong> ${rating}<br>
            <strong>ความคิดเห็น:</strong> ${suggestions}
        </li>
    `;

    // เพิ่มรายการในส่วนของ Guest Entries
    document.getElementById('entriesList').insertAdjacentHTML('beforeend', newEntry);

    // รีเซ็ตฟอร์ม
    document.getElementById('guestForm').reset();
});
