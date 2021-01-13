/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va";
export { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va";

/* START_OF_SYMBOL_DEFINITION pbeWithSHAAnd128BitRC2_CBC */
/**
 * @summary pbeWithSHAAnd128BitRC2_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithSHAAnd128BitRC2-CBC      OBJECT IDENTIFIER ::= {pkcs-12PbeIds 5}
 * ```
 *
 * @constant
 */
export const pbeWithSHAAnd128BitRC2_CBC: OBJECT_IDENTIFIER = new _OID(
    [5],
    pkcs_12PbeIds
);
/* END_OF_SYMBOL_DEFINITION pbeWithSHAAnd128BitRC2_CBC */

/* eslint-enable */
