<template>
    <div class="container">
  <a class="btn btn-normal" href="#theForm">Write</a>
    <div class="row">
       <div v-for="entry in entries" class="col-md-4 entry">
            <h2>{{entry.gsx$locationoftenant.$t}}</h2>
            <div class="content" v-html="entry.gsx$tenantsname.$t"></div>
         <div class="content" v-html="entry.gsx$amountofrentpermonth.$t"></div>
         <div class="content" v-html="entry.gsx$leaseexpirationdate.$t"></div>
    </div>
<div id="theForm" class="row">
  <div class="col-md-8 offset-md-2">
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScULl0hcP2-2hHbPg7FhUkIKE06k05LmePqVj3nS6z90yC7Pg/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0" id="gform">Loading...</iframe>
</div>
</div>
</template>

<script>
export default {
    name: "Tenant",
    data: {
		entries: null
	},
  
  watch: {
		currentPage: 'fetchData'
	},

  created: function () {
    this.fetchData()
  },
  
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', sheetUrl )
      xhr.onload = function () {        
        self.entries = JSON.parse(xhr.responseText)
        self.entries = self.entries.feed.entry        
        console.log(self.entry)
      }
      xhr.send()
    },

  },  
  
}
</script>


<style>
.entry {
  min-height: 100px;
  border: 1px solid;
}

#blog {
  margin-bottom: 3em;
}
</style>

