<script setup>
    import JetDialogModal from "@/Jetstream/DialogModal";
    import JetInput from "@/Jetstream/Input";
    import JetLabel from "@/Jetstream/Label";
    import JetButton from '@/Jetstream/Button.vue';
    import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';
</script>

<template>
    <jet-dialog-modal show>
        <template #title>
           Создать новую статью
        </template>

        <template #content>
            <div class="grid grid-cols-1 gap-4">
                 <div>
                     <jet-label>Название статьи</jet-label>
                     <JetInput type="text"/>
                 </div>
                 <div>
                     <jet-label>Категория</jet-label>
                     <JetInput type="text"/>
                 </div>
            </div>
        </template>

        <template #footer>
            <JetSecondaryButton>
                Отмена
            </JetSecondaryButton>

            <JetButton class="ml-3">
                Создать
            </JetButton>
        </template>
    </jet-dialog-modal>
</template>
