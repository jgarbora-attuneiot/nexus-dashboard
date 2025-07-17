<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import AiLibraryTable from "./AiLibraryTable.svelte";
</script>

<PageTitle title="Image Gen" items={[{ label: "Gen Ai" }, { label: "Image Gen", active: true }]} />

<div class="mt-6">
    <AiLibraryTable />
</div>
