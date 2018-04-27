import 'vue-awesome/icons/star'
import 'vue-awesome/icons/star-o'

import Icon from 'vue-awesome/components/Icon'

export default {
    components: { Icon },
    props: {
        grade: {
            type: Number,
            required: true
        },
        maxStars: {
            type: Number,
            default: 5
        },
        hasCounter: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            stars: this.grade
        }
    },
    methods: {
        rate (star) {
            if (
                typeof star === 'number' &&
                star <= this.maxStars &&
                star >= 0
            ) {
                this.stars = this.stars === star ? star - 1 : star
            }
        }
    }
};