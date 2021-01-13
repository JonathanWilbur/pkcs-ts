/* eslint-disable */
import { iso, ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION id_pkcs */
/**
 * @summary id_pkcs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkcs OBJECT IDENTIFIER ::= {iso member-body usa(840) rsadsi(113549) pkcs(1)}
 * ```
 *
 * @constant
 */
export const id_pkcs: OBJECT_IDENTIFIER = new _OID(
    [2, /* usa */ 840, /* rsadsi */ 113549, /* pkcs */ 1],
    iso
);
/* END_OF_SYMBOL_DEFINITION id_pkcs */

/* eslint-enable */
