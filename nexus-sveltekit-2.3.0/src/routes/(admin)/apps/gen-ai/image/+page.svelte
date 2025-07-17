<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import GeneratedImages from "./GeneratedImages.svelte";
    import ImageCreationForm from "./ImageCreationForm.svelte";
</script>

<PageTitle title="Image Gen" items={[{ label: "Gen Ai" }, { label: "Image Gen", active: true }]} />

<div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-5 2xl:grid-cols-10">
    <div class="xl:col-span-2 2xl:col-span-3">
        <ImageCreationForm />
    </div>
    <div class="xl:col-span-3 2xl:col-span-7">
        <GeneratedImages />
    </div>
</div>
