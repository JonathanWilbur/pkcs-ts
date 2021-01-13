/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va";
export { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va";

/* START_OF_SYMBOL_DEFINITION pbeWithMD2AndRC2_CBC */
/**
 * @summary pbeWithMD2AndRC2_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithMD2AndRC2-CBC OBJECT IDENTIFIER ::= {pkcs-5 4}
 * ```
 *
 * @constant
 */
export const pbeWithMD2AndRC2_CBC: OBJECT_IDENTIFIER = new _OID([4], pkcs_5);
/* END_OF_SYMBOL_DEFINITION pbeWithMD2AndRC2_CBC */

/* eslint-enable */
