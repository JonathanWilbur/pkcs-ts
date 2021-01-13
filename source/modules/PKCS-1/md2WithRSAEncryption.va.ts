/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION md2WithRSAEncryption */
/**
 * @summary md2WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * md2WithRSAEncryption         OBJECT IDENTIFIER ::= { pkcs-1 2 }
 * ```
 *
 * @constant
 */
export const md2WithRSAEncryption: OBJECT_IDENTIFIER = new _OID([2], pkcs_1);
/* END_OF_SYMBOL_DEFINITION md2WithRSAEncryption */

/* eslint-enable */
