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
                                                 <a href="viewpage.html">   <img src="${result[i].image}" class="img-fluid w-100 rounded-top image" alt=""></a>
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