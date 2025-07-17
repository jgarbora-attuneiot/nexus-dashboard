<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import ContentCreationForm from "./ContentCreationForm.svelte";
    import GeneratedContents from "./GeneratedContents.svelte";
</script>

<PageTitle title="Chat" items={[{ label: "Apps" }, { label: "Chat", active: true }]} />
<div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-5 2xl:grid-cols-10">
    <div class="xl:col-span-2 2xl:col-span-3">
        <ContentCreationForm />
    </div>
    <div class="xl:col-span-3 2xl:col-span-7">
        <GeneratedContents />
    </div>
</div>
