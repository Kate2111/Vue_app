<template>
    <div v-if="!isEdit" class="task">
        <label > 
            <input class="checkbox" type="checkbox" placeholder="checkbox">
            <span class="btn-checkbox"></span>
            <span class="text"> {{ text }} </span>
        </label>
        <div class="button-wrapper">
            <button @click="edit" class="btnClick">
                <img src="../../../img/free-icon-pencil-2827185.png" alt="pencil">
            </button>
            <button @click="$emit('remove', index)"  class="btnClick">
                <img src="../../../img/free-icon-dustbin-5074264.png" alt="dustbin">
            </button>
        </div>
    </div>
    <div v-else class="task">
        <label > 
            <input class="checkbox" type="checkbox" placeholder="checkbox">
            <span class="btn-checkbox"></span>
            <input v-model="text" class="textInput"> 
        </label>
        <div class="button-wrapper">
            <button @click="save" @keyup.enter="save" class="btnClick">
                <img src="../../../img/free-icon-floppy-disk-2186753.png" alt="pencil">
            </button>
            <button @click="$emit('remove', index)"  class="btnClick">
                <img src="../../../img/free-icon-dustbin-5074264.png" alt="dustbin">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    //атрибуты которые передает от родителя
    props: {
      task: String,
      index: Number,
    },
    data() {
        return{
            text: this.task,
            isEdit: false,
        }
    },
    methods: {
      edit() {
        this.isEdit = true;
      },
      save() {
        this.isEdit = false;
        this.$emit('edit', this.index, this.text)
      }

    }
    
    
}
</script>

<style>
.task{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 230px;
}
.checkbox{
    display: none;
}

.btn-checkbox{
    display: inline-block;
    height: 12px;
    width: 12px;
    border: solid 1px green;
    position: relative;
}

.btn-checkbox::before{
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    background-color: rgba(0, 128, 0, 0.723);
    transition: .3s;
    opacity: 0;
}

.checkbox:checked + .btn-checkbox::before {
    opacity: 1;
}

.text{
    margin-left: 15px;
    margin-right: 15px;
}

.textInput{
    margin-left: 15px;
    margin-right: 15px;
    width: 135px;
    border: none;
    color: green;
}

.textNone{
    text-decoration: line-through;
}

.btnClick{
    background-color: transparent;
    border:none;
    padding: 0 5px;
    margin: 0;
}


</style>