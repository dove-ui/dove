<template>
  <button class="d-button"
    :class="[
      type && 'd-button-' + type,
      round && 'd-button-round'
    ]"
    @click="$emit('click')"><slot></slot></button>
</template>

<script>
export default {
  name: 'DButton',
  props: {
    type: String,
    round: Boolean
  }
}
</script>

<style>
  .d-button {
    border: 0;
    background-image: linear-gradient(0deg, #292e34 0, #353c44);
    padding: 10px 15px;
    box-sizing: border-box;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
  }

  a.d-button {
    text-decoration: none;
  }

  .d-button:hover {
    background-image: linear-gradient(0deg, #131517 0, #353c44);
  }

  .d-button.d-button-info {
    background-image: linear-gradient(0deg, #059de2 0, #00b0ff);
  }
  .d-button.d-button-white {
    background-image: linear-gradient(0deg, #d0d6dc 0, #e7ebef);
    color: #2c353c;
  }

  .d-button.d-button-round {
    border-radius: 100px;
  }
</style>
