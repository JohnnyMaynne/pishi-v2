<script setup>
import Button from "@/Jetstream/Button";
import { useEditor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Placeholder from '@tiptap/extension-placeholder'
import {Inertia} from "@inertiajs/inertia"

const props = defineProps({
    post: Object
})

const editor = useEditor({
    content: null,
    editorProps: {
        attributes: {
            class: 'prose-sm min-w-full focus:outline-none',
        },
    },
    extensions: [
        Document,
        Paragraph,
        Text,
        Placeholder.configure({
            placeholder: 'Наишите коментарий...'
        }),
    ],
})

const handler = () => {
    Inertia.post(route('comments.store',{post: props.post.uuid}),{
        body: editor.value.getHTML(),
    },{
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => editor.value.commands.clearContent()
    })
}

</script>

<template>
    <div v-if="editor" class="flex items-start space-x-4">

        <div class="min-w-0 flex-1">
            <form action="#" class="relative">
                <div class="border border-gray-300 rounded-lg overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                    <div class="p-3">
                        <editor-content :editor="editor" />
                    </div>
                    <div class="py-2" aria-hidden="true">
                        <div class="py-px">
                            <div class="h-9"></div>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-end">
                    <div class="flex-shrink-0">
                        <Button @click="handler" :disabled="editor.state.doc.textContent.length === 0" type="button">Отправить</Button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}
</style>
