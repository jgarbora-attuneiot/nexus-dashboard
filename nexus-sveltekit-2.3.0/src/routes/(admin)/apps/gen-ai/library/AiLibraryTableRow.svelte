<script lang="ts">
    import type { IAiLibraryItem } from "./helpers";

    const { id, image, tokens, type, title, content, user }: IAiLibraryItem = $props();
</script>

<tr class="hover:bg-base-200/40 cursor-pointer *:text-nowrap">
    <th>
        <input aria-label="Single check" type="checkbox" class="checkbox checkbox-sm" />
    </th>
    <td class="font-medium">{id}</td>
    <td>
        <div class="flex items-center space-x-3 truncate">
            <img
                src={image}
                height={40}
                width={40}
                class="bg-base-200 mask mask-squircle size-10"
                alt="Library Image" />
            <p class="font-medium">{user}</p>
        </div>
    </td>
    <td>
        <div class="inline-flex items-center gap-1.5">
            {#if type === "image"}
                <span class="iconify lucide--image size-4" />
                Image
            {:else if type === "code"}
                <span class="iconify lucide--code size-4" />
                Code
            {:else}
                <span class="iconify lucide--text size-4" />
                Text
            {/if}
        </div>
    </td>
    <td>
        <p class="text-nowrap">{title}</p>
    </td>
    <td>
        <p class="line-clamp-2 max-w-80 min-w-48 text-ellipsis">{content}</p>
    </td>
    <td class="text-sm font-medium">{tokens}</td>
    <td>
        <div class="inline-flex">
            <button aria-label="Edit Library" class="btn btn-square btn-ghost btn-sm">
                <span class="iconify lucide--pencil size-4" />
            </button>
            <button aria-label="Show Library" class="btn btn-square btn-ghost btn-sm">
                <span class="iconify lucide--eye size-4" />
            </button>
            <button
                aria-label="Dummy delete customer"
                class="btn btn-square btn-error btn-outline btn-sm border-transparent"
                onClick={() => document.querySelector<HTMLDialogElement>("#apps-ai-library-delete")?.showModal()}>
                <span class="iconify lucide--trash size-4" />
            </button>
        </div>
    </td>
</tr>
