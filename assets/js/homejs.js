let API_URL = "https://6352a30bd0bca53a8eb145bc.mockapi.io/api/v1/joblist?sortBy=createdAt&order=asc&page=5&limit=3"
let jobContainer = document.querySelector('.card-containers') 



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
        // const carousel = document.createElement('div')
        // carousel.classList.add('carousel-item')
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


// prev.addEventListener('click', () => {
//     if(prevPage > 0){
//       pageCall(prevPage);
//     }
//   })
  
// next.addEventListener('click', () => {
//     if(nextPage <= totalPages){
//       pageCall(nextPage);
//     }
//   })
  
//   function pageCall(page){
//     let urlSplit = lastUrl.split('?');
//     let queryParams = urlSplit[1].split('&');
//     let key = queryParams[queryParams.length -1].split('=');
//     if(key[0] != 'page'){
//       let url = lastUrl + '&page='+page
//       getJobs(url);
//     }else{
//       key[1] = page.toString();
//       let a = key.join('=');
//       queryParams[queryParams.length -1] = a;
//       let b = queryParams.join('&');
//       let url = urlSplit[0] +'?'+ b
//       getJobs(url);
//     }
//   }


// search function
