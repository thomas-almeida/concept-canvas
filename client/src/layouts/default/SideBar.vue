<template>
    <div>
        <v-navigation-drawer :width="300">
            <div class="side-bar">
                <v-btn 
                    prepend-icon="$plus"
                    variant="outlined"
                >
                    Nova Ideia
                </v-btn>
                <v-list-item link>
                    <button>
                        New Chat
                    </button>
                </v-list-item>
            </div>
        </v-navigation-drawer>
    </div>
</template>