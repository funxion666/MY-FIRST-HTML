
// Dapatkan elemen tombol dengan ID 'alertButton'
const alertButton = document.getElementById('alertButton');

// Tambahkan "event listener" pada tombol
alertButton.addEventListener('click', function() {
    // Jalankan kode ini saat tombol diklik
    alert('NGACA BROO LU JUGA DONGOO');
});

// Dapatkan elemen tombol dengan ID 'alertButton'
const createButton1 = document.getElementById('createButton1');

// Tambahkan "event listener" pada tombol
createButton1.addEventListener('click', function() {
    // Jalankan kode ini saat tombol diklik
    alert('KATA GE JANGAN DI PENCETT🗿');
});



// Ambil elemen tombol awal dari HTML
const createButton = document.getElementById('createButton');
const container = document.getElementById('container');

// Tambahkan "event listener" pada tombol awal
createButton.addEventListener('click', function() {
    // 1. Buat elemen tombol baru
    const newButton = document.createElement('button');

    // Beri teks pada tombol baru
    newButton.textContent = 'KLIK LAGI';

    // Beri id dan kelas CSS
    newButton.id = 'plss starr';
    newButton.classList.add('button', 'youtubeButton');
 
    // 2. Tambahkan tombol baru ke dalam halaman
    container.appendChild(newButton);

    // Sembunyikan tombol awal agar tidak bisa membuat tombol lagi
    createButton.style.display = 'none';

    // 3. Tambahkan "event listener" pada tombol baru
    newButton.addEventListener('click', function() {
        // Tentukan URL YouTube
        const youtubeUrl = 'https://github.com/funxion666/MY-FIRST-HTML';
        
        // Buka URL di tab baru
        window.open(youtubeUrl, '_blank');
    });
});
