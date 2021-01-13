/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va";
export { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va";

/* START_OF_SYMBOL_DEFINITION id_PBMAC1 */
/**
 * @summary id_PBMAC1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-PBMAC1 OBJECT IDENTIFIER ::= {pkcs-5 14}
 * ```
 *
 * @constant
 */
export const id_PBMAC1: OBJECT_IDENTIFIER = new _OID([14], pkcs_5);
/* END_OF_SYMBOL_DEFINITION id_PBMAC1 */

/* eslint-enable */
