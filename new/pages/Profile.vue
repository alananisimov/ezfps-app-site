<!-- Modal toggle -->
<template>
<div id="readProductModal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 ">
            <succesmodal/>
            <errormodal/>
            <form id="settingsform" @submit.prevent="get_form">
                <!-- Modal header -->
                <div class="flex justify-between mb-4 rounded-t sm:mb-5">
                    <div class="text-lg text-gray-900 md:text-xl dark:text-white">
                        <h3 class="font-semibold ">
                            Информация об аккаунте:
                        </h3>
                        <p v-if="user" class="font-bold" >
                            {{ user.email}}
                        </p>
                        <p v-if="!user" class="font-bold" >
                            Ваш e-mail
                        </p>
                    </div>
                    <div>
                        <NuxtLink to="/">
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        </NuxtLink>
                    </div>
                </div>
                <dl>
                    
                    
                    <DifficultyModes/>
                    <advancedsettings/>
                </dl>
                <div class="flex justify-between items-center mt-8">
                    
                    <div class="flex items-center space-x-3 sm:space-x-4">
                        <button type="submit" class="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                            Сохранить
                        </button>               
                        
                     
                    </div>              
                    <button v-if="roleValue != 'user' | 'tguser'" type="button" id="successButton" data-modal-toggle="successModal" class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                        <svg class="w-5 h-5 mr-1.5 -ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
                        Запуск 
                    </button>
                    <button v-else type="button" id="errorButton" data-modal-toggle="errorModal" class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                        <svg class="w-5 h-5 mr-1.5 -ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
                        Запуск 
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script setup>
  let mode = ref('')
  let username = ref('')
  let roleValue = ref('')
  let dota_path = ref('C:/Program Files (x86)/Steam/steamapps/common/dota 2 beta')
  let cs_path = ref('C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive')

  const supabase = useSupabaseClient()
  async function get_form(event){
    event.preventDefault();
    const formDataObj = {};
    formDataObj["mode"] = mode.value;
    formDataObj["dota_path"] = dota_path.value;
    formDataObj["cs_path"] = cs_path.value;
    console.log(formDataObj);
    electronAPI.form_submit(formDataObj);
    
        
      
  }

  const { data: { user } } = await supabase.auth.getUser()
  username = user.user_metadata.name
  let { data: user_role_data, error } = await supabase
  .from('profiles')
  .select('role')
  .eq('email', user.email)
 
   roleValue = user_role_data[0].role;
   console.log(roleValue)
   console.log(user.email)
 
  const updateuser = async () => {
    

    const { data, error } = await supabase.auth.updateUser({
    data: { name: username, full_name: username }
    })

console.log(user.user_metadata.name)
}

</script>
