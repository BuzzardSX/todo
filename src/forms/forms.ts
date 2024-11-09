import { lazy } from 'react';

export const UserForm = lazy(() => import('./user'));

export { default as LoadingUserForm } from './loadingUser';
