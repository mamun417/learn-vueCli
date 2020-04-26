<template>
    <div class="hello">
        {{title}}
        <div class="container" style="width: 500px">

            <input @keypress.enter="addNewItem" class="form-control" type="text" v-model="newItem">
            <!--<button @click="incrementCount">Click Me</button>-->

            <ul class="list-group" style="margin-top: 15px">
                <todo-item
                    v-for="(item, index) in filteredItems"
                    :key="index"
                    :item="item"
                    @removeItem="removeItem(index)"
                    @toogle="$set(item, 'complete', !item.complete)"
                    @updateValue="$set(item, 'content', $event)"
                    :show-remove="!item.complete"
                />
            </ul>

            <div>
                <span @click="currentPlan = 'all'" class="badge badge-secondary badge-pill">All</span>
                <span @click="currentPlan = 'active'" class="badge badge-secondary badge-pill">Active</span>
                <span @click="currentPlan = 'completed'" class="badge badge-secondary badge-pill">Completed</span>
            </div>

            <span>Total Items: {{ items.length }}</span>
            <span>Items Left: {{ leftItems }}</span>

        </div>

    </div>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name: 'HelloWorld',
        components: {TodoItem},
        props: {
            title: {
                type: String,
                default: 'Hello'
            }
        },
        data() {
            return {
                newItem: '',
                items: [],
                currentPlan: 'all',
            }
        },

        methods: {
            addNewItem() {
                this.items.push({content: this.newItem});
                this.newItem = '';
            },

            removeItem(index) {
                this.$delete(this.items, index);
            },

            // toggleStatus(index){
            //   this.$set(this.items[index], 'complete', !this.items[index].complete);
            // }
        },
        computed: {
            leftItems() {
                return this.items.filter(i => {
                    return !i.complete
                }).length
            },

            filteredItems() {
                return this.items.filter(i => {
                    return this.currentPlan === 'all' ? true : this.currentPlan === 'active' ? !i.complete : i.complete
                })
            }
        },

        // watch: {
        //   currentPlan: {
        //     handler() {
        //       if (this.currentPlan === 'all') this.filteredItems = this.items;
        //
        //       if (this.currentPlan === 'active') {
        //         this.filteredItems = this.items.filter(i => {
        //           return !i.complete
        //         })
        //       }
        //
        //       if (this.currentPlan === 'completed') {
        //         this.filteredItems = this.items.filter(i => {
        //           return i.complete
        //         })
        //       }
        //     },
        //     immediate: true
        //   }
        // }
    }
</script>

