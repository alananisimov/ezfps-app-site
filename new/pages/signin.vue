<template>
  <section class="bg-gray-50 dark:bg-gray-900 ">
    
<div v-if="newerror == true" id="toast-top-right" class="fixed flex mt-16 ml-4 items-center max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        <span class="sr-only">Error icon</span>
    </div>
    <div class="ml-3 text-sm font-normal">{{ errortext }}</div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-top-right" aria-label="Close" @click="newerror = false">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
  <div class="flex flex-col items-center justify-center px-6 mx-auto h-screen lg:py-0 ">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6 " @submit.prevent="handleLogin">

                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш email</label>
                      <input type="email" name="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true">
                  </div>
                  <div class="select-none">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Пароль</label>
              <div class="inline-flex w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg">
                <input name="password" v-model="password" id="password" :type="passwordVisible ? 'text' : 'password'"
                  :placeholder="passwordVisible ? '' : '•••••'"
                  class="rounded-lg border-transparent focus:border w-full p-2.5 focus:ring-orange-500 focus:border-orange-500"
                  required="true">
                <!-- Add an eye icon to toggle password visibility -->
                <span @click="togglePasswordVisibility" class="cursor-pointer w-fit pt-2.5 px-2">
                  <span v-if="passwordVisible"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path fill="currentColor"
                        d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558z" />
                    </svg></span>
                  <span v-else class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4z"
                        fill="currentColor" />
                      <path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2s2-.916 2-2s-.916-2-2-2z" fill="currentColor" />
                    </svg></span>
                </span>
              </div>
            </div>
            <div class="select-none">
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900">Подтвердите
                пароль</label>
              <div class="inline-flex w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg">
                <input :type="password1Visible ? 'text' : 'password'" name="confirm-password" id="confirm-password"
                  :placeholder="password1Visible ? '' : '•••••'"
                  class="rounded-lg border-transparent focus:border w-full p-2.5 focus:ring-orange-500 focus:border-orange-500"
                  required="true">
                <span @click="toggle1PasswordVisibility" class="cursor-pointer w-fit pt-2.5 px-2">
                  <span v-if="password1Visible"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path fill="currentColor"
                        d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558z" />
                    </svg></span>
                  <span v-else class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4z"
                        fill="currentColor" />
                      <path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2s2-.916 2-2s-.916-2-2-2z" fill="currentColor" />
                    </svg></span>
                </span>
              </div>
            </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">Я принимаю <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Правила и соглашения</a></label>
                      </div>
                      
                  </div>
                  
                  <button type="submit" class="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Войти</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Нет аккаунта? <NuxtLink to="/signup"><a class="font-medium text-primary-600 hover:underline dark:text-primary-500">Зарегистрируйтесь</a></NuxtLink>
                  </p>
                  
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400 -top-3">
                            Забыли пароль? <NuxtLink to="/resetpassword"><a
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Восстановить пароль</a>
                            </NuxtLink>
                        </p>
                      
              </form>
          </div>
      </div>
  </div>
</section>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const supabase = useSupabaseClient();
const confirm_password = ref('')
const newerror = ref(false);
const errortext = ref('');
const loading = ref(false);
const email = ref('');
const password = ref('');
const user = useSupabaseUser();
const passwordVisible = ref(false);
const password1Visible = ref(false)
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
const toggle1PasswordVisibility = () => {
  password1Visible.value = !password1Visible.value;
};
watchEffect(() => {
  if (user.value) {
    navigateTo('/');
  }
});

const handleLogin = async () => {
    newerror.value = false
    loading.value = true
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,

    }).finally(()=>{
      loading.value = false
    })
    if (error) {
      newerror.value = true
      errortext.value = error.message
    }
    if(data) navigateTo("/")
  }
</script>