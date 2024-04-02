
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtecterRoutes = () => {
 
    const trainer = useSelector (store => store.trainer )

    if (trainer.length>=3) {
        return <Outlet />
      
    }else {
        return <Navigate to='/' />
    }
}

export default ProtecterRoutes