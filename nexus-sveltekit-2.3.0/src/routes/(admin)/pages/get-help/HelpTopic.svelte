<script lang="ts" module>
    export type IHelpTopic = {
        title: string;
        description: string;
    };
</script>

<script lang="ts">
    const { title, description }: IHelpTopic = $props();
</script>

<div
    class="card card-border bg-base-100 hover:bg-primary hover:text-primary-content group hover:border-primary cursor-pointer transition-all">
    <div class="card-body">
        <div class="flex justify-between">
            <p class="font-medium">{title}</p>
            <span
                class="iconify lucide--arrow-right text-primary-content -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
            ></span>
        </div>
        <p class="mt-1 line-clamp-2 text-sm overflow-ellipsis">{description}</p>
    </div>
</div>
