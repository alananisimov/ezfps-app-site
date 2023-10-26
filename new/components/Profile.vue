<!-- Modal toggle -->
<template>
  <div
    id="hs-profile-modal"
    class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
  >
    <div
      class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto "
    >
      <!-- Modal content -->
      <div
        class="relative p-4 mt-24 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
      >
        <succesmodal />
        <errormodal />
        <form id="settingsform" @submit.prevent="get_form">
          <!-- Modal header -->
          <div class="flex justify-between mb-4 rounded-t sm:mb-5">
            <div class="text-lg text-gray-900 md:text-xl dark:text-white">
              <h3 class="font-semibold">Информация об аккаунте:</h3>
              <p v-if="user" class="font-bold">
                {{ user.email }}
              </p>
              <p v-if="!user" class="font-bold">Ваш e-mail</p>
            </div>
            <div>
              <button
                type="button"
                class="hs-dropdown-toggle text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                data-hs-overlay="#hs-profile-modal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          <dl>
            <h3 class="my-5 text-lg font-medium text-gray-900 dark:text-white">
              Выберите режим оптимизации:
            </h3>
            <ul class="grid w-full gap-6 grid-cols-3 whitespace-normal">
              <li>
                <input
                  name="mode"
                  type="radio"
                  id="easy-option"
                  value="easy"
                  class="hidden peer"
                  @click="changemode('easy')"
                  checked
                />
                <label
                  for="easy-option"
                  class="inline-flex justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 h-[200px]"
                >
                  <div class="block">
                    <img
                      class="mb-2 w-7 h-7"
                      src="https://i.ibb.co/jkSX1v3/low-signal.png"
                    />
                    <div class="w-full text-lg font-semibold">Минимальная</div>
                    <div class="w-full text-sm">
                      Очистка файлов, оптимизация запуска.
                    </div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  name="mode"
                  type="radio"
                  id="medium-option"
                  value="medium"
                  class="hidden peer"
                  @click="changemode('medium')"
                />
                <label
                  for="medium-option"
                  class="inline-flex justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 h-[200px]"
                >
                  <div class="block">
                    <img
                      class="mb-2 w-7 h-7"
                      src="https://i.ibb.co/KKsnZNK/mobile-signal.png"
                    />
                    <div class="w-full text-lg font-semibold">Средняя</div>
                    <div class="w-full text-sm">
                      Чистка реестра, дефрагментация диска.
                    </div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  name="mode"
                  type="radio"
                  id="hard-option"
                  value="hard"
                  class="hidden peer"
                  @click="changemode('hard')"
                />
                <label
                  for="hard-option"
                  class="inline-flex justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 h-[200px]"
                >
                  <div class="block">
                    <img
                      class="mb-2 w-7 h-7"
                      src="https://i.ibb.co/gWXgCz3/high-signal.png"
                    />
                    <div class="w-full text-lg font-semibold">Сильная</div>
                    <div class="w-full text-sm">
                      Настройка сервисов, полная оптимизация игр
                    </div>
                  </div>
                </label>
              </li>
            </ul>
            <div class=" w-full pt-5">
      <div class="w-full rounded-2xl bg-white p-2">

        <Disclosure v-slot="{ open = false }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-orange-500 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            @click="async ()=> await test()"
          >
            <span>Дополнительные настройки</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-orange-500"
            />
          </DisclosureButton>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div id="updateProductModal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden relative top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <!-- Modal header -->
            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                
                
            </div>
            <!-- Modal body -->
           
                <div class="grid gap-4 mb-4">
                    <div>
                        <label for="dotapath" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Путь к Dota 2</label>
                        <input type="text" name="dota_path" id="dotapath" v-model="dota_path" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div>
                        <label for="cspath" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Путь к csgo</label>
                        <input type="text" name="cs_path" id="cspath" v-model="cs_path" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <!-- <label class="flex text-sm font-medium text-gray-900 dark:text-white" for="file_input">Загрузить кастомный конфиг (beta)</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">only json format</p>
<button type="button" class=" flex px-3 py-2 text-xs font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Загрузить</button> -->
                    
                    <div class="">
                        <label for="description" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">Дополнительная информация о юзере</label>
                        <textarea disabled="true" id="description" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a description...">{{ user }}</textarea>                    
                    </div>
                </div>
                
            
        </div>
    </div>
</div>
          </DisclosurePanel>
          </transition>
        </Disclosure>
        
      </div>
    </div>
          </dl>
          <div class="flex justify-center items-center mt-3 w-full">
            <div class="flex items-center space-x-3 sm:space-x-4 min-w-full">
              <button
                type="submit"
                class="w-full text-white inline-flex items-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm justify-center py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  aria-hidden="true"
                  class="mr-1 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Сохранить
              </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
let mode = ref("easy");
let roleValue = ref("");
let dota_path = ref(
  "C:/Program Files (x86)/Steam/steamapps/common/dota 2 beta"
);
let cs_path = ref(
  "C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive"
);
function getCurMode(mode_v){
  if (mode_v == mode) {
    return true
  }
  return false
}
const supabase = useSupabaseClient();
const {
  data: { user },
} = await supabase.auth.getUser();
function changemode(new_mode) {
  console.log(new_mode);
  mode.value = new_mode;
}

async function test() {
  let config = await electronAPI.get_config()
  mode.value = config.mode
  dota_path.value = config.dota_path
  cs_path.value = config.cs_path
}

async function get_form(event) {
  event.preventDefault();
  const formDataObj = {};
  formDataObj["mode"] = mode.value;
  formDataObj["dota_path"] = dota_path.value;
  formDataObj["cs_path"] = cs_path.value;
  console.log(formDataObj);
  electronAPI.form_submit(formDataObj);
  await test()
}

if (user) {
  let { data: user_role_data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("email", user.email);

  roleValue = user_role_data[0].role;
  console.log(roleValue);
  console.log(user.email);
}
</script>
