import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'lastname',
    firstname: 'firstname',
    city: 'fsdfs',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('without data', async () => {
        const result = validateProfileData(undefined);

        expect(result).toEqual([ValidateProfileErrors.NO_DATA]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ]);
    });
});
