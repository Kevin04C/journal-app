import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { JournalRoutes } from '../journal/routers/JournalRoutes'
import { CheckingAuth } from '../ui/components/CheckingAuth'

export const AppRouter = () => {

  const status = useCheckAuth();

  if(status === "checking") {
    return <CheckingAuth />
  }


  return (
    <Routes>

      {
        status === 'authenticated' 
        ? <Route path='/*' element={<JournalRoutes />}/>
        : <Route path="/auth/*" element={<AuthRoutes />}/>
      }

      {/* Si NO CAE A NINGUNA DE LAS RUTAS DE ARRIBA ⬆️ */}

      <Route path="/*" element={<Navigate to="/auth/login" />}/>
      
    </Routes>
  )
}
