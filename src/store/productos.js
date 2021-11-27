import camisa from '../assets/img/traje-doctora.png'
import tarjetero from '../assets/img/tarjetero.jpeg'
import timbre from '../assets/img/timbre.jpeg'
import timbre2 from '../assets/img/timbre-2.jpeg'
import timbreMad from '../assets/img/timbre-mad.png'
import setTimbre from '../assets/img/set-timbres.jpeg'
import agendaOdo from '../assets/img/agenda-odo.jpeg'
import agendaProf from '../assets/img/agenda-vet.jpeg'
import agendaVet from '../assets/img/agenda-prof.jpeg'

const todosLosProductos = [
    { id: '1', name: 'Delantal clínico', imagen: camisa, size: 'S', price: 10000, stock: 5 , description: 'Suave polera, con telas antitranspirante', category: 'ropa'},
    { id: '2', name: 'Timbres', imagen: timbre, size: 'M', price: 5000, stock: 20, description: 'Personalizados, engomado y de larga duración', category: 'manualidades' },
    { id: '3', name: 'Tarjetero', imagen: tarjetero, size: 'Simple', price: 2000, stock: 10, description: 'Tarjetero de polipropileno.', category: 'accesorios' },
    { id: '4', name: 'Timbre engomado', imagen: timbre2, size: '2 x 4 cms', price: 2000, stock: 6, description: 'Personalizados, engomado y de larga duración', category: 'manualidades' },
    { id: '5', name: 'Set de timbres', imagen: timbreMad, size: '10 x 10 cms ', price: 2000, stock: 10, description: ' Set de timbres Personalizados, engomados y de larga duración', category: 'manualidades' },
    { id: '6', name: 'Agenda Odontologa', imagen: agendaOdo, size: 'Simple', price: 2000, stock: 10, description: 'Agenda personalizada por especialidad medica', category: 'accesorios' },
    { id: '7', name: 'Agenda Veterinaria', imagen: agendaVet, size: 'Simple', price: 2000, stock: 10, description: 'Agenda personalizada por especialidad medica', category: 'accesorios' },
    { id: '8', name: 'Agenda Profesor(a)', imagen: agendaProf, size: 'Simple', price: 2000, stock: 10, description: 'Agenda personalizada por especialidad medica', category: 'accesorios' },
    { id: '9', name: 'Set de timbres', imagen: setTimbre, size: '20 x 20 cms ', price: 5000, stock: 10, description: ' Set de timbres Personalizados, engomados y de larga duración', category: 'manualidades' },
]

export default todosLosProductos