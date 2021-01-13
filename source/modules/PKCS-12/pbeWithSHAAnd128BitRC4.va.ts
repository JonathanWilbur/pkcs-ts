/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va";
export { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va";

/* START_OF_SYMBOL_DEFINITION pbeWithSHAAnd128BitRC4 */
/**
 * @summary pbeWithSHAAnd128BitRC4
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithSHAAnd128BitRC4          OBJECT IDENTIFIER ::= {pkcs-12PbeIds 1}
 * ```
 *
 * @constant
 */
export const pbeWithSHAAnd128BitRC4: OBJECT_IDENTIFIER = new _OID(
    [1],
    pkcs_12PbeIds
);
/* END_OF_SYMBOL_DEFINITION pbeWithSHAAnd128BitRC4 */

/* eslint-enable */
