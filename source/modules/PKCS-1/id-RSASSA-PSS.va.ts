/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION id_RSASSA_PSS */
/**
 * @summary id_RSASSA_PSS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-RSASSA-PSS    OBJECT IDENTIFIER ::= { pkcs-1 10 }
 * ```
 *
 * @constant
 */
export const id_RSASSA_PSS: OBJECT_IDENTIFIER = new _OID([10], pkcs_1);
/* END_OF_SYMBOL_DEFINITION id_RSASSA_PSS */

/* eslint-enable */
