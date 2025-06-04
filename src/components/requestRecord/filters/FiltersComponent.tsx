import type { ReactElement } from 'react'
import './FiltersComponent.scss'

const FiltersComponent = ({setFilter}): ReactElement => (
    <div className='filter'>
            <p className="h6">Estado</p>
            <select
                className="btn btn-secondary dropdown-toggle filter__dropdown"
                onChange={(event) => setFilter(event.target.value)}>

            <option value="" selected>Todos</option>
            <option value="APROBADO">APROBADO</option>
            <option value="PENDIENTE">PENDIENTE</option>
            <option value="RECHAZADO">RECHAZADO</option>
            <option value="CANCELADO">CANCELADO</option>
        </select>
    </div>
)

export default FiltersComponent