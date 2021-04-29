<template>
  <div>
    <h4 class="text-lg md:text-xl font-semibold md:text-center pb-4">Reset password</h4>
    <hr class="text-grid5 md:hidden mb-4">
    <p class="text-sm font-medium mb-5">
      An email will be send to you with further instructions.
    </p>
    <div>
      <div>
        <label class="text-sm font-medium">Email</label>
        <input
          type="email"
          class="form-input px-4 py-2 block w-full focus:outline-none rounded border border-grid14 my-2"
          placeholder="john@example.com">
      </div>
    </div>
    <hr class="text-grid5 my-9">
    <router-link
      tag="button"
      class="text-center border border-grid14 py-3 rounded text-grid12 font-semibold px-10 w-full"
      :to="{ name: 'SetNewPassword' }">
      Reset password
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
