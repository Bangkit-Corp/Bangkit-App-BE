let API_URL = "https://6352a30bd0bca53a8eb145bc.mockapi.io/api/v1/joblist"
let jobContainer = document.querySelector('.card-containers'); 
const form = document.getElementById('form');

// https://6352a30bd0bca53a8eb145bc.mockapi.io/api/v1/joblist?${idsearch}=${value}


// munculkan job listing dari API 
async function getJobs(url) {
    let response = await fetch(url)
    let result = await response.json()
    console.log(result)
    showJobs(result)
}

function showJobs (result) {
    jobContainer.innerHTML = '';

    result.forEach(jobs => {
        const{gaji, jenisPekerjaan, kategori, kualifikasi, logo, lokasi, nama, namaPerusahaan, id} = jobs;
        const jobElement = document.createElement('div');
        jobElement.classList.add('card')
        jobElement.innerHTML = `
        <img src="${logo}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${nama}</h5>
                  <p class="card-text"> </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" style="color: rgb(73, 73, 73)">${namaPerusahaan}</li>
                  <li class="list-group-item" style="color: green;">${gaji}</li>
                  <li class="list-group-item" style="color: rgb(73, 73, 73)">${lokasi}</li>
                </ul>
                <div class="card-body bottom">
                  <a href="detailJob.html?id=${id}" class="card-link">Apply</a>
                </div>
        `
        jobContainer.appendChild(jobElement)
    })
}
getJobs(API_URL)


// Search function
form.addEventListener('input', (e) => {
    e.preventDefault();

    const searchName = document.getElementById('nama').value;
    const searchLocation = document.getElementById('lokasi').value;
    const searchCompany = document.getElementById('perusahaan').value;
    const searchCategory = document.getElementById('kategori').value;

    if(searchName) {
        getJobs(API_URL+'?nama='+searchName)
    } else if(searchLocation) {
        getJobs(API_URL+'?lokasi='+searchLocation)
    } else if(searchCompany) {
        getJobs(API_URL+'?namaPerusahaan='+searchCompany)
    } else if(searchCategory) {
        getJobs(API_URL+'?kategori='+searchCategory)
    } else {
        getJobs(API_URL);
    }
})


// Search Checkbox










           