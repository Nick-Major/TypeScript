import Cart from '../classes/Cart';
import Movie from '../classes/Movie';
import Book from '../classes/Book';
import AudioAlbum from '../classes/AudioAlbum';

test('should add ites to cart', () => {
    const cart = new Cart();
    cart.addItem(new Movie(1001, 'Lord of the rings', 1000, 1998, 'USA', 'You cannot pass!', 'Fantasy', 150));
    cart.addItem(new Movie(1012, 'Lock, Stock and Two Smoking Barrels', 1200, 1998, 'England', 'slogan', 'criminal', 90));

  expect(cart.items.length).toBe(2);
});

test('sum test', () => {
    const cart = new Cart();
    cart.addItem(new Book(527, 'War and Peace', 3000, 1863, 'Leo Tolstoy', 1300));
    cart.addItem(new AudioAlbum(227, 'Bacdafucup', 350, 1991, 'Onyx'));

    expect(cart.getTotalPrice()).toBe(3350);
});

test('sum with discount', () => {
    const cart = new Cart();
    cart.addItem(new Book(673, 'Lord of the Flies', 1200, 1954, 'William Golding', 320));
    cart.addItem(new Book(707, 'The Godfather', 1000, 1969, 'Mario Puzo', 512));

    expect(cart.getTotalPriceWithDiscount(10)).toBe(1980);
});

test('remove items test', () => {
    const cart = new Cart(); 
    cart.addItem(new Movie(1023, 'Ghostbusters', 500, 1995, 'USA', 'slogan', 'Fantastic', 110));
    cart.removeItem(1023);

    expect(cart.items.length).toBe(0);
});
