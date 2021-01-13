/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION id_mgf1 */
/**
 * @summary id_mgf1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mgf1    OBJECT IDENTIFIER ::= { pkcs-1 8 }
 * ```
 *
 * @constant
 */
export const id_mgf1: OBJECT_IDENTIFIER = new _OID([8], pkcs_1);
/* END_OF_SYMBOL_DEFINITION id_mgf1 */

/* eslint-enable */
