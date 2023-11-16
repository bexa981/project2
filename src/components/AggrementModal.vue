<template>
    <div>
      <div v-if="props.open" class="modal">
        <div class="modal-content">
            <div class="modal-header">
              <span class="close" @click="$emit('close')">&times;</span>
            </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({ open: Boolean });
  </script>
  
  <style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  .modal-header{
    display: flex;
    justify-content: end;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid #888;
    width: 100%;
    border-radius: 30px;
  }
  
  .close {
    color: red;
    border: 2px solid red;
    width: 45px;
    text-align: center;
    border-radius: 50%;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: red;
    text-decoration: none;
    cursor: pointer;
  }
  </style>