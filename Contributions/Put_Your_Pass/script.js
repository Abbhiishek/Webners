let username = document.getElementById("username");
let appname = document.getElementById("appname");
let pass = document.getElementById("pass");
let a = document.getElementById('a');
let u = document.getElementById('u');
let p = document.getElementById('p');

let us = document.getElementById('us');
let ap = document.getElementById('ap');
let pa = document.getElementById('pa');

let l = document.getElementById('l');
let n = document.getElementById('n');
let w = document.getElementById('w');

let face = document.getElementById('face');


let heading = document.getElementById('heading');
const colours = ['#ffe3b6', '#ffeb63', '#63ff8b', '#ffcf63', '#6367ff', '#ff63d5', '#fe0729', '#07e9fe', '#43fe07', '#ebfe07'];

let timer1 = null;
// timer1 = setInterval(change, 2000);
let c = 0;
const len = colours.length;
let data = [];
function change() {
    if (c > len) {
        // clearInterval(timer1);
        c = c - len;
        heading.style.color = `${colours[c]}`;
    }
    else {

        heading.style.color = `${colours[c]}`;
        face.style.color = `${colours[c]}`;
        us.style.boxShadow = `2px 2px 6px 2px ${colours[c]}`;
        username.style.boxShadow = `0px 0px 2px 2px ${colours[c]}`;
        appname.style.boxShadow = `0px 0px 2px 2px ${colours[c]}`;
        pass.style.boxShadow = `0px 0px 2px 2px ${colours[c]}`;
        ap.style.boxShadow = `2px 2px 6px 2px ${colours[c]}`;
        pa.style.boxShadow = `2px 2px 6px 2px ${colours[c]}`;
        createBtn.style.backgroundColor = `${colours[c]}`;
        l.style.color = `${colours[c]}`;
        l.style.boxShadow = `3px 2px 4px 2px ${colours[c]}`;
        n.style.color = `${colours[c]}`;
        n.style.boxShadow = `3px 2px 4px 2px ${colours[c]}`;
        w.style.color = `${colours[c]}`;
        w.style.boxShadow = `3px 2px 4px 2px ${colours[c]}`;
        c = c + 1;
    }
}
let arrno = 1;
let checkno = 1;

//rendering data from the localStorage:-
function render() {
    while (arrno <= localStorage.length) {
        let currentinfo = JSON.parse(localStorage.getItem(arrno));
        let newname = document.createElement('p');
        newname.innerHTML = currentinfo[0].name;
        newname.style.fontSize = "17px";
        newname.style.fontWeight = "500";
        newname.style.fontFamily = "monospace";
        newname.style.marginTop = "25px";
        u.appendChild(newname);

        let newapp = document.createElement('p');
        newapp.innerHTML = currentinfo[0].application;
        newapp.style.fontSize = "17px";
        newapp.style.fontWeight = "500";
        newapp.style.fontFamily = "monospace";
        newapp.style.marginTop = "25px";

        a.appendChild(newapp);

        let newpass = document.createElement('p');
        newpass.innerHTML = currentinfo[0].Userpass;
        newpass.style.fontSize = "17px";
        newpass.style.fontWeight = "500";
        newpass.style.fontFamily = "monospace";
        newpass.style.marginTop = "25px";
        p.appendChild(newpass);
        arrno++;
    }
}
render();



let userData;
let createBtn = document.getElementById("create");
createBtn.addEventListener('click', check);

function check() {
    if (username.value == null || username.value == "") {
        alert('username is empty!!!');
    }

    else if (appname.value == null || appname.value == "") {
        alert("application name is empty!!!");
    }

    else {
        store();
    }
}

function store() {

    // creating password:- (^~^)

    let password = "";

    let length = pass.value;
    let rNumber = Math.floor(length / 3);
    let rSchar = rNumber + 1;
    let rChar = length - (rNumber + rSchar);

    let rIntAns = 0;
    let rIntAns2 = 0;
    let rSans = "";
    let rSans2 = "";
    let rCans = "";
    let rCans2 = "";

    let specialChar = ['!', '@', '#', '$', '%', '&', '?'];
    function rSpecialChar(times) {
        let n = 0;
        let ans = "";
        while (n < times) {
            let rInt = Math.floor(Math.random() * 7);
            ans += specialChar[rInt];
            n = n + 1;
        }
        return ans;
    }

    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function rchar(times) {
        let n = 0;
        let ans = "";
        while (n < times) {
            let rInt = Math.floor(Math.random() * char.length);
            ans += char[rInt];
            n = n + 1;
        }
        return ans;
    }

    function rIntRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (rNumber == 2) {
        rIntAns = rIntRange(1, 9);
        rIntAns2 = rIntRange(1, 9);
        rSans = rSpecialChar(2);
        rSans2 = rSpecialChar(1);
        rCans = rchar(rChar);
    }
    else if (rNumber == 3) {
        rIntAns = rIntRange(16, 54);
        rIntAns2 = rIntRange(1, 9);
        rSans = rSpecialChar(2);
        rSans2 = rSpecialChar(2);
        rCans = rchar(rChar);
    }
    else if (rNumber == 4) {
        rIntAns = rIntRange(11, 54);
        rIntAns2 = rIntRange(31, 92);
        rSans = rSpecialChar(2);
        rSans2 = rSpecialChar(3);
        rCans = rchar(rChar);
    }
    else if (rNumber == 5) {
        rIntAns = rIntRange(131, 524);
        rIntAns2 = rIntRange(37, 84);
        rSans = rSpecialChar(3);
        rSans2 = rSpecialChar(3);
        rCans = rchar(rChar);
    }
    else if (rNumber == 6) {
        rIntAns = rIntRange(341, 591);
        rIntAns2 = rIntRange(216, 732);
        rSans = rSpecialChar(4);
        rSans2 = rSpecialChar(3);
        rCans = rchar(rChar);
    }

    rIntAns = rIntAns.toString();
    rIntAns2 = rIntAns2.toString();


    password = rCans + rIntAns + rSans + rIntAns2 + rSans2;

    //End of the pain :/

    //putting into the localStorage :-
    function putting() {

        data.push({
            id: arrno,
            name: username.value,
            application: appname.value,
            Userpass: password
        });
        userData = localStorage.setItem(arrno, JSON.stringify(data));
        render();
        window.location.reload();
    }

    putting();

    username.value = "";
    appname.value = "";
    pass.value = "";

}