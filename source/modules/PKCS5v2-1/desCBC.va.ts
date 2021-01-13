/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { oiw } from "../PKCS5v2-1/oiw.va";
export { oiw } from "../PKCS5v2-1/oiw.va";

/* START_OF_SYMBOL_DEFINITION desCBC */
/**
 * @summary desCBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * desCBC OBJECT IDENTIFIER ::= {oiw secsig(3) algorithms(2) 7}
 * ```
 *
 * @constant
 */
export const desCBC: OBJECT_IDENTIFIER = new _OID(
    [/* secsig */ 3, /* algorithms */ 2, 7],
    oiw
);
/* END_OF_SYMBOL_DEFINITION desCBC */

/* eslint-enable */
