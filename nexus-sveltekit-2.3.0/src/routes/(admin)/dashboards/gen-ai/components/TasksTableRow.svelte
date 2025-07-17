<script lang="ts" module>
    export type ITasksTableRow = {
        icon: string;
        name: string;
        status: "in_progress" | "on_hold" | "done";
        time: string;
    };
</script>

<script lang="ts">
    const { icon, name, status, time }: ITasksTableRow = $props();
</script>

<tr>
    <td class="flex items-center space-x-3 truncate">
        <div class="bg-base-200 rounded-box p-2">
            <span class={`iconify ${icon} block size-4`}></span>
        </div>
        <p>{name}</p>
    </td>

    <td>
        <div class="flex items-center gap-2">
            {#if status === "in_progress"}
                <div class="status status-info"></div>
                In Progress
            {:else if status === "on_hold"}
                <div class="status status-warning"></div>
                On Hold
            {:else if status === "done"}
                <div class="status status-success"></div>
                Done
            {/if}
        </div>
    </td>
    <td>
        <div class="text-base-content/80 inline-flex items-center gap-1 text-sm">
            <span class="iconify lucide--clock size-3.5"></span>
            {time}
        </div>
    </td>
    <td>
        <button aria-label="Show product" class="btn btn-circle btn-ghost btn-sm">
            <span class="iconify lucide--eye text-base-content/80 size-4" />
        </button>
    </td>
</tr>
