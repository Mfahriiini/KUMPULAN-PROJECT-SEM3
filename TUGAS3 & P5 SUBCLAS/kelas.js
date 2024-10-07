
class Kapal {
    constructor(namaKapal, jenisKapal) {
        this.namaKapal = namaKapal;
        this.jenisKapal = jenisKapal;
    }

    
    tampilkanInfo() {
        return `Nama Kapal: ${this.namaKapal}, Jenis Kapal: ${this.jenisKapal}`;
    }

    
    tampilkanInfoDetail() {
        throw new Error("Method 'tampilkanInfoDetail' harus diimplementasikan");
    }
}


class Tiket extends Kapal {
    constructor(namaKapal, jenisKapal, hargaTiket, jumlahTiket) {
        super(namaKapal, jenisKapal);  // Memanggil constructor dari superclass
        this.hargaTiket = hargaTiket;
        this.jumlahTiket = jumlahTiket;
    }

   
    tampilkanInfoDetail() {
        return `${this.tampilkanInfo()}, Harga Tiket: ${this.hargaTiket}, Jumlah Tiket: ${this.jumlahTiket}`;
    }
}


class Barang extends Kapal {
    constructor(namaKapal, jenisKapal, namaBarang, jumlahBarang) {
        super(namaKapal, jenisKapal);
        this.namaBarang = namaBarang;
        this.jumlahBarang = jumlahBarang;
    }

    
    tampilkanInfoDetail() {
        return `${this.tampilkanInfo()}, Nama Barang: ${this.namaBarang}, Jumlah Barang: ${this.jumlahBarang}`;
    }
}


class TempatPendaratan extends Kapal {
    constructor(namaKapal, jenisKapal, namaTempatPendaratan, lokasiTempatPendaratan, kapasitasTempatPendaratan) {
        super(namaKapal, jenisKapal);
        this.namaTempatPendaratan = namaTempatPendaratan;
        this.lokasiTempatPendaratan = lokasiTempatPendaratan;
        this.kapasitasTempatPendaratan = kapasitasTempatPendaratan;
    }

    
    tampilkanInfoDetail() {
        return `${this.tampilkanInfo()}, Nama Tempat Pendaratan: ${this.namaTempatPendaratan}, Lokasi: ${this.lokasiTempatPendaratan}, Kapasitas: ${this.kapasitasTempatPendaratan}`;
    }
}


class Pelabuhan extends Kapal {
    constructor(namaKapal, jenisKapal, namaPelabuhan, lokasiPelabuhan) {
        super(namaKapal, jenisKapal);
        this.namaPelabuhan = namaPelabuhan;
        this.lokasiPelabuhan = lokasiPelabuhan;
    }

   
    tampilkanInfoDetail() {
        return `${this.tampilkanInfo()}, Nama Pelabuhan: ${this.namaPelabuhan}, Lokasi: ${this.lokasiPelabuhan}`;
    }
}


class Penumpang extends Kapal {
    constructor(namaKapal, jenisKapal, namaPenumpang, umurPenumpang) {
        super(namaKapal, jenisKapal);
        this.namaPenumpang = namaPenumpang;
        this.umurPenumpang = umurPenumpang;
    }

  
    tampilkanInfoDetail() {
        return `${this.tampilkanInfo()}, Nama Penumpang: ${this.namaPenumpang}, Umur Penumpang: ${this.umurPenumpang}`;
    }
}


document.getElementById('btn-tiket').addEventListener('click', function() {
    let tiket = new Tiket("Kapal A", "Feri", 50000, 200);
    document.getElementById('hasil').innerHTML = tiket.tampilkanInfoDetail();
});

document.getElementById('btn-barang').addEventListener('click', function() {
    let barang = new Barang("Kapal B", "Kargo", "Pakaian", 1000);
    document.getElementById('hasil').innerHTML = barang.tampilkanInfoDetail();
});

document.getElementById('btn-tempat-pendaratan').addEventListener('click', function() {
    let tempatPendaratan = new TempatPendaratan("Kapal C", "Penumpang", "Pelabuhan Merak", "Banten", 3000);
    document.getElementById('hasil').innerHTML = tempatPendaratan.tampilkanInfoDetail();
});

document.getElementById('btn-pelabuhan').addEventListener('click', function() {
    let pelabuhan = new Pelabuhan("Kapal D", "Penumpang", "Pelabuhan Tanjung Priok", "Jakarta");
    document.getElementById('hasil').innerHTML = pelabuhan.tampilkanInfoDetail();
});

document.getElementById('btn-penumpang').addEventListener('click', function() {
    let penumpang = new Penumpang("Kapal E", "Penumpang", "John Doe", 30);
    document.getElementById('hasil').innerHTML = penumpang.tampilkanInfoDetail();
});
