import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom'
import { AUTH } from './constants'

interface IProps {
    auth: Array<AUTH>,
    currentUser: AUTH,
    children: ReactNode
}

const Protected = (props: IProps) => {
    if (!props.auth.includes(props.currentUser)) {
        return <Navigate to="/" replace />
    }
    return props.children
}

export default Protected