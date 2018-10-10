
<template>
	<button class="g-button">按钮</button>
</template>

<script>
export default {}
</script>

<style lang="scss">
	.g-button{
			font-size:var(--font-size);
			height: var(--button-height);
			background: var(--button-background);
			padding:0 1em;
			border: 1px solid var(--border-color);
			border-radius: var(--border-radius);
		&:hover{
				border-color:var(--border-color-hover);
		}
		&:active{
				background-color:var(--botton-active-background);
		}
		&:focus{
				outline:none;
		}
	}
</style>

