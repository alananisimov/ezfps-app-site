<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    -->
    <div class="min-h-full ">
      <Disclosure as="nav" class="bg-[#18191B]" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-12 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-7 w-7" src="https://i.ibb.co/F34tqJT/logo.png" alt="Your Company" />
              </div>
              <div class="">
                <div class="ml-2 flex items-center space-x-4 text-white text-xl text-center ">
                  <h1>ezfps</h1>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                
  
                <!-- Profile dropdown -->
                
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              
            <div class="inline-flex items-center space-x-4 text-gray-400">
                
              <!-- Mobile menu button -->
              <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">Open main menu</span>
                



               
              </DisclosureButton>
            <button id="btn_left">
                <svg class="w-5 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 18 2">
    <path stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 1h16"/>
  </svg>
             </button>
                <button id="btn_right">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20"><path fill="#FFFFFF" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"/></svg></button></button>
            </div>
            </div>
          </div>
        </div>
        
      </Disclosure>
  
      
      
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

  const supabase = useSupabaseClient()
  
async function SignOut(){
  const { error: signout } = await supabase.auth.signOut()
  console.log("signout")
  navigateTo('/')
}
  const { data: { user } } = await supabase.auth.getUser()
  const user1 = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  const navigation = [
    { name: '', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

  </script>
