// Data menu
const makanan = [
  {
    nama: "Mac & Cheese",
    harga: 32000,
    gambar: "images/mac-and-cheese.svg",
    deskripsi: "Makaroni lembut dengan saus keju cheddar kental, dipanggang sampai bagian atasnya kecokelatan."
  },
  {
    nama: "Grilled Cheese Sandwich",
    harga: 28000,
    gambar: "images/grilled-cheese.svg",
    deskripsi: "Roti panggang renyah berisi keju mozzarella yang meleleh saat digigit."
  },
  {
    nama: "Pizza Keju",
    harga: 45000,
    gambar: "images/pizza-keju.svg",
    deskripsi: "Pizza dengan tiga jenis keju dan irisan pepperoni, ukuran cukup untuk berdua."
  }
];

const minuman = [
  {
    nama: "Cheese Tea",
    harga: 24000,
    gambar: "images/cheese-tea.svg",
    deskripsi: "Teh susu dingin dengan busa krim keju gurih-manis di atasnya."
  },
  {
    nama: "Milkshake Keju",
    harga: 27000,
    gambar: "images/milkshake-keju.svg",
    deskripsi: "Milkshake susu kental dengan parutan keju, dingin dan creamy."
  }
];

// Format harga ke Rupiah, contoh: Rp 32.000
const formatRupiah = (angka) => "Rp " + angka.toLocaleString("id-ID");

// Buat satu kartu menu
function buatKartu(item, idx, prefix) {
  const id = `${prefix}-${idx}`;
  const kartu = document.createElement("button");
  kartu.className = "card";
  kartu.type = "button";
  kartu.setAttribute("aria-expanded", "false");
  kartu.setAttribute("aria-controls", id);

  kartu.innerHTML = `
    <img src="${item.gambar}" alt="${item.nama}">
    <div class="info">
      <span class="nama">${item.nama}</span>
      <span class="harga">${formatRupiah(item.harga)}</span>
      <div class="deskripsi" id="${id}">
        <p>${item.deskripsi}</p>
      </div>
    </div>
  `;

  kartu.addEventListener("click", () => toggleKartu(kartu));
  return kartu;
}

// Buka/tutup deskripsi, hanya satu yang terbuka dalam satu waktu
function toggleKartu(kartu) {
  const terbuka = kartu.getAttribute("aria-expanded") === "true";

  document.querySelectorAll(".card[aria-expanded='true']").forEach((k) => {
    k.setAttribute("aria-expanded", "false");
  });

  if (!terbuka) kartu.setAttribute("aria-expanded", "true");
}

// Tampilkan ke halaman
function render(daftar, wadahId, prefix) {
  const wadah = document.getElementById(wadahId);
  daftar.forEach((item, i) => wadah.appendChild(buatKartu(item, i, prefix)));
}

render(makanan, "menu-makanan", "mkn");
render(minuman, "menu-minuman", "mnm");
