<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Modal from "./Modal.vue";
import AggrementModal from "./AggrementModal.vue";
import Offerta from "./Offerta.vue"
import { ref } from "vue";


const showAgreement = ref(true);
const isOpenModel = ref(false);
const showPayment = ref(false);

// Define methods
const handleClickItem = () => {
    isOpenModel.value = true;
    // Handle logic to show the payment section
    showAgreement.value = false;
    showPayment.value = true;
};

const processPayment = () => {
    showAgreement.value = false;
    showPayment.value = true;
    console.log('success');
};

showAgreement, isOpenModel, showPayment, handleClickItem, processPayment

onMounted(() => {
    AOS.init();
})
</script>

<template>
    <div class="konikmalar">
        <AggrementModal :open="isOpenModel" @close="isOpenModel = false">
            <div>
                <div class="modalBody">

                    <h3 class="tolovQilish">To'lov qilish usulini tanlang</h3>
                    <div v-if="showPayment" class="usullari">
                        <!-- Display your payment form or component here -->
                        <a class="payme" target="_blank"
                            href="https://payme.uz/fallback/merchant/?id=653bad1074b04dc1cef6672e"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKOJTi7IS2hedneNE8vtAntLI8PF-e510Ix0_Oc1P&s"
                                alt=""></a>
                        <a class="uzumm" target="_blank" href="https://www.apelsin.uz/open-service?serviceId=498611485"><img
                                src="https://static.tildacdn.com/tild3664-3139-4231-b664-663965386239/uzum-footer.png"
                                alt=""></a>

                    </div>
                </div>
            </div>
        </AggrementModal>
        <h2 data-aos="fade-up" data-aos-duration="1500">Kursdan so'ng qanday <br>
            <span class="span1"> ko’nikmalarga</span> ega bo’lasiz?
        </h2>
        <div class="cards">
            <div class="card1">
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/light-bulb.png" alt="">
                    </div>

                    <h4 data-aos="fade-right" data-aos-duration="1500">Agressiya va stresssiz hayot </h4>
                    <p data-aos="fade-right" data-aos-duration="1500">Muammolarga -  muammo emas, balki imkoniyat deya
                        qarashni o‘rganish. Ularni siqilish va ko‘zyoshlar bilan emas, shukr ila qabul qilishni o‘rganamiz. 
                        <br>
                        <br>
                        Siqilish va g‘azabni unutib, qalbingizda doim xotirjamlik va baxtni his qilishni boshlaysiz..
                    </p>
                </div>
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/atom.png" alt="">
                    </div>
                    <h4 data-aos="fade-right" data-aos-duration="1500">O‘tmishni unutish</h4>
                    <p data-aos="fade-right" data-aos-duration="1500">O‘tmishda bo‘lib o‘tgan og‘riqli vaziyatlar,
                        dilingizni og‘ritgan, xiyonat qilgan insonlar, ayriliqlarni unutasiz va qo‘yib yuborishni
                        o‘rganasiz.
                        <br>
                        <br>
                        Kechira olasiz va qalbingizdagi bu yuklardan xolos bo‘lib, oq qog‘ozdan yangi hayot boshlaysiz.
                    </p>
                </div>
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/thinking.png" alt="">
                    </div>
                    <h4 data-aos="fade-right" data-aos-duration="1500">O‘zingizga ishonchingiz ortadi</h4>
                    <p data-aos="fade-right" data-aos-duration="1500">Eringizni barchadan qizg‘anishingiz, doim qo‘rquv
                        bilan yashashingizni asosiy sababi bu o‘zingizga bo‘lgan ishonchingiz pastligida. 
                  <br><br>
                        O‘z qadrini bilgan, o‘ziga ishongan, energiyaga to‘la, baxtli ayol bo‘lish sirlarini o‘rgatamiz.</p>
                </div>
            </div>
            <div class="card2">
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/3d-cube.png" alt="">
                    </div>
                    <h4 data-aos="fade-right" data-aos-duration="1500">Sog'lom tanani his qilish</h4>
                    <p data-aos="fade-right" data-aos-duration="1500">Tana bu qalb haqida gapiradigan belgi, chunki
                        tanangizda kasallanish yoki diskomfort, ortiqcha vazn seziladigan bo'lsa yokida bor bo'lsa
                        tana,qalb,ruh
                        uyg'un emas, siz qalbingizni eshitmaysiz, qalb bu yagona yaratuvchining uyi demak yaratuvchi bilan
                        qalban
                        ulanmagansiz, tanani his qilish orqali qalb va ruh uyg'unligini birlashtiramiz</p>
                </div>
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/growth.png" alt="">
                    </div>
                    <h4 data-aos="fade-right" data-aos-duration="1500">Hayot Sovg'alariga ochilish</h4>
                    <p data-aos="fade-right" data-aos-duration="1500">Baxtsiz inson o'zga insonlar hayotiga qiziqadi, baxtli
                        inson esa o'z hayotidagi sovg'alardan ortolmaydi, biz qachonki o'zimizni kimligigimizni
                        unutganimizda yaratuvchidan va hayotiy tizimdan uzoqlashamiz, shu paytda hayotdagi barcha
                        nematlardan uzilamiz, oila Irarxiyasi boyicha joyimizda turganimizda hayotiy sovg'alarga erishamiz
                    </p>
                </div>
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/care.png" alt="">
                    </div>
                    <h4 data-aos="fade-right" data-aos-duration="1500">Pullardagi barakani his qilish</h4>
                    <p data-aos="fade-right" data-aos-duration="1500">Ichki dunyodagi xotirjamlik tashqi dunyodagi kenglikni
                        keltirib chiqaradi, bu kenglikni his qilganingizda energiya patoklariz ochiladi, qancha ko'p
                        energiyaga toyinganliginingiz sari pullaringizdagi baraka ham oshadi.</p>
                </div>
            </div>
        </div>

        <div data-aos="zoom-out" data-aos-duration="1500" class="btn">
            <button @click="handleClickItem()">To'lov qilish</button>


            <p> Bu kurs aniq siz uchun,
                <span class="span"> 20% chegirma olib </span> xoziroq kursga a'zo bo'ling
            </p>

        </div>
        <Modal />
    </div>
</template>

<style scoped>
.konikmalar {
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.uzum {
    border-top: 2px solid rgb(117, 85, 150);
    border-left: 2px solid rgb(117, 85, 150);
    border-right: 2px solid rgb(117, 85, 150);
}

.tolov {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.usullari img {
    width: 120px;
}

.usullari a {

    border-radius: 5px;
    padding: 15px;
    margin-left: 5px;
    transition: .3s;

}

.usullari .payme {
    box-shadow: 2px 2px 10px rgb(114, 224, 220);
}

.usullari .uzumm {
    box-shadow: 2px 2px 10px rgb(147, 34, 217);
}

.tolovQilish {
    font-size: 22px;
    color: black;
    margin: 20px 0px;
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

.btn {
    margin-top: 40px;
    width: auto;
    padding: 10px;
    border: 3px dashed gray;
    border-radius: 20px;
    display: flex;
    gap: 10px;

}

.btn button {
    width: 250px;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    background-color: var(--redColor);
    color: white;
    transition: .2s;

}

.btn button:hover {
    background-color: rgb(177, 53, 53);
}

.btn p {
    width: 250px;
    font-weight: 600;
}

.btn span {
    color: var(--redColor);
}

.konikmalar h2 {
    text-align: center;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
}

.konikmalar .span1 {
    text-align: center;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
    color: var(--redColor);
}

.cards {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    margin-top: 17vh;
}

.card1 {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 70px;
}

.card1 .card {
    width: 350px;
    border: none;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

}

.card2 {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 70px;
    margin-bottom: 15vh;
}

.card2 .card {
    padding: 5px;
    width: 350px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: none;
    padding: 5px;
}

.icon {
    background-color: var(--redColor);
    width: fit-content;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 10px 10px 20px rgb(159, 158, 158), -10px -10px 20px rgb(159, 158, 158);
    margin-bottom: 25px;
}

.icon img {
    width: 40px;
    height: 40px;

}

.cards h4 {
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: 600;
}

.cards p {
    font-size: 19px;
}

@media only screen and (max-width: 1316px) {
    .konikmalar h2 {
        font-size: 3rem;
    }

    .konikmalar .span1 {
        font-size: 3rem;
    }

    .cards {
        margin-top: 30px;
    }

    .card1 {
        gap: 10px;
    }

    .card2 {
        gap: 10px;
    }
}

@media only screen and (max-width: 550px) {
    .uzum {
        width: 100%;
    }

    .card2 .card {
        width: 300px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

    }

    .konikmalar {
        margin-top: 50px;
    }



    .cards {
        margin-top: 10vh;
    }

    .cards .card1 {
        gap: 20px;
    }

    .cards .card2 {
        gap: 20px;
        margin-bottom: 0;
    }

    .cards .card {
        display: flex;
        width: 400px;
        margin: 5px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgb(242, 183, 183);
        padding: 20px;
        border-radius: 30px;

    }

    .btn {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: fit-content;

    }

    .btn button {
        padding: 10px;
        height: 80px;
    }
}</style>