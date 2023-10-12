<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Modal from "./Modal.vue";

onMounted(() => {
    AOS.init();
})
</script>

<template>
    <div class="konikmalar">
        <h2 data-aos="fade-up" data-aos-duration="1500">Kursdan so'ng qanday <br>
            <span class="span1"> ko’nikmalarga</span> ega bo’lasiz?
        </h2>
        <div class="cards">
            <div class="card1">
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/light-bulb.png" alt="">
                    </div>

                    <h4 data-aos="fade-right" data-aos-duration="1500">Dangasalikdan chiqish</h4>
                    <p data-aos="fade-right" data-aos-duration="1500">Hayot qonuniyatlarni o'rganish asosida qalbimizdagi
                        hafagarchiliklar,ota onamizga va o'zimizga bo'lgan shikoyatlarni tozalaymiz, oila Irarxiyasida o'z
                        joyimizni topamiz bu orqali energiyaga to'yinamiz.</p>
                </div>
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/atom.png" alt="">
                    </div>
                    <h4 data-aos="fade-right" data-aos-duration="1500">Aniq maqsadlar</h4>
                    <p data-aos="fade-right" data-aos-duration="1500">Hayotingizda genetik bir hil qaytalanuvchi
                        vaziyatlardan chiqasiz, sizni boshqaruvchi ajdodiy hislardan chiqasiz, tegishlilik qonuniga ko'ra
                        buni isbotlashni tugatasiz, o'z his-tuyg'ularizda o'z hohishlarizga ko'ra aniq hayotiy
                        maqsadlaringini qo'yasiz </p>
                </div>
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/thinking.png" alt="">
                    </div>
                    <h4 data-aos="fade-right" data-aos-duration="1500">Munosabatlarga ochilish</h4>
                    <p data-aos="fade-right" data-aos-duration="1500">Insonlarga nisbatan sizning munosabatingiz o'zgaradi
                        va sizga nisbatan insonlarni munosabati o'zgaradi, turmush o'rtog'ingiz bilan konfliktsiz sog'lom
                        munosabat qurasiz, u sizni tushunishni va qabul qilishni boshlaydi,dunyo siz uchun havfli emas balki
                        baxtga to'laligini ko'ra olasiz.</p>
                </div>
            </div>
            <div class="card2">
                <div class="card">
                    <div data-aos="fade-up" data-aos-duration="1500" class="icon">
                        <img src="/images/3d-cube.png" alt="">
                    </div>
                    <h4 data-aos="fade-right" data-aos-duration="1500">Sog'lom tanini his qilish</h4>
                    <p data-aos="fade-right" data-aos-duration="1500">Tana bu qalb haqida gapiradigan belgi, chunki
                        tanangizda kasalanish yoki diskomfort, ortiqcha vazn seziladigan bo'sa yokida bor bo'lsa tana,qalb,ruh
                        uyg'un emas, siz qalbingizni eshitmaysiz, qalb bu yagona yaratuvchining uyi demak yaratuvchi bilan qalban
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
            <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Kursga Yozilish</button>
            
            <p> Bu kurs aniq siz uchun,
                 <span class="span"> 30% chegirma olib </span> xoziroq kursga a'zo bo'ling</p>

        </div>
        <Modal/>
    </div>
</template>

<style scoped>
.konikmalar {
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn {
    margin-top: 40px;
    width: 500px;
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

.card2 .card{
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

@media only screen and (max-width: 550px) {
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

    .konikmalar h2 {
        font-size: 3rem;
    }

    .konikmalar .span1 {
        font-size: 3rem;
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
        padding:20px;
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
    }
}</style>