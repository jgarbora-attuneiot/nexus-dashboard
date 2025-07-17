<script setup lang="ts">
import Footer from "~/components/admin/Footer.vue";
import Rightbar from "~/components/admin/Rightbar.vue";
import Sidebar from "~/components/admin/Sidebar.vue";
import Topbar from "~/components/admin/Topbar.vue";
import { adminMenuItems } from "~/components/admin/helpers";
</script>

<template>
    <div class="size-full">
        <div class="flex">
            <Sidebar :menu-items="adminMenuItems" />
            <div class="flex h-screen min-w-0 grow flex-col overflow-auto">
                <Topbar />
                <div id="layout-content">
                    <slot />
                </div>
                <Footer />
            </div>
        </div>
        <Rightbar />
    </div>
</template>
