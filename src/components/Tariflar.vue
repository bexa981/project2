<script setup>
import { onMounted } from "vue";
import Modal from "./Modal.vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

<template>
    <div class="tariflar-main">
        <h2 data-aos="fade-up" data-aos-duration="1500">Tariflar</h2>

        <div class="cards">
            <div data-aos="flip-right" data-aos-duration="1500" class="tarif standart">
                <h3>Online</h3>
                <div class="kursi">
                    <ul>
                        <li>Yopiq telegram guruhda 5 ta onlayn dars</li>
                        <li>Amaliy dars</li>
                        <li>Yopiq guruhda foydali tavsiyalar</li>
                        <li>Online darslarni qayta ko'rish uchun yozib olingan videosi</li>
                        <li>Shoshista Jurabayevaning barcha servislari uchun 10% skidka</li>
                        
                    </ul>
                    <h4 class="skidka"> 799.000 9-dekabr 23:59 gacha, <br> 599.000 6-dekabr 23:59 gacha</h4>
                    <h4 class="narxi">399.000 so'm <br> 3-dekabr 23:59 gacha</h4>
                    <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Kursga Yozilish</button>
                    <p class="chegirma" style="font-size: 20px;">50% CHEGIRMA</p>
                </div>

            </div>
            <div data-aos="flip-right" data-aos-duration="1500" class="tarif premium">
                <h3>Offline</h3>
                <div class="kursi">
                    <ul>
                        <li>Yopiq 5 ta oflayn seminar (Cambridge universteti binosida)</li>
                        <li>Amaliy dars</li>
                        <li>Har bir o'quvchi bilan eng aktual muammosini aniqlab beruvchi 1 ta bepul diagnostika</li>
                        <li>Yopiq guruhda foydali tavsiyalar</li>
                        <li>Kuratorlar yordami </li>
                        <li>Sertifikat</li>
                        <li>Online darslarni qayta ko'rish uchun yozib olingan videosi</li>
                        <li>Shoshista Jurabayevaning barcha servislari uchun 15% skidka</li>
                       
                        
                    </ul>
                    <h4 class="skidka"> 999.000 9-dekabr 23:59 gacha, <br> 799.000 6-dekabr 23:59 gacha</h4>
                    <h4 class="narxi">499.000 so'm <br> 3-dekabr 23:59 gacha</h4>
                    <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Kursga Yozilish</button>
                    <p class="chegirma" style="font-size: 20px;">50% CHEGIRMA</p>
                </div>

            </div>
            <div data-aos="flip-right" data-aos-duration="1500" class="tarif vip">
                <h3>VIP</h3>
                <div class="kursi">
                    <ul>
                        <li>Yopiq 5 ta oflayn seminar (Cambridge universteti binosida)</li>
                        <li>Amaliy dars</li>
                        <li>1 ta individual konsultatsiya (Psixogenetika yordamida muammoni aniqlab va eng samarali yechimni ko'rsatuvchi)</li>
                        <li>Sertifikat</li>
                        <li>Online darslarni qayta ko'rish uchun yozib olingan videosi</li>
                        <li>Shoshista Jurabayevaning barcha servislari uchun 20% skidka</li>
                       
                    </ul>
                    <h4 class="skidka"> 1.999.000 9-dekabr 23:59 gacha, <br> 1.799.000 6-dekabr 23:59 gacha</h4>
                    <h4 class="narxi">1.499.000 so'm <br> 3-dekabr 23:59 gacha</h4>
                    <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Kursga Yozilish</button>
                    <p class="chegirma" style="font-size: 20px;">25% CHEGIRMA</p>
                  
                </div>

            </div>
            <modal/>
        </div>
    </div>
</template>

<style scoped>
.tariflar-main {
    margin-top: 15vh;
}

.tariflar-main h2 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 50px;
}
.skidka{
    font-size: 22px;
    color: red;
    text-decoration: line-through;
}
.chegirma{
    color: green;
}
.narxi{
 font-size: 24px;
 
}
.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 12vh;
    gap: 50px;
    margin-bottom: 12vh;
}

.kursi {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

}

.cards .tarif {
    box-shadow: 2px 2px 20px rgb(217, 215, 215), -2px -2px 20px rgb(217, 215, 215);
    padding: 50px;
    width: 450px;
    height: fit-content;
    border-radius: 30px;
}

.cards .tarif button {
    padding: 18px 50px;
    font-size: 20px;
    font-weight: 600;
    background-color: var(--redColor);
    color: white;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 5px 10px rgb(174, 174, 174);
    transition: .3s;
    cursor: pointer;
}

.cards .tarif button:hover {
    background-color: rgb(193, 93, 93);
}

.cards .tarif h3 {
    text-align: center;
    font-size: 2rem;
    border: 3px solid;
    padding: 10px 30px;
    border-radius: 15px;
    margin-top: -86px;
    margin-bottom: 50px;
}

.cards .tarif li {
    line-height: 2rem;
    font-size: 18px;

}

.standart li {
    color: green;
}

.standart h3 {
    color: green;
}

.premium li {
    color: var(--redColor);
}

.premium h3 {
    color: var(--redColor);
}

.vip li {
    color: goldenrod;

}

.vip h3 {
    color: goldenrod;
}
@media only screen and (max-width: 1468px) {
 .tarif{
    width: 400px!important;
 }
 .cards{
    gap: 10px;
    margin-top: 50px;
 }
 .tariflar-main h2 {
        font-size: 3rem;
        margin-bottom: 10px;
    }
    .tariflar-main{
        margin-top: 26px;
    }
}

@media only screen and (max-width: 550px) {
    .tariflar-main{
        margin-top: 6vh;
    }
    .tariflar-main h2{
       padding-bottom: 30px;
    }
    
    .cards{
        gap: 70px;
    }

    .cards .tarif {
        width: 100%;
        margin: 5px;
        padding: 20px;
    }
}
</style>