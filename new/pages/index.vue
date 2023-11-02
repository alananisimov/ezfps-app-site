<template>
  <main>
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-160" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffa500] to-[#ffae00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        " />
    </div>
    <succesmodal />
    <errormodal />
    <Profile />
    <div class="justify-center items-center h-full">
      <div class="flex flex-col">
        
        <section class="px-10">
          <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 py-48 justify-center lg:py-16  lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-1 text-6xl font-extrabold tracking-tight leading-none xl:text-6xl dark:text-white">
                Лучший бустер игр в
              </h1>
              <span
                class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none xl:text-6xl dark:text-white">СНГ</span>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-2xl lg:text-xl dark:text-gray-400">
                Лучший бустер игр для максимальной производительности и
                удовольствия в играх.
              </p>
            </div>
            <div class="hidden mt-5 col-span-5 lg:flex" @click="click()">
              <video class="w-full" autoplay loop muted preload="metadata">
                <source src="/lina.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
        <div class="absolute bottom-0 mb-10 inline-flex gap-x-6 w-full pl-10">
          <button v-if="isSubscriptionActive" type="button" @click="start_execute" id="successButton"
            data-hs-overlay="#successModal"
            class="font-bold inline-flex text-xl rounded-2xl items-center text-gray-100 bg-gradient-to-tr from-orange-600 to-orange-400 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-16 py-4 text-center">
            <img class="h-9 mr-1.5 -ml-10" src="https://img.icons8.com/emoji/48/rocket-emji.png" />
            <span class="">Запуск</span>
          </button>
          <button v-else type="button" id="errorButton" data-hs-overlay="#errorModal"
            class="font-bold inline-flex text-xl rounded-2xl items-center text-gray-100 bg-gradient-to-tr from-orange-600 to-orange-400 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-16 py-4 text-center">
            <img class="h-9 mr-1.5 -ml-10" src="https://img.icons8.com/emoji/48/rocket-emji.png" />
            <span class="">Запуск</span>
          </button>


          <button data-hs-overlay="#hs-profile-modal"
            class="rounded-2xl bg-orange-400 px-8 py-2 text-xl text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Настройки
          </button>

          <div class="inline-flex text-base rounded-2xl text-gray-100 bg-orange-400 px-8 h-18 w-full mr-20">
            <div class="gap-5 inline-flex" v-if="!boostisloading">
              <svg fill="#ffff" width="40" heigth="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"
                enable-background="new 0 0 52 52" xml:space="preserve" stroke="">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z">
                  </path>
                </g>
              </svg>
              <div class="flex flex-col pt-2.5">
                <span class="font-extrabold">Все отлично! Все обновления скачаны</span>
                <p class="hidden lg:flex">
                  Версия приложения:
                  <span class="font-extrabold">{{ " " + app_version }}</span>
                </p>
              </div>
            </div>
            <transition name="fade">
              <div v-if="boostisloading">
                <div class="flex justify-between mb-1 w-[40vw] pt-3">
                  <span class="text-base font-medium text-white">Загрузка</span>
                  <span class="text-sm font-medium text-white">{{
                    loadingvalue + "%"
                  }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div class="bg-red-500 h-2.5 rounded-full" :style="'width: ' + loadingvalue + '%'"></div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

import { ref } from "vue";
import moment from "moment"

const boostisloading = ref(false);
const loadingvalue = ref(0);
const click_count = ref(0)
const supabase = useSupabaseClient();
const user = useSupabaseUser()
let roleValue = ref("");
let app_version = ref("1.0.0");
let date = moment()
watchEffect(() => {
  if (!user.value) {
    navigateTo('/signin');
  }
});
async function getRole() {
  if (user.value) {
    let { data: user_role_data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("email", user.value.email as string);

    if (user_role_data && user_role_data.length > 0) {
      return user_role_data[0].role;
    }
  }
  return null;
}




async function getSubEndTime() {
  if (!user.value) {
    return false;
  }

  let { data: user_sub_data, error } = await supabase
    .from("profiles")
    .select("expiration_date")
    .eq("email", user.value.email as string);

  if (user_sub_data && user_sub_data.length > 0) {
    const expirationDate = user_sub_data[0]?.expiration_date;
    if (expirationDate) {
      const end_time = moment(expirationDate, "DD:MM:YYYY");
      const currentDate = moment();

      if (currentDate.isBefore(end_time)) {
        return true;
      }
    }
  }

  return false;
}



const isSubscriptionActive = ref(false);

onMounted(async () => {
  isSubscriptionActive.value = await checkRights();
});

watch(user, async () => {
  isSubscriptionActive.value = await checkRights();
});
function click() {
  click_count.value += 1
  if (click_count.value >= 4) {
    electronAPI.open_devtools()
  }
}

async function checkRights() {
  const role = await getRole();
  const end_time = await getSubEndTime();
  console.log(end_time, "end_time")
  if ((role == "admin" || role == "buyers") && end_time == true) {
    return true;
  } else {
    return false;
  }
}



const loading_init = () => {
  let n1 = loadingvalue.value;
  let timerId = setInterval(() => {
    loadingvalue.value = n1;
    n1 += Math.floor(Math.random() * 15);

    if (loadingvalue.value >= 100) {
      clearInterval(timerId);
      loadingvalue.value = 0;
      boostisloading.value = false;
    }
  }, 700);
};

const start_execute = () => {
  boostisloading.value = true;
  loadingvalue.value = 0;
  console.log("started executong")
  loading_init();
  electronAPI.start();
};
</script>
<script>


</script>
