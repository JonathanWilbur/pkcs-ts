/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va";
export { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va";

/* START_OF_SYMBOL_DEFINITION pbeWithMD2AndDES_CBC */
/**
 * @summary pbeWithMD2AndDES_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithMD2AndDES-CBC OBJECT IDENTIFIER ::= {pkcs-5 1}
 * ```
 *
 * @constant
 */
export const pbeWithMD2AndDES_CBC: OBJECT_IDENTIFIER = new _OID([1], pkcs_5);
/* END_OF_SYMBOL_DEFINITION pbeWithMD2AndDES_CBC */

/* eslint-enable */
