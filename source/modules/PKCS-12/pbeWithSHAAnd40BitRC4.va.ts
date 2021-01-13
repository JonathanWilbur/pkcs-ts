/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va";
export { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va";

/* START_OF_SYMBOL_DEFINITION pbeWithSHAAnd40BitRC4 */
/**
 * @summary pbeWithSHAAnd40BitRC4
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithSHAAnd40BitRC4           OBJECT IDENTIFIER ::= {pkcs-12PbeIds 2}
 * ```
 *
 * @constant
 */
export const pbeWithSHAAnd40BitRC4: OBJECT_IDENTIFIER = new _OID(
    [2],
    pkcs_12PbeIds
);
/* END_OF_SYMBOL_DEFINITION pbeWithSHAAnd40BitRC4 */

/* eslint-enable */
