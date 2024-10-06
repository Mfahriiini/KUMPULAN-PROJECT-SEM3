// Fungsi untuk membuat kelas Kapal
class Kapal {
    constructor(namaKapal, jenisKapal) {
        this.namaKapal = namaKapal;
        this.jenisKapal = jenisKapal;
    }

    getNamaKapal() {
        return this.namaKapal;
    }

    getJenisKapal() {
        return this.jenisKapal;
    }

    tampilkanInfo() {
        console.log(`Nama Kapal: ${this.namaKapal}`);
        console.log(`Jenis Kapal: ${this.jenisKapal}`);
    }
}

// Fungsi untuk membuat kelas Tiket
class Tiket extends Kapal {
    constructor(namaKapal, jenisKapal, hargaTiket, jumlahTiket) {
        super(namaKapal, jenisKapal);
        this.hargaTiket = hargaTiket;
        this.jumlahTiket = jumlahTiket;
    }

    getHargaTiket() {
        return this.hargaTiket;
    }

    getJumlahTiket() {
        return this.jumlahTiket;
    }

    tampilkanInfoTiket() {
        this.tampilkanInfo();
        console.log(`Harga Tiket: ${this.hargaTiket}`);
        console.log(`Jumlah Tiket: ${this.jumlahTiket}`);
    }
}

// Fungsi untuk membuat kelas Barang
class Barang extends Kapal {
    constructor(namaKapal, jenisKapal, namaBarang, jumlahBarang) {
        super(namaKapal, jenisKapal);
        this.namaBarang = namaBarang;
        this.jumlahBarang = jumlahBarang;
    }

    getNamaBarang() {
        return this.namaBarang;
    }

    getJumlahBarang() {
        return this.jumlahBarang;
    }

    tampilkanInfoBarang() {
        this.tampilkanInfo();
        console.log(`Nama Barang: ${this.namaBarang}`);
        console.log(`Jumlah Barang: ${this.jumlahBarang}`);
    }
}

// Fungsi untuk membuat kelas TempatPendaratan
class TempatPendaratan extends Kapal {
    constructor(namaKapal, jenisKapal, namaTempatPendaratan, lokasiTempatPendaratan, kapasitasTempatPendaratan) {
        super(namaKapal, jenisKapal);
        this.namaTempatPendaratan = namaTempatPendaratan;
        this.lokasiTempatPendaratan = lokasiTempatPendaratan;
        this.kapasitasTempatPendaratan = kapasitasTempatPendaratan;
    }

    getNamaTempatPendaratan() {
        return this.namaTempatPendaratan;
    }

    getLokasiTempatPendaratan() {
        return this.lokasiTempatPendaratan;
    }

    getKapasitasTempatPendaratan() {
        return this.kapasitasTempatPendaratan;
    }

    tampilkanInfoTempatPendaratan() {
        this.tampilkanInfo();
        console.log(`Nama Tempat Pendaratan: ${this.namaTempatPendaratan}`);
        console.log(`Lokasi Tempat Pendaratan: ${this.lokasiTempatPendaratan}`);
        console.log(`Kapasitas Tempat Pendaratan: ${this.kapasitasTempatPendaratan}`);
    }
}

// Fungsi untuk menghandle form pembelian tiket
function beliTiket() {
    var formTiket = document.getElementById("form-tiket");
    var namaKapal = formTiket.elements["nama-kapal"].value;
    var jenisKapal = formTiket.elements["jenis-kapal"].value;
    var hargaTiket = formTiket.elements["harga-tiket"].value;
    var jumlahTiket = formTiket.elements["jumlah-tiket"].value;

    var tiket = new Tiket(namaKapal, jenisKapal, hargaTiket, jumlahTiket);
    tiket.tampilkanInfoTiket();
}

// Fungsi untuk menghandle form rekapitulasi barang
function rekapitulasiBarang() {
    var formBarang = document.getElementById("form-barang");
    var namaKapal = formBarang.elements["nama-kapal-barang"].value;
    var jenisKapal = formBarang.elements["jenis-kapal-barang"].value;
    var namaBarang = formBarang.elements["nama-barang"].value