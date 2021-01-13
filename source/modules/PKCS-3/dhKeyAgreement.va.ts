/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_3 } from "../PKCS-3/pkcs-3.va";
export { pkcs_3 } from "../PKCS-3/pkcs-3.va";

/* START_OF_SYMBOL_DEFINITION dhKeyAgreement */
/**
 * @summary dhKeyAgreement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhKeyAgreement OBJECT IDENTIFIER ::= { pkcs-3 1 }
 * ```
 *
 * @constant
 */
export const dhKeyAgreement: OBJECT_IDENTIFIER = new _OID([1], pkcs_3);
/* END_OF_SYMBOL_DEFINITION dhKeyAgreement */

/* eslint-enable */
