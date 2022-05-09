<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import extensions from "./Extensions/ExtensionsList";
import EditorToolbar from "./EditorToolbar";
import {ref, watch} from "vue";

const props = defineProps({
    modelValue: [Object,String],
})

const emit = defineEmits(['update:modelValue'])

const model = ref(props.selected)

watch(model, (value) => editor.commands.setContent(value, false))

const editor = useEditor({
    content: props.modelValue,
    editorProps: {
        attributes: {
            class: 'prose min-w-full focus:outline-none',
        },
    },
    extensions,
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getJSON())
    },
})
</script>

<template>
    <div class="flex flex-col space-y-16" v-if="editor">
        <EditorToolbar :editor="editor"/>

        <div class="max-w-3xl mx-auto w-full flex-1">
            <EditorContent :editor="editor" />
        </div>
    </div>
</template>

<style>
.ProseMirror > * + * {
    margin-top: 0.75em;
}

.ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}
</style>
