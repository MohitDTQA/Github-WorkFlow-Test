import * as _ from '@Index';

_.test('POST - Customer Sign Up @api', async ({ request }) => {

    try {
        const api = new _.Api(request);
        const user = _.generateRandomUser();

        const response = await api.post('/auth/signup', {

            firstName: user.firstName,
            lastName: user.lastName,
            email: user.userEmail,
            phone: '1234567878',
            birthDate: '01-01-2000',
            role: 'customer'
        });

        _.CheckStatus;
        const body = await _.CheckStatus.ok(response);
        console.log(body);
    }

    catch (error) {
        console.log("Something Went Wrong.\m", error);
    }

});