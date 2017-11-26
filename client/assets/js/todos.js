new Vue({
	el: '#app',
	data: {
		task : '',
		task_done : [],
		task_undone : [],

	},
	created : function(){
		axios.get('http://localhost:3000/api/tasks/list')
	  .then(response => {
	    response.data.forEach(data => {
	    	if(data.done){
	    		this.task_done.push(data)
	    	}
	    	else{
	    		this.task_undone.push(data)
	    	}
	    })
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	},
	methods : {
		addTask : function(){
			axios.post('http://localhost:3000/api/tasks/add', {
		    task : this.task,
		    done : false
		  })
		  .then(response => {
		    console.log(response)
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		},
		doneTask : function (index, item){
			this.task_done.push(item)
			this.task_undone.splice(index, 1)

			axios.post('http://localhost:3000/api/tasks/done', {
		    id : item._id
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		},
		remove : function (item){
			console.log(item)
			axios.delete(`http://localhost:3000/api/tasks/remove/${item._id}`)
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		}
		
	},

	
	})