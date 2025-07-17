<script>
    import PageTitle from "$lib/components/PageTitle.svelte";
    import CalendarExample from "./CalendarExample.svelte";
</script>

<PageTitle title="Calendar" items={[{ label: "Components" }, { label: "Calendar", active: true }]} />
<div class="mt-6">
    <CalendarExample />
</div>
