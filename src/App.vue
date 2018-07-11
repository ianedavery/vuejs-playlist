<template>
	<div>
		<app-header v-bind:title="title" />
		<app-ninjas v-bind:ninjas="ninjas" />
		<app-footer v-bind:title="title"/>
	</div>
</template>

<script>
export default {	
	data() {
		return {
			ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
            title: "Vue Ninjas"
		}
	}
}
</script>

<style scoped>

</style>
