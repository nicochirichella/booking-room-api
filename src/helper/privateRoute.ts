import { selectUser } from '../features/user/userSlice';
import { useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children }: any) {
    const navigate = useNavigate();
    
    const user = useAppSelector(selectUser);
    const isAuthenticated = user ? true : false;
    console.log('isAuthenticated', isAuthenticated);
    return isAuthenticated ? children : navigate('/login');
}

export default PrivateRoute;