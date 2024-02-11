
<template>
    <div class="chat-container">
        <div class="chat-container-content">

            <div class="message-role">
                <MessageCard />
                <MessageCard />          
                <MessageCard />          
                <MessageCard />
                <MessageCard />
            </div>                      

            <span class="chat-input">
                <v-text-field label="" variant="solo-filled"></v-text-field>
            </span>
        </div>
    </div>
</template>

<script setup>
    import MessageCard from './MessageCard.vue';
</script>   