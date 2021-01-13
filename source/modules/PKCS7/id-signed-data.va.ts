/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkcs } from "../PKCS7/id-pkcs.va";
export { id_pkcs } from "../PKCS7/id-pkcs.va";

/* START_OF_SYMBOL_DEFINITION id_signed_data */
/**
 * @summary id_signed_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signed-data OBJECT IDENTIFIER ::= {id-pkcs 7 2}
 * ```
 *
 * @constant
 */
export const id_signed_data: OBJECT_IDENTIFIER = new _OID([7, 2], id_pkcs);
/* END_OF_SYMBOL_DEFINITION id_signed_data */

/* eslint-enable */
