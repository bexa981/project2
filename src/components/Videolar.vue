<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Modal from "./Modal.vue";
onMounted(() => {
   AOS.init();
})
</script>

<template>
    <div class="videos">
        <h2 data-aos="fade-up" data-aos-duration="1500"><span class="span1">Shohista Djurabayeva</span> kursini bitirgan <br>
            o’quvchilarning erishgan natijalari</h2>
        <div class="flex-videos">
            <div data-aos="fade-right" data-aos-duration="1500" class="player-container">
                <vue3-video-player src="/videos/vid1.mp4"></vue3-video-player>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" class="player-container">
                <vue3-video-player  src="/videos/klent1.mp4"></vue3-video-player>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" class="player-container">
                <vue3-video-player src="/videos/vid2.mp4"></vue3-video-player>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" class="player-container">
                <vue3-video-player src="/videos/vid3.mp4"></vue3-video-player>
            </div>
        </div>
        <div data-aos="zoom-out" data-aos-duration="1500" class="btn">
           
            <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Kursga Yozilish</button>
            <p>Kursga xoziroq ro'yhatan o'tmoqchimisiz unda shoshiling</p>

        </div>
        <Modal/>
    </div>
</template>

<style scoped>
.videos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.videos h2 {
    text-align: center;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
}

.videos .span1 {
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
    color: var(--redColor);
}

.flex-videos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-top: 10vh;
    padding: 50px;
    width: 70%;

}

.flex-videos .player-container {
    width: 440px;
    height: 350px;
   
}
.uzum{
    border-top: 2px solid rgb(117, 85, 150);
    border-left: 2px solid rgb(117, 85, 150);
    border-right: 2px solid rgb(117, 85, 150);
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
    font-size: 17px;
    font-weight: 600;
    color: var(--redColor);
}
@media only screen and (max-width: 1475px) {
 .flex-videos{
    padding: 0;
    margin-top: 5vh;
    gap: 20px;
    width: 100%;
 }
 .videos h2{
        font-size: 3rem;
    }
    .videos .span1{
        font-size: 3rem;
    }
}
@media only screen and (max-width: 550px) {
    .uzum{
        width: 100%;
    }
    .flex-videos{
        width: 100%;
        margin-top: 5px;
        padding: 20px;
    }
    

    .btn {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: fit-content;

}
.btn button{
    padding: 10px;
    height: 80px;
    margin-top: 10px;
}

}

</style>