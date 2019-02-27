import productValidator from '../mongodb/validators/productValidator';
import customerValidator from '../mongodb/validators/customerValidator';
import sampleCustomer from './sampleCustomer';
import sampleProduct from './sampleProduct';

export default async () => {
	const validateProducts = await productValidator(sampleProduct);
	if (validateProducts.isValid)
		console.log('✓ Schema test in [products]: Success');
	else {
		console.error('✗ Schema test in [products]: Error');
		console.error(validateProducts.message);
	}
	const validateCustomer = await customerValidator(sampleCustomer);
	if (validateCustomer.isValid)
		console.log('✓ Schema test in [customers]: Success');
	else {
		console.error('✗ Schema test in [customers]: Error');
		console.error(validateCustomer.message);
	}
};
