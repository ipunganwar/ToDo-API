<template>
  <div>
    <div>
      <TheNavbar/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-5">
          <div class="thumbnail">
            <TheTask/>
          </div>
        </div>
        <div class="col-sm-6 col-md-6">
          <div class="thumbnail">
            <TheTaskDone/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheTask from '@/components/TheTask'
import TheTaskDone from '@/components/TheTaskDone'

export default {
  components: {
    TheNavbar,
    TheTask,
    TheTaskDone
  }
}
</script>

<style>

</style>
