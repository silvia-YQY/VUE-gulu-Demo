<template>
    <button class="g-button" :class="{[iconPosition]:true} ">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['icon', 'iconPosition']
    }
</script>

<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        background: var(--button-background);
        padding: 0 1em;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--botton-active-background);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2
            }
            > .content {
                order: 1
            }
        }

    }
</style>

