<!-- =========================================================================================
  File Name: Login.vue
  Description: Login Page
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
  <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
  <vx-card class="rounded bg-transparent">
  <div slot="no-body" class="full-page-bg-color rounded">

    <div class="vx-row no-gutter justify-center items-center rounded">

    <div class="vx-col hidden lg:block lg:w-1/2">
    <img src="@assets/images/pages/login-laundry.png" alt="login" class="mx-auto">
    </div>

    <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg rounded">
    <div class="px-8 pt-8 login-tabs-container rounded overflow-hidden">
    <div class="wave-header">
    <div class="vx-card__title mb-2">
      <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col class="mt-10 mb-6" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <img src="@assets/images/logo/logo.png" alt="logo-img" width="50" height="50" class="rounded-full shadow-md block p-2">
      <h4 class="ml-4">Mr Cling Laundry</h4>
      </vs-col>
      </vs-row>
      <!--Waves Container-->
      <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
      </svg>
      </div>
      <!--Waves end-->
      <vs-row class="bg-white pt-2" vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
      <p>Silahkan login dengan akun anda.</p>
      </vs-row>
    </div>
    </div>

    <vs-tabs alignment="center">
      <vs-tab label="Agen">
      <login-agent></login-agent>
      </vs-tab>

      <vs-tab label="Konsumen">
      <login-customer></login-customer>
      </vs-tab>
    </vs-tabs>

    </div>
    </div>
    </div>
  </div>
  </vx-card>
  </div>
  </div>
</template>


<script>
import LoginAgent from './LoginAgent.vue'
import LoginCustomer from './LoginCustomer.vue'

export default {
  components: {
  LoginAgent,
  LoginCustomer
  }
}
</script>

<style lang="scss" scoped>
.login-tabs-container {
  min-height: 505px;
  .con-tab {
  padding-bottom: 14px;
  }
  .con-slot-tabs {
  margin-top: 1rem;
  }
}

.rounded {
  border-radius: 2rem !important;
}

.full-page-bg-color {
  background-color: rgba(255, 255, 255, 0.8) !important;
}

h4 {
  color: white !important;
}

.p-2 {
  padding: 2px !important;
}

/* wave styles */
.wave-header {
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, #1778B4 0%, #7CD3FB 100%);
  margin-left: -2rem;
  margin-right: -2rem;
  margin-top: -2rem;
}

.inner-wave-header {
  height: 50vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.flex-wave {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  /* height: 15vh; */
  margin-bottom: -7px;
  /* Fix for safari gap */
  min-height: 100px;
  max-height: 150px;
}

/* Wave Animation */

.parallax>use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax>use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax>use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
  transform: translate3d(-90px, 0, 0);
  }
  100% {
  transform: translate3d(85px, 0, 0);
  }
}

/* Shrinking for mobile */

@media (max-width: 768px) {
  .waves {
  height: 40px;
  min-height: 40px;
  }
  .content {
  height: 30vh;
  }
  h1 {
  font-size: 24px;
  }
}
</style>
