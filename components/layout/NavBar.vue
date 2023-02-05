<template>
    <div
        ref="navbar"
        class="backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"
    > WindiCSS
        <div id="navbar-banner" class="banner">
            <slot name="banner" />
        </div>
    </div>
</template>
