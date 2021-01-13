/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION md5WithRSAEncryption */
/**
 * @summary md5WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * md5WithRSAEncryption         OBJECT IDENTIFIER ::= { pkcs-1 4 }
 * ```
 *
 * @constant
 */
export const md5WithRSAEncryption: OBJECT_IDENTIFIER = new _OID([4], pkcs_1);
/* END_OF_SYMBOL_DEFINITION md5WithRSAEncryption */

/* eslint-enable */
