<template>
<div>
  <div v-for="task in tasks">
    <div class="card" style="width: 20rem;" v-if="!task.done">
      <div class="card-body">
        <p class="card-text">{{task.task}}</p>
        <p class="card-text">status: belum selesai</p>
        <a href="#" class="btn btn-primary" @click="isDone(task._id)">Done</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getTask',
      'editTask'
    ]),
    isDone (id) {
      this.editTask(id)
    }
  },
  created () {
    this.getTask()
  },
  computed: {
    ...mapState([
      'tasks'
    ])
  }
}
</script>

<style>

</style>
