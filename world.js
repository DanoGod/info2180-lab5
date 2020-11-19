window.onload = function() {
    let firstbuttton = document.getElementById("lookup");
    let secondbuttton = document.getElementById("lookup2");
    let countryinfo = document.getElementById("country");
    let result = document.getElementById("result");

    firstbuttton.addEventListener('click',function(){
        var httpRequest = new XMLHttpRequest();
        let countrydata = countryinfo.value;
        httpRequest.open('GET',"http://localhost/info2180-lab5/world.php?country=" +  countrydata + "&context=none" );
        httpRequest.send();
        httpRequest.onreadystatechange = function(){
            let response = httpRequest.responseText;
            result.innerHTML = response;
        }
    });

    secondbuttton.addEventListener('click',function(){
        var httpRequest = new XMLHttpRequest();
        let countrydata = countryinfo.value;
        httpRequest.open('GET',"http://localhost/info2180-lab5/world.php?country=" +  countrydata + "&context=cities");
        httpRequest.send();
        httpRequest.onreadystatechange = function(){
            let response = httpRequest.responseText;
            result.innerHTML = response;
        }
    })
}