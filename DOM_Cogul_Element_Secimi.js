//* -- Çoklu Element Seçimi --

//! 1- document.getElementsByClassName()

'Bu yöntem, bir HTML elementinin sınıf adınına göre bir dizi nesneleri döndürür.
'Bir sayfa da birden fazla elementin aynı sınıfı olması gerekir.

let veri;

//? class'ı list group item olan elementleri göster.
veri = document.getElementsByClassName("list-group-item");
  //*    0: li.list-group-item.list-group-item-secondary //index.html 46.
  //*    1: li.list-group-item.list-group-item-secondary //index.html 51.
  //*    2: li.list-group-item.list-group-item-secondary //index.html 56.
  //*    3: li.list-group-item.list-group-item-warning //index.html 61.
  //*    length: 4

//? class'ı list group item olan 1. ve 3. elementleri göster.
veri = document.getElementsByClassName("list-group-item")[0];
  //* <li class="list-group-item list-group-item-secondary">…</li> //index.html 46.
veri = document.getElementsByClassName("list-group-item")[2];
  //* <li class="list-group-item list-group-item-secondary">…</li> //index.html 56.

//? class'ı list group item olan 2. elementi basit çağır.
veri = document.getElementsByClassName("list-group-item"); 
veri = veri[1];
  //* <li class="list-group-item list-group-item-secondary">…</li> //index.html 51.

//? class'ı list group item olan 2. elementin yazı Merhaba olsun büyüklüğü 30px ve rengini kırmızı yap.
veri = document.getElementsByClassName("list-group-item");
veri = veri[1];
veri.style.fontSize = "30px";
veri.style.color = "red";
veri.textContent = "Merhaba";
  //*<li class="list-group-item list-group-item-secondary" style="font-size: 30px; color: red;">new item</li>

//? class'ı list group item olan tüm listeyi yazısı Merhaba ve yazı rengi turuncu yap.
veri = document.getElementsByClassName("list-group-item");

for (let i = 0; i < veri.length; i++) {
  console.log((veri[i].style.color = "orange"));
  console.log((veri[i].textContent = "new item"));
}

//! 2- document.getElementsByTagName()
  'Bu yöntem, belirtilen etiket adına göre tüm elementleri seçer. 
  'Tüm <div>, <p>, veya başka bir etiket türünü seçmek için kullanılır.

//? Sayfadaki tüm "li" ve "a" etiketlerini getir.
veri = document.getElementsByTagName("li");
  //* 0: li.list-group-item.list-group-item-secondary
  //* 1: li.list-group-item.list-group-item-secondary
  //* 2: li.list-group-item.list-group-item-secondary
  //* 3: li.list-group-item.list-group-item-warning
  //* length: 4
veri = document.getElementsByTagName("a");
  //* 0: a#btnDeleteAll.btn.btn-outline-primary.btn-sm.delete-all.float-right
  //* 1: a.delete-item.float-right
  //* 2: a.delete-item.float-right
  //* 3: a.delete-item.float-right
  //* 4: a.delete-item.float-right
  //* btnDeleteAll: a#btnDeleteAll.btn.btn-outline-primary.btn-sm.delete-all.float-right
  //* length: 5

//? Sayfadaki "li içindeki a " etiketlerini getir.
veri = document.getElementById("task-list").getElementsByTagName("a");
  //* 0: a.delete-item.float-right
  //* 1: a.delete-item.float-right
  //* 2: a.delete-item.float-right
  //* 3: a.delete-item.float-right
  //* length: 4

//! 3- document.querySelectorAll()

veri = document.querySelectorAll("li");

veri.forEach(function (item, index) {
  item.textContent = `${index} - item`;
});

console.log(veri);













//! 1. getElementById

Bu yöntem, bir HTML elementini onun id niteliğine göre seçer. 
Her sayfa öğesinin benzersiz bir id değeri olması gerekir.

//* JavaScript:
var element = document.getElementById("myElement");

//? Örnek: 
//* HTML:
<h1 id = "baslik">Merhaba!</h1>
<script>
  var baslik = document.getElementById("baslik");
  baslik.innerHTML = "Yeni Başlık";
</script>

//! 4. querySelector

Bu yöntem, CSS seçicilerini kullanarak ilk eşleşen elementi seçer. 
Çok esnek ve güçlü bir yöntemdir çünkü id, sınıf veya etiket gibi farklı türde seçimler yapılabilir.

//* JavaScript:
var element = document.querySelector(".myClass");

//? Örnek:
//* HTML:
<h1 id="baslik">Merhaba!</h1>
<p class="kutu">Bir Paragraf</p>
<script>
  var baslik = document.querySelector("#baslik");
  var kutu = document.querySelector(".kutu");
  baslik.innerHTML = "Başlık Güncellendi!";
  kutu.innerHTML = "Paragraf Güncellendi!";
</script>

//! 5. querySelectorAll

Bu yöntem de CSS seçicilerini kullanır, ancak tüm eşleşen elementleri seçer ve 
bir NodeList (dizi benzeri yapı) döner.

//* JavaScript:
var elements = document.querySelectorAll(".myClass");

//? Örnek:
//* HTML:
<p class="paragraf">1. Paragraf</p>
<p class="paragraf">2. Paragraf</p>
<script>
  var paragraflar = document.querySelectorAll(".paragraf");
  paragraflar.forEach(function(paragraf, index) {
    paragraf.innerHTML = index + 1 + ". Paragraf Güncellendi";
  });
</script>

//! 6. children ve childNodes

children ve childNodes özellikleri, bir elementin alt elemanlarını ve bu elemanların 
sahip olduğu tüm düğümleri döner. children özelliklerde, elementlerin sırasıyla 
dönüyor, childNodes özelliklerde ise elementlerin sırasıyla ve metin düğümlerinde de 
dönüyor.

//* JavaScript:
var container = document.getElementById("container");
var children = container.children;

//? Örnek:
//* HTML:
<div id="container">
  <p>Bir Paragraf</p>
  <p>İkinci Paragraf</p>
</div>
<script>
  var container = document.getElementById("container");
  var ilkCocuk = container.children[0];
  ilkCocuk.innerHTML = "Güncellenmiş İlk Paragraf";
</script>

//! Özet:

DOM manipülasyonu yaparken document.getElementById(), document.getElementsByClassName(), 
document.getElementsByTagName(), document.querySelector(), document.querySelectorAll() ve 
elementlerin children ve childNodes özelliklerini kullanarak elementleri ve alt elemanları 
seçebilirsiniz. Bu özellikler, elementlerin sırasıyla, metin düğümlerinde ve 
sahip olduğu alt elemanların sayısını döndürür.

* getElementById: Tekil id bazlı element seçimi.
* getElementsByClassName: Sınıfa göre birden fazla element seçimi.
* getElementsByTagName: Belirli bir etiket adına göre element seçimi.
* querySelector: İlk eşleşen element için CSS seçici ile seçim.
* querySelectorAll: Tüm eşleşen elementler için CSS seçici ile seçim.
* Bu yöntemler, sayfadaki HTML elementlerini JavaScript ile manipüle etmenin temel taşlarıdır.
