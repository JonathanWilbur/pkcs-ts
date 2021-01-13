/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION id_RSAES_OAEP */
/**
 * @summary id_RSAES_OAEP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-RSAES-OAEP    OBJECT IDENTIFIER ::= { pkcs-1 7 }
 * ```
 *
 * @constant
 */
export const id_RSAES_OAEP: OBJECT_IDENTIFIER = new _OID([7], pkcs_1);
/* END_OF_SYMBOL_DEFINITION id_RSAES_OAEP */

/* eslint-enable */
