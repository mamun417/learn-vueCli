<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span @click="$emit('toogle')" :class="[item.complete ? 'badge-success' : '']" class="badge badge-pill"> {{ item.complete ? 'Incomplete' : 'Complete' }}</span>
        <div v-if="!showInput" @click="showInput = true" :class="{'text-success': item.complete}">
            {{ item.content }}
        </div>
        <input v-else @blur="showInput = false" @keypress.enter="tt" type="text" :value="item.content"
               autofocus="autofocus">
        <span v-if="showRemove" @click="$emit('removeItem')" class="badge badge-danger badge-pill">Remove</span>
    </li>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: {
            item: {
                type: Object,
                default: () => ({})
            },
            showRemove: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                showInput: false,
            }
        },

        methods: {
            tt(e) {
                this.$emit('updateValue', e.target.value)
                this.showInput = false;
            }
        },
        computed: {}

    }
</script>

