const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const schema = {
	type: 'object',
	required: ['identity'],
	properties: {
		groupId: {
			type: 'integer',
		},
		groupType: {
			enum: ['homeDelivery', 'collectionDelivery', 'companyDelivery'],
		},
		identity: {
			type: 'object',
			required: ['firstName', 'surName', 'email', 'mobilePhone'],
			properties: {
				firstName: { type: 'string' },
				surName: { type: 'string' },
				birthDate: { bsonType: 'date' },
				email: { type: 'string' },
				classicPhone: { type: 'string' },
				mobilePhone: { type: 'string' },
				address: {
					type: 'object',
					required: ['street', 'postalCode'],
					properties: {
						street: { type: 'string' },
						additionalInfo: { type: 'string' },
						postalCode: { type: 'string' },
						country: { type: 'string' },
					},
				},
			},
		},
	},
};

export default documentToValidate => {
	const validation = ajv.validate(schema, documentToValidate);
	return { isValid: validation, message: ajv.errorsText(validation.errors) };
};
