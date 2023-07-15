<template>
<h3 class="my-5 text-lg font-medium text-gray-900 dark:text-white">Choose boost mode:</h3>
                    <ul class="grid w-full gap-6 grid-cols-3">
                        <li>
                            <input name="mode" type="radio" id="easy-option" value="peaceful" class="hidden peer" required="true">
                            <label for="easy-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                <div class="block">
                                    <img class="mb-2 w-7 h-7" src="https://i.ibb.co/jkSX1v3/low-signal.png">
                                    <div class="w-full text-lg font-semibold">Peaceful</div>
                                    <div class="w-full text-sm">Cleaning files, optimizing startup, checking for malware.</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input name="mode" type="radio" id="medium-option" value="medium" class="hidden peer">
                            <label for="medium-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <img class="mb-2 w-7 h-7" src="https://i.ibb.co/KKsnZNK/mobile-signal.png">
                                    <div class="w-full text-lg font-semibold">Medium</div>
                                    <div class="w-full text-sm">Cleaning the registry, defragmenting the disk.</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input name="mode" type="radio" id="hard-option" value="hard" class="hidden peer">
                            <label for="hard-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <img class="mb-2 w-7 h-7" src="https://i.ibb.co/gWXgCz3/high-signal.png">
                                    <div class="w-full text-lg font-semibold">Hard</div>
                                    <div class="w-full text-sm">Setting up services, removing bad processes.</div>
                                </div>
                            </label>
                        </li>
                    </ul>
</template>
