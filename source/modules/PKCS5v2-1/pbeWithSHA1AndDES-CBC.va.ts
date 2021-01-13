/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va";
export { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va";

/* START_OF_SYMBOL_DEFINITION pbeWithSHA1AndDES_CBC */
/**
 * @summary pbeWithSHA1AndDES_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithSHA1AndDES-CBC OBJECT IDENTIFIER ::= {pkcs-5 10}
 * ```
 *
 * @constant
 */
export const pbeWithSHA1AndDES_CBC: OBJECT_IDENTIFIER = new _OID([10], pkcs_5);
/* END_OF_SYMBOL_DEFINITION pbeWithSHA1AndDES_CBC */

/* eslint-enable */
