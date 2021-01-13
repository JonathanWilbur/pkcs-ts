/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION id_pSpecified */
/**
 * @summary id_pSpecified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pSpecified    OBJECT IDENTIFIER ::= { pkcs-1 9 }
 * ```
 *
 * @constant
 */
export const id_pSpecified: OBJECT_IDENTIFIER = new _OID([9], pkcs_1);
/* END_OF_SYMBOL_DEFINITION id_pSpecified */

/* eslint-enable */
