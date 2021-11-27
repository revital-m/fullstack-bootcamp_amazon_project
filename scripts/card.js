const cards = [
  {
    id: "card_0",
    img: "./assets/img/carusel_img/img (14).jpg",
    href: "https://www.amazon.com/dp/B09GKKFN29/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B09GKKFN29&pd_rd_w=EJyi4&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=yXSiI&pf_rd_r=VRP17CQPXKWMW1M0TPFC&pd_rd_r=7395e947-f57a-4ccd-9068-99d70f8b08d1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMFNUWEpWMTA2Nk1KJmVuY3J5cHRlZElkPUEwNzYzOTMyUjZVN1lLRklFSThDJmVuY3J5cHRlZEFkSWQ9QTAyMTg1NDBIOFdGTzhFWUtGQ1Qmd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
    a: "Fuzzy Slipper Socks for Women Fluffy Warm Cozy Socks with Grips Non Slip Winter Gir...",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: 365,
    price: "$13.90",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_1",
    img: "./assets/img/carusel_img/img (1).jpg",
    href: "https://www.amazon.com/dp/B081J38G3R/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B081J38G3R&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFJKSTZFRzZRNFBVJmVuY3J5cHRlZElkPUEwNjUxMDUxMVNPQzM3T1Y0MkMxMiZlbmNyeXB0ZWRBZElkPUEwNTg0ODM5SUVDWkxLM1cxTTg0JndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    a: "Sandsuced Women Slipper Socks Fluffy Fuzzy Cozy Fleece Plush Cabin Winter Warm…",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: 423,
    price: "$9.99",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_2",
    img: "./assets/img/carusel_img/img (2).jpg",
    href: "https://www.amazon.com/dp/B077JXMJPD/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B077JXMJPD&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFJKSTZFRzZRNFBVJmVuY3J5cHRlZElkPUEwNjUxMDUxMVNPQzM3T1Y0MkMxMiZlbmNyeXB0ZWRBZElkPUEwNDMxMTcxMlA5RkRZTVRGUFZNWiZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    a: "Plush Slipper Socks Women - Colorful Warm Fuzzy Crew Socks Cozy Soft 6 Pairs for Wi...",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "6,673",
    price: "$13.99",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_3",
    img: "./assets/img/carusel_img/img (3).jpg",
    href: "https://www.amazon.com/dp/B07JN9RLNJ/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B07JN9RLNJ&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFJKSTZFRzZRNFBVJmVuY3J5cHRlZElkPUEwNjUxMDUxMVNPQzM3T1Y0MkMxMiZlbmNyeXB0ZWRBZElkPUEwNzcxMjIyQjhKWEpRNjFSRUUmd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
    a: "ANTSANG Women Slipper Socks Fuzzy Fluffy Cozy Cabin Winter Fleece Soft Warm…",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "345",
    price: "$9.99",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_4",
    img: "./assets/img/carusel_img/img (4).jpg",
    href: "https://www.amazon.com/dp/B08GP7ZYXT/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B08GP7ZYXT&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFJKSTZFRzZRNFBVJmVuY3J5cHRlZElkPUEwNjUxMDUxMVNPQzM3T1Y0MkMxMiZlbmNyeXB0ZWRBZElkPUEwNDgzNjk2MksxNkFCUElOV1UzOCZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    a: "ANLISIM Womens Fuzzy Socks Cozy Fluffy Winter Cabin Slipper Warm Fleece Soft Thick ...",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "466",
    price: "$12.99",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_5",
    img: "./assets/img/carusel_img/img (5).jpg",
    href: "https://www.amazon.com/dp/B08LB4HDGB/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B08LB4HDGB&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFJKSTZFRzZRNFBVJmVuY3J5cHRlZElkPUEwNjUxMDUxMVNPQzM3T1Y0MkMxMiZlbmNyeXB0ZWRBZElkPUEwMzc3MDUyM0tXMDUwNjFINVdCTCZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    a: "5 Pairs Womens Fuzzy Fluffy Socks Warm Winter Cozy Soft Crew Slipper Socks Home Sle...",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "344",
    price: "$18.98",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_6",
    img: "./assets/img/carusel_img/img (6).jpg",
    href: "https://www.amazon.com/dp/B08CQXB4CR/ref=sspa_dk_detail_6?psc=1&pd_rd_i=B08CQXB4CR&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFJKSTZFRzZRNFBVJmVuY3J5cHRlZElkPUEwNjUxMDUxMVNPQzM3T1Y0MkMxMiZlbmNyeXB0ZWRBZElkPUEwOTEyNzM3U05KTjBYSElOVkgmd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
    a: "6-12 Pairs Diravo Fuzzy Cozy Socks Slipper Socks for Women Warm Cozy Fluffy Comfy S...",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "1,000",
    price: "$17.99",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_7",
    img: "./assets/img/carusel_img/img (7).jpg",
    href: "https://www.amazon.com/dp/B08TM961HW/ref=sspa_dk_detail_7?psc=1&pd_rd_i=B08TM961HW&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFJKSTZFRzZRNFBVJmVuY3J5cHRlZElkPUEwNjUxMDUxMVNPQzM3T1Y0MkMxMiZlbmNyeXB0ZWRBZElkPUEwODUyMjk3MTJPWlhXTzA1UktTOSZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    a: "ZMART Fuzzy Slipper Socks for Women Fuzzy Christmas Socks 5 Pack, Fluffy Animal Soc...",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "2,229",
    price: "$16.99",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_8",
    img: "./assets/img/carusel_img/img (8).jpg",
    href: "https://www.amazon.com/dp/B09BNRBJ3W/ref=sspa_dk_detail_8?psc=1&pd_rd_i=B09BNRBJ3W&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFJKSTZFRzZRNFBVJmVuY3J5cHRlZElkPUEwNjUxMDUxMVNPQzM3T1Y0MkMxMiZlbmNyeXB0ZWRBZElkPUEwMDAzMjE0MjhJN0RWWFFBM1M3TCZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    a: "2 Pairs Womens Cozy Cute Animal Fuzzy Slipper Thick Socks Non-Slip Winter Warm…",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "205",
    price: "$16.99",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_9",
    img: "./assets/img/carusel_img/img (9).jpg",
    href: "https://www.amazon.com/dp/B08D8SLCP1/ref=sspa_dk_detail_9?psc=1&pd_rd_i=B08D8SLCP1&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTFJKSTZFRzZRNFBVJmVuY3J5cHRlZElkPUEwNjUxMDUxMVNPQzM3T1Y0MkMxMiZlbmNyeXB0ZWRBZElkPUEwODkzOTA2MUc3OFpWVUtSWjlPTCZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    a: "5 Pack Women Girls Fuzzy Fluffy Socks, Cabin Soft Warm Slipper Crew Cute Cozy Socks...",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "4,322",
    price: "$16.99",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_10",
    img: "./assets/img/carusel_img/img (10).jpg",
    href: "https://www.amazon.com/dp/B07YJH97VC/ref=sspa_dk_detail_0?psc=1&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTkRBVTJaTVJLOVI1JmVuY3J5cHRlZElkPUEwMDUwMDM1MU81N0s1UFFGRUhTUSZlbmNyeXB0ZWRBZElkPUEwMjI3NDczSzNGSTdMSlE1NEhMJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    a: "Chalier 7 Pairs Womens Winter Fuzzy Socks Cozy Fluffy Socks Warm Fuzzy Christmas Socks for…",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "3,052",
    price: "$19.99",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_11",
    img: "./assets/img/carusel_img/img (11).jpg",
    href: "https://www.amazon.com/dp/B08CVSCGFH/ref=sspa_dk_detail_1?psc=1&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&smid=ATXD7XI4Q3HVL&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTkRBVTJaTVJLOVI1JmVuY3J5cHRlZElkPUEwMDUwMDM1MU81N0s1UFFGRUhTUSZlbmNyeXB0ZWRBZElkPUEwNDc5NTAwMU9XTVAzVlRHT0ZMOSZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    a: "Camlinbo 2Pairs Christmas Fuzzy Socks, Winter Fleece Warm Socks, Christmas…",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "88",
    price: "$21.23",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_12",
    img: "./assets/img/carusel_img/img (12).jpg",
    href: "https://www.amazon.com/dp/B08CZ2BZX4/ref=sspa_dk_detail_2?psc=1&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&smid=A3R3U8H1LFY0AN&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTkRBVTJaTVJLOVI1JmVuY3J5cHRlZElkPUEwMDUwMDM1MU81N0s1UFFGRUhTUSZlbmNyeXB0ZWRBZElkPUEwODUzMjU5MlFQU1M4QU1ZNEw4SSZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    a: "4-8 Pairs Women Fuzzy Coral Fleece Socks, Warm Super Soft Anti-Skid Slipper Socks…",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "789",
    price: "$12.49",
    icon: "carusel__bottom--price--prime-icon",
  },
  {
    id: "card_13",
    img: "./assets/img/carusel_img/img (13).jpg",
    href: "https://www.amazon.com/dp/B08LB64F8J/ref=sspa_dk_detail_3?psc=1&pd_rd_w=Z83aj&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=SxdRX&pf_rd_r=AF5PCNKYN0WB3VKK1R16&pd_rd_r=c5cb9c54-7a71-482f-805e-bc92c1418459&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTkRBVTJaTVJLOVI1JmVuY3J5cHRlZElkPUEwMDUwMDM1MU81N0s1UFFGRUhTUSZlbmNyeXB0ZWRBZElkPUEwMzc3MjA4Q0lMTE1OSUNaQUkzJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    a: "5 Pairs Womens Fuzzy Fluffy Socks Warm Winter Cozy Soft Crew Slipper Socks Home…",
    stars: "carusel__bottom--stars-icon-4_5",
    votes: "344",
    price: "$18.98",
    icon: "carusel__bottom--price--prime-icon",
  },
];

const cardInfo = document.querySelector(".carusel__bottom--info");

(function enterCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    let info = `<div id="${cards[i].id}" class="carusel__bottom--card  myCards">
                <img src="${cards[i].img}" alt="img socks">
                <a class="main__center--links" href="${cards[i].href}" target="_blank">${cards[i].a}</a>
                <div class="carusel__bottom--stars">
                <div class="${cards[i].stars}"></div>
                <p class="carusel__bottom--stars-num">${cards[i].votes}</p>
                </div>
                <div class="carusel__bottom--price">
                <p class="carusel__bottom--price-num">${cards[i].price}</p>
                <div class="${cards[i].icon}"></div>
                </div>
                </div>`;
    cardInfo.innerHTML += info;
  }
})(cards);

let pageNum = 0;
carusel(pageNum);

function plusPage(num){
    carusel(pageNum += num);
}

function carusel(pageIdx){
    let mycards = document.querySelectorAll('.myCards');

    if (pageIdx > cards.length - 6) {pageIdx = 0}
    if (pageIdx < 1) {pageIdx = cards.length - 7}

    for (let i = 0; i < mycards.length; i++) {
        mycards[i].style.display = "none";
    }
    for (let j = pageIdx; j < pageIdx+6; j++) {
        mycards[j].style.display = "block";
    }
}
