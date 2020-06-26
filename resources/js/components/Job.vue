<template>
    <form @submit.prevent="save()">

        <div class="form-group" :class="{'has-error': error}">
            <label class="control-label">Название</label>
            <input type="text" class="form-control boxed" v-model="item.name" :class="{'is-invalid': error}">
            <span class="has-error" v-if="error">required</span>
        </div>

        <div class="form-group">
            <label class="control-label">Описание</label>
            <textarea class="form-control boxed" v-model="item.description"></textarea>
        </div>

        <div class="form-group">
            <label class="control-label">Статус</label>
            <select class="form-control boxed" v-model="item.status">
                <option v-for="option in statuses" :value="option">
                    {{ option }}
                </option>
            </select>
        </div>

        <div>
            <label class="typo__label">Сотрудники</label>
            <multiselect v-model="item.workers"
                         :options="allWorkers"
                         :searchable="false"
                         :close-on-select="false"
                         label="name"
                         track-by="id"
                         placeholder="Выбрать"
                         :multiple="true"
            ></multiselect>
        </div>

        <hr>
        <div>
            <button class="btn btn-secondary" type="submit">Сохранить</button>
        </div>
        <div class="alert alert-success" v-if="saved">Сохранено</div>
    </form>
</template>



<script>

    import Multiselect from 'vue-multiselect';
    import 'vue-multiselect/dist/vue-multiselect.min.css';

    export default {

        components: {
            Multiselect
        },

        data(){
            return {
                value: null,
                error: false,
                saved: false,
                id: 0,
                item: {
                    workers: []
                },
                allWorkers: [],
                statuses: []
            }
        },

        async mounted() {

            window.appData.header = 'Задание';

            if(this.$route.params.id) this.id = this.$route.params.id;

            let res = await axios.get('/api/job/' + this.id);

            this.item = res.data.item;
            this.allWorkers = res.data.allWorkers;
            this.statuses = res.data.statuses;

            if(!this.item.id) this.item.id = 0; //new

        },

        methods: {

            async save(){

                if(!this.item.name.trim()){
                    this.error = true;
                    return;
                }

                await axios.post('/api/job/save', this.item);

                this.saved = true;
                setTimeout( () => this.saved = false, 2000);
            }
        }

    }
</script>

