import Cart from './classes/Cart';
import Movie from './classes/Movie';

const cart = new Cart();

cart.addItem(new Movie(98, 'Титаник', 300, 1997, 'USA', 'slogan', 'Drama', 190));
cart.addItem(new Movie(99, 'Матрица', 300, 1999, 'USA', 'slogan', 'Fantastic', 130));

console.log(cart);