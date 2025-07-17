<script lang="ts">
    import Footer from "./(layout)/components/Footer.svelte";
    import Rightbar from "./(layout)/components/Rightbar.svelte";
    import Sidebar from "./(layout)/components/Sidebar.svelte";
    import Topbar from "./(layout)/components/Topbar.svelte";
    import { adminMenuItems } from "./(layout)/helpers";

    let { children } = $props();
</script>

<div class="size-full">
    <div class="flex">
        <Sidebar menuItems={adminMenuItems} />
        <div class="flex h-screen min-w-0 grow flex-col overflow-auto">
            <Topbar />
            <div id="layout-content">{@render children()}</div>
            <Footer />
        </div>
    </div>
    <Rightbar />
</div>
