<template>
  <div>
    <h4 class="text-lg md:text-xl font-semibold md:text-center pb-4">Log in</h4>
    <hr class="text-grid5 md:hidden mb-4">
    <p class="text-sm font-medium mb-5">
      I am new and want to
      <router-link :to="{ name: 'Signup' }" class="text-grid2 cursor-pointer">sign up</router-link>.
    </p>
    <div>
      <div>
        <label class="text-sm font-medium">Email</label>
        <input
          type="email"
          class="form-input px-4 py-2 block w-full focus:outline-none rounded border border-grid14 my-2"
          placeholder="john@example.com">
      </div>
      <div>
        <label class="text-sm font-medium">Password</label>
        <input
          type="password"
          class="form-input px-4 py-2 block w-full focus:outline-none rounded border border-grid14 my-2"
          placeholder="Choose a password">
      </div>
    </div>
    <hr class="text-grid5 my-9">
    <button
      class="text-center border border-grid14 py-3 rounded text-grid12 font-semibold px-10 w-full">
      Log in
    </button>
    <p class="text-sm font-medium mt-4 text-center">
      Forgot your
      <router-link :to="{ name: 'ResetPassword' }" class="text-grid2 cursor-pointer">password</router-link>?
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
