<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true} " @click="$emit('click') ">
        <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
        <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
        <div class="content">
            <slot/>
        </div>

    </button>
</template>

<script>
    import Icon from './icon'

    export default {
        components: {
            'g-icon': Icon,
        },
        data() {
            return {}
        },
        props: {
            icon: {
                default: '',
                type: String
            },
            iconPosition: {
                default: 'left',
                type: String,
                validator(value) {
                    return value === 'left' || value === 'right';
                }
            },
            loading: {
                default: false,
                type: Boolean
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading {
        animation: spin 2s infinite linear;
    }

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
        vertical-align: middle;
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
            order: 1;
            margin-right: .1em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
            > .content {
                order: 1
            }
        }
    }
</style>

