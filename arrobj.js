var man = [
    {
        id: 1,
        name: "Quần short kaki nam",
        code: "TC1025011BA",
        price: "260.000",
        image: "https://product.hstatic.net/1000388584/product/wq107091_0182e14c0d2c4f29ba719645c08496db_grande.png"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://localhouze.com/wp-content/uploads/2022/11/Quan-Baggy-Jean-Nam-Ong-Rong-Den-1.jpg"
    },
    {
        id: 3,
        name: "Áo hoodie nam",
        code: "TC1025011BA",
        price: "350.000",
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbn4-lm0hgvu932s0ae"
    },
    {
        id: 4,
        name: "Áo sơ mi mỏng tay nam",
        code: "TC1025011BA",
        price: " 150.000",
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-23020-7go33noemxnv87"
    },
];

var women = [
    {
        id: 1,
        name: "Váy sơ mi fashion",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://down-vn.img.susercontent.com/file/adaffb6d01710ab090228f9f6581ea70"
    },
    {
        id: 2,
        name: "Áo croptop cổ tròn",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://down-vn.img.susercontent.com/file/d819db89267624a44e632d85e3f49813"
    },
    {
        id: 3,
        name: "Áo khoác gió",
        code: "TC1025011BA",
        price: "350.000",
        image: "https://vn-test-11.slatic.net/p/2c41050135a9cf78f9e2608639f2ca25.jpg"
    },
    {
        id: 4,
        name: "Áo khoác kaki",
        code: "TC1025011BA",
        price: "260.000",
        image: "https://cf.shopee.vn/file/cc69f25844a0073d5d4d7781fd342ece"
    },
];

function listProducts() {
    for (let i = 0; i <= man.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="'+man[i].image+'" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+man[i].name + '</h5>';
        demo += '<div class="card-text">'+man[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }

    for (let i = 0; i <= women.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="'+women[i].image+'" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<div class="card-text">'+women[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
}