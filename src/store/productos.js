import camisa from '../assets/img/camisa.jpeg'
import tarjetero from '../assets/img/tarjetero.jpeg'
import timbre from '../assets/img/timbre.jpeg'

const todosLosProductos = [
    { id: 1, name: 'Delantal clínico', imagen: camisa, size: 'S', price: 10000, stock: 5 , description: 'Suave polera, con telas antitranspirante', category: 'ropa'},
    { id: 2, name: 'Timbres', imagen: timbre, size: 'M', price: 5000, stock: 20, description: 'Personalizados, engomado y de larga duración', category: 'manualidades' },
    { id: 3, name: 'Tarjetero', imagen: tarjetero, size: 'Simple', price: 2000, stock: 10, description: 'Tarjetero de polipropileno.', category: 'accesorios' }
]

export default todosLosProductos