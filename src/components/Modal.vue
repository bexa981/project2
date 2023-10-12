 <script setup>
 import { ref } from "vue";
 
 import Swal from 'sweetalert2/dist/sweetalert2.js'
 const form = ref(null);
function sendMessage() {
    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value
   

    if (name && phone && message) {
        form.value.reset();

        fetch(`https://api.telegram.org/bot6559478190:AAHJqWrZvRtw7-D_j2aJo3V7caSB_X6FkAI/sendMessage?chat_id=-1001811333330&text=Foydalanuvchi ismi : ${name}%0AFoydalanuvchi nomeri:${phone}&parse_mode=html`)
        .then((r) => r.json())
        .then(() => Swal.fire({
            icon: 'success',
            title: 'Jo`natildi',
            text: 'Xabaringiz jo`natildi',

        }))
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Xato..',
            text: 'Qatorlarni to`liq to`ldiring',

        })
    }



}
</script>
 <template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Shohista Djurabayeva kursiga yoziling!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form ref="form" id="form">
          <div class="mb-3">
      
            <input type="text" class="form-control" id="name" placeholder="Ismingiz">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="phone" placeholder="+998">
            
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" @click="sendMessage()" class="btn btn-primary">Ariza qoldiring</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.modal-dialog{
    max-width: 650px;

}
.modal-body input{
 font-size: 18px;
 padding: 15px;
}
.modal-header{
    border-bottom: none!important;
    
}
.modal-header h1{
    font-size: 25px!important;
    font-weight: 600;
    padding: 20px;
}
.modal-footer{
    border-top: none!important;
    
}
.modal-footer button{
    width: 100%;
    background-color: var(--redColor);
    border: none;
    padding: 10px;
    font-size: 20px;
}
</style>