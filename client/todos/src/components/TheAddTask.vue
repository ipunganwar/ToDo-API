<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">new task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label>your task</label>
            <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="task here.." v-model="task">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="add">add</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      task: '', 
    }
  },
  methods: {
    ...mapActions ([
      'addTask'
    ]),
    add () {
      this.addTask({task: this.task})
      this.task = ''
    }
  }
}
</script>

<style>

</style>
