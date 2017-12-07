<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Todos</a>
    
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
            Add Task
          </button>
        </li>
      </ul>
    </div>
    <TheAddTask/>
  </nav>
</template>

<script>
import TheAddTask from '@/components/TheAddTask'
export default {
  components: {
    TheAddTask
  }
}
</script>

<style>

</style>
