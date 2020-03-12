import { Trim } from '../../src/validators/sanitizer';
import { testValidator } from './util';

describe('validator', () => {
	it('#trim', async () => {
		await testValidator({
			validator: Trim(),
			valids: [null, 100, {}],
			transforms: [{ value: '    rhangai', expected: 'rhangai' }],
		});
	});
});
