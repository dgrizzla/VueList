<template>
		<div >
				<h1>Hola {{data.mensaje}}</h1>
		</div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
        data: {mensaje: this.$route.params.id}
      }
    }
  }
</script>