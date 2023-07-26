<template>
    <div class=" w-full pt-16">
      <div class="w-full max-w-md rounded-2xl bg-white p-2">

        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-orange-500 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span>Дополнительные настройки</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-orange-500"
            />
          </DisclosureButton>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div id="updateProductModal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden relative top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <!-- Modal header -->
            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                
                
            </div>
            <!-- Modal body -->
           
                <div class="grid gap-4 mb-4">
                    <div>
                        <label for="dotapath" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Путь к Dota 2</label>
                        <input type="text" name="dota_path" id="dotapath" v-model="dota_path" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div>
                        <label for="cspath" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Путь к csgo</label>
                        <input type="text" name="cs_path" id="cspath" v-model="cs_path" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white" for="file_input">Загрузить кастомный конфиг (beta)</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">only json format</p>
<button type="button" @click="UploadConfig" class=" flex px-3 py-2 text-xs font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Загрузить</button>
                    
                    <div class="">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Дополнительная информация о юзере</label>
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
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronUpIcon } from '@heroicons/vue/20/solid'
  let Configfile = ref()
  const supabase = useSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  const UploadConfig = async () => {
const { data, error } = await supabase
  .storage
  .from('configs')
  .upload(user.user_metadata.name + '.json', Configfile, {
    cacheControl: '3600',
    upsert: false
  })
  }
  </script>
