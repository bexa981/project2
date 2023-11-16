<script setup>
import AOS from "aos";
import Modal from "./Modal.vue";
import AggrementModal from "./AggrementModal.vue";
import Offerta from "./Offerta.vue"
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
   showPayment.value = false;
};

const processPayment = () => {
   showAgreement.value = false;
   showPayment.value = true;
   console.log('success');
};

showAgreement, isOpenModel, showPayment, handleClickItem, processPayment
</script>

<template>
    <div class="bio">
        <AggrementModal :open="isOpenModel" @close="isOpenModel = false">
         <div>
            <div class="modalBody">
               <div v-if="showAgreement">


                  <h3 style="text-align: center;">Публичная оферта</h3>
                  <p>
                     <Offerta style="color: black;"/>
                  </p>
                  <div class="tolov">
                     <div>
                        <input id="roziman" type="checkbox">
                        <label for="roziman" style="color: black;">Roziman</label>
                     </div>
                     <button @click="processPayment">To'lov qilish</button>
                    
                  </div>
               </div>
                 <h3 style="color: black;">To'lov qilish usulini tanlang</h3>
               <div v-if="showPayment" class="usullari">
                        <!-- Display your payment form or component here -->
                       <a target="_blank" href="https://payme.uz/fallback/merchant/?id=653bad1074b04dc1cef6672e"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKOJTi7IS2hedneNE8vtAntLI8PF-e510Ix0_Oc1P&s" alt=""></a>
                       <a target="_blank" href="https://www.apelsin.uz/open-service?serviceId=498611485"><img src="https://static.tildacdn.com/tild3664-3139-4231-b664-663965386239/uzum-footer.png" alt=""></a>
                        
                     </div>
            </div>
         </div>
      </AggrementModal>
        <div class="bio-image">
            <img class="photo" src="/images/rasm3.png" alt="">
            <div data-aos="fade-up" data-aos-duration="1500" class="jobs">
                <div class="bio-card">
                    <img src="https://static.tildacdn.com/tild3563-3361-4632-b861-353864663334/Logo.png" alt="">
                    <div>
                        <h4><a style="color: white; text-decoration: none;" target="_blank"
                                href="https://energywomensacademy.uz/">Energy womens academy</a></h4>
                        <p></p>
                    </div>
                </div>
                <div class="bio-card">
                    <img src="https://static.tildacdn.com/tild3563-3361-4632-b861-353864663334/Logo.png" alt="">
                    <div>
                        <h4>Shogirtlik maktabi</h4>
                        <p></p>
                    </div>

                </div>
            </div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
                class="btn2">Ariza qoldirish</button>
                <button @click="handleClickItem()" class="btn2">To'lov qilish</button>
            <Modal />
        </div>

        <div class="bio-info">
            <h2 data-aos="zoom-in" data-aos-duration="1500">Shohista <br> Djurabayeva</h2>
            <p data-aos="fade-up" data-aos-duration="1500">OLIY MA'LUMOTLI O'ZBEKISTONDA 1-CHI RAQAMLI GENETIK KVANT
                TAHLILI YETUK MUTAHASISI OLIY MALUMOTLI VRACH, PSIXOTERAPEVT,REGRESSIOLOG MASTER, ENERGY WOMENS ACADEMIYASI
                ASOSCHISI PROFESSIONAL EKSPERT.</p>

            <ul>
                <li data-aos="fade-right" data-aos-duration="1500">29-Yoshida bizneslari bankrotga uchrab 35.000$
                    qarzdorlikdan kvant tahlili orqali chiqqan.</li>
                <li data-aos="fade-right" data-aos-duration="1500">29-Yoshida munosabatlardagi garmoniyaga erishib qayta
                    turmush quradi. Energy womens academiyasiga tasis soladi, shahsiy ofisini ochadi va asl qalb kasbida har
                    oyda erkin grafik asosida 15 kun ishlab o'rtacha 5000$ - 8000$ gacha daromadga 6 oy ichida chiqqan.</li>
            </ul>
            <div class="market">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
                class="btn1">Ariza qoldirish</button>
                <button @click="handleClickItem()" class="btn1">To'lov qilish</button>
               
            </div>
           
        </div>

    </div>
</template>

<style scoped>
.bio {
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    background-image: url('https://e0.pxfuel.com/wallpapers/528/842/desktop-wallpaper-assemblies-of-the-national-syndicalist-offensive-misc-hq-assemblies-of-the-national-syndicalist-offensive-2019-half-black-half-red.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    margin: 10px 60px 10px 60px;
    flex-wrap: wrap;
    border-radius: 70px;
    height: fit-content;

}
.tolov {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
}
.usullari img{
  width: 120px;
}
.usullari a{
 border: 1px solid black;
 border-radius: 5px;
 padding: 10px;
 margin-left: 5px;
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

.uzum{
    border-top: 2px solid rgb(117, 85, 150);
    border-left: 2px solid rgb(117, 85, 150);
    border-right: 2px solid rgb(117, 85, 150);
}
.uzum2{
    display: none;
}
.market{
    display: flex;
    align-items: center;
    gap:5px;

}
.uzum{
    margin-top: -7px;
}
.bio-image {
    width: 36%;
    height: fit-content;


}

.bio-image .photo {
    width: 100%;
}

.jobs {
    display: flex;
    gap: 10px;
    margin-left: 20%;
}

.jobs .bio-card {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    width: 100%;
    padding: 10px 10px;
    border-radius: 20px;
    background-color: #fdffff54;

    background-size: cover;
    margin-top: 1px;
    margin-bottom: 40px;
    color: white;
}

.bio-card h4 {
    font-size: 18px;
}

.bio-card img {
    width: 50px;

}

.bio-info {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    gap: 10px;
}

.bio-info h2 {
    font-size: 4.5rem;
    line-height: 1;
    margin-bottom: 20px;
}

.bio-info p {
    font-size: 18px;
}

li {
    margin-top: 40px;
    font-size: 18px;
}

.bio-info .btn1 {
    margin-top: 30px;
    height: 80px;
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

.bio-info .btn1:active {
    box-shadow: 0 5px rgb(180, 128, 128);
    transform: translateY(4px);
}

.bio-info .btn1:hover {
    background-color: rgb(191, 52, 52);
}

.btn2 {
    display: none;
    width: 80%;
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

.btn2:active {
    box-shadow: 0 5px rgb(180, 128, 128);
    transform: translateY(4px);
}

.btn2:hover {
    background-color: rgb(191, 52, 52);
}

@media only screen and (max-width: 550px) {
    .uzum2{
        display: block;
        margin-bottom: 20px;
        width: 81%;
        height: 40px!important;
        background-size: 200px;
        background-repeat: no-repeat;
    }
    .uzum1{
        display: none;
    }
    .bio {
        flex-direction: column-reverse;
        width:100%;
        margin: 0;
    }

    .bio-info {
        width: fit-content;
        gap: 0px;
        padding: 10px;
    }

    .bio-info h2 {
        font-size: 3rem;
    }

    .bio-info p {
        font-size: 17px;
    }

    .bio-info li {
        font-size: 17px;
    }

    .btn1 {
        display: none;
    }

    .btn2 {
        display: block;
        height: 80px;

    }

    .jobs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;

    }

    .jobs .bio-card {
        margin-bottom: 0;
        width: 100%;

    }

    .bio-image {
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;

    }

    .bio-image .photo {
        width: 350px;
    }

}</style>