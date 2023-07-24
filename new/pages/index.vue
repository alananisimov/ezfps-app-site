<template>
  <main>
     <div v-if="user" class="mx-auto max-w-7xl md:py-6 py-6 sm:px-12 lg:px-16">

     <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-160" aria-hidden="true">
       <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffa500] to-[#ffae00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
     </div>
     <div class="mx-auto max-w-2xl py-8 sm:py-24 lg:py-14 flex items-center space-x-4 rounded-[60px]">
       
       <div class="text-center p-8 rounded-xl shadow-2xl">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
    
  
        <svg version="1.0" id="Layer_1" class="h-20 w-20 row-span-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g>
	<g>
		<path fill="#394240" d="M63.329,57.781C62.954,57.219,53.892,44,31.999,44C10.112,44,1.046,57.219,0.671,57.781
			c-1.223,1.84-0.727,4.32,1.109,5.547c1.836,1.223,4.32,0.727,5.547-1.109C7.397,62.117,14.347,52,31.999,52
			c17.416,0,24.4,9.828,24.674,10.219C57.446,63.375,58.712,64,60.009,64c0.758,0,1.531-0.219,2.211-0.672
			C64.056,62.102,64.556,59.621,63.329,57.781z"/>
		<path fill="#394240" d="M31.999,40c8.836,0,16-7.16,16-16v-8c0-8.84-7.164-16-16-16s-16,7.16-16,16v8
			C15.999,32.84,23.163,40,31.999,40z M23.999,16c0-4.418,3.586-8,8-8c4.422,0,8,3.582,8,8v8c0,4.418-3.578,8-8,8
			c-4.414,0-8-3.582-8-8V16z"/>
	</g>
	<path fill="#F9EBB2" d="M23.999,16c0-4.418,3.586-8,8-8c4.422,0,8,3.582,8,8v8c0,4.418-3.578,8-8,8c-4.414,0-8-3.582-8-8V16z"/>
</g>
</svg>
<div class="text-left">
         <h1 v-if="user.name" class="font-6xl font-bold tracking-tight text-gray-900 dark:text-gray-900 col-span-2">{{user.name}}</h1>
         <h1 v-if="!user.name" class="font-6xl font-bold tracking-tight text-gray-900 dark:text-gray-900 col-span-2">Account</h1>
         <p class="row-span-2 col-span-2">{{user.email}}</p>
</div>
      </div>
        
<div class="grid grid-cols-3 grid-rows-2 gap-4 -mt-10">
    <div >Статус</div>
    <div >Активен</div>
    <div >Ваш TG ID</div>
    <div >xxxxxxxxx</div>
    <div >Версия</div>
    <div> 1.0 beta</div>
</div>

         <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/profile" class="rounded-full hover:animate-spin bg-orange-400 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m18.525 9l-1.1-2.4l-2.4-1.1l2.4-1.1l1.1-2.4l1.1 2.4l2.4 1.1l-2.4 1.1l-1.1 2.4Zm2 7l-.8-1.7l-1.7-.8l1.7-.8l.8-1.7l.8 1.7l1.7.8l-1.7.8l-.8 1.7Zm-13 6l-.3-2.35q-.2-.075-.387-.2t-.313-.25l-2.2.95l-2.5-4.35l1.9-1.4v-.8l-1.9-1.4l2.5-4.35l2.2.95q.125-.125.313-.25t.387-.2l.3-2.35h5l.3 2.35q.2.075.388.2t.312.25l2.2-.95l2.5 4.35l-1.9 1.4v.8l1.9 1.4l-2.5 4.35l-2.2-.95q-.125.125-.312.25t-.388.2l-.3 2.35h-5Zm2.5-5q1.25 0 2.125-.875T13.025 14q0-1.25-.875-2.125T10.025 11q-1.25 0-2.125.875T7.025 14q0 1.25.875 2.125t2.125.875Z"/></svg></a>
           
           <a class="text-xl rounded-full bg-orange-400 px-32 py-4 font-semibold leading-6 text-gray-100 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " id="learn">Начать <span aria-hidden="true">→</span></a>
         </div>
       
      </div>
     </div>
     <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
       <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffae00] to-[#ffa500] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
     </div>
   </div>
   
   </main>
</template>

<script setup>
  const supabase = useSupabaseClient()
const { data: { user } } = await supabase.auth.getUser()

if(!user) {
  navigateTo("/signin")
}
</script>