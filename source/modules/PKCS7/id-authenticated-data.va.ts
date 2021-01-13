/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkcs } from "../PKCS7/id-pkcs.va";
export { id_pkcs } from "../PKCS7/id-pkcs.va";

/* START_OF_SYMBOL_DEFINITION id_authenticated_data */
/**
 * @summary id_authenticated_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-authenticated-data OBJECT IDENTIFIER ::= {id-pkcs 9 16 1 2}
 * ```
 *
 * @constant
 */
export const id_authenticated_data: OBJECT_IDENTIFIER = new _OID(
    [9, 16, 1, 2],
    id_pkcs
);
/* END_OF_SYMBOL_DEFINITION id_authenticated_data */

/* eslint-enable */
