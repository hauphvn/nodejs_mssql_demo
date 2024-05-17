import  TokenAccessRegistryService from './services/tokenAccessRegistryFromPOS.service.js';

export const  deleteAllTokenAccessRegistry = async () => {
    await TokenAccessRegistryService.deleteAll();
}
