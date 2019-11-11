
import sizes from '../settings/sizes'
import colors from '../settings/colors'

const getColor = name => {
    return colors[name] ? colors[name] : colors.default;
}

const getSize = name => {
    return sizes[name] ? sizes[name] : sizes.default;
}

export { getColor, getSize };