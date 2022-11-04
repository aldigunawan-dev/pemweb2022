<?php
  $cari = $_GET['cari'];
  
  switch($cari){
    case "parka":
        header("Location: /produk/parka.html?cari=$cari");
        break;
    case "fleece":
        header("Location: /produk/fleece.html?cari=$cari");
        break;
    case "katun":
        header("Location: /produk/katun.html?cari=$cari");
        break;       
    }
?>