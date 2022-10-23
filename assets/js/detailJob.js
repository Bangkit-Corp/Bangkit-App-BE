detailTop = document.getElementById("job-top")
detailBottom = document.getElementById("job-bottom")
detailAside = document.getElementById("job-aside")

async function getDetailJob() {
    let URL = "https://6352a30bd0bca53a8eb145bc.mockapi.io/api/v1/joblist/" + getDetailByID("id")
    let response = await fetch(URL)
    let result = await response.json()
    console.log(result)
    let array = [result]
    array.forEach((item, index) => {
        // Top Detail: Job Company Profile
        detailTop.innerHTML += 
        `<div class="card border-light mb-3">
            <img src="${item.bgImage}" class="card-img-top"  style="height: 200px;" alt="...">
            <img src="${item.logo}" class="img-thumbnail position-absolute top-50 start-0 translate-middle-y ms-4 mt-0" style="width: 80px;">
            <div class="card-body mt-4">
                <div class="d-flex mb-2">
                    <div class="me-auto p-2">
                        <h4 class="card-title">${item.nama}</h4>
                        <p class="card-text">${item.namaPerusahaan}</p>
                        <a href="#" class="card-link" style="text-decoration: none;">${item.lokasi}</a><span class="text-muted">, Indonesia</span>
                        <p class="card-text"><small class="text-muted">Posted at ${item.createdAt}</small></p>
                    </div>                            
                    <div class="p-2" style="margin-top: 80px;">
                        <a href="mailto:${item.kontak}?subject=[BANGKIT] ${item.namaPerusahaan}: ${item.nama} Job Application&body=Dengan hormat,%0D%0A%0D%0APerkenalkan saya,%0D%0A
Nama : %0D%0A
Umur  : %0D%0A
Jenis Kelamin : %0D%0A
Pendidikan Terakhir  : %0D%0A
No. Telepon  : %0D%0A%0D%0A

Dengan surat lamaran ini saya mengajukan permohonan kerja di perusahaan yang Bapak/Ibu pimpin untuk menempati posisi sebagai posisi ${item.nama}. [Masukkan kelebihan dan pengalaman Anda pada posisi yang dipilih].%0D%0A%0D%0A

Sebagai bahan pertimbangan saya telah melampirkan beberapa berkas penting sebagai berikut:%0D%0A

1. Daftar Riwayat Hidup%0D%0A

2. Scan Kartu Tanda Penduduk (KTP)%0D%0A

3. Scan Ijazah Terakhir%0D%0A

4. Scan Surat Keterangan Dokter%0D%0A

5. Pas Photo format .jpeg (1 file)%0D%0A

6. Sertifikat%0D%0A%0D%0A

Demikian surat lamaran kerja yang saya buat, dengan lamaran ini kami berharap agar dapat diterima di perusahaan yang Bapak/Ibu pimpin. Terima kasih.%0D%0A%0D%0A

Hormat saya,%0D%0A

[Masukkan Nama]" class="btn btn-outline-primary">APPLY FOR THIS JOB</a>                        
                    </div>
                </div>
            </div>
        </div>`
        
        // Buttom Detail: Job Description
        detailBottom.innerHTML +=
        `<div class="card border-light mb-5">
            <div class="card-body">                
                <h5 class="card-title pb-3">Job Description</h5>
                <p class="card-text pb-3" >${item.deskripsi.replaceAll('\n', '<br>')}</p>
            </div>
        </div>`

        // Aside Detail: Job Detail Information
        detailAside.innerHTML +=
        `<div class="alert alert-info ms-0" role="alert">
            <p class="fw-normal text-center mb-0">Qualification</p>
            <p class="fw-bold text-center mb-0">${item.kualifikasi}</p>
        </div>
        <div class="alert alert-info ms-1" role="alert">
            <p class="fw-normal text-center mb-0">Job Type</p>
            <p class="fw-bold text-center mb-0">${item.jenisPekerjaan}</p>
        </div>
        <div class="alert alert-info ms-1" role="alert">
            <p class="fw-normal text-center mb-0">Salary</p>
            <p class="fw-bold text-center mb-0">${item.gaji}</p>
        </div>`        
    })
}

// Detail Job by ID
function getDetailByID(id){
    const queryUrl = window.location.search
    const urlParams = new URLSearchParams(queryUrl)
    const getDetailID = urlParams.get(id)
    return getDetailID
}
console.log(getDetailByID("id"));

getDetailJob()