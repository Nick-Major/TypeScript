import {expect, test} from '@jest/globals';
import Cart from './Cart';
import { avengers, untouchables } from './Movie'

test ('Adding to cart test', () => {
    let result = 2;
    const cart = new Cart();
    cart.addItem(avengers);
    cart.addItem(untouchables);
    expect(cart.length).toBe(result);
});
