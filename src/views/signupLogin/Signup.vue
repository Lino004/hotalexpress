<template>
  <div>
    <h4 class="text-lg md:text-xl font-semibold md:text-center pb-4">Sign up</h4>
    <hr class="text-grid5 md:hidden mb-4">
    <p class="text-sm font-medium mb-5">
      I have an account and want to
      <router-link :to="{ name: 'Login' }" class="text-grid2 cursor-pointer">log in</router-link>.
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
        <label class="text-sm font-medium">Name</label>
        <input
          type="text"
          class="form-input px-4 py-2 block w-full focus:outline-none rounded border border-grid14 my-2"
          placeholder="John Spickes">
      </div>
      <div>
        <label class="text-sm font-medium">Phone number</label>
        <input
          type="number"
          class="form-input px-4 py-2 block w-full focus:outline-none rounded border border-grid14 my-2"
          placeholder="+32 498 76 54 32">
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
      Register
    </button>
    <p class="text-xs text-grid7 mt-4">
      By continuing you agree to our
      <a class="text-grid2 cursor-pointer">T&Cs</a>
      and that you have read and understood our
      <a class="text-grid2 cursor-pointer">Privacy Policy</a>.
      We use your data to offer you a personalized experience and to better understand and improve our services. For more information
      <a class="text-grid2 cursor-pointer">see here</a>.
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
