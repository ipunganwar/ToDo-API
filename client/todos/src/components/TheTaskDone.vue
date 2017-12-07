<template>
  <div>
  <div v-for="task in tasks">
    <div class="card" style="width: 20rem;" v-if="task.done">
      <div class="card-body">
        <p class="card-text">{{task.task}}</p>
        <p class="card-text"><b>status: Done</b></p>
        <button type="button" class="btn btn-danger" @click="destroy(task._id)">Delete</button>
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
      'deleteTask'
    ]),
    destroy (id) {
      this.deleteTask(id)
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
