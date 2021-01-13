/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va";
export { pkcs_9 } from "../PKCS-9/pkcs-9.va";

/* START_OF_SYMBOL_DEFINITION certTypes */
/**
 * @summary certTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certTypes                          OBJECT IDENTIFIER ::= {pkcs-9 22}
 * ```
 *
 * @constant
 */
export const certTypes: OBJECT_IDENTIFIER = new _OID([22], pkcs_9);
/* END_OF_SYMBOL_DEFINITION certTypes */

/* eslint-enable */
