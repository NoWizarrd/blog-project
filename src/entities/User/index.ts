export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    UserSchema,
    User,
} from './model/types/user';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
