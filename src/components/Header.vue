<script setup>
import { onMounted, ref } from "vue";
import Modal from "./Modal.vue";
import AOS from "aos";

onMounted(() => {
   AOS.init();
})


</script>

<template>
   <div class="header">
      <div class="left-info">
         <div class="logo">
            <p data-aos="" data-aos-duration="1500" class="name-logo"><img width="250px" src="/images/logotipe.png" alt=""></p>
            <p data-aos="" data-aos-duration="1500" class="title">Hayotingizni 180 gradusga o’zgartirib, o’z
               hohish istaklaringiz orqali Orzuyingizdagi Hayotni birgalikda yaratamiz</p>
         </div>
         <h1 data-aos="" data-aos-duration="1500" class="name">Hayot navigatori</h1>
         <p data-aos="" data-aos-duration="1500" class="title2">Yohud orzularim yaratuvchisiman</p>
         <a class="uzum uzum1" href="https://www.apelsin.uz/open-service?serviceId=498611485"></a>
         <button type="button" class="show"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Ariza qoldirish</button>
   <Modal/>
      </div>
      <div class="foto-profile">
         <img src="/images/profile-foto.png" alt="">
         
            <button type="button" class="hiden" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Ariza qoldirish</button>
            <a class="uzum uzum2" href="https://www.apelsin.uz/open-service?serviceId=498611485"></a>
            
        
         
      </div>
   </div>
</template>

<style scoped>
.header {
   background-color: gray;
   display: flex;
   justify-content: center;
   background-image: url('https://c4.wallpaperflare.com/wallpaper/788/869/121/abstract-low-poly-digital-art-red-wallpaper-preview.jpg');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   color: black;
   margin: 10px 60px 10px 60px;
   border-radius: 70px;
   height: fit-content;
}
.uzum1{
   display: block;
}
.uzum2{
  display: none;
}

.left-info {
   width: 690px;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: first baseline;
   padding-left: 15%;
   padding-top: 1vh;
}

.left-info .name-logo {
   font-size: 55px;
   font-family: 'Caveat', cursive;
   margin-bottom: 50px;
}

.left-info p {
   font-size: 20px;
}

.left-info .name {
   font-size: 6rem;
   line-height: 1em;
   font-weight: 600;
   font-family: 'Oswald', sans-serif;
   margin-bottom: 40px;
}

.hiden {
   display: none;
   margin-top: 30px;
   padding: 20px 50px 20px 50px;
   font-size: 20px;
   font-weight: 600;
   border-radius: 20px;
   cursor: pointer;
   border: none;
   box-shadow: 0 9px rgb(180, 128, 128);
   background-color: var(--redColor);
   color: white;
   transition: .2s;
}

.hiden:active {
   box-shadow: 0 5px rgb(180, 128, 128);
   transform: translateY(4px);
}

.hiden:hover {
   background-color: rgb(181, 67, 67);
}

.left-info button {
   margin-top: 30px;
   padding: 20px 50px 20px 50px;
   font-size: 20px;
   font-weight: 600;
   border-radius: 20px;
   cursor: pointer;
   border: none;
   box-shadow: 0 9px rgb(180, 128, 128);
   background-color: var(--redColor);
   color: white;
   transition: .2s;
   margin-bottom: 40px;
}

.left-info button:active {
   box-shadow: 0 5px rgb(180, 128, 128);
   transform: translateY(4px);
}

.left-info button:hover {
   background-color: rgb(181, 67, 67);
}

.foto-profile img {
   width: 600px;
   padding: 0;
}

.foto-profile {
   display: flex;

   align-items: end;
   justify-content: center;

   width: 70%;
}

@media only screen and (max-width: 550px) {
   
   .uzum2{
      display: block;
      height: 50px!important;
      background-size:200px;
      background-repeat: no-repeat;
   width: 95%;
   height: 80px;
   margin-bottom: 50px;
}

   .header {
      flex-direction: column;
  
      margin: 2px;

   }
.name-logo img{
   width: 120px;
}
   .left-info .name-logo {
      font-size: 35px;
      font-family: 'Caveat', cursive;
      margin-bottom: 40px;
      width: fit-content;
   }

   .left-info {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 0%;
      padding-top: 3vh;
   }

   .left-info .title {
      font-size: 15px;
      width: 50%;
   }

   .left-info .title2 {
      font-size: 22px;
      text-align: center;
      width: 100%;
   }

   .logo {
      display: flex;
      justify-content: space-around;
     
      flex-wrap: wrap;


   }

   .left-info .name {
      font-size: 4em;
      width: fit-content;
      text-align: center;
   }

   .hiden {
      display: block;
      margin-top: 0;
      margin-bottom: 40px;
      width: 95%;
   }

   .show {
      display: none;
   }

   .foto-profile {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
   }

   .foto-profile img {
      width: 100%;
      padding: 0;
   }
}</style>