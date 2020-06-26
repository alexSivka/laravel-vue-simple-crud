<template>
    <form @submit.prevent="save()">

        <div class="form-group" :class="{'has-error': error}">
            <label class="control-label">ФИО</label>
            <input type="text" class="form-control boxed" v-model="item.name" :class="{'is-invalid': error}">
            <span class="has-error" v-if="error">required</span>
        </div>

        <div>
            <label class="typo__label">Задания</label>
            <multiselect v-model="item.jobs"
                         :options="allJobs"
                         :searchable="false"
                         :close-on-select="false"
                         label="name"
                         track-by="id"
                         placeholder="Выбрать"
                         :multiple="true"
            ></multiselect>
        </div>

        <div style="height: 100px;width: 100px">
            <img :src="item.img || '/img/noimg.jpg'" class="img-fluid">
        </div>

        <div class="custom-file">
            <input type="file" class="custom-file-input" @change="setFile">
            <label class="custom-file-label">{{fileName}}</label>
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
                fileName: 'Выбрать',
                file: null,
                saved: false,
                id: 0,
                item: {
                    jobs: []
                },
                allJobs: []
            }
        },

        async mounted() {

            window.appData.header = 'Сотрудник';

            if(this.$route.params.id) this.id = this.$route.params.id;

            let res = await axios.get('/api/worker/' + this.id);

            this.item = res.data.item;
            this.allJobs = res.data.allJobs;

            if(!this.item.id) this.item.id = 0; //new

        },

        methods: {

            setFile(e){
              console.log(e);
              this.fileName = e.target.files[0].name;
              this.file = e.target.files[0];
            },

            async save(){

                if(!this.item.name.trim()){
                    this.error = true;
                    return;
                }

                let data = new FormData;
                data.append('file', this.file);
                data.append('item', JSON.stringify(this.item));
                let res = await axios.post('/api/worker/save', data);
                this.item.img = res.data.img;
                this.saved = true;
                setTimeout( () => this.saved = false, 2000);
            }
        }

    }
</script>

