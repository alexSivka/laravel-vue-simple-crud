<template>
    <div>
        <div>
            <router-link to="/job" class="btn btn-secondary">Добавить задание</router-link>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>
                    Название
                    <br><input v-model="searchValue.name" class="form-control form-control-sm boxed" placeholder="search" @input="search('name')">
                </th>
                <th>
                    Описание
                    <br><input v-model="searchValue.description" class="form-control form-control-sm boxed" placeholder="search" @input="search('description')">
                </th>
                <th>
                    Статус
                    <br><input v-model="searchValue.status" class="form-control form-control-sm boxed" placeholder="search" @input="search('status')">
                </th>
                <th>Сотрудники<br>&nbsp;</th>
            </tr>
            </thead>
            <tr v-for="item in items" :key="item.id" v-show="item.isVisible">
                <td><router-link :to="`/job/${item.id}`">{{item.name}}</router-link></td>
                <td>{{item.description}}</td>
                <td>{{item.status}}</td>
                <td>
                    <ul v-if="item.workers.length">
                        <li v-for="worker in item.workers">{{worker.name}}</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                searchValue: {
                    name: '',
                    description: '',
                    status: ''
                },
                items: []
            }
        },
        async mounted() {
            window.appData.header = 'Задания';
            let res = await axios.get("/api/jobs");
            this.items = res.data;
            for(let item of this.items) this.$set(item, 'isVisible', true);

        },

        methods: {
            search(key){

                for(let k in this.searchValue) if(k != key) this.searchValue[k] = '';

                let val = this.searchValue[key].toLowerCase();
                for(let item of this.items){
                    if(item[key].toLowerCase().indexOf(val) != -1) item.isVisible = true;
                    else item.isVisible = false;

                    if(!val) item.isVisible = true;

                }
            }
        }
    }
</script>