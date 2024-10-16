document.addEventListener("DOMContentLoaded", () => {
  fetch("index.json")
    .then((res) => res.json())
    .then((data) => {
      const classy = document.querySelector(".classes");
      classy.innerHTML = `<div class="class"></div><span>${data.header.in}</span>`;

      const roller = data.header.deliver;
      const loc = document.querySelector(".loc");
      loc.innerHTML = `<div class="loff">
<span>${roller.deliveryI}</span>
<div class="last">
<span><i class="fa-solid fa-location-dot"></i></span>
</span>
    <span>${roller.update}</span>
</div>
</div>`;

      const mainInput = document.querySelector(".input");
      mainInput.className = "inputwhite";

      const jnrinput = document.createElement("form");
      jnrinput.className = "form";

      const selectT = document.createElement("select");
      data.header.all.forEach((element) => {
        const option = document.createElement("option");
        option.innerHTML = `${element}`;
        selectT.appendChild(option);
      });

      jnrinput.appendChild(selectT);
      mainInput.appendChild(jnrinput);

      const inputmain = document.createElement("input");
      inputmain.className = "inputwhitner";
      inputmain.type = "text";
      inputmain.placeholder = "mobile";
      jnrinput.appendChild(inputmain);

      // ----------search funtion

      const inputwhitner = document.querySelector(".inputwhitner");

      inputwhitner.addEventListener("input", function () {
        const inputTerm = this.value.toLowerCase();

        const searchHere = data.mobileGrid.filter((item) =>
          item.mobilename.toLowerCase().includes(inputTerm)
        );

        products(searchHere);
      });

      const search = document.createElement("div");
      search.className = "search";
      search.innerHTML = "";

      jnrinput.appendChild(search);

      const india = document.querySelector(".india");
      india.innerHTML = `<div class="face">

 
<span>${data.header.spn}</span>
</div>`;

      const sign = document.querySelector(".sign");
      sign.innerHTML = `<span>${data.header.hello}</span>
<div>${data.header.account}</div>`;

      const order = document.querySelector(".order");
      order.innerHTML = `<span>${data.header.return}</span>
<div class="loop">${data.header.order}</div>`;

      const cart = document.querySelector(".cart");
      cart.innerHTML = `<div class="img-carter"></div> <div class="zero">0</div>
<div class="carter">${data.header.carttxt}</div>`;

      const fullnav = document.querySelector(".full-nav");
      const menu = document.querySelector(".menu");
      const rightmenu = document.querySelector(".right-nav");

      fullnav.innerHTML = "";

      const armenu = data.nav;
      const meny = document.createElement("div");
      meny.className = "meny";
      meny.innerHTML = `<span>${armenu.all}</span>`;
      menu.appendChild(meny);

      const arrayM = document.createElement("div");
      arrayM.className = "menuarray";
      armenu.menuar.forEach((item) => {
        const liM = document.createElement("li");
        liM.innerHTML = `${item}`;
        arrayM.appendChild(liM);
      });
      menu.appendChild(arrayM);
      fullnav.appendChild(menu);
      fullnav.appendChild(rightmenu);

      const rightcontent = document.createElement("div");
      rightcontent.className = "rightcont";
      rightcontent.innerHTML = `<img src="${data.nav.rightcont}" alt="">`;
      rightmenu.appendChild(rightcontent);

      const leftwhite = document.querySelector(".leftwhite");
      leftwhite.innerHTML = `<span class="woof">1-16 of over 2,000 results for "mobile"</span> <div class="nonemob">
      <span class="primequal"></span> <span class="primadd"></span> 
      </div>`;

      const rightwhite = document.querySelector(".rightwhite");
      const rightspan = document.createElement("div");
      rightspan.className = "arrowing";
      rightspan.innerHTML = `<div class="sortbefore">sort by: Featured <span class="spoon"></span></div> <div class="sortafter"><span class="stay">Filter</span><span class="out"></span></div>`;
      rightwhite.appendChild(rightspan);

      const arrowdrop = document.createElement("div");
      arrowdrop.className = "arrowdrop";
      arrowdrop.style.display = "none";
      data.nav.sort.forEach((item) => {
        const sorted = document.createElement("li");
        sorted.innerHTML = item;
        arrowdrop.appendChild(sorted);
      });
      rightwhite.appendChild(arrowdrop);

      rightwhite.addEventListener("click", () => {
        if (
          arrowdrop.style.display === "none" ||
          arrowdrop.style.display === ""
        ) {
          arrowdrop.style.display = "block";
        } else {
          arrowdrop.style.display = "none";
        }
      });
      const leftMain = document.querySelector(".sidebar");

      const dealer = document.createElement("div");
      dealer.className = "dealer";

      data.deals.deal.forEach((dive) => {
        const dealerIn = document.createElement("span");
        dealerIn.innerHTML = dive;
        dealer.appendChild(dealerIn);
      });

      console.log(dealer);
      leftMain.appendChild(dealer);

      const dealerOn = document.createElement("div");
      dealerOn.className = "install";

      const dealeroff = document.createElement("div");
      dealeroff.innerHTML = data.deals.Ram.mob;
      dealerOn.appendChild(dealeroff);

      const ramList = document.createElement("ul");

      data.deals.Ram.ramp.forEach((item) => {
        const intallLi = document.createElement("li");
        intallLi.innerHTML = `<input type="checkbox" class="ramMob" value="${item}"> <span>${item}</span>`;
        ramList.appendChild(intallLi);
      });

      dealerOn.appendChild(ramList);
      leftMain.appendChild(dealerOn);

      const memoryOn = document.createElement("div");
      memoryOn.className = "install";

      const memoryOff = document.createElement("div");
      memoryOff.innerHTML = data.deals.memory.mob;
      memoryOn.appendChild(memoryOff);

      const memoryList = document.createElement("ul");

      data.deals.memory.ramp.forEach((item) => {
        const memorLi = document.createElement("li");
        memorLi.innerHTML = `<input type="checkbox" class="ramMob" value=""> <span>${item}</span>`;
        memoryList.appendChild(memorLi);
      });

      memoryOn.appendChild(memoryList);
      leftMain.appendChild(memoryOn);

      // price full
      const price = document.createElement("div");
      price.className = "priceFull";

      const pricead = document.createElement("div");
      pricead.className = "pricead";
      pricead.innerHTML = `<span>${data.price}</span> <span>${data.span}</span>`;
      price.appendChild(pricead);
      leftMain.appendChild(price);

      const range = document.createElement("div");
      range.className = "range";

      const rollex = document.createElement("div");
      rollex.className = "rolex";

      const round = document.createElement("div");
      round.className = "roundL";
      round.innerHTML = `<div class="whiteround"></div>`;
      rollex.appendChild(round);

      const middleline = document.createElement("div");
      middleline.className = "middleline";
      rollex.appendChild(middleline);

      const roundone = document.createElement("div");
      roundone.className = "roundR";
      roundone.innerHTML = `<div class="whiteround"></div>`;
      rollex.appendChild(roundone);
      range.appendChild(rollex);
      leftMain.appendChild(range);

      const roundagain = document.createElement("div");
      roundagain.className = "go";
      roundagain.innerHTML = `<span>${data.go}</span>`;
      range.appendChild(roundagain);

      //----------------    see more and less
      const rating = document.createElement("div");
      rating.className = "rating";

      data.gridbstar.forEach((item) => {
        const single = document.createElement("div");
        single.className = "before-star";

        const rateIn = document.createElement("div");
        rateIn.className = "Inrating";
        rateIn.innerHTML = `<span>${item.brand}</span>`;
        single.appendChild(rateIn);

        const dropdown = document.createElement("div");
        dropdown.className = "dropdown";

        const maxVisibleItems = 5;

        item.brandarray.forEach((check, index) => {
          const checkDiv = document.createElement("div");
          checkDiv.className = "checkDiv";

          const checkInput = document.createElement("input");
          checkInput.type = "checkbox";
          checkInput.value = `${check}`;
          checkDiv.appendChild(checkInput);

          const checklabel = document.createElement("label");
          checklabel.innerHTML = check;
          checkDiv.appendChild(checklabel);

          if (index < maxVisibleItems) {
            dropdown.appendChild(checkDiv);
          } else {
            checkDiv.style.display = "none";
            dropdown.appendChild(checkDiv);
          }
        });

        const seeMoreBtn = document.createElement("button");
        seeMoreBtn.className = "more-btn";
        seeMoreBtn.innerHTML = "See More";

        let expanded = false;

        seeMoreBtn.addEventListener("click", () => {
          expanded = !expanded;
          const checkDivs = dropdown.querySelectorAll(".checkDiv");
          checkDivs.forEach((div, index) => {
            if (index >= maxVisibleItems) {
              div.style.display = expanded ? "block" : "none";
            }
          });
          seeMoreBtn.innerHTML = expanded ? "See Less" : "See More";
        });

        dropdown.appendChild(seeMoreBtn);
        single.appendChild(dropdown);
        rating.appendChild(single);
      });

      leftMain.appendChild(rating);

      const second = document.createElement("div");
      second.className = "second";

      data.gridsecond.forEach((item) => {
        const gridSec = document.createElement("div");
        gridSec.className = "before";
        gridSec.innerHTML = `<span>${item.brand}</span>`;
        second.appendChild(gridSec);
        const secondiN = document.createElement("div");
        secondiN.className = "secdrop";

        item.brandarray.forEach((check) => {
          const secup = document.createElement("div");
          secup.className = "secIN";
          const input = document.createElement("input");
          input.type = "checkbox";
          input.value = `${check}`;
          secup.appendChild(input);
          const spanIN = document.createElement("label");
          spanIN.innerHTML = check;
          secup.appendChild(spanIN);
          secondiN.appendChild(secup);
          second.appendChild(secondiN);
        });
        leftMain.appendChild(second);
      });

      const star = document.createElement("div");
      star.className = "star";

      const instar = document.createElement("span");
      instar.innerHTML = `${data.customer}`;
      star.appendChild(instar);

      const starman = document.createElement("div");
      starman.className = "starmain";
      starman.innerHTML = `<div class="starallow"></div>
<span>${data.and}</span>`;
      star.appendChild(starman);

      leftMain.appendChild(star);

      const gridcover = document.createElement("div");
      gridcover.className = "cover";

      data.gridcover.forEach((item) => {
        const grid = document.createElement("div");
        grid.className = "gridcover";
        grid.innerHTML = `<span>${item.dis}</span>`;
        gridcover.appendChild(grid);

        const inputsec = document.createElement("div");
        inputsec.className = "inputsec";
        item.disarray.forEach((item) => {
          const secinside = document.createElement("div");
          secinside.className = "secOn";
          const inut = document.createElement("input");
          inut.type = "checkbox";
          inut.value = item
          secinside.appendChild(inut);
          const span = document.createElement("label");
          span.innerHTML = item;
          secinside.appendChild(span);
          inputsec.appendChild(secinside);
          grid.appendChild(inputsec);
          gridcover.appendChild(grid);
        });
      });

      leftMain.appendChild(gridcover);

      const color = document.createElement("div");
      color.className = "colourfull";

      const colorTet = document.createElement("span");
      colorTet.innerText = data.color;
      color.appendChild(colorTet);

      const colorview = document.createElement("div");
      colorview.className = "view";
      colorview.innerHTML = `<div class="red"></div>
<div class="or"></div>
<div class="gr"></div>
<div class="fr"></div>
<div class="tt"></div>
<div class="fm"></div>
<div class="lur"></div>
<div class="ple"></div>
<div class="offline"></div>
<div class="whiteer"></div>
<div class="rose"></div>`;
      color.appendChild(colorview);
      leftMain.appendChild(color);

      const remaining = document.createElement("div");
      remaining.className = "remaining";

      data.gridcolorafter.forEach((el) => {
        const remaincover = document.createElement("div");
        remaincover.className = "remained";
        remaincover.innerHTML = `<span>${el.dis}</span>`;

        const ultype = document.createElement("div");
        ultype.className = "ulremain";

        el.disarray.forEach((era) => {
          const eraone = document.createElement("div");
          eraone.className = "era";
          const input = document.createElement("input");
          input.type = "checkbox";
          eraone.appendChild(input);
          const label = document.createElement("label");
          label.innerHTML = era;
          eraone.appendChild(label);
          ultype.appendChild(eraone);
          remaincover.appendChild(ultype);
          remaining.appendChild(remaincover);
        });
      });

      leftMain.appendChild(remaining);

      // -------------    rightside
      const rightSideMain = document.querySelector(".rightTopBOx");

      const rightContent = document.createElement("div");
      rightContent.className = "right-contenttop";

      const rightcontapple = document.createElement("div");
      rightcontapple.className = "rightborder";
      rightcontapple.innerHTML = `<img src="${data.date}" alt="">`;
      rightContent.appendChild(rightcontapple);

      const rightappletxt = document.createElement("div");
      rightappletxt.className = "rightbox";
      rightappletxt.innerHTML = `<span>${data.appletxt}</span> <span>${data.shop}</span>`;
      rightContent.appendChild(rightappletxt);
      rightSideMain.appendChild(rightContent);

      const wall = document.createElement("div");
      wall.className = "wall";
      data.grid.forEach((item) => {
        const wallin = document.createElement("div");
        wallin.className = "wallet";
        wallin.innerHTML = item.sio;
        wall.appendChild(wallin);
      });
      rightContent.appendChild(wall);

      // apple
      const applebox = document.createElement("div");
      applebox.className = "apple-box";
      
      const applemain = document.createElement('div')
      applemain.className = 'appleMain'
      applemain.innerHTML = `
<div class="rollF">
  <img src="${data.date}" alt="">
  <span class="noc">${data.iphone}</span>
</div>
<div class="rollD">
  <div class="brown">${data.top}
  
  </div>
  <span class="afterbrown">${data.quality}</span>
</div>
`
applebox.appendChild(applemain)

      const firstAppleWrapper = document.createElement("div");
      firstAppleWrapper.className = "wrapper";

      const looserfin = document.createElement("div");
      looserfin.className = "looserfin";

      data.appleArrray.forEach((item, index) => {
        if (index === 0) {
          const appleimg = document.createElement("div");
          appleimg.className = "firstapple";
          appleimg.innerHTML = `<img src="${item.img1}" alt="">`;
          firstAppleWrapper.appendChild(appleimg);
        } else {
          const appletwo = document.createElement("div");
          appletwo.className = "seconds";
          appletwo.innerHTML = `
      <div class="grey">
        <img src="${item.img}" alt="">
      </div>
      <div class="pad">${item.iphone1}</div>
      <div class="flexapple">
        <div class="starter"></div> 
        <span class="twenlynine">${item.two}</span>
      </div>
      <div class="prime"></div>
    `;
          looserfin.appendChild(appletwo);
        }
      });

      applebox.appendChild(firstAppleWrapper);
      applebox.appendChild(looserfin);

      rightSideMain.appendChild(applebox);

      const result = document.querySelector(".result");
      const resultIN = document.createElement("div");
      resultIN.className = "resulted";

      const resulttxt = document.createElement("div");
      resulttxt.className = "spanLeft";
      resulttxt.innerHTML = `<span>${data.result}</span>
<span class="last">${data.checks}<span/>`;
      resultIN.appendChild(resulttxt);

      const sponsor = document.createElement("div");
      sponsor.className = "sponsor";
      sponsor.innerHTML = `<div class="task">${data.sponsor}</div><div class="tasker"></div>`;
      resultIN.appendChild(sponsor);
      result.appendChild(resultIN);

      function filterFunc() {
        const selectedBrand = Array.from(
          document.querySelectorAll("input[type='checkbox']")
        )
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => checkbox.value.toLowerCase());

        console.log("Selected brands:", selectedBrand);

        if (selectedBrand.length === 0) {
          products(data.mobileGrid);
        } else {
          const filterProduct = data.mobileGrid.filter((product) => {
            return selectedBrand.includes(product.id.toLowerCase());
          });
          console.log("Filtered products:", filterProduct);
          products(filterProduct);
        }
      }

      document.querySelectorAll("input[type='checkbox']").forEach((box) => {
        box.addEventListener("change", filterFunc);
      });

      function products(productItem, page = 1, perpage = 15) {
        const rightContent = document.querySelector(".mobileright");
        rightContent.innerHTML = "";
        const start = (page - 1) * perpage;
        const end = start + perpage;
        const paginatedItem = productItem.slice(start, end);

        paginatedItem.forEach((item) => {
          const mobilebox = document.createElement("div");
          mobilebox.className = "mobilebox";

          const imgphone = document.createElement("div");
          imgphone.className = "mobileview";
          imgphone.id = "mobileview";

          const mobleft = document.createElement("div");
          mobleft.className = "mobIMg";
          mobleft.innerHTML = `<img src="${item.mobileIMg}" alt="">`;
          imgphone.appendChild(mobleft);

          const rightmob = document.createElement("div");
          rightmob.className = "rightmobside";

          const rightmobinside = document.createElement("div");
          rightmobinside.className = "mobin";

          rightmobinside.innerHTML = `
      <div class="sponsec">
        <div class="spontxt">${item.sponsor}</div>
        <div class="sponIng"></div>
      </div>
      <div class="mobileText">${item.mobilename}</div>
      <div class="mostar">
        <div class="starmob"></div>
        <div class="mobarrowdown"></div>
        <div class="nummoob">${item.buy}</div>
      </div>
      <div class="kbought">${item.span}</div>
      <div class="reddy">
        <span>${item.red}</span>
      </div>
      <div class="pricemob">
        <span class="priced">${item.rupees}</span>
        <span class="mrp">${item.mrp}</span>
        <span class="ogprice">${item.cutprice}</span>
        <div class="offer">${item.off}</div>
      </div>
      <div class="flatoff">${item.flat}</div>
      <div class="primagain"></div>
      <div class="freedel">${item.status}</div>
      <div class="yellowcol">
        <span>${item.add}</span>
      </div>
      <div class="lastcolor">${item.plus}</div>
    `;

          rightmob.appendChild(rightmobinside);
          imgphone.appendChild(rightmob);
          mobilebox.appendChild(imgphone);

          rightContent.appendChild(mobilebox);
        });
        
        addpagination(productItem.length, page, perpage);
      }
      products(data.mobileGrid);

          function addpagination(totalItem, currentpage, perpage) {
        const downsearch = document.querySelector(".downsearch");

        if (!document.querySelector(".pagination")) {
          const pgcount = document.createElement("div");
          pgcount.className = "pagination";
          downsearch.appendChild(pgcount);
        }

        const totalpage = Math.ceil(totalItem / perpage);
        let totalpageination = "";

        // Previous
        if (currentpage >= 1) {
          totalpageination += `<img src="${
            data.left
          }" alt=""> <a href="#" data-page="${currentpage - 1}">Previous</a>`;
        }

        // Page num
        for (let i = 1; i <= totalpage; i++) {
          totalpageination += `<a href="#" data-page="${i}" class="${
            i === currentpage ? "active" : ""
          }">${i}</a>`;
        }

        // Next
        if (currentpage < totalpage) {
          totalpageination += `<a href="#" data-page="${
            currentpage + 1
          }">Next</a> <img src="${data.right}" alt="">`;
        }

        document.querySelector(".pagination").innerHTML = totalpageination;

        document.querySelectorAll(".pagination a").forEach((link) => {
          link.addEventListener("click", (event) => {
            event.preventDefault();
            const page = parseInt(event.target.getAttribute("data-page"), 0); // Parse page number
            products(data.mobileGrid, page);

            document.querySelectorAll(".pagination a").forEach((link) => {
              if (link === event.target) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          });
        });
      }
      // ----------------    MediaQuery       -----------------------mobileheader
      const menufunc = document.querySelector(".menuL");
      menufunc.addEventListener("click", function () {
        if (
          dropdownmenu.style.display === "none" ||
          dropdownmenu.style.display === ""
        ) {
          dropdownmenu.style.display = "block";
          x.style.display = "block";
        } else {
          dropdownmenu.style.display = "none";
          x.style.display = "none";
        }
      });

      const dropmenu = document.querySelector(".flexmobile");

      const transparent = document.createElement("div");
      transparent.className = "transparent";
      const dropdownmenu = document.createElement("div");
      dropdownmenu.className = "dropdownmenu";
      dropdownmenu.style.display = "none";

      const x = document.createElement("div");
      x.className = "ex";
      x.style.display = "none";
      transparent.appendChild(x);

      x.addEventListener("click", function () {
        dropdownmenu.style.display = "none";
        x.style.display = "none";
      });

      const dropfirst = document.createElement("div");
      dropfirst.className = "dropfirst";
      dropfirst.innerHTML = `<div class= "text">${data.sign}</div>
<div class="txtIMg"></div>`;
      dropdownmenu.appendChild(dropfirst);

      const seconddrop = document.createElement("div");
      seconddrop.className = "secondDrop";
      seconddrop.innerHTML = `<div class="twenty">${data.browse}</div><div class="eight">${data.am}</div>`;
      dropdownmenu.appendChild(seconddrop);

      const third = document.createElement("div");
      third.className = "thirdmenu";
      third.innerHTML = `<div class="leftmenu">${data.home}</div><div class="rightmenu"><span></span></div>`;
      dropdownmenu.appendChild(third);

      const menuafter = document.createElement("div");
      menuafter.className = "menuafter";

      data.trend.forEach((item) => {
        const trending = document.createElement("div");
        trending.className = "trending";

        const trandingTitle = document.createElement("h3");
        trandingTitle.className = "trend-title";
        trandingTitle.textContent = item.tr;
        trending.appendChild(trandingTitle);

        const trandingList = document.createElement("ul");
        trandingList.className = "trend-list";

        item.pro.forEach((proItem) => {
          const listItem = document.createElement("li");
          listItem.className = "trend-item";
          listItem.textContent = proItem;
          trandingList.appendChild(listItem);
        });

        trending.appendChild(trandingList);
        menuafter.appendChild(trending);
      });

      dropdownmenu.appendChild(menuafter);
      transparent.appendChild(dropdownmenu);
      dropmenu.appendChild(transparent);

      // filter mobile
      const inputmob = document.querySelector(".inputmob");
      inputmob.addEventListener("input", function () {
        const inputhere = this.value.toLowerCase();
        const searchhere = data.mobileGrid.filter((item) =>
          item.mobilename.toLowerCase().includes(inputhere)
        );
        products(searchhere);
      });

        let itemCount = 0;
const cartNumber = document.querySelector(".zero");
const zeromob = document.querySelector('.zeromob');

const yellowcol = document.querySelectorAll(".yellowcol");

yellowcol.forEach(item => item.addEventListener("click", function () {
  itemCount++;
  cartNumber.textContent = itemCount;  
  zeromob.textContent = itemCount;     
}));

    });
});
