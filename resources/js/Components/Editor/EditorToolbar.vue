<script setup>
import ToolbarButton from "./EditorToolbarButton";
import {computed} from "vue";

const props = defineProps({
    editor: Object
})

const buttons = computed(() => {
    return [
        {icon: 'h-2-icon', current: props.editor.isActive('heading', { level: 2 }), can: true, action: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run()},
        {icon: 'h-3-icon', current: props.editor.isActive('heading', { level: 3 }), can: true, action: () => props.editor.chain().focus().toggleHeading({ level: 3 }).run()},
        {icon: 'h-4-icon', current: props.editor.isActive('heading', { level: 4 }), can: true, action: () => props.editor.chain().focus().toggleHeading({ level: 4 }).run()},

        {icon: 'bold-icon', current: props.editor.isActive('bold'), can: true, action: () => props.editor.chain().focus().toggleBold().run()},
        {icon: 'italic-icon', current: props.editor.isActive('italic'), can: true, action: () => props.editor.chain().focus().toggleItalic().run()},
        {icon: 'underline-icon', current: props.editor.isActive('underline'), can: true, action: () => props.editor.chain().focus().toggleUnderline().run()},
        {icon: 'strikethrough-icon', current: props.editor.isActive('strike'), can: true, action: () => props.editor.chain().focus().toggleStrike().run()},

        {icon: 'align-left-icon', current: props.editor.isActive({ textAlign: 'left' }), can: true, action: () => props.editor.chain().focus().setTextAlign('left').run()},
        {icon: 'align-center-icon', current: props.editor.isActive({ textAlign: 'center' }), can: true, action: () => props.editor.chain().focus().setTextAlign('center').run()},
        {icon: 'align-right-icon', current: props.editor.isActive({ textAlign: 'right' }), can: true, action: () => props.editor.chain().focus().setTextAlign('right').run()},

        {icon: 'list-icon', current: props.editor.isActive('bulletList'), can: true, action: () => props.editor.chain().focus().toggleBulletList().run()},
        {icon: 'list-numbers-icon', current: props.editor.isActive('orderedList'), can: true, action: () => props.editor.chain().focus().toggleOrderedList().run()},

        {icon: 'link-icon', current: false, can: true, action: () => console.log(123)},

        {icon: 'blockquote-icon', current: props.editor.isActive('blockquote'), can: true, action: () => props.editor.chain().focus().toggleBlockquote().run()},
        {icon: 'line-dashed-icon', current: false, can: true, action: () => props.editor.chain().focus().setHardBreak().run()},
        {icon: 'code-icon', current: props.editor.isActive('codeBlock'), can: true, action: () => props.editor.chain().focus().toggleCodeBlock().run()},
        {icon: 'photo-icon', current: false, can: true, action: () => console.log(123)},
        {icon: 'table-icon', current: false, can: true, action: () => props.editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()},

        {icon: 'corner-up-left-icon', current: false, can: props.editor.can().undo(), action: () => props.editor.chain().focus().undo().run()},
        {icon: 'corner-up-right-icon', current: false, can: props.editor.can().redo(), action: () => props.editor.chain().focus().redo().run()},
    ]
})

</script>

<template>
    <div class="border-b sticky top-0 bg-white z-50">
        <div class="h-12 max-w-3xl mx-auto w-full flex items-center justify-center space-x-1">
            <toolbar-button
                v-for="(button, index) in buttons"
                :key="index"
                :button="button"/>
        </div>
    </div>
</template>
