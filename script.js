let req = new XMLHttpRequest;
console.log(req);

req.open("get", "https://fakestoreapi.com/products");
function loaddata() {
    req.send();
    req.onreadystatechange = function () {
        console.log("readystate :", req.readyState);
        if (req.readyState === 4) {
            console.log("status:", req.status);
            let response = req.response;
            let result = JSON.parse(response);
            console.log(result);
            let tab1 = document.getElementById("tab1-data")
            let datas = '';
            for(let i=0;i<result.length;i++){
                datas = datas + `
                <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="rounded position-relative fruite-item">
                                                <div class="fruite-img">
                                                   <img src="${result[i].image}" class="img-fluid w-100 rounded-top image" alt="" onclick="handleClick(${result[i].id})">
                                                </div>
                                                <div class="category text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style="top: 10px; left: 10px;">${result[i].category}</div>
                                                <div class="p-3 border border-secondary border-top-0 rounded-bottom">
                                                    <h4 class="title">${result[i].title.slice(0,18)+".."}</h4>
                                                    <p class="description">Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div class="d-flex justify-content-between   flex-lg-wrap">
                                                        <p class="price text-dark fs-5 fw-bold mb-0">$${result[i].price} / kg</p>
                                                        <a href="#"
                                                            class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                                class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                            cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
            }
            tab1.innerHTML = datas;
        }


    }

}
function handleClick(id){
    console.log(id);
    window.location.href=`viewpage.html?id=${id}`;
    return;
}
function loadedPage(){
    let loc=window.location;
    console.log(loc);

    let qrstr=location.search;
    console.log(qrstr);

    let urlparams=new URLSearchParams(qrstr);
    console.log(urlparams);

    let id=urlparams.get("id");
    console.log(id);

    req.open("get", `https://fakestoreapi.com/products/${id}`);
    req.send();
    req.onreadystatechange = function () {
        console.log("readystate :", req.readyState);
        if (req.readyState === 4) {
            console.log("status:", req.status);
            let response = req.response;
            let result = JSON.parse(response);
            console.log(result);
            let abcd = document.getElementById("abcd")
            let datas = '';
            datas=` <div class="col-lg-6">
                                <div class="border rounded">
                                    <a href="#">
                                        <img src="${result.image}" class="img-fluid rounded" alt="Image">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <h4 class="fw-bold mb-3">${result.title}</h4>
                                <p class="mb-3">Category: ${result.category}</p>
                                <h5 class="fw-bold mb-3"> ${result.price}$</h5>
                                <div class="d-flex mb-4">
                                    <i class="fa fa-star text-secondary"></i>
                                    <i class="fa fa-star text-secondary"></i>
                                    <i class="fa fa-star text-secondary"></i>
                                    <i class="fa fa-star text-secondary"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <p class="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                <p class="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
                                <div class="input-group quantity mb-5" style="width: 100px;">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-minus rounded-circle bg-light border" >
                                            <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm text-center border-0" value="1">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <a href="#" class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>`
                            abcd.innerHTML=datas;
        }
    }

}
