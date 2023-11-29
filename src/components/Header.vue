<script setup>
import AggrementModal from "./AggrementModal.vue";
import Modal from "./Modal.vue";

import AOS from "aos";
import { onMounted, ref } from "vue";

onMounted(() => {
   AOS.init();
})
const showAgreement = ref(true);
const isOpenModel = ref(false);
const showPayment = ref(false);

// Define methods
const handleClickItem = () => {
   isOpenModel.value = true;
   // Handle logic to show the payment section
   showAgreement.value = true;
   showPayment.value = true;
};

const processPayment = () => {
   showAgreement.value = false;
   showPayment.value = true;
   console.log('success');
};

showAgreement, isOpenModel, showPayment, handleClickItem, processPayment

</script>

<template>
   <div class="header">
      <AggrementModal :open="isOpenModel" @close="isOpenModel = false">
         <div>
            <div class="modalBody">
               
               <h3 class="tolovQilish">To'lov qilish usulini tanlang</h3>
               <div v-if="showPayment" class="usullari">
                  <!-- Display your payment form or component here -->
                  <a class="payme" target="_blank" href="https://payme.uz/fallback/merchant/?id=653bad1074b04dc1cef6672e"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKOJTi7IS2hedneNE8vtAntLI8PF-e510Ix0_Oc1P&s"
                        alt=""></a>
                  <a class="uzumm" target="_blank" href="https://www.apelsin.uz/open-service?serviceId=498611485"><img
                        src="https://static.tildacdn.com/tild3664-3139-4231-b664-663965386239/uzum-footer.png" alt=""></a>

               </div>
            </div>
         </div>
      </AggrementModal>
      <div class="left-info">
         <div class="logo">
            <p class="name-logo"><img width="250px" src="/images/logotipe.png" alt="">
            </p>
            <p class="title">Hayotingizni 180 gradusga o’zgartirib, o’z
               hohish istaklaringiz orqali Orzuyingizdagi Hayotni birgalikda yaratamiz</p>
         </div>
         <h1 class="name">Hayot navigatori</h1>
         <p class="title2">Yohud orzularim yaratuvchisiman</p>

         <button @click="handleClickItem()" class="show">To'lov qilish</button>
         <button type="button" class="show" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-bs-whatever="@mdo">Ariza qoldirish</button>
         <Modal />
      </div>
      <div class="foto-profile">
         <img src="/images/profile-foto.png" alt="">

         <button type="button" class="hiden" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-bs-whatever="@mdo">Ariza qoldirish</button>
         <button @click="handleClickItem()" class="hiden">To'lov qilish</button>



      </div>
   </div>
</template>

<style scoped>
.header {
   background-color: gray;
   display: flex;
   justify-content: center;
   background-image: url('/images/bg.webp');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   color: black;
   margin: 10px 60px 10px 60px;
   border-radius: 70px;
   height: fit-content;
}

.tolov {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
}
.tolovQilish{
   font-size: 22px;
   margin: 20px 0px;
}

.usullari img {
   width: 120px;
}
.usullari{
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 15px;
}

.usullari a {
   
   border-radius: 5px;
   padding: 10px;
   margin-left: 5px;
   transition: .3s;
   
}
.usullari .payme{
   box-shadow: 2px 2px 10px rgb(114, 224, 220);
}
.usullari .uzumm{
   box-shadow: 2px 2px 10px rgb(147, 34, 217);
}
.tolov button {
   padding: 5px;
   border-radius: 5px;
   background-color: var(--redColor);
   color: white;
   border: none;
}

.tolov div {
   display: flex;
   gap: 10px;
}

input[type="checkbox"] {
   width: 20px;
   height: 20px;
   color: green;
   background-color: green;
}

input[type="checkbox"]:checked+label {
   color: green;
   /* Change the color to your desired color */
}

.uzum1 {
   display: block;
}

.uzum2 {
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
   margin-top: 0px;
   width: 300px;
   padding: 20px 50px ;
   font-size: 20px;
   font-weight: 600;
   border-radius: 20px;
   cursor: pointer;
   border: none;
   box-shadow: 0 9px rgb(180, 128, 128);
   background-color: var(--redColor);
   color: white;
   transition: .2s;
   margin-bottom: 20px;
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
@media only screen and (max-width: 1250px) {
   .header{
      margin: 0;
      
   }
   .left-info{
      padding-left: 50px;
   }
}
@media only screen and (max-width: 947px) {
   .header{
      margin: 0;
      flex-wrap: wrap;
      
   }
   
}

@media only screen and (max-width: 550px) {
   .uzum1 {
      display: none;
   }

   .uzum2 {
      display: block;
      height: 50px !important;
      background-size: 200px;
      background-repeat: no-repeat;
      width: 95%;
      height: 80px;
      margin-bottom: 50px;
   }

   .header {
      flex-direction: column;

      margin: 2px;

   }

   .name-logo img {
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