
import sizes from '../settings/sizes'
import colors from '../settings/colors'

const getColor = name => {
    return colors[name] ? colors[name] : name;
}

const getSize = name => {
    return sizes[name] ? sizes[name] : name;
}

export { getColor, getSize };