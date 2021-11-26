import todosLosProductos from '../store/productos';

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(todosLosProductos)
        }, 1000)
    })
}