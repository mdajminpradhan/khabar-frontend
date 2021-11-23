import { PRODUCT_CATEGORIES } from "./actions.types";


const initialData = {
    product_categories: {}
}

const reducer = (state = initialData, action) => {
    switch (action) {
        case PRODUCT_CATEGORIES:
            return {}
    
        default:
            break;
    }
}

export default reducer