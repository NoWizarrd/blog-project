import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../types/profile';

describe('getProfileValidateErrors.test', () => {
    test('should work with filled state', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Armenia,
            lastname: 'lastname',
            firstname: 'firstname',
            city: 'fsdfs',
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.SERVER_ERROR,
                    ValidateProfileErrors.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.SERVER_ERROR,
            ValidateProfileErrors.INCORRECT_AGE,
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
