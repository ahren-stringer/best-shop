
// --- Получение всех товаров ----------------------------------------------

import { all_products } from "./data"

export function fetchProducts() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(all_products)
        }, 1000)
    }
    )
}

// --- Конец - Получение всех товаров ----------------------------------------

// --- Получение нескольких товаров ------------------------------------------

export function fetchProductsByIds(cartIdsArr: string[]) {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(all_products
                .filter(item => {
                
                let aa = cartIdsArr.some(id => id.toString() === item.id)
                if (aa) {
                    debugger
                    return item
                }
            })
            )
        }, 1000)
    }
    )
}

// --- Конец - Получение нескольких товаров ----------------------------------------

// --- Получение одного товара ------------------------------------------

export function fetchSingleProduct(prodId: number) {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(all_products
                .filter(item => prodId.toString() === item.id)[0]
            )
        }, 1000)
    }
    )
}

// --- Конец - Получение одного товара ----------------------------------------