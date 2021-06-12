import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Wacth Product 01",
            "images": [
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae10e7ce-45d8-4133-bf45-aa63762cdacf/air-force-1-07-lv8-shoe-ldZ4Ml.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ae10e7ce-45d8-4133-bf45-aa63762cdacf/air-force-1-07-lv8-shoe-ldZ4Ml.png",
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c170c99f-c489-4474-8170-126c9b1efbd0/air-max-97-se-shoe-5C94fs.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c170c99f-c489-4474-8170-126c9b1efbd0/air-max-97-se-shoe-5C94fs.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "2",
            "title": "Wacth Product 02",
            "images": [
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8f093315-ff0a-475d-8904-a6b2eb120021/air-force-1-crater-flyknit-shoe-T5VQb0.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/8f093315-ff0a-475d-8904-a6b2eb120021/air-force-1-crater-flyknit-shoe-T5VQb0.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/13e7bcc3-e42d-482f-9e5f-4496a1f0dcbc/air-force-1-crater-flyknit-shoe-T5VQb0.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6ff2320d-1b9e-4ab3-930a-36c94df04bda/air-force-1-crater-flyknit-shoe-T5VQb0.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "3",
            "title": "Wacth Product 03",
            "images": [
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ubyygvquzycyjhpdeblw/air-more-uptempo-96-shoe-KwM99n.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/73faf1fb-d43a-4787-8c30-313a2b6da78a/waffle-one-shoe-1SFQwJ.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/388b155d-7471-4789-86a5-1f4bbf1bde6f/jordan-delta-2-shoe-8Z0Rkk.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f56abffb-17ae-41d0-8af7-a616a56969e4/air-huarache-shoe-fg69qQ.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ubyygvquzycyjhpdeblw/air-more-uptempo-96-shoe-KwM99n.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/73faf1fb-d43a-4787-8c30-313a2b6da78a/waffle-one-shoe-1SFQwJ.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/388b155d-7471-4789-86a5-1f4bbf1bde6f/jordan-delta-2-shoe-8Z0Rkk.png",
                "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f56abffb-17ae-41d0-8af7-a616a56969e4/air-huarache-shoe-fg69qQ.png"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1

        }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}