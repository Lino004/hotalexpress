<template>
  <div
    class="flex items-center border rounded"
    :class="{
      'bg-error border-error-border': error,
      'bg-grid9 border-grid5': !error
    }">
    <input
      class="flex-1 form-input px-4 py-2 block w-full
            focus:outline-none rounded"
      :class="{
        'bg-error border-error-border': error,
        'bg-grid9 border-grid5': !error,
        [customClass]: true
      }"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input')">
    <span class="text-xl text-green-500 mr-2" v-if="success">
      <i class="mdi mdi-check"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: String,
    success: Boolean,
    error: Boolean,
    customClass: String
  }
}
</script>

<style>

</style>
