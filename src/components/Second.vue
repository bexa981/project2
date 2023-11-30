<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";

const items = ref([{
    id: 1,
    title: 'Jahldorlikni mehr bilan almashtirishni istaganlar',
    info: `Farzandingiz, turmush o‘rtog‘ingiz va yaqinlaringizga g‘azabingizni sochyapsiz, jahlingizni nazorat qila olmayapsiz. Oqibatda esa munosabatlar sovib, o‘rtadagi muhabbat ham qolmadi.  Biz sizga avvalo o‘zingizni yaxshi ko‘rish va ishonish, turmush o‘rtog‘ingiz bilan baxtli munosabatlar qurish va eng asosiysi jahdorlikdan xalos bo‘lishingizga yordam beramiz. `
},
{
    id: 2,
    title: 'Depressiyadan chiqib o‘rniga o‘zini baxtli his qilishni xohlaganlar',
    info: 'Stressli kunlar, depressiyali oylarga, ular esa ko‘z yoshli yillarga ulanib kelayotgan bo‘lsa. Har qanday holatda ham o‘zingizni to‘liq baxtli his qila olmayapsiz. Keraksizlik hisi sizni tark qilmayapti. Biz bilan Siz depressiya, stress, siqilishlar nimaligini unutasiz. Qalbingizda doim xotirjamlik hisini paydo qilib, atrofdan qidirayotgan baxtni o‘zingizdan topishni o‘rgatamiz'
},
{
    id: 3,
    title: 'Erining xiyonat qilish shubhalarni yo‘qotib, erkin bo‘lishni istaganlar',
    info: ' Vaziyat tug‘ilishi bilan eringizni  telefonini titkilaysiz. Uyga kech kirib kelsa, shubha gumonlar ich etingizni yeydi, kiyimidan begona atir hidi, soch tolasini beixtiyor izlaysiz,  telefonga qarab kulib o‘tirsa yoki suhbatlashsa yomon hayollar sizni tark etmaydi. Bunday hayot bilan xayrlashish vaqti keldi. Endi siz o‘ziga ishongan, xotirjam, doim yaxshi gumondagi, sevgan va sevilgan ayol bo‘lasiz. Aynan sizga bularning barchasiga erishishni o‘rgataman.'
},

{
    id: 5,
    title: 'Ajrashish fikridan voz kechib, oilani mustahkam qilishni xohlaganlar',
    info: 'Doimiy kelishmovchiliklar, kichik sabablar deb ham janjallashaverish, bir-biringizni tushunmaslik. Bularni barchasi ajrim qaroriga olib boradi. Undan boshqa yechim yo‘qdek tuyilaveradi. Yechim bor va u sizda yashirilgan. Men sizga qanday qilib munosabatlarni qutqarish, oilani asrab qolish va mustahkamlashni, eringiz faqat sizni deyishi, vaqt ajratishi ,sovg‘alar berishi, siz orzu qilgan baxtli turmushni yaratishni o‘rgataman.'
}


])
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

<template>
    <div class="main-second">
        <div class="info-top">
            <h2 data-aos="fade-up" data-aos-duration="1500" class="kurs">BU KURS <span>KIMLAR</span> UCHUN</h2>
            <p data-aos="fade-up" data-aos-duration="1500" class="title">Hayotida energiyasizlikdan munosabatlarda <br> tinmay
                konfliktdan, tinmay o'zini aybdor his qiladigan,qo'rquvlardan va pulsizlikdan <br>qiynalayotgan insonlar
                uchun </p>
        </div>


        <div class="cards">
            <div data-aos="flip-left" data-aos-duration="1500" class="card1" v-for="item in items" :key="item.id">
                <img class="circle" src="/images/circle.png" alt="">
                <p class="card-title">{{ item.title }}</p>
                <p class="card-info">{{ item.info }}</p>
                <button  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" type="button" class="card-btn">Bog'lanish</button>
                
            </div>
     <Modal/>
        </div>
    </div>
</template>

<style scoped>
.main-second {
    margin: 40px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-top h2 {
    text-align: center;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
}

.info-top span {
    text-align: center;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
    color: var(--redColor);
}

.info-top p {
    text-align: center;
    font-size: 20px;
}

.cards {
    width: 85%;
    gap: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: top;
    margin-top: 70px;
    margin-bottom: 40px;
}

.card1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 3px solid var(--redColor);
    width: 650px;
    height: 450px!important;
    padding: 20px;
    height: fit-content;
    border-radius: 10px;
    margin-bottom: 30px;
    transition: .3s;

}

.card:hover {
    box-shadow: 4px 4px 10px var(--redColor);
}

.card:hover img {
    box-shadow: 4px 4px 10px var(--redColor);
}

.card-title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
}

.circle {
    width: 80px;
    border-radius: 50%;
    margin-top: -60px;
    transition: .3s;
}

.card-info {
    font-size: 20px;
    text-align: left;

}

.card-btn {
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    background-color: var(--redColor);
    color: white;
    font-weight: 600;
    border: 3px solid;
    transition: .3s;
}

.card-btn:hover {
    background-color: rgb(185, 71, 71);
    border: 3px solid;
    transition: .3s;
}

@media only screen and (max-width: 650px) {
    .main-second {
        margin: 0;
        padding: 5px;
    }

    .info-top h2 {
        font-size: 3rem;
    }

    .info-top span {
        font-size: 3rem;
    }

    .info-top p {
        text-align: center;
        font-size: 18px;
    }
    .card1{
        width: 350px;
        height: fit-content!important;
        margin: 0;
    }
    .cards{
        margin: 0;
    }
}</style>