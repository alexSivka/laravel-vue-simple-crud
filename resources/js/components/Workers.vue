<template>
    <div>
        <div>
            <router-link to="/worker" class="btn btn-secondary">Добавить сотрудника</router-link>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>
                        ФИО
                        <br><input v-model="searchValue.name" class="form-control form-control-sm boxed" placeholder="search" @input="search('name')">
                    </th>
                    <th>
                        Задания
                        <br><input v-model="searchValue.jobNames" class="form-control form-control-sm boxed" placeholder="search" @input="search('jobNames')">
                    </th>
                </tr>
            </thead>
            <tr v-for="item in items" :key="item.id" v-show="item.isVisible">
                <td><img :src="item.img || '/img/noimg.jpg'" style="height:40px"></td>
                <td><router-link :to="`/worker/${item.id}`">{{item.name}}</router-link></td>
                <td>
                    <ul v-if="item.jobs.length">
                        <li v-for="job in item.jobs">{{job.name}}</li>
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
                    jobNames: ''
                },
                items: []
            }
        },
        async mounted() {
            window.appData.header = 'Сотрудники';
            let res = await axios.get("/api/workers");
            this.items = res.data;
            for(let item of this.items){
                this.$set(item, 'isVisible', true);
                let jobNames = item.jobs.map( job => job.name ).join(' ');
                this.$set(item, 'jobNames', jobNames);
            }
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