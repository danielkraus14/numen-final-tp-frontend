import {useSelector} from 'react-redux';
import { selectCurrentUser, selectCurrentToken } from '../../store/slices/authSlice';
import {Link} from 'next/link';
import {Typography} from '@mui/material';


const Welcome = () => {
    const user = useSelector(selectCurrentUser);
    const token = useSelector(selectCurrentToken);

    const welcome = user ? `Welcome ${user}` : 'Welcome';

    const content = (
        <section className='welcome'>
            <Typography variant='h1'>
                {welcome}
            </Typography>
        </section>
    )

    return content;
}

export default Welcome