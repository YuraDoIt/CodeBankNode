import { ResultObject } from '../result.object';

export const stub = (): ResultObject => {
  return {
    status: 200,
    success: true,
    message: 'make',
    result: { name: 'hello' },
  } as ResultObject;
};
