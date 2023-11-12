export default (() => {
const __VLS_setup = async () => {
ЗАМЕНИТЬ; EASY; MEDIUM; HARD; НА; DOTA; CS; GO; ВЕСЬ; ПК;
import { ref, onUnmounted } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/20/solid';
import { AppConfig } from './types';
import { RecognizedBrowser } from 'sniffr';
const config: AppConfig = {
linux: {
mode: 'easy',
dota_path: '~/.steam/steam/SteamApps/common/dota 2 beta',
cs_path: '~/.steam/steam/SteamApps/common/Counter-Strike Global Offensive',
},
macos: {
mode: 'easy',
dota_path: '/Users/$USER/Library/Application Support/Steam/steamapps/common/dota 2 beta',
cs_path: '/Users/$USER/Library/Application Support/Steam/steamapps/common/Counter-Strike Global Offensive',
},
windows: {
mode: 'easy',
dota_path: 'C:/Program Files (x86)/Steam/steamapps/common/dota 2 beta',
cs_path: 'C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive',
},
default: {
mode: 'easy',
dota_path: 'C:/Program Files (x86)/Steam/steamapps/common/dota 2 beta',
cs_path: 'C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive',
}
};
const mode = ref("easy");
const roleValue = ref("");
const dota_path = ref("C:/Program Files (x86)/Steam/steamapps/common/dota 2 beta");
const cs_path = ref("C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive");
const isSuccess = ref(false);

const hideToast = async () => {
await new Promise((resolve) => setTimeout(resolve, 3000));
isSuccess.value = false;
};

const showToast = () => {
isSuccess.value = true;
hideToast();
};

onUnmounted(() => {
isSuccess.value = false;
});

function getCurMode(mode_v: string) {
return mode_v === mode.value;
}

const supabase = useSupabaseClient();
const {
data: { user },
} = await supabase.auth.getUser();

function changemode(new_mode: string) {
console.log(new_mode);
mode.value = new_mode;
}
async function test() {
let config = await electronAPI.get_config();
mode.value = config.mode;
dota_path.value = config.dota_path;
cs_path.value = config.cs_path;
}

async function get_form(event: { preventDefault: () => void; }) {
event.preventDefault();
const formDataObj = {
mode: mode.value,
dota_path: dota_path.value,
cs_path: cs_path.value,
};
console.log(formDataObj);
electronAPI.form_submit(formDataObj);
await test();
}

if (user) {
let { data: user_role_data, error } = await supabase
.from("profiles")
.select("role")
.eq("email", user.email);

if (user_role_data && user_role_data.length > 0) {
roleValue.value = user_role_data[0].role;
} else {
// Handle the case where user_role_data is null or empty
console.warn('User role data not found.');
}

console.log(roleValue.value);
console.log(user.email);
}
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'Profile';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'succesmodal', typeof __VLS_components, 'Succesmodal', 'succesmodal'> &
import('./__VLS_types.js').WithComponent<'errormodal', typeof __VLS_components, 'Errormodal', 'errormodal'> &
import('./__VLS_types.js').WithComponent<'Disclosure', typeof __VLS_components, 'Disclosure'> &
import('./__VLS_types.js').WithComponent<'DisclosureButton', typeof __VLS_components, 'DisclosureButton'> &
import('./__VLS_types.js').WithComponent<'ChevronUpIcon', typeof __VLS_components, 'ChevronUpIcon'> &
import('./__VLS_types.js').WithComponent<'transition', typeof __VLS_components, 'Transition', 'transition'> &
import('./__VLS_types.js').WithComponent<'DisclosurePanel', typeof __VLS_components, 'DisclosurePanel'>;
__VLS_components.Succesmodal; __VLS_components.succesmodal;
// @ts-ignore
[succesmodal,];
__VLS_components.Errormodal; __VLS_components.errormodal;
// @ts-ignore
[errormodal,];
__VLS_components.Disclosure; __VLS_components.Disclosure;
// @ts-ignore
[Disclosure, Disclosure,];
__VLS_components.DisclosureButton; __VLS_components.DisclosureButton;
// @ts-ignore
[DisclosureButton, DisclosureButton,];
__VLS_components.ChevronUpIcon;
// @ts-ignore
[ChevronUpIcon,];
__VLS_components.Transition; __VLS_components.Transition; __VLS_components.transition; __VLS_components.transition;
// @ts-ignore
[transition, transition,];
__VLS_components.DisclosurePanel; __VLS_components.DisclosurePanel;
// @ts-ignore
[DisclosurePanel, DisclosurePanel,];
if (__VLS_ctx.isSuccess) {
// @ts-ignore
[isSuccess,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { id: ("toast-success"), class: ("fixed top-16 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-[200] border-gray-300 border-2"), role: ("alert"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"), };
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { class: ("w-5 h-5"), 'aria-hidden': ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("currentColor"), viewBox: ("0 0 20 20"), };
{
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"), };
}
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("sr-only"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-3 text-sm font-normal"), };
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { type: ("button"), class: ("ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"), dataDismissTarget: ("#toast-success"), 'data-dismiss-target': ("#toast-success"), 'aria-label': ("Close"), };
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("sr-only"), };
}
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { class: ("w-3 h-3"), 'aria-hidden': ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 14 14"), };
{
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { stroke: ("currentColor"), strokeLinecap: ("round"), 'stroke-linecap': ("round"), strokeLinejoin: ("round"), 'stroke-linejoin': ("round"), strokeWidth: ("2"), 'stroke-width': ("2"), d: ("m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"), };
}
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { id: ("hs-profile-modal"), class: ("hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("relative p-4 mt-24 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"), };
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.succesmodal>) = {};
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.errormodal>) = {};
}
{
({} as JSX.IntrinsicElements).form;
({} as JSX.IntrinsicElements).form;
(__VLS_x as JSX.IntrinsicElements)['form'] = { id: ("settingsform"), };
type __VLS_0 = JSX.IntrinsicElements['form'];
const __VLS_1: import('./__VLS_types.js').EventObject<typeof undefined, 'submit', {}, __VLS_0['onSubmit']> = {
submit: (__VLS_ctx.get_form)
};
// @ts-ignore
[get_form,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex justify-between mb-4 rounded-t sm:mb-5"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("text-lg text-gray-900 md:text-xl dark:text-white"), };
{
({} as JSX.IntrinsicElements).h3;
({} as JSX.IntrinsicElements).h3;
(__VLS_x as JSX.IntrinsicElements)['h3'] = { class: ("font-semibold"), };
}
if (__VLS_ctx.user) {
// @ts-ignore
[user,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("font-bold"), };
(__VLS_ctx.user.email);
// @ts-ignore
[user,];
}
}
if (!__VLS_ctx.user) {
// @ts-ignore
[user,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("font-bold"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { type: ("button"), class: ("hs-dropdown-toggle text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"), dataHsOverlay: ("#hs-profile-modal"), 'data-hs-overlay': ("#hs-profile-modal"), };
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { 'aria-hidden': ("true"), class: ("w-5 h-5"), fill: ("currentColor"), viewBox: ("0 0 20 20"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { fillRule: ("evenodd"), 'fill-rule': ("evenodd"), d: ("M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"), clipRule: ("evenodd"), 'clip-rule': ("evenodd"), };
}
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("sr-only"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).dl;
({} as JSX.IntrinsicElements).dl;
(__VLS_x as JSX.IntrinsicElements)['dl'] = {};
{
({} as JSX.IntrinsicElements).h3;
({} as JSX.IntrinsicElements).h3;
(__VLS_x as JSX.IntrinsicElements)['h3'] = { class: ("my-5 text-lg font-medium text-gray-900 dark:text-white"), };
}
{
({} as JSX.IntrinsicElements).ul;
({} as JSX.IntrinsicElements).ul;
(__VLS_x as JSX.IntrinsicElements)['ul'] = { class: ("grid w-full gap-6 grid-cols-3 whitespace-normal"), };
{
({} as JSX.IntrinsicElements).li;
({} as JSX.IntrinsicElements).li;
(__VLS_x as JSX.IntrinsicElements)['li'] = {};
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { name: ("mode"), type: ("radio"), id: ("easy-option"), value: ("easy"), class: ("hidden peer"), checked: (true), };
type __VLS_2 = JSX.IntrinsicElements['input'];
const __VLS_3: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_2['onClick']> = {
click: $event => {
__VLS_ctx.changemode('easy');
}
};
// @ts-ignore
[changemode,];
}
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("easy-option"), class: ("inline-flex justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 h-[200px]"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("block"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("mb-2 w-7 h-7"), src: ("https://i.ibb.co/jkSX1v3/low-signal.png"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("w-full text-lg font-semibold"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("w-full text-sm"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).li;
({} as JSX.IntrinsicElements).li;
(__VLS_x as JSX.IntrinsicElements)['li'] = {};
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { name: ("mode"), type: ("radio"), id: ("medium-option"), value: ("medium"), class: ("hidden peer"), };
type __VLS_4 = JSX.IntrinsicElements['input'];
const __VLS_5: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_4['onClick']> = {
click: $event => {
__VLS_ctx.changemode('medium');
}
};
// @ts-ignore
[changemode,];
}
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("medium-option"), class: ("inline-flex justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 h-[200px]"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("block"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("mb-2 w-7 h-7"), src: ("https://i.ibb.co/KKsnZNK/mobile-signal.png"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("w-full text-lg font-semibold"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("w-full text-sm"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).li;
({} as JSX.IntrinsicElements).li;
(__VLS_x as JSX.IntrinsicElements)['li'] = {};
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { name: ("mode"), type: ("radio"), id: ("hard-option"), value: ("hard"), class: ("hidden peer"), };
type __VLS_6 = JSX.IntrinsicElements['input'];
const __VLS_7: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_6['onClick']> = {
click: $event => {
__VLS_ctx.changemode('hard');
}
};
// @ts-ignore
[changemode,];
}
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("hard-option"), class: ("inline-flex justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 h-[200px]"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("block"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("mb-2 w-7 h-7"), src: ("https://i.ibb.co/gWXgCz3/high-signal.png"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("w-full text-lg font-semibold"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("w-full text-sm"), };
}
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: (" w-full pt-5"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("w-full rounded-2xl bg-white p-2"), };
{
__VLS_templateComponents.Disclosure;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Disclosure>) = {};
const __VLS_8 = new __VLS_templateComponents.Disclosure({});
const __VLS_9 = __VLS_templateComponents.Disclosure({});
let __VLS_10!: import('./__VLS_types.js').ExtractComponentSlots<import('./__VLS_types.js').PickNotAny<typeof __VLS_8, typeof __VLS_9>>;
const { open = false } = __VLS_10.default;
__VLS_10[''];
{
__VLS_templateComponents.DisclosureButton;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.DisclosureButton>) = { class: ("flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-orange-500 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"), };
const __VLS_11 = new __VLS_templateComponents.DisclosureButton({ class: ("flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-orange-500 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"), });
const __VLS_12 = __VLS_templateComponents.DisclosureButton({ class: ("flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-orange-500 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"), });
let __VLS_13!: import('./__VLS_types.js').PickNotAny<typeof __VLS_11, typeof __VLS_12>;
type __VLS_14 = import('./__VLS_types.js').InstanceProps<typeof __VLS_13, typeof __VLS_templateComponents.DisclosureButton>;
const __VLS_15: import('./__VLS_types.js').EventObject<typeof __VLS_13, 'click', typeof __VLS_templateComponents.DisclosureButton, __VLS_14['onClick']> = {
click: (async () => await __VLS_ctx.test())
};
// @ts-ignore
[test,];
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = {};
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.ChevronUpIcon>) = { class: ((open ? 'rotate-180 transform' : '')), };
}
}
{
__VLS_templateComponents.transition;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.transition>) = { enterActiveClass: ("transition ease-out duration-100"), 'enter-active-class': ("transition ease-out duration-100"), enterFromClass: ("transform opacity-0 scale-95"), 'enter-from-class': ("transform opacity-0 scale-95"), enterToClass: ("transform opacity-100 scale-100"), 'enter-to-class': ("transform opacity-100 scale-100"), leaveActiveClass: ("transition ease-in duration-75"), 'leave-active-class': ("transition ease-in duration-75"), leaveFromClass: ("transform opacity-100 scale-100"), 'leave-from-class': ("transform opacity-100 scale-100"), leaveToClass: ("transform opacity-0 scale-95"), 'leave-to-class': ("transform opacity-0 scale-95"), };
{
__VLS_templateComponents.DisclosurePanel;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.DisclosurePanel>) = { class: ("px-4 pt-4 pb-2 text-sm text-gray-500"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { id: ("updateProductModal"), tabindex: ("-1"), 'aria-hidden': ("true"), class: ("overflow-y-auto overflow-x-hidden relative top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-modal md:h-full"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("relative p-4 w-full max-w-2xl h-full md:h-auto"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("grid gap-4 mb-4"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("dotapath"), class: ("flex mb-2 text-sm font-medium text-gray-900 dark:text-white"), };
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), name: ("dota_path"), id: ("dotapath"), value: ((__VLS_ctx.dota_path)), class: ("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"), };
// @ts-ignore
[dota_path,];
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("cspath"), class: ("flex mb-2 text-sm font-medium text-gray-900 dark:text-white"), };
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), name: ("cs_path"), id: ("cspath"), value: ((__VLS_ctx.cs_path)), class: ("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"), };
// @ts-ignore
[cs_path,];
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: (""), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("description"), class: ("flex mb-2 text-sm font-medium text-gray-900 dark:text-white"), };
}
{
({} as JSX.IntrinsicElements).textarea;
({} as JSX.IntrinsicElements).textarea;
(__VLS_x as JSX.IntrinsicElements)['textarea'] = { disabled: ("true"), id: ("description"), rows: ("5"), class: ("block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"), placeholder: ("Write a description..."), };
(__VLS_ctx.user);
// @ts-ignore
[user,];
}
}
}
}
}
}
}
}
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex justify-center items-center mt-3 w-full"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex items-center space-x-3 sm:space-x-4 min-w-full"), };
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { type: ("submit"), class: ("w-full text-white inline-flex items-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm justify-center py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"), dataHsOverlay: ("#hs-profile-modal"), 'data-hs-overlay': ("#hs-profile-modal"), };
type __VLS_16 = JSX.IntrinsicElements['button'];
const __VLS_17: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_16['onClick']> = {
click: $event => {
__VLS_ctx.showToast();
}
};
// @ts-ignore
[showToast,];
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { 'aria-hidden': ("true"), class: ("mr-1 -ml-1 w-5 h-5"), fill: ("currentColor"), viewBox: ("0 0 20 20"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"), };
}
{
({} as JSX.IntrinsicElements).path;
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { fillRule: ("evenodd"), 'fill-rule': ("evenodd"), d: ("M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"), clipRule: ("evenodd"), 'clip-rule': ("evenodd"), };
}
}
}
}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
Disclosure: Disclosure,
DisclosureButton: DisclosureButton,
DisclosurePanel: DisclosurePanel,
ChevronUpIcon: ChevronUpIcon,
dota_path: dota_path,
cs_path: cs_path,
isSuccess: isSuccess,
showToast: showToast,
user: user,
changemode: changemode,
test: test,
get_form: get_form,
};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);
